// app/page.tsx
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import BlogHighlights from "@/components/home/BlogHighlights";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PortfolioSection />
      <TestimonialSection />
      <BlogHighlights /> {/* Adicione esta linha */}
    </>
  );
}
