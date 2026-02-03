"use client";

import { useCallback } from "react";
import {
  trackViewContent,
  trackContact,
  trackSchedule,
  trackLead,
  trackCompleteRegistration,
} from "@/components/analytics/MetaPixel";

// Google Analytics event tracking
function trackGA(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

export interface UserData {
  email?: string;
  phone?: string;
  firstName?: string;
}

/**
 * Centralized tracking hook for Google Analytics + Meta Pixel
 * Fires events to both platforms simultaneously
 */
export function useTracking() {
  /**
   * Track page/content view
   * GA: page_view (auto), view_item
   * Meta: ViewContent
   */
  const trackPageView = useCallback(
    (contentName: string, contentCategory?: string) => {
      // Meta Pixel
      trackViewContent(contentName, contentCategory);

      // Google Analytics
      trackGA("view_item", {
        content_type: contentCategory || "page",
        content_id: contentName,
      });
    },
    []
  );

  /**
   * Track contact action (WhatsApp, phone, email click)
   * GA: contact
   * Meta: Contact
   */
  const trackContactAction = useCallback(
    (source: string, userData?: UserData) => {
      // Meta Pixel + Conversions API
      trackContact(source, userData);

      // Google Analytics
      trackGA("contact", {
        contact_method: source,
      });
    },
    []
  );

  /**
   * Track schedule/appointment action
   * GA: schedule_appointment
   * Meta: Schedule
   */
  const trackScheduleAction = useCallback(
    (serviceName: string, userData?: UserData) => {
      // Meta Pixel + Conversions API
      trackSchedule(serviceName, userData);

      // Google Analytics
      trackGA("schedule_appointment", {
        service_name: serviceName,
      });
    },
    []
  );

  /**
   * Track lead generation (form submission)
   * GA: generate_lead
   * Meta: Lead
   */
  const trackLeadAction = useCallback(
    (source: string, userData?: UserData) => {
      // Meta Pixel + Conversions API
      trackLead(source, userData);

      // Google Analytics
      trackGA("generate_lead", {
        lead_source: source,
      });
    },
    []
  );

  /**
   * Track registration completion
   * GA: sign_up
   * Meta: CompleteRegistration
   */
  const trackRegistration = useCallback(
    (source: string, userData?: UserData) => {
      // Meta Pixel + Conversions API
      trackCompleteRegistration(source, userData);

      // Google Analytics
      trackGA("sign_up", {
        method: source,
      });
    },
    []
  );

  /**
   * Track CTA click
   * GA: cta_click
   * Meta: (uses ViewContent with CTA category)
   */
  const trackCTAClick = useCallback(
    (ctaName: string, destination?: string) => {
      // Meta Pixel
      trackViewContent(ctaName, "cta_click");

      // Google Analytics
      trackGA("cta_click", {
        cta_name: ctaName,
        destination: destination,
      });
    },
    []
  );

  /**
   * Track service navigation
   * GA: select_content
   * Meta: ViewContent
   */
  const trackServiceClick = useCallback(
    (serviceName: string, serviceHref: string) => {
      // Meta Pixel
      trackViewContent(serviceName, "service_navigation");

      // Google Analytics
      trackGA("select_content", {
        content_type: "service",
        item_id: serviceName,
        destination: serviceHref,
      });
    },
    []
  );

  return {
    trackPageView,
    trackContactAction,
    trackScheduleAction,
    trackLeadAction,
    trackRegistration,
    trackCTAClick,
    trackServiceClick,
  };
}

export default useTracking;
