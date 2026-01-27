"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import HeroParallaxDemo from "@/components/hero-parallax-demo";
import { Features } from "@/components/ui/blocks/features-5";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { cases } from "@/content/cases";
import { lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/app/ClientBody";
import {
  ArrowRight,
  MessageSquare,
  Code2,
  Globe,
  Plug,
  CheckCircle2,
  Users,
  Award,
  Calendar,
} from "lucide-react";

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
  const { t } = useI18n();
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

  const services = [
    {
      key: "automation",
      icon: MessageSquare,
      color: "#5A40BC",
    },
    {
      key: "saas",
      icon: Code2,
      color: "#780DA7",
    },
    {
      key: "sites",
      icon: Globe,
      color: "#5A40BC",
    },
    {
      key: "integrations",
      icon: Plug,
      color: "#780DA7",
    },
  ];

  const stats = [
    { key: "projects", icon: Code2 },
    { key: "clients", icon: Users },
    { key: "satisfaction", icon: Award },
    { key: "years", icon: Calendar },
  ];

  return (
    <div className="bg-black">
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section with Parallax */}
      <HeroParallaxDemo />

      {/* Stats Section */}
      <section className="py-16 bg-black border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#5A40BC]/10 border border-[#5A40BC]/20 mb-4">
                    <Icon className="w-5 h-5 text-[#5A40BC]" />
                  </div>
                  <div className="text-3xl md:text-4xl font-medium text-white tracking-tight">
                    {t(`works.stats.${stat.key}.value`)}
                  </div>
                  <div className="text-sm text-neutral-400 mt-1">
                    {t(`works.stats.${stat.key}.label`)}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
              <span className="text-xs font-normal tracking-wide text-white/70">
                {t("works.services.badge")}
              </span>
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight mb-4">
              {t("works.services.title")}
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto font-normal">
              {t("works.services.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative p-8 rounded-2xl border border-white/10 bg-neutral-900/30 hover:border-[#5A40BC]/30 transition-all duration-500"
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: service.color }} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#5A40BC] transition-colors">
                    {t(`works.services.items.${service.key}.title`)}
                  </h3>
                  <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                    {t(`works.services.items.${service.key}.description`)}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2">
                    {[0, 1, 2].map((idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-neutral-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#5A40BC]" />
                        {t(`works.services.items.${service.key}.features.${idx}`)}
                      </li>
                    ))}
                  </ul>

                  {/* Subtle hover effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#5A40BC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
              <span className="text-xs font-normal tracking-wide text-white/70">
                {t("works.process.badge")}
              </span>
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight mb-4">
              {t("works.process.title")}
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto font-normal">
              {t("works.process.subtitle")}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#5A40BC]/50 via-[#780DA7]/50 to-transparent md:-translate-x-px" />

              {[0, 1, 2, 3].map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step number */}
                  <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full bg-black border-2 border-[#5A40BC] flex items-center justify-center -translate-x-1/2 z-10">
                    <span className="text-xs font-semibold text-[#5A40BC]">
                      {step + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-20 md:ml-0 md:w-1/2 ${
                      i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t(`works.process.steps.${step}.title`)}
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {t(`works.process.steps.${step}.description`)}
                    </p>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Carousel Section */}
      <section id="works-carousel" className="mt-16">
        <Suspense
          fallback={
            <div className="h-96 bg-gray-900 animate-pulse rounded-lg" />
          }
        >
          <ThreeDCarousel items={carouselItems} />
        </Suspense>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-3xl mx-auto"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#5A40BC]/10 via-[#780DA7]/10 to-[#5A40BC]/10 rounded-3xl blur-xl" />

            <div className="relative text-center p-12 md:p-16 rounded-3xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight mb-6">
                {t("works.cta.title")}
              </h2>
              <p className="text-lg text-neutral-400 mb-10 font-normal max-w-xl mx-auto">
                {t("works.cta.description")}
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#5A40BC] hover:bg-[#462F96] text-white px-8 py-6 text-base font-medium"
              >
                <Link
                  href="https://wa.me/5535998026821?text=Quero%20um%20or%C3%A7amento%20para%20meu%20projeto"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  {t("works.cta.button")}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final visual section */}
      <section className="mt-0">
        <Suspense
          fallback={
            <div className="h-96 bg-gray-900 animate-pulse rounded-lg" />
          }
        >
          <GoogleGeminiEffectDemo />
        </Suspense>
        <div className="h-2" />
      </section>
    </div>
  );
}
