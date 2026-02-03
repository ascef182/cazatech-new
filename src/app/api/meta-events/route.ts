/**
 * Meta Conversions API - Server-Side Event Tracking
 * POST /api/meta-events
 *
 * Recebe eventos do client e envia para a API de Conversões da Meta
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  createEventPayload,
  sendConversionEvent,
  type MetaEventName,
  type MetaUserData,
  type MetaCustomData,
} from '@/lib/meta-conversions';

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '';
const ACCESS_TOKEN = process.env.TOKEN_META || '';

// Código de teste (remover em produção ou deixar vazio)
const TEST_EVENT_CODE = process.env.META_TEST_EVENT_CODE || '';

interface RequestBody {
  event_name: MetaEventName;
  event_source_url: string;
  event_id?: string;
  user_data?: MetaUserData;
  custom_data?: MetaCustomData;
}

export async function POST(request: NextRequest) {
  try {
    // Validar configuração
    if (!PIXEL_ID || !ACCESS_TOKEN) {
      console.error('[Meta Events] Missing PIXEL_ID or ACCESS_TOKEN');
      return NextResponse.json(
        { error: 'Meta Pixel not configured' },
        { status: 500 }
      );
    }

    const body: RequestBody = await request.json();

    // Validar campos obrigatórios
    if (!body.event_name || !body.event_source_url) {
      return NextResponse.json(
        { error: 'Missing required fields: event_name, event_source_url' },
        { status: 400 }
      );
    }

    // Extrair dados do request
    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      'unknown';
    const userAgent = request.headers.get('user-agent') || '';

    // Extrair cookies do Facebook (fbc, fbp)
    const cookies = request.headers.get('cookie') || '';
    const fbcMatch = cookies.match(/_fbc=([^;]+)/);
    const fbpMatch = cookies.match(/_fbp=([^;]+)/);

    // Montar dados do usuário
    const userData: MetaUserData = {
      ...body.user_data,
      clientIpAddress: clientIp,
      clientUserAgent: userAgent,
      fbc: fbcMatch?.[1],
      fbp: fbpMatch?.[1],
    };

    // Criar evento
    const event = createEventPayload(
      body.event_name,
      body.event_source_url,
      userData,
      body.custom_data,
      body.event_id
    );

    // Enviar para Meta
    const result = await sendConversionEvent(
      PIXEL_ID,
      ACCESS_TOKEN,
      [event],
      TEST_EVENT_CODE || undefined
    );

    if (!result.success) {
      console.error('[Meta Events] Error:', result.error);
      return NextResponse.json(
        { error: result.error, details: result.data },
        { status: 500 }
      );
    }

    // Log em desenvolvimento
    if (process.env.NODE_ENV === 'development') {
      console.log('[Meta Events] Sent:', {
        event_name: body.event_name,
        event_id: event.event_id,
        response: result.data,
      });
    }

    return NextResponse.json({
      success: true,
      event_id: event.event_id,
      events_received: (result.data as { events_received?: number })?.events_received,
    });
  } catch (error) {
    console.error('[Meta Events] Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Endpoint de teste para verificar configuração
export async function GET() {
  const isConfigured = Boolean(PIXEL_ID && ACCESS_TOKEN);

  return NextResponse.json({
    configured: isConfigured,
    pixel_id: PIXEL_ID ? `${PIXEL_ID.slice(0, 4)}...` : null,
    has_test_code: Boolean(TEST_EVENT_CODE),
  });
}
