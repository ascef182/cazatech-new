// app/page.tsx
import { lazy, Suspense } from "react";

// Novos componentes premium (client-side only)
import { 
  NeuralNetworkHero, 
  StaggerTestimonials, 
  RadialOrbitalTimeline 
} from "@/components/home/dynamic-sections";

// Componentes existentes
import StickyShowcaseSection from "@/components/sections/StickyShowcaseSection";
import { WhyDifferent } from "@/components/home/WhyDifferent";
import { FinalCTA } from "@/components/home/FinalCTA";
import CazaTechProductsSection from "@/components/home/CazaTechProductsSection";
import WorldMapSection from "@/components/sections/world-map-section";

const HeroScrollDemo = lazy(() =>
  import("@/components/sections/container-scroll-section").then((module) => ({
    default: module.HeroScrollDemo,
  }))
);
const SectionWithMockup = lazy(() =>
  import("@/components/ui/section-with-mockup").then((m) => ({
    default: m.default,
  }))
);

export default function Home() {
  return (
    <>
      {/* Hero Premium com animação neural network */}
      <NeuralNetworkHero />
      
      {/* Scroll Demo */}
      <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
        <HeroScrollDemo />
      </Suspense>
      
      {/* Seção com Mockup */}
      <Suspense fallback={<div className="h-[60vh] bg-black" />}>
        <SectionWithMockup
          title={
            <span className="font-extralight tracking-tight">
              Conectamos você com programadores
              <br />que transformam ideias em produtos digitais
            </span>
          }
          description={
            <span className="font-light tracking-tight text-white/75">
              Seu projeto não precisa de promessas, precisa de execução. 
              A CazaTech conecta você com uma equipe de tecnologia experiente 
              para tirar sua ideia do papel — do zero ao lançamento.
              <br />
              <br />
              • Automação de WhatsApp com IA (Secretária v3)
              <br />
              • Desenvolvimento de SaaS e Apps sob demanda
              <br />
              • Sites de alta performance e SEO
              <br />
              • Integrações complexas (n8n, APIs, Bancos)
            </span>
          }
          primaryImageSrc="https://www.fey.com/marketing/_next/static/media/newsletter-desktop-2_4x.e594b737.png"
          secondaryImageSrc="https://www.fey.com/marketing/_next/static/media/newsletter-desktop-1_4x.9cc114e6.png"
        />
      </Suspense>
      
      {/* Timeline Orbital - processo de entrega */}
      <RadialOrbitalTimeline />
      
      {/* Soluções CazaTech */}
      <CazaTechProductsSection />

      {/* Showcase Sticky */}
      <StickyShowcaseSection />
      
      {/* Por que somos diferentes */}
      <WhyDifferent />
      
      {/* Depoimentos com efeito stagger */}
      <StaggerTestimonials />
      
      {/* CTA Final */}
      <FinalCTA />
      
      {/* Mapa Global */}
      <WorldMapSection />
    </>
  );
}
