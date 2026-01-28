"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { trackWhatsAppClick } from "@/components/analytics/GoogleAnalytics";
import { useI18n } from "@/app/ClientBody";
import {
  MessageSquare,
  Calendar,
  CreditCard,
  Phone,
  ArrowRight,
  CheckCircle,
  Zap
} from "lucide-react";

// Animated System Flow Diagram
function SystemFlowDiagram() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Flow Container */}
      <div className="relative flex items-center justify-between gap-2 md:gap-4">
        {/* Step 1: Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-[#5A40BC]/20 border border-[#5A40BC]/30 flex items-center justify-center mb-2">
            <MessageSquare className="w-6 h-6 md:w-7 md:h-7 text-[#5A40BC]" />
          </div>
          <span className="text-[10px] md:text-xs text-slate-400 text-center">Mensagem</span>
        </motion.div>

        {/* Arrow 1 */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="flex-1 h-[2px] bg-gradient-to-r from-[#5A40BC]/50 to-[#5A40BC]/20 origin-left"
        />

        {/* Step 2: Phone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-[#5A40BC]/20 border border-[#5A40BC]/30 flex items-center justify-center mb-2">
            <Phone className="w-6 h-6 md:w-7 md:h-7 text-[#5A40BC]" />
          </div>
          <span className="text-[10px] md:text-xs text-slate-400 text-center">Ligação</span>
        </motion.div>

        {/* Arrow 2 */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
          className="flex-1 h-[2px] bg-gradient-to-r from-[#5A40BC]/50 to-[#5A40BC]/20 origin-left"
        />

        {/* Step 3: Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-[#5A40BC]/20 border border-[#5A40BC]/30 flex items-center justify-center mb-2">
            <Calendar className="w-6 h-6 md:w-7 md:h-7 text-[#5A40BC]" />
          </div>
          <span className="text-[10px] md:text-xs text-slate-400 text-center">Agenda</span>
        </motion.div>

        {/* Arrow 3 */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.0, duration: 0.3 }}
          className="flex-1 h-[2px] bg-gradient-to-r from-[#5A40BC]/50 to-[#5A40BC]/20 origin-left"
        />

        {/* Step 4: Payment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-[#5A40BC]/20 border border-[#5A40BC]/30 flex items-center justify-center mb-2">
            <CreditCard className="w-6 h-6 md:w-7 md:h-7 text-[#5A40BC]" />
          </div>
          <span className="text-[10px] md:text-xs text-slate-400 text-center">Pagamento</span>
        </motion.div>
      </div>

      {/* Animated pulse line */}
      <motion.div
        className="absolute top-7 md:top-8 left-[10%] right-[10%] h-[2px] bg-[#5A40BC]"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 1, 0],
          x: ["0%", "0%", "100%"]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeInOut"
        }}
        style={{ originX: 0 }}
      />
    </div>
  );
}

// Trust Indicators
function TrustIndicators() {
  const { t } = useI18n();

  const indicators = [
    { text: t("lpAutomations.hero.trust.whatsappOfficial") },
    { text: t("lpAutomations.hero.trust.noContract") },
    { text: t("lpAutomations.hero.trust.setupIncluded") },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.5 }}
      className="flex flex-wrap justify-center gap-4 md:gap-6"
    >
      {indicators.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-[#5A40BC]" />
          <span className="text-sm text-slate-400">{item.text}</span>
        </div>
      ))}
    </motion.div>
  );
}

export default function HeroSecretariaV3() {
  const { t } = useI18n();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-slate-950 pt-20 pb-16 md:pt-24 md:pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#5A40BC]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#780DA7]/5 rounded-full blur-[100px]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(255 255 255) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(255 255 255) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#5A40BC]/30 bg-[#5A40BC]/10 backdrop-blur-sm mb-8"
        >
          <Zap className="w-4 h-4 text-[#5A40BC]" />
          <span className="text-sm font-medium text-[#8B7DC9]">
            {t("lpAutomations.hero.badge")}
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight tracking-tight max-w-4xl mb-6"
        >
          {t("lpAutomations.hero.headline")}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
        >
          {t("lpAutomations.hero.subheadline")}
        </motion.p>

        {/* System Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full max-w-2xl mb-12"
        >
          <SystemFlowDiagram />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-10"
        >
          <Button
            asChild
            size="lg"
            className="relative overflow-hidden bg-black hover:bg-neutral-900 text-white font-semibold px-8 py-6 text-base rounded-lg shadow-lg shadow-black/25 border border-white/10 transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link
              href="https://wa.me/5511936205799?text=Olá! Quero agendar uma demonstração da Secretária V3."
              target="_blank"
              onClick={() => trackWhatsAppClick("lp-hero", "Agendar Demonstração")}
              className="flex items-center gap-2"
            >
              {t("lpAutomations.hero.ctaPrimary")}
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-white px-8 py-6 text-base rounded-lg"
            onClick={() => {
              const demoSection = document.getElementById("como-funciona");
              if (demoSection) {
                demoSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {t("lpAutomations.hero.ctaSecondary")}
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <TrustIndicators />
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}
