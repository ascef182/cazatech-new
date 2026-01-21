"use client";

import { createContext, useMemo, useState, useContext, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Toaster } from "sonner";
import NewNavbar from "@/components/NewNavbar";
import Footer from "@/components/Footer";
import CTAFloaters from "@/components/CTAFloaters";
import { translations, type SupportedLang } from "@/lib/i18n";

type I18nContextType = {
  lang: SupportedLang;
  t: (key: string) => string;
  setLang: (l: SupportedLang) => void;
};

const I18nContext = createContext<I18nContextType | null>(null);

/**
 * Resolves a nested key path like "nav.services.title" from an object
 * Returns the value if found, or the key itself as fallback
 */
function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split(".");
  let current: unknown = obj;

  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== "object") {
      return path; // Key not found, return original path as fallback
    }
    current = (current as Record<string, unknown>)[key];
  }

  // Return value if it's a string, otherwise return the key
  return typeof current === "string" ? current : path;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nContext provider");
  return ctx;
}

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const pathname = usePathname();

  // Derive language from pathname - memoized for stability
  const derivedLangFromPath = useMemo<SupportedLang>(() => {
    if (!pathname) return "pt"; // Stable SSR default
    if (pathname.startsWith("/en")) return "en";
    if (pathname.startsWith("/es")) return "es";
    return "pt";
  }, [pathname]);

  // Initialize with stable default to avoid hydration mismatch
  const [lang, setLang] = useState<SupportedLang>("pt");

  // Translation function that supports nested keys like "nav.services.title"
  const t = useCallback(
    (key: string): string => {
      const langData = translations[lang];
      if (!langData) return key;
      return getNestedValue(langData as Record<string, unknown>, key);
    },
    [lang]
  );

  // Mark as hydrated and sync language only after client mount
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
    const onLoad = () => setIsPageLoaded(true);
    if (document.readyState === "complete") {
      setIsPageLoaded(true);
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }
    return () => window.removeEventListener("load", onLoad);
  }, []);

  // Sync language with pathname prefix ONLY after hydration
  useEffect(() => {
    if (isHydrated) {
      setLang(derivedLangFromPath);
    }
  }, [isHydrated, derivedLangFromPath]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      <body
        className="antialiased font-satoshi text-foreground bg-background"
        suppressHydrationWarning
      >
        {!isPageLoaded && (
          <div className="fixed inset-0 z-[9999] grid place-items-center bg-background/95 backdrop-blur-sm">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full border-4 border-muted animate-[spin_1.2s_linear_infinite] border-t-primary" />
              <div className="absolute inset-3 rounded-full border-4 border-muted/60 animate-[spin_1.6s_linear_infinite_reverse] border-t-primary/60" />
            </div>
          </div>
        )}
        <NewNavbar />
        <main className="pt-14 min-h-screen">{children}</main>
        <CTAFloaters />
        <Footer />
        <Toaster position="top-right" />
      </body>
    </I18nContext.Provider>
  );
}
