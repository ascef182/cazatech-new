"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/app/ClientBody";
import {
  Cpu,
  Layers,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
  type LucideIcon
} from "lucide-react";

interface TransformationItemProps {
  before: string;
  after: string;
  index: number;
}

function TransformationItem({ before, after, index }: TransformationItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-center gap-4 py-4 border-b border-slate-800 last:border-0"
    >
      {/* Before */}
      <div className="flex-1">
        <span className="text-slate-500 line-through text-sm md:text-base">
          {before}
        </span>
      </div>

      {/* Arrow */}
      <div className="flex-shrink-0">
        <ArrowRight className="w-5 h-5 text-[rgb(176,224,230)]" />
      </div>

      {/* After */}
      <div className="flex-1">
        <span className="text-white font-medium text-sm md:text-base">
          {after}
        </span>
      </div>
    </motion.div>
  );
}

interface CapabilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

function CapabilityCard({ icon: Icon, title, description, index }: CapabilityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="relative p-6 rounded-xl glass-primeops-card"
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-[rgb(0,53,102)]/50 border border-[rgb(176,224,230)]/20 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-[rgb(176,224,230)]" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

const capabilityIcons: LucideIcon[] = [Cpu, Layers, Shield, Zap];

export function SolutionSection() {
  const { t } = useI18n();

  const transformations = [0, 1, 2, 3, 4].map((index) => ({
    before: t(`lpAutomations.solution.transformations.${index}.before`),
    after: t(`lpAutomations.solution.transformations.${index}.after`),
  }));

  const capabilities = [0, 1, 2, 3].map((index) => ({
    icon: capabilityIcons[index],
    title: t(`lpAutomations.solution.capabilities.${index}.title`),
    description: t(`lpAutomations.solution.capabilities.${index}.description`),
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
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{t("lpAutomations.solution.badge")}</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight mb-6">
            {t("lpAutomations.solution.title")}
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t("lpAutomations.solution.description")}
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Transformation List */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                {t("lpAutomations.solution.transformationTitle")}
              </h3>
              <p className="text-slate-400">
                {t("lpAutomations.solution.transformationSubtitle")}
              </p>
            </motion.div>

            <div className="glass-primeops-card p-6">
              {transformations.map((item, index) => (
                <TransformationItem
                  key={index}
                  before={item.before}
                  after={item.after}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Right: Capabilities Grid */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                {t("lpAutomations.solution.capabilitiesTitle")}
              </h3>
              <p className="text-slate-400">
                {t("lpAutomations.solution.capabilitiesSubtitle")}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {capabilities.map((capability, index) => (
                <CapabilityCard
                  key={index}
                  icon={capability.icon}
                  title={capability.title}
                  description={capability.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 rounded-2xl glass-primeops-card">
            <Cpu className="w-8 h-8 text-[rgb(176,224,230)]" />
            <div className="text-center sm:text-left">
              <p className="text-white font-medium text-lg">
                {t("lpAutomations.solution.bottomTitle")}
              </p>
              <p className="text-slate-400 text-sm">
                {t("lpAutomations.solution.bottomSubtitle")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SolutionSection;
