/**
 * Global TypeScript declarations for third-party tracking libraries
 * This file centralizes all Window interface extensions to avoid conflicts
 */

// Google Analytics gtag.js
type GtagCommand = 'config' | 'event' | 'js' | 'set' | 'consent';

interface GtagEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  page_title?: string;
  page_location?: string;
  page_path?: string;
  [key: string]: unknown;
}

// Meta Pixel fbq
type FbqCommand = 'init' | 'track' | 'trackCustom' | 'trackSingle' | 'trackSingleCustom';

interface FbqParams {
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  content_type?: string;
  value?: number;
  currency?: string;
  eventID?: string;
  [key: string]: unknown;
}

declare global {
  interface Window {
    // Google Analytics
    dataLayer: unknown[];
    gtag: (
      command: GtagCommand | string,
      targetOrEventName: string | Date,
      params?: GtagEventParams | Record<string, unknown>
    ) => void;

    // Meta Pixel
    fbq: (
      command: FbqCommand,
      eventNameOrPixelId: string,
      params?: FbqParams | Record<string, unknown>
    ) => void;
    _fbq: unknown;
  }
}

export {};
