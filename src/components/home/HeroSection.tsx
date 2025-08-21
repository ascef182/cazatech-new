"use client";

import Script from "next/script";
import { motion } from "framer-motion";

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
  return (
    <section className="relative w-full bg-black h-screen overflow-hidden">
      <Script
        src="https://unpkg.com/@splinetool/viewer@1.10.45/build/spline-viewer.js"
        type="module"
        strategy="afterInteractive"
      />

      {/* Spline no background apenas para mobile */}
      <div className="absolute inset-0 z-0 md:hidden">
        <spline-viewer
          url="https://prod.spline.design/sHI2Th9YzQmnDxBD/scene.splinecode"
          className="w-full h-full object-cover"
        />
      </div>

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
              <span className="text-[#6A0DAD]">SOLUÇÕES</span>
              <br />
              <span className="bg-gradient-to-r from-[#f7f7f7] via-[#c7c7c7] to-[#f7f7f7] bg-clip-text text-transparent">
                INTELIGENTES
              </span>
              <br />
              <span className="text-[#6A0DAD]">PARA O SEU NEGÓCIO</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-4 text-white/90 text-base sm:text-lg"
            >
              Automatizamos processos, criamos sites e integramos IA para levar
              sua empresa ao próximo nível.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 flex flex-col sm:flex-row items-center md:justify-start justify-center gap-4"
            >
              <a
                href="/contact"
                className="relative overflow-hidden rounded-2xl font-semibold text-white px-6 py-3 text-sm md:text-base bg-gradient-to-r from-purple-700 via-pink-600 to-black hover:scale-105 transition"
              >
                Quero uma solução
              </a>
              <a
                href="/automacoes"
                className="rounded-2xl border border-white text-white px-6 py-3 text-sm md:text-base hover:bg-white/10 transition"
              >
                Conheça nossos serviços
              </a>
            </motion.div>
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
