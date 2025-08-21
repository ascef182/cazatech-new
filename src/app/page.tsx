// app/page.tsx
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import BlogHighlights from "@/components/home/BlogHighlights";
import PricingPlans from "@/components/home/PricingPlans";
import ShowcaseGridSection from "@/components/sections/ShowcaseGridSection";
import StickyShowcaseSection from "@/components/sections/StickyShowcaseSection";

import BentoGridSection from "@/components/home/bento-grid-section";
import WorldMapSection from "@/components/sections/world-map-section";
import { MacbookScrollDemo } from "@/components/sections/macbook-scroll";
import { HeroScrollDemo } from "@/components/sections/container-scroll-section";
import { TimelineSection } from "@/components/sections/timeline-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroScrollDemo />
      <TimelineSection />
      <BentoGridSection />

      <StickyShowcaseSection />
      <TestimonialSection />
      <WorldMapSection />
    </>
  );
}
