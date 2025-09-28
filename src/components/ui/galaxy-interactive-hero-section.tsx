"use client";

import React from "react";
import { Suspense, lazy } from "react";
import Link from "next/link";
import { Play } from "lucide-react";
const Spline = lazy(() => import("@splinetool/react-spline"));

function HeroSplineBackground() {
  return (
    <div className="relative w-full h-screen pointer-events-auto overflow-hidden">
      <Suspense
        fallback={
          <div className="w-full h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black flex items-center justify-center">
            <div className="text-white text-xl">Carregando...</div>
          </div>
        }
      >
        <Spline
          className="w-full h-screen pointer-events-auto"
          scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
        />
      </Suspense>
      <div className="absolute inset-0 w-full h-screen pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
      </div>
    </div>
  );
}

function HeroContent() {
  return (
    <div className="text-center text-white px-4 max-w-3xl mx-auto">
      <h1
        className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 leading-[1.1] tracking-wide"
        style={{ fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif" }}
      >
        Tire sua ideia do papel,
        <br className="hidden sm:inline" /> onde o design vira realidade.
      </h1>
      <p className="text-sm sm:text-base md:text-lg leading-snug mb-5 sm:mb-6 opacity-80 max-w-xl mx-auto">
        Transformamos negócios com estratégias digitais, design de alto impacto
        e tecnologia sob medida para acelerar resultados.
      </p>
      <div className="flex pointer-events-auto flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Link
          href="/contact"
          className="bg-[#8200DB29] hover:bg-black/50 text-white font-semibold text-sm sm:text-base py-2 sm:py-2.5 px-5 sm:px-6 rounded-full transition duration-300 w-full sm:w-auto border border-[#322D36] text-center backdrop-blur-lg"
        >
          Começar Agora
        </Link>
        <Link
          href="/works"
          className="pointer-events-auto bg-[#0009] border border-gray-600 hover:border-gray-400 text-gray-200 hover:text-white font-medium text-sm sm:text-base py-2 sm:py-2.5 px-5 sm:px-6 rounded-full transition duration-300 flex items-center justify-center w-full sm:w-auto"
        >
          <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" />
          Ver Projetos
        </Link>
      </div>
    </div>
  );
}

export const HeroSection = () => {
  return (
    <div className="relative -mt-16 md:-mt-20">
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <HeroSplineBackground />
        </div>

        <div className="absolute inset-0 w-full h-screen flex justify-center items-center z-10 pointer-events-none">
          <div className="container mx-auto">
            <HeroContent />
          </div>
        </div>
      </div>
    </div>
  );
};
