"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { trackWhatsAppClick } from "@/components/analytics/GoogleAnalytics";
import { useI18n } from "@/app/ClientBody";
import {
  ArrowRight,
  Server,
  Shield,
  Layers,
  Activity
} from "lucide-react";

// Infrastructure Visual - Layers concept
function InfrastructureVisual() {
  const layers = [
    { label: "Controle", icon: Activity, delay: 0.2 },
    { label: "Dados", icon: Server, delay: 0.4 },
    { label: "Orquestração", icon: Layers, delay: 0.6 },
    { label: "Comunicação", icon: Shield, delay: 0.8 },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Infrastructure Stack */}
      <div className="relative flex flex-col gap-3">
        {layers.map((layer, index) => (
          <motion.div
            key={layer.label}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: layer.delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div
              className="glass-primeops-card flex items-center gap-4 p-4 md:p-5"
              style={{
                transform: `translateX(${index * 12}px)`,
                zIndex: layers.length - index
              }}
            >
              <div className="w-10 h-10 rounded-lg bg-[rgb(0,53,102)]/50 border border-[rgb(176,224,230)]/20 flex items-center justify-center flex-shrink-0">
                <layer.icon className="w-5 h-5 text-[rgb(176,224,230)]" />
              </div>
              <div>
                <span className="text-sm font-medium text-white">{layer.label}</span>
                <div className="flex items-center gap-2 mt-1">
                  <div className="signal-dot" />
                  <span className="text-xs text-slate-400">Online</span>
                </div>
              </div>
              {/* Connection Line */}
              {index < layers.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: layer.delay + 0.3, duration: 0.3 }}
                  className="absolute -bottom-3 left-7 w-[2px] h-3 bg-gradient-to-b from-[rgb(176,224,230)]/30 to-transparent origin-top"
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Ambient glow - subtle */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[rgb(0,53,102)]/20 rounded-full blur-[100px]" />
      </div>
    </div>
  );
}

// Stats Bar
function StatsBar() {
  const { t } = useI18n();

  const stats = [
    { value: "24/7", label: t("primeops.hero.stats.uptime") },
    { value: "<3s", label: t("primeops.hero.stats.response") },
    { value: "99.9%", label: t("primeops.hero.stats.availability") },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="flex flex-wrap justify-center gap-8 md:gap-12"
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-2xl md:text-3xl font-semibold text-white mb-1">
            {stat.value}
          </div>
          <div className="text-xs text-slate-400 uppercase tracking-wider">
            {stat.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default function HeroPrimeops() {
  const { t } = useI18n();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20"
      style={{
        background: 'linear-gradient(180deg, rgb(0, 33, 71) 0%, rgb(12, 24, 42) 100%)'
      }}
    >
      {/* Background Effects - Subtle */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle gradient orb */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[rgb(0,53,102)]/30 rounded-full blur-[150px]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(176 224 230) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(176 224 230) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Top border line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgb(176,224,230)]/10 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 badge-primeops mb-8"
            >
              <Server className="w-3.5 h-3.5" />
              <span>{t("primeops.hero.badge")}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.1] tracking-tight mb-6"
            >
              {t("primeops.hero.headline")}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {t("primeops.hero.subheadline")}
            </motion.p>

            {/* Core Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="glass-primeops-subtle p-4 rounded-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              <p className="text-sm text-[rgb(176,224,230)] font-medium">
                {t("primeops.hero.coreMessage")}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
            >
              <Button
                asChild
                size="lg"
                className="btn-primeops-primary"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Link
                  href="https://wa.me/5511936205799?text=Olá! Quero conhecer o PRIMEOPS."
                  target="_blank"
                  onClick={() => trackWhatsAppClick("primeops-hero", "Falar com Especialista")}
                  className="flex items-center gap-2"
                >
                  {t("primeops.hero.ctaPrimary")}
                  <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="btn-primeops-secondary"
                onClick={() => {
                  const architectureSection = document.getElementById("arquitetura");
                  if (architectureSection) {
                    architectureSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {t("primeops.hero.ctaSecondary")}
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center gap-4 mt-8"
            >
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[rgb(0,53,102)] border-2 border-[rgb(12,24,42)] flex items-center justify-center">
                  <span className="text-xs text-[rgb(176,224,230)]">+</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[rgb(0,53,102)] border-2 border-[rgb(12,24,42)] flex items-center justify-center">
                  <span className="text-xs text-[rgb(176,224,230)]">1k</span>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                <span className="text-white font-medium">+1.000 empresas</span> já automatizaram com a Secretária V3
              </p>
            </motion.div>
          </div>

          {/* Right: Infrastructure Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="hidden lg:block"
          >
            <InfrastructureVisual />
          </motion.div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 md:mt-20">
          <StatsBar />
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[rgb(12,24,42)] to-transparent pointer-events-none" />
    </section>
  );
}
