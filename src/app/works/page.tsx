"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
  Clock,
  Quote,
  Layers,
  ExternalLink,
  Rocket,
  LayoutTemplate,
  Smartphone,
  Monitor,
  TrendingUp,
  Zap,
  Search,
  Target,
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

  // Portfolio services - what we build
  const portfolioServices = [
    {
      key: "lp",
      icon: Rocket,
      color: "#5A40BC",
      highlight: "Tráfego Pago",
    },
    {
      key: "site",
      icon: Monitor,
      color: "#780DA7",
      highlight: "SEO & Autoridade",
    },
    {
      key: "webapp",
      icon: LayoutTemplate,
      color: "#5A40BC",
      highlight: "Dashboard & SaaS",
    },
    {
      key: "mobile",
      icon: Smartphone,
      color: "#780DA7",
      highlight: "iOS & Android",
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

      {/* Portfolio Services Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#5A40BC]/30 bg-[#5A40BC]/10 px-4 py-1.5 mb-6">
              <Layers className="w-3 h-3 text-[#5A40BC]" />
              <span className="text-xs font-medium tracking-wide text-[#5A40BC]">
                {t("works.portfolio.badge")}
              </span>
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight mb-4">
              {t("works.portfolio.title")}
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto font-normal">
              {t("works.portfolio.subtitle")}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {portfolioServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative p-6 rounded-2xl border border-white/10 bg-neutral-900/30 hover:border-[#5A40BC]/30 transition-all duration-500"
                >
                  {/* Highlight badge - inside card */}
                  <div className="mb-3">
                    <span
                      className="px-2 py-1 text-[10px] font-medium rounded-full"
                      style={{ backgroundColor: `${service.color}20`, color: service.color }}
                    >
                      {service.highlight}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${service.color}15`, borderColor: `${service.color}30` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: service.color }} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#5A40BC] transition-colors">
                    {t(`works.portfolio.items.${service.key}.title`)}
                  </h3>
                  <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
                    {t(`works.portfolio.items.${service.key}.description`)}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-1.5">
                    {[0, 1, 2].map((idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs text-neutral-400"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#5A40BC] flex-shrink-0" />
                        <span className="truncate">{t(`works.portfolio.items.${service.key}.features.${idx}`)}</span>
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

      {/* Featured Case Studies Section */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#5A40BC]/30 bg-[#5A40BC]/10 px-4 py-1.5 mb-6">
              <Layers className="w-3 h-3 text-[#5A40BC]" />
              <span className="text-xs font-medium tracking-wide text-[#5A40BC]">
                {t("works.cases.badge")}
              </span>
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight mb-4">
              {t("works.cases.title")}
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto font-normal">
              {t("works.cases.subtitle")}
            </p>
          </motion.div>

          {/* Featured Cases Grid */}
          <div className="space-y-12 max-w-6xl mx-auto">
            {cases.filter(c => c.featured).map((caseStudy, i) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative rounded-3xl border border-white/10 bg-black/50 overflow-hidden"
              >
                {/* Main content grid */}
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left: Image */}
                  <div className="relative h-64 lg:h-auto lg:min-h-[450px] overflow-hidden">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent lg:bg-gradient-to-t lg:from-black/80 lg:via-transparent lg:to-transparent" />

                    {/* Category badge on image */}
                    <div className="absolute top-6 left-6">
                      <span className="px-3 py-1.5 text-xs font-medium bg-[#5A40BC] text-white rounded-full">
                        {caseStudy.category}
                      </span>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-3 group-hover:text-[#5A40BC] transition-colors">
                        {caseStudy.title}
                      </h3>
                      <p className="text-neutral-400 leading-relaxed">
                        {caseStudy.shortDesc}
                      </p>
                    </div>

                    {/* Results Metrics */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                      <div className="flex-1 min-w-[90px] max-w-[130px] text-center p-2 sm:p-3 rounded-xl bg-[#5A40BC]/10 border border-[#5A40BC]/20">
                        <div className="text-sm sm:text-base font-semibold text-[#5A40BC] truncate">
                          {caseStudy.results.conversions}
                        </div>
                        <div className="text-[10px] sm:text-xs text-neutral-500">Conversões</div>
                      </div>
                      <div className="flex-1 min-w-[90px] max-w-[130px] text-center p-2 sm:p-3 rounded-xl bg-[#780DA7]/10 border border-[#780DA7]/20">
                        <div className="text-sm sm:text-base font-semibold text-[#780DA7] truncate">
                          {caseStudy.results.timeToContact}
                        </div>
                        <div className="text-[10px] sm:text-xs text-neutral-500">Atendimento</div>
                      </div>
                      {caseStudy.results.revenue && (
                        <div className="flex-1 min-w-[90px] max-w-[130px] text-center p-2 sm:p-3 rounded-xl bg-[#5A40BC]/10 border border-[#5A40BC]/20">
                          <div className="text-sm sm:text-base font-semibold text-[#5A40BC] truncate">
                            {caseStudy.results.revenue}
                          </div>
                          <div className="text-[10px] sm:text-xs text-neutral-500">Receita</div>
                        </div>
                      )}
                      {caseStudy.results.other && (
                        <div className="flex-1 min-w-[90px] max-w-[130px] text-center p-2 sm:p-3 rounded-xl bg-[#780DA7]/10 border border-[#780DA7]/20">
                          <div className="text-sm sm:text-base font-semibold text-[#780DA7] truncate">
                            {caseStudy.results.other.split(":")[1]?.trim() || caseStudy.results.other}
                          </div>
                          <div className="text-[10px] sm:text-xs text-neutral-500 truncate">
                            {caseStudy.results.other.split(":")[0] || "Resultado"}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Deliverables */}
                    {caseStudy.deliverables && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#5A40BC]" />
                          Entregáveis
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {caseStudy.deliverables.slice(0, 6).map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-neutral-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#5A40BC] mt-1.5 flex-shrink-0" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Footer: Duration, Stack, Quote */}
                    <div className="pt-6 border-t border-white/10">
                      <div className="flex flex-wrap items-center gap-6 mb-4">
                        {caseStudy.duration && (
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="w-4 h-4 text-neutral-500" />
                            <span className="text-neutral-400">{caseStudy.duration}</span>
                          </div>
                        )}
                        {caseStudy.stack && (
                          <div className="flex items-center gap-2 flex-wrap">
                            {caseStudy.stack.slice(0, 4).map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 text-xs font-mono text-[#5A40BC] bg-[#5A40BC]/10 rounded"
                              >
                                {tech}
                              </span>
                            ))}
                            {caseStudy.stack.length > 4 && (
                              <span className="text-xs text-neutral-500">
                                +{caseStudy.stack.length - 4}
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Testimonial */}
                      <div className="relative pl-4 border-l-2 border-[#5A40BC]/30">
                        <Quote className="absolute -left-3 -top-1 w-6 h-6 text-[#5A40BC]/30" />
                        <p className="text-sm text-neutral-400 italic mb-2 line-clamp-2">
                          "{caseStudy.testimonial.quote}"
                        </p>
                        <p className="text-xs text-neutral-500">
                          <span className="text-white font-medium">{caseStudy.testimonial.author}</span>
                          {" — "}{caseStudy.testimonial.position}, {caseStudy.testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#5A40BC]/5 to-[#780DA7]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* View All Cases Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="#works-carousel"
              className="inline-flex items-center gap-2 text-sm text-[#5A40BC] hover:text-[#780DA7] transition-colors"
            >
              {t("works.cases.viewAll")}
              <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline Section */}
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
                  href="https://wa.me/5511936205799?text=Quero%20um%20or%C3%A7amento%20para%20meu%20projeto"
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
