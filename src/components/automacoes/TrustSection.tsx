"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/app/ClientBody";
import Image from "next/image";
import {
  Shield,
  Server,
  Clock,
  Headphones,
  Lock,
  RefreshCw,
  CheckCircle
} from "lucide-react";

const guaranteeIcons = [Shield, Server, Clock, Headphones, Lock, RefreshCw];

// Real integration logos
const integrations = [
  { name: "WhatsApp Business", logo: "/images/integrations/whatsapp.svg" },
  { name: "Google Calendar", logo: "/images/integrations/google-calendar.svg" },
  { name: "Asaas", logo: "/images/integrations/asaas.svg" },
  { name: "N8N", logo: "/images/integrations/n8n.svg" },
];

interface GuaranteeCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

function GuaranteeCard({ icon: Icon, title, description, index }: GuaranteeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-start gap-4 p-5 rounded-xl glass-primeops-card"
    >
      <div className="w-10 h-10 rounded-lg bg-[rgb(0,53,102)]/50 border border-[rgb(176,224,230)]/20 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-[rgb(176,224,230)]" />
      </div>
      <div>
        <h4 className="text-base font-semibold text-white mb-1">{title}</h4>
        <p className="text-sm text-slate-400">{description}</p>
      </div>
    </motion.div>
  );
}

function IntegrationLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="flex items-center justify-center p-6 rounded-xl glass-primeops-card hover:border-[rgb(176,224,230)]/20 transition-colors"
    >
      <div className="relative w-24 h-12 flex items-center justify-center">
        {/* Fallback to text if no logo */}
        <span className="text-slate-400 text-sm font-medium">{name}</span>
      </div>
    </motion.div>
  );
}

function ArchitectureCard() {
  const { t } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative p-8 rounded-2xl glass-primeops-card"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-[rgb(0,53,102)] border border-[rgb(176,224,230)]/30 flex items-center justify-center">
          <Server className="w-5 h-5 text-[rgb(176,224,230)]" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">
            {t("lpAutomations.trust.architecture.title")}
          </h3>
          <p className="text-sm text-slate-400">
            {t("lpAutomations.trust.architecture.subtitle")}
          </p>
        </div>
      </div>

      {/* Architecture Diagram (Simplified) */}
      <div className="relative p-6 rounded-xl bg-[rgb(0,33,71)]/50 border border-[rgb(176,224,230)]/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Layer 1: Client */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-xl bg-[rgb(0,53,102)]/50 border border-[rgb(176,224,230)]/20 flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">📱</span>
            </div>
            <span className="text-xs text-slate-400">WhatsApp</span>
          </div>

          {/* Arrow */}
          <div className="hidden md:block w-8 h-[2px] bg-gradient-to-r from-[rgb(176,224,230)]/50 to-[rgb(176,224,230)]/20" />
          <div className="block md:hidden h-8 w-[2px] bg-gradient-to-b from-[rgb(176,224,230)]/50 to-[rgb(176,224,230)]/20" />

          {/* Layer 2: Processing */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-xl bg-[rgb(0,53,102)]/50 border border-[rgb(176,224,230)]/20 flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">🤖</span>
            </div>
            <span className="text-xs text-slate-400">PRIMEOPS</span>
          </div>

          {/* Arrow */}
          <div className="hidden md:block w-8 h-[2px] bg-gradient-to-r from-[rgb(176,224,230)]/50 to-[rgb(176,224,230)]/20" />
          <div className="block md:hidden h-8 w-[2px] bg-gradient-to-b from-[rgb(176,224,230)]/50 to-[rgb(176,224,230)]/20" />

          {/* Layer 3: Integrations */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-xl bg-[rgb(0,53,102)]/50 border border-[rgb(176,224,230)]/20 flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">🔗</span>
            </div>
            <span className="text-xs text-slate-400">APIs</span>
          </div>

          {/* Arrow */}
          <div className="hidden md:block w-8 h-[2px] bg-gradient-to-r from-[rgb(176,224,230)]/50 to-[rgb(176,224,230)]/20" />
          <div className="block md:hidden h-8 w-[2px] bg-gradient-to-b from-[rgb(176,224,230)]/50 to-[rgb(176,224,230)]/20" />

          {/* Layer 4: Results */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-xl bg-[rgb(0,53,102)]/50 border border-[rgb(176,224,230)]/20 flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">📊</span>
            </div>
            <span className="text-xs text-slate-400">Dashboard</span>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-6 flex flex-wrap gap-2">
        {["Node.js", "N8N", "REST API", "Webhooks", "SSL/TLS"].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-400 border border-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function TrustSection() {
  const { t } = useI18n();

  const guarantees = guaranteeIcons.map((icon, index) => ({
    icon,
    title: t(`lpAutomations.trust.guarantees.${index}.title`),
    description: t(`lpAutomations.trust.guarantees.${index}.description`),
  }));

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, rgb(12, 24, 42) 0%, rgb(0, 33, 71) 50%, rgb(12, 24, 42) 100%)' }}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgb(176,224,230)]/10 to-transparent" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[rgb(0,53,102)]/30 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="badge-primeops inline-flex mb-6">
            <Shield className="w-3.5 h-3.5" />
            <span>{t("lpAutomations.trust.badge")}</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight mb-6">
            {t("lpAutomations.trust.title")}
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t("lpAutomations.trust.description")}
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left: Guarantees Grid */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[rgb(176,224,230)]" />
              {t("lpAutomations.trust.guaranteesTitle")}
            </h3>
            <div className="grid gap-4">
              {guarantees.map((guarantee, index) => (
                <GuaranteeCard
                  key={index}
                  icon={guarantee.icon}
                  title={guarantee.title}
                  description={guarantee.description}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Right: Architecture */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Server className="w-5 h-5 text-[rgb(176,224,230)]" />
              {t("lpAutomations.trust.architectureTitle")}
            </h3>
            <ArchitectureCard />
          </div>
        </div>

        {/* Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            {t("lpAutomations.trust.integrationsTitle")}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {integrations.map((integration) => (
              <IntegrationLogo
                key={integration.name}
                name={integration.name}
                logo={integration.logo}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TrustSection;
