"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { SocialProof } from "./SocialProof";
import { trackWhatsAppClick } from "@/components/analytics/GoogleAnalytics";

// Dynamic import with SSR disabled for Spline 3D
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-black animate-pulse" />,
});

export default function HeroSection() {
  // Keep a tiny state for future enhancements, but avoid unnecessary logic
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);
  const [splineLoading, setSplineLoading] = useState(true);
  const [splineError, setSplineError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShouldLoadSpline(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[88vh] md:min-h-screen flex items-center overflow-hidden bg-black">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(120,119,198,0.25),transparent_55%)]" />

      {/* Grid principal */}
      <div className="relative z-10 grid w-full h-full items-center md:grid-cols-2">
        {/* Coluna Esquerda - Conteúdo */}
        <div className="flex md:justify-end px-6 md:px-14 pt-12 md:pt-0">
          <div className="max-w-[520px] w-full mx-auto md:mx-0 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-bold text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight leading-tight md:mt-[-20%]"
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
              className="mt-6 text-white/90 text-base sm:text-lg"
            >
              Atendimento 24/7, qualificação automática e agendamentos
              inteligentes. Pare de perder clientes por demora no atendimento.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 flex flex-col sm:flex-row items-center md:justify-start justify-center gap-3 sm:gap-4"
            >
              <a
                href="https://wa.me/5535998026821?text=Olá%20CazaTech%2C%20quero%20automatizar%20meu%20WhatsApp%20em%207%20dias"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackWhatsAppClick(
                    "hero_primary",
                    "Automatizar meu WhatsApp em 7 dias"
                  )
                }
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
            <SocialProof customerCount={50} className="mt-5" size="sm" />

            {/* Mobile Spline below CTAs */}
            {shouldLoadSpline && (
              <div className="mt-6 md:hidden flex justify-center relative">
                {splineLoading && (
                  <div className="absolute inset-0 grid place-items-center bg-black">
                    <div className="text-white text-sm">Carregando 3D...</div>
                  </div>
                )}
                <div className="w-[60%] aspect-video rounded-2xl overflow-hidden">
                  <Suspense fallback={<div className="w-full h-full bg-black" />}>
                    <Spline
                      scene="https://prod.spline.design/h4vIirljpefHPM2v/scene.splinecode"
                      className="w-full h-full"
                      onLoad={() => setSplineLoading(false)}
                    />
                  </Suspense>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Coluna Direita - Cena do Spline apenas no desktop */}
        <div className="hidden md:block relative w-full h-full">
          <div className="relative ml-0 md:ml-4 mr-4 h-[60vh] md:h-[72vh]">
            {shouldLoadSpline && (
              <div className="absolute inset-0">
                {splineLoading && (
                  <div className="absolute inset-0 grid place-items-center bg-black">
                    <div className="text-white">Carregando 3D...</div>
                  </div>
                )}
                <Suspense fallback={<div className="absolute inset-0 w-full h-full rounded-[24px] bg-black" />}>
                  <Spline
                    scene="https://prod.spline.design/h4vIirljpefHPM2v/scene.splinecode"
                    className="absolute inset-0 w-full h-full rounded-[24px] bg-black"
                    onLoad={() => setSplineLoading(false)}
                  />
                </Suspense>
              </div>
            )}
          </div>
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
