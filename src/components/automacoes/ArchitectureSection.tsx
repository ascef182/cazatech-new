"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/app/ClientBody";
import {
  Layers,
  Database,
  Cpu,
  Shield,
  Zap,
  Globe,
} from "lucide-react";

// Architecture layer configuration
const architectureLayers = [
  {
    id: "interface",
    icon: Globe,
    color: "rgb(176, 224, 230)",
    position: 1,
  },
  {
    id: "processing",
    icon: Cpu,
    color: "rgb(147, 197, 253)",
    position: 2,
  },
  {
    id: "orchestration",
    icon: Layers,
    color: "rgb(134, 239, 172)",
    position: 3,
  },
  {
    id: "data",
    icon: Database,
    color: "rgb(253, 224, 71)",
    position: 4,
  },
  {
    id: "security",
    icon: Shield,
    color: "rgb(252, 165, 165)",
    position: 5,
  },
];

// Single Architecture Layer Component
function ArchitectureLayer({
  layer,
  index,
  t,
}: {
  layer: (typeof architectureLayers)[0];
  index: number;
  t: (key: string) => string;
}) {
  const Icon = layer.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.15,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative group"
    >
      <div
        className="glass-primeops-card p-5 md:p-6 flex items-center gap-5 transition-all duration-300 hover:border-[rgba(176,224,230,0.2)]"
        style={{
          marginLeft: `${index * 16}px`,
        }}
      >
        {/* Layer Number */}
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[rgb(0,33,71)] border border-[rgba(176,224,230,0.2)] flex items-center justify-center">
          <span className="text-[10px] font-medium text-[rgb(176,224,230)]">
            {layer.position}
          </span>
        </div>

        {/* Icon Container */}
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
          style={{
            background: `rgba(${layer.color
              .replace("rgb(", "")
              .replace(")", "")}, 0.1)`,
            border: `1px solid rgba(${layer.color
              .replace("rgb(", "")
              .replace(")", "")}, 0.2)`,
          }}
        >
          <Icon className="w-6 h-6" style={{ color: layer.color }} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base md:text-lg font-medium text-white mb-1">
            {t(`primeops.architecture.layers.${layer.id}.title`)}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            {t(`primeops.architecture.layers.${layer.id}.description`)}
          </p>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-2">
          <div className="signal-dot" />
          <span className="text-xs text-slate-500 hidden sm:block">Active</span>
        </div>

        {/* Connection Line to next layer */}
        {index < architectureLayers.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.3, duration: 0.3 }}
            className="absolute -bottom-4 left-10 w-[2px] h-4 bg-gradient-to-b from-[rgba(176,224,230,0.3)] to-transparent origin-top"
          />
        )}
      </div>
    </motion.div>
  );
}

// Benefits Sidebar
function BenefitsSidebar({ t }: { t: (key: string) => string }) {
  const benefits = [
    { icon: Zap, key: "performance" },
    { icon: Shield, key: "security" },
    { icon: Layers, key: "scalability" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="glass-primeops-card p-6"
    >
      <h4 className="text-sm font-medium text-[rgb(176,224,230)] uppercase tracking-wider mb-6">
        {t("primeops.architecture.benefits.title")}
      </h4>

      <div className="space-y-5">
        {benefits.map((benefit, index) => (
          <div key={benefit.key} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[rgb(0,53,102)]/30 border border-[rgba(176,224,230,0.1)] flex items-center justify-center flex-shrink-0">
              <benefit.icon className="w-5 h-5 text-[rgb(176,224,230)]" />
            </div>
            <div>
              <h5 className="text-white font-medium text-sm mb-1">
                {t(`primeops.architecture.benefits.${benefit.key}.title`)}
              </h5>
              <p className="text-slate-400 text-xs leading-relaxed">
                {t(`primeops.architecture.benefits.${benefit.key}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function ArchitectureSection() {
  const { t } = useI18n();

  return (
    <section
      id="arquitetura"
      className="relative w-full py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgb(12, 24, 42) 0%, rgb(0, 33, 71) 50%, rgb(12, 24, 42) 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgb(176,224,230)]/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgb(176,224,230)]/10 to-transparent" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(176 224 230) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(176 224 230) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="badge-primeops inline-flex mb-6">
            <Layers className="w-3.5 h-3.5" />
            <span>{t("primeops.architecture.badge")}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight mb-6">
            {t("primeops.architecture.title")}
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            {t("primeops.architecture.description")}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Architecture Layers - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-4">
            {architectureLayers.map((layer, index) => (
              <ArchitectureLayer
                key={layer.id}
                layer={layer}
                index={index}
                t={t}
              />
            ))}
          </div>

          {/* Benefits Sidebar */}
          <div className="lg:col-span-1">
            <BenefitsSidebar t={t} />
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {["uptime", "latency", "capacity", "security"].map((stat, index) => (
            <div key={stat} className="text-center">
              <div className="text-2xl md:text-3xl font-semibold text-white mb-1">
                {t(`primeops.architecture.stats.${stat}.value`)}
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">
                {t(`primeops.architecture.stats.${stat}.label`)}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
