"use client";

import { createContext, useMemo, useState, useContext, useEffect } from "react";
import { Toaster } from "sonner";
import NewNavbar from "@/components/NewNavbar";
import Footer from "@/components/Footer";
import CTAFloaters from "@/components/CTAFloaters";
import { translations, type SupportedLang, getBrowserLang } from "@/lib/i18n";

type I18nContextType = {
  lang: SupportedLang;
  t: (key: string) => string;
  setLang: (l: SupportedLang) => void;
};

const I18nContext = createContext<I18nContextType | null>(null);

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
  const [lang, setLang] = useState<SupportedLang>(getBrowserLang());
  const t = useMemo(
    () => (key: string) => translations[lang]?.[key] ?? key,
    [lang]
  );
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
        <main className="pt-16 md:pt-20 min-h-screen">{children}</main>
        <CTAFloaters />
        <Footer />
        <Toaster position="top-right" />
      </body>
    </I18nContext.Provider>
  );
}
