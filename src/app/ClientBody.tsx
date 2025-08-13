"use client";

import { useEffect } from "react";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createContext, useMemo, useState, useContext } from "react";
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
  const [lang, setLang] = useState<SupportedLang>(getBrowserLang());
  const t = useMemo(
    () => (key: string) => translations[lang]?.[key] ?? key,
    [lang]
  );
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      <body
        className="antialiased font-satoshi text-foreground bg-background"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="pt-16 md:pt-20 min-h-screen">{children}</main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </I18nContext.Provider>
  );
}
