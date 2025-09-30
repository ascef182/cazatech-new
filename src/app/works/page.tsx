"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import HeroParallaxDemo from "@/components/hero-parallax-demo";
import { Features } from "@/components/ui/blocks/features-5";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { cases } from "@/content/cases";
import { lazy, Suspense } from "react";

const ThreeDCarousel = lazy(() =>
  import("@/components/ThreeDCarousel").then((module) => ({
    default: module.default,
  }))
);
const GoogleGeminiEffectDemo = lazy(() =>
  import("@/components/ui/google-gemini-effect-demo").then((module) => ({
    default: module.GoogleGeminiEffectDemo,
  }))
);
type CarouselItem = {
  id: string;
  title: string;
  brand: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
};

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = Array.from(new Set(cases.map((c) => c.category)));

  const filteredCases =
    activeCategory === "all"
      ? cases
      : cases.filter((c) => c.category === activeCategory);

  const breadcrumbItems = [
    { name: "Home", url: "https://caza-tech.com" },
    { name: "Works", url: "https://caza-tech.com/works" },
  ];

  const carouselItems: CarouselItem[] = cases.slice(0, 6).map((c) => ({
    id: c.id,
    title: c.title,
    brand: c.client,
    description: c.testimonial?.quote ?? c.challenge,
    tags: c.tags,
    imageUrl: c.image,
    link: "/contact",
  }));

  return (
    <div className="bg-black">
      <BreadcrumbSchema items={breadcrumbItems} />
      <div style={{ fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif" }}>
        <HeroParallaxDemo />
      </div>
      <Features />

      <section id="works-carousel" className="mt-16">
        <Suspense
          fallback={
            <div className="h-96 bg-gray-900 animate-pulse rounded-lg" />
          }
        >
          <ThreeDCarousel items={carouselItems} />
        </Suspense>
      </section>

      {/* Final CTA section */}
      <section className="mt-16">
        <Suspense
          fallback={
            <div className="h-96 bg-gray-900 animate-pulse rounded-lg" />
          }
        >
          <GoogleGeminiEffectDemo />
        </Suspense>
        {/* Espaçamento final para evitar sobreposição com footer */}
        <div className="h-2" />
      </section>
    </div>
  );
}
