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
            <div className="text-white text-xl">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
              Carregando experiência interativa...
            </div>
          </div>
        }
      >
        <Spline
          className="w-full h-screen pointer-events-auto"
          scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
          onError={() => {
            console.warn("Erro ao carregar cena Spline, usando fallback");
          }}
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
        Sistemas que trabalham enquanto você dorme.
      </h1>
      <p className="text-sm sm:text-base md:text-lg leading-snug mb-5 sm:mb-6 opacity-80 max-w-xl mx-auto">
        Deixe a tecnologia fazer o trabalho pesado: apps, sites, automações no WhatsApp, 
        SaaS sob demanda e marketing para impulsionar seu negócio.
      </p>
      <div className="flex pointer-events-auto flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Link
          href="/contact"
          className="bg-gradient-to-r from-purple-600/90 to-blue-600/90 hover:from-purple-700 hover:to-blue-700 text-white font-semibold text-sm sm:text-base py-2.5 sm:py-3 px-6 sm:px-8 rounded-full transition-all duration-300 w-full sm:w-auto border border-purple-500/30 text-center backdrop-blur-lg shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30"
        >
          Quero criar meu projeto
        </Link>
        <Link
          href="/automacoes"
          className="pointer-events-auto bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 text-white font-medium text-sm sm:text-base py-2.5 sm:py-3 px-6 sm:px-8 rounded-full transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
        >
          <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" />
          Ver Soluções
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
