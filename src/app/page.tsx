// app/page.tsx
import { lazy, Suspense } from "react";
import { HeroSection } from "@/components/ui/galaxy-interactive-hero-section";
import { QuantifiedBenefits } from "@/components/home/QuantifiedBenefits";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import ShowcaseGridSection from "@/components/sections/ShowcaseGridSection";
import StickyShowcaseSection from "@/components/sections/StickyShowcaseSection";

import BentoGridSection from "@/components/home/bento-grid-section";
import WorldMapSection from "@/components/sections/world-map-section";
// import { MacbookScrollDemo } from "@/components/sections/macbook-scroll";
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
import { TimelineSection } from "@/components/sections/timeline-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<div className="h-96 bg-gray-900 animate-pulse" />}>
        <HeroScrollDemo />
      </Suspense>
      <Suspense fallback={<div className="h-[60vh] bg-black" />}>
        <SectionWithMockup
          title={
            <span
              style={{
                fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif",
              }}
            >
              Sistemas inteligentes,
              <br />e mais rentáveis.
            </span>
          }
          description={
            <span
              className="text-gray-600 dark:text-gray-300"
              style={{ fontSize: "18px", lineHeight: "1.6" }}
            >
              Aumente seus lucros e investimentos
              <br />
              enquanto um sistema trabalha para você 24/7.
              <br />
              Rankeamento nas pesquisas do Google, <br />
              atendimento personalizado com AI,
              <br />
              automações de marketing, <br />
              automações de tarefas repetitivas.
            </span>
          }
          primaryImageSrc="https://www.fey.com/marketing/_next/static/media/newsletter-desktop-2_4x.e594b737.png"
          secondaryImageSrc="https://www.fey.com/marketing/_next/static/media/newsletter-desktop-1_4x.9cc114e6.png"
        />
      </Suspense>
      <TimelineSection />
      <BentoGridSection />

      <StickyShowcaseSection />
      <TestimonialsSection />
      <WorldMapSection />
    </>
  );
}
