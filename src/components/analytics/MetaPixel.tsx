'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

interface MetaPixelProps {
  pixelId: string;
}

/**
 * Meta Pixel Component - Client-Side Tracking
 * Carrega o pixel e dispara PageView automaticamente
 */
export function MetaPixel({ pixelId }: MetaPixelProps) {
  const pathname = usePathname();

  // Track PageView em mudanças de rota (SPA navigation)
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [pathname]);

  return (
    <>
      <Script
        id="meta-pixel-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}

/**
 * Gera event_id único para desduplicação entre Pixel e Conversions API
 */
export function generateEventId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Track evento no Pixel (client-side)
 * @param eventName - Nome do evento (ViewContent, Contact, etc.)
 * @param parameters - Parâmetros do evento
 * @param eventId - ID único para desduplicação (opcional)
 */
export function trackPixelEvent(
  eventName: string,
  parameters?: Record<string, unknown>,
  eventId?: string
) {
  if (typeof window !== 'undefined' && window.fbq) {
    const params = eventId ? { ...parameters, eventID: eventId } : parameters;
    window.fbq('track', eventName, params);
  }
}

/**
 * Track evento no Pixel E na Conversions API (server-side)
 * Usa o mesmo event_id para desduplicação
 */
export async function trackEvent(
  eventName: string,
  customData?: Record<string, unknown>,
  userData?: {
    email?: string;
    phone?: string;
    firstName?: string;
  }
) {
  const eventId = generateEventId();
  const eventSourceUrl = typeof window !== 'undefined' ? window.location.href : '';

  // 1. Track no Pixel (client-side)
  trackPixelEvent(eventName, customData, eventId);

  // 2. Enviar para Conversions API (server-side)
  try {
    await fetch('/api/meta-events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_name: eventName,
        event_source_url: eventSourceUrl,
        event_id: eventId,
        user_data: userData,
        custom_data: customData,
      }),
    });
  } catch (error) {
    console.error('[Meta Tracking] Error sending to API:', error);
  }
}

// ============================================
// EVENTOS PRÉ-CONFIGURADOS
// ============================================

/**
 * ViewContent - Visita a página importante
 */
export function trackViewContent(contentName: string, contentCategory?: string) {
  trackEvent('ViewContent', {
    content_name: contentName,
    content_category: contentCategory,
  });
}

/**
 * Contact - Contato via WhatsApp, telefone, email
 */
export function trackContact(
  source: string,
  userData?: { email?: string; phone?: string; firstName?: string }
) {
  trackEvent('Contact', { content_name: source }, userData);
}

/**
 * Schedule - Agendamento de consulta/reunião
 */
export function trackSchedule(
  serviceName: string,
  userData?: { email?: string; phone?: string; firstName?: string }
) {
  trackEvent('Schedule', { content_name: serviceName }, userData);
}

/**
 * Lead - Geração de lead (formulário preenchido)
 */
export function trackLead(
  source: string,
  userData?: { email?: string; phone?: string; firstName?: string }
) {
  trackEvent('Lead', { content_name: source }, userData);
}

/**
 * CompleteRegistration - Cadastro completo
 */
export function trackCompleteRegistration(
  source: string,
  userData?: { email?: string; phone?: string; firstName?: string }
) {
  trackEvent('CompleteRegistration', { content_name: source }, userData);
}

export default MetaPixel;
