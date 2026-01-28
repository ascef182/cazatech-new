"use client";

import HeroSaas from "@/components/saas/HeroSaas";
import Link from "next/link";
import { Contact2 } from "@/components/ui/contact-2";
import { motion } from "framer-motion";
import {
  Sparkles,
  Code2,
  CreditCard,
  Rocket,
  FileText,
  ArrowRight,
  CheckCircle2,
  Shield,
  MessageSquare,
  Building2,
  TrendingUp,
  ShoppingCart,
  Headphones,
  Unlock,
  FileCode2,
} from "lucide-react";
import { useI18n } from "@/app/ClientBody";
import { Button } from "@/components/ui/button";

export default function SaasPage() {
  const { t } = useI18n();

  const processSteps = [
    { icon: FileText, color: "#5A40BC" },
    { icon: Code2, color: "#780DA7" },
    { icon: CreditCard, color: "#5A40BC" },
    { icon: Rocket, color: "#780DA7" },
  ];

  const trustItems = [
    { icon: Code2 },
    { icon: Shield },
    { icon: CheckCircle2 },
    { icon: Sparkles },
  ];

  const techStack = ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe", "Vercel"];

  // New cards structure with icons
  const exampleCards = [
    { icon: MessageSquare, color: "#5A40BC" },
    { icon: Building2, color: "#780DA7" },
    { icon: TrendingUp, color: "#5A40BC" },
    { icon: ShoppingCart, color: "#780DA7" },
  ];

  const guaranteeIcons = [Code2, FileCode2, Headphones, Unlock];

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <HeroSaas />

      {/* Process Timeline Section */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#5A40BC]/30 bg-[#5A40BC]/10 px-4 py-1.5 mb-6">
              <span className="text-xs font-medium tracking-wide text-[#5A40BC]">
                {t("saas.process.badge")}
              </span>
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight mb-4">
              {t("saas.process.title")}
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto font-normal">
              {t("saas.process.subtitle")}
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative"
                  >
                    {i < 3 && (
                      <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-[#5A40BC]/50 to-[#780DA7]/50" />
                    )}
                    <div className="relative z-10 text-center">
                      <div
                        className="w-24 h-24 mx-auto rounded-2xl flex items-center justify-center mb-6 border"
                        style={{
                          backgroundColor: `${step.color}10`,
                          borderColor: `${step.color}30`,
                        }}
                      >
                        <Icon className="w-10 h-10" style={{ color: step.color }} />
                      </div>
                      <span className="inline-block px-3 py-1 text-xs font-medium text-[#5A40BC] bg-[#5A40BC]/10 rounded-full mb-3">
                        {t(`saas.process.steps.${i}.week`)}
                      </span>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {t(`saas.process.steps.${i}.title`)}
                      </h3>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {t(`saas.process.steps.${i}.description`)}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-black border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {trustItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
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
                    {t(`saas.trust.items.${i}.value`)}
                  </div>
                  <div className="text-sm text-neutral-400 mt-1">
                    {t(`saas.trust.items.${i}.label`)}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-4">
              <span className="text-xs font-normal tracking-wide text-white/70">
                {t("saas.stack.badge")}
              </span>
            </span>
            <h3 className="text-xl font-medium text-white">
              {t("saas.stack.title")}
            </h3>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="px-6 py-3 rounded-xl border border-white/10 bg-neutral-900/50 text-neutral-300 text-sm font-medium hover:border-[#5A40BC]/30 transition-colors"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW Examples Section - Redesigned */}
      <section id="exemplos" className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#5A40BC]/30 bg-[#5A40BC]/10 px-4 py-1.5 mb-6">
              <Code2 className="w-3 h-3 text-[#5A40BC]" />
              <span className="text-xs font-medium tracking-wide text-[#5A40BC]">
                {t("saas.examples.badge")}
              </span>
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight mb-4">
              {t("saas.examples.title")}
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto font-normal">
              {t("saas.examples.description")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {exampleCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative p-8 rounded-2xl border border-white/10 bg-black/50 hover:border-[#5A40BC]/40 transition-all duration-500"
                >
                  {/* Header with Icon and Metric */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center border"
                      style={{
                        backgroundColor: `${card.color}15`,
                        borderColor: `${card.color}30`,
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: card.color }} />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-semibold text-white">
                        {t(`saas.examples.cards.${i}.metric`)}
                      </div>
                      <div className="text-xs text-neutral-500">
                        {t(`saas.examples.cards.${i}.metricLabel`)}
                      </div>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#5A40BC] transition-colors">
                    {t(`saas.examples.cards.${i}.title`)}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {t(`saas.examples.cards.${i}.desc`)}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {[0, 1, 2].map((idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-[#5A40BC] flex-shrink-0" />
                        <span>{t(`saas.examples.cards.${i}.features.${idx}`)}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badge */}
                  <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                    <span className="text-xs text-neutral-500">Stack:</span>
                    <span className="text-xs font-mono text-[#5A40BC]">
                      {t(`saas.examples.cards.${i}.tech`)}
                    </span>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5A40BC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.div>
              );
            })}
          </div>

          {/* Bottom text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12 text-neutral-400 text-sm"
          >
            {t("saas.examples.bottomText")}
          </motion.p>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
              <Shield className="w-3 h-3 text-white/70" />
              <span className="text-xs font-normal tracking-wide text-white/70">
                {t("saas.guarantee.badge")}
              </span>
            </span>
            <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight">
              {t("saas.guarantee.title")}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {guaranteeIcons.map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-xl border border-white/10 bg-neutral-900/30 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-[#5A40BC]/10 border border-[#5A40BC]/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#5A40BC]" />
                </div>
                <h4 className="text-white font-semibold mb-2">
                  {t(`saas.guarantee.items.${i}.title`)}
                </h4>
                <p className="text-sm text-neutral-400">
                  {t(`saas.guarantee.items.${i}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#5A40BC]/10 via-[#780DA7]/10 to-[#5A40BC]/10 rounded-3xl blur-xl" />
            <div className="relative text-center p-12 md:p-16 rounded-3xl border border-white/10 bg-black/50 backdrop-blur-sm">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight mb-6">
                {t("saas.cta.title")}
              </h2>
              <p className="text-lg text-neutral-400 mb-10 font-normal max-w-xl mx-auto">
                {t("saas.cta.description")}
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#5A40BC] hover:bg-[#462F96] text-white px-8 py-6 text-base font-medium"
              >
                <Link
                  href="https://wa.me/5511936205799?text=Quero%20conversar%20sobre%20meu%20projeto%20SaaS"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  {t("saas.cta.button")}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact2
        title={t("contact2.title")}
        description={t("contact2.description")}
        phone={t("contact2.phone")}
        email={t("contact2.email")}
        web={{ label: t("contact2.web.label"), url: t("contact2.web.url") }}
      />
    </div>
  );
}
