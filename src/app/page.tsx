"use client";

// app/page.tsx
import {
  NeuralNetworkHero,
  RadialOrbitalTimeline,
} from "@/components/home/dynamic-sections";
import { FinalCTA } from "@/components/home/FinalCTA";
import CazaTechProductsSection from "@/components/home/CazaTechProductsSection";
import ServiceNavigator from "@/components/home/ServiceNavigator";
import ValueProposition from "@/components/home/ValueProposition";

export default function Home() {
  return (
    <>
      {/* Hero Premium com animação neural network */}
      <NeuralNetworkHero />

      {/* Navegador de Serviços - Principal para campanhas */}
      <ServiceNavigator />

      {/* Proposta de Valor - Por que CazaTech */}
      <ValueProposition />

      {/* Timeline Orbital - Processo de entrega */}
      <RadialOrbitalTimeline />

      {/* Soluções CazaTech - Cards com mockups */}
      <CazaTechProductsSection />

      {/* CTA Final */}
      <FinalCTA />
    </>
  );
}
