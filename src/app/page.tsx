// app/page.tsx
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import BlogHighlights from "@/components/home/BlogHighlights";
import CTAFloaters from "@/components/CTAFloaters";
import PricingPlans from "@/components/home/PricingPlans";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PortfolioSection />
      <PricingPlans />
      <TestimonialSection />
      <BlogHighlights /> {/* Adicione esta linha */}
      <CTAFloaters />
    </>
  );
}
