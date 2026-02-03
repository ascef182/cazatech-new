/**
 * Meta Conversions API - Helper Functions
 * Documentação: https://developers.facebook.com/docs/marketing-api/conversions-api
 */

import crypto from 'crypto';

// Hash function para dados do usuário (SHA-256)
export function hashUserData(data: string): string {
  return crypto
    .createHash('sha256')
    .update(data.toLowerCase().trim())
    .digest('hex');
}

// Gerar event_id único para desduplicação
export function generateEventId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Tipos de eventos suportados
export type MetaEventName =
  | 'PageView'
  | 'ViewContent'
  | 'Contact'
  | 'Schedule'
  | 'Lead'
  | 'CompleteRegistration'
  | 'InitiateCheckout';

// Interface para dados do usuário
export interface MetaUserData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
  clientIpAddress?: string;
  clientUserAgent?: string;
  fbc?: string; // Facebook Click ID (cookie)
  fbp?: string; // Facebook Browser ID (cookie)
}

// Interface para dados customizados
export interface MetaCustomData {
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  content_type?: string;
  value?: number;
  currency?: string;
  [key: string]: unknown;
}

// Interface para evento
export interface MetaEvent {
  event_name: MetaEventName;
  event_time: number;
  event_id: string;
  event_source_url: string;
  action_source: 'website' | 'app' | 'email' | 'phone_call' | 'chat' | 'other';
  user_data: {
    em?: string[];
    ph?: string[];
    fn?: string[];
    ln?: string[];
    ct?: string[];
    st?: string[];
    zp?: string[];
    country?: string[];
    client_ip_address?: string;
    client_user_agent?: string;
    fbc?: string;
    fbp?: string;
  };
  custom_data?: MetaCustomData;
}

// Formatar dados do usuário para API
export function formatUserData(userData: MetaUserData): MetaEvent['user_data'] {
  const formatted: MetaEvent['user_data'] = {};

  if (userData.email) {
    formatted.em = [hashUserData(userData.email)];
  }
  if (userData.phone) {
    // Remove caracteres não numéricos e adiciona código do país se não tiver
    const cleanPhone = userData.phone.replace(/\D/g, '');
    const phoneWithCountry = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;
    formatted.ph = [hashUserData(phoneWithCountry)];
  }
  if (userData.firstName) {
    formatted.fn = [hashUserData(userData.firstName)];
  }
  if (userData.lastName) {
    formatted.ln = [hashUserData(userData.lastName)];
  }
  if (userData.city) {
    formatted.ct = [hashUserData(userData.city)];
  }
  if (userData.state) {
    formatted.st = [hashUserData(userData.state)];
  }
  if (userData.zipCode) {
    formatted.zp = [hashUserData(userData.zipCode)];
  }
  if (userData.country) {
    formatted.country = [hashUserData(userData.country)];
  }
  if (userData.clientIpAddress) {
    formatted.client_ip_address = userData.clientIpAddress;
  }
  if (userData.clientUserAgent) {
    formatted.client_user_agent = userData.clientUserAgent;
  }
  if (userData.fbc) {
    formatted.fbc = userData.fbc;
  }
  if (userData.fbp) {
    formatted.fbp = userData.fbp;
  }

  return formatted;
}

// Criar payload do evento
export function createEventPayload(
  eventName: MetaEventName,
  eventSourceUrl: string,
  userData: MetaUserData,
  customData?: MetaCustomData,
  eventId?: string
): MetaEvent {
  return {
    event_name: eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_id: eventId || generateEventId(),
    event_source_url: eventSourceUrl,
    action_source: 'website',
    user_data: formatUserData(userData),
    ...(customData && { custom_data: customData }),
  };
}

// Enviar evento para API de Conversões
export async function sendConversionEvent(
  pixelId: string,
  accessToken: string,
  events: MetaEvent[],
  testEventCode?: string
): Promise<{ success: boolean; data?: unknown; error?: string }> {
  const url = `https://graph.facebook.com/v18.0/${pixelId}/events`;

  const payload: Record<string, unknown> = {
    data: events,
    access_token: accessToken,
  };

  // Adicionar test_event_code para testes
  if (testEventCode) {
    payload.test_event_code = testEventCode;
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error?.message || 'Unknown error',
        data,
      };
    }

    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error',
    };
  }
}
