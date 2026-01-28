"use client";

// app/page.tsx
import { lazy, Suspense } from "react";
import Image from "next/image";
import { useI18n } from "@/app/ClientBody";
import { motion } from "framer-motion";
import { MessageSquare, Code2, Globe, Plug, ArrowRight } from "lucide-react";
import Link from "next/link";

// Novos componentes premium (client-side only)
import {
  NeuralNetworkHero,
  StaggerTestimonials,
  RadialOrbitalTimeline,
} from "@/components/home/dynamic-sections";

// Componentes existentes
import { FinalCTA } from "@/components/home/FinalCTA";
import CazaTechProductsSection from "@/components/home/CazaTechProductsSection";

// Scroll demo é pesado; já está em lazy + Suspense para não bloquear o Hero
const HeroScrollDemo = lazy(() =>
  import("@/components/sections/container-scroll-section").then((module) => ({
    default: module.HeroScrollDemo,
  }))
);

export default function Home() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero Premium com animação neural network */}
      <NeuralNetworkHero />

      {/* Scroll Demo */}
      <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
        <HeroScrollDemo />
      </Suspense>

      {/* Seção de Serviços Premium */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#5A40BC]/30 bg-[#5A40BC]/10 px-4 py-1.5 mb-6">
              <span className="text-xs font-medium tracking-wide text-[#5A40BC]">
                {t("sections.intro.badge")}
              </span>
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
              {t("sections.intro.title")}
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto font-normal text-base leading-relaxed">
              {t("sections.intro.description")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                key: "whatsapp",
                icon: MessageSquare,
                color: "#5A40BC",
                href: "/automacoes",
              },
              {
                key: "saas",
                icon: Code2,
                color: "#780DA7",
                href: "/saas",
              },
              {
                key: "websites",
                icon: Globe,
                color: "#5A40BC",
                href: "/works",
              },
              {
                key: "integrations",
                icon: Plug,
                color: "#780DA7",
                href: "/works",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="group relative flex flex-col h-full p-6 rounded-2xl border border-white/10 bg-black/50 hover:border-[#5A40BC]/40 transition-all duration-500"
                  >
                    {/* Header with Icon and Metric */}
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center border"
                        style={{
                          backgroundColor: `${item.color}15`,
                          borderColor: `${item.color}30`,
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: item.color }} />
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-semibold text-white">
                          {t(`sections.intro.cards.${item.key}.metric`)}
                        </div>
                        <div className="text-xs text-neutral-500">
                          {t(`sections.intro.cards.${item.key}.metricLabel`)}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#5A40BC] transition-colors">
                      {t(`sections.intro.cards.${item.key}.title`)}
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-4 flex-grow">
                      {t(`sections.intro.cards.${item.key}.description`)}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-1 text-sm text-[#5A40BC] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Saiba mais</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>

                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5A40BC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Orbital - processo de entrega */}
      <RadialOrbitalTimeline />

      {/* Soluções CazaTech */}
      <CazaTechProductsSection />

      {/* Depoimentos com efeito stagger */}
      <StaggerTestimonials />

      {/* CTA Final */}
      <FinalCTA />
    </>
  );
}
