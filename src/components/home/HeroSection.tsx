"use client";

import Script from "next/script";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SocialProof } from "./SocialProof";
import { trackWhatsAppClick } from "@/components/analytics/GoogleAnalytics";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { url: string },
        HTMLElement
      >;
    }
  }
}

export default function HeroSection() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    // Lazy load Spline after component mounts
    const timer = setTimeout(() => {
      setShouldLoadSpline(true);
    }, 100);

    return () => {
      window.removeEventListener('resize', checkDevice);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Gradient Background - Aceternity Style */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />

      {/* Grid principal - duas colunas no desktop */}
      <div className="relative z-10 grid md:grid-cols-2 w-full h-full">
        {/* Coluna Esquerda - Conteúdo */}
        <div className="flex items-center justify-center md:justify-end px-6 md:px-16">
          <div className="max-w-lg text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight"
              style={{ fontFamily: "Zero Hour, Satoshi, sans-serif" }}
            >
              <span className="text-white">AUTOMATIZE SEU</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                WHATSAPP
              </span>
              <br />
              <span className="text-white">E VENDA 3X MAIS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-4 text-white/90 text-base sm:text-lg"
            >
              Atendimento 24/7, qualificação automática e agendamentos inteligentes. 
              Pare de perder clientes por demora no atendimento.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 flex flex-col sm:flex-row items-center md:justify-start justify-center gap-4"
            >
              <a
                href="https://wa.me/5535998026821?text=Olá%20CazaTech%2C%20quero%20automatizar%20meu%20WhatsApp%20em%207%20dias"
                target="_blank"
                onClick={() => trackWhatsAppClick('hero_primary', 'Automatizar meu WhatsApp em 7 dias')}
                className="relative overflow-hidden rounded-lg font-semibold text-white px-6 py-3 text-sm md:text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Automatizar meu WhatsApp em 7 dias
              </a>
              <a
                href="/automacoes"
                className="rounded-lg border border-white/20 text-white px-6 py-3 text-sm md:text-base hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                Ver demo de 2 min
              </a>
            </motion.div>

            {/* Prova Social */}
            <SocialProof customerCount={50} className="mt-6" />
          </div>
        </div>

        {/* Coluna Direita - Cena do Spline apenas no desktop */}
        <div className="hidden bg-black md:block relative w-full h-full">
          <spline-viewer
            url="https://prod.spline.design/h4vIirljpefHPM2v/scene.splinecode"
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>

      {/* Fade para próxima seção */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 md:h-56 z-20">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[140%] h-16 bg-black/5 blur-3xl" />
        <div className="absolute -bottom-10 left-1/3 w-64 h-16 bg-white/6 blur-2xl" />
        <div className="absolute -bottom-8 right-1/4 w-64 h-16 bg-black " />
      </div>
    </section>
  );
}
