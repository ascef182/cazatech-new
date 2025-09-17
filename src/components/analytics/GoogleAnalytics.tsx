'use client';

import Script from 'next/script';

interface GoogleAnalyticsProps {
  measurementId: string;
}

export const GoogleAnalytics = ({ measurementId }: GoogleAnalyticsProps) => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  );
};

// Event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackWhatsAppClick = (source: string, message?: string) => {
  trackEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: source,
    custom_message: message || 'default',
  });
};

export const trackFormSubmission = (formType: string) => {
  trackEvent('form_submit', {
    event_category: 'conversion',
    event_label: formType,
  });
};

export const trackCTAClick = (ctaText: string, location: string) => {
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: ctaText,
    page_location: location,
  });
};

export const trackCaseStudyView = (caseId: string, category: string) => {
  trackEvent('case_study_view', {
    event_category: 'engagement',
    case_id: caseId,
    case_category: category,
  });
};

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
