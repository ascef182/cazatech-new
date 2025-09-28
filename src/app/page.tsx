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
import { TimelineSection } from "@/components/sections/timeline-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<div className="h-96 bg-gray-900 animate-pulse" />}>
        <HeroScrollDemo />
      </Suspense>
      <TimelineSection />
      <BentoGridSection />

      <StickyShowcaseSection />
      <TestimonialsSection />
      <WorldMapSection />
    </>
  );
}
