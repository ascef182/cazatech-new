"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/app/ClientBody";
import {
  Clock,
  Users,
  TrendingDown,
  AlertTriangle,
  XCircle,
  MessageSquareOff
} from "lucide-react";

const problemIcons = [Clock, Users, TrendingDown, AlertTriangle, XCircle, MessageSquareOff];

interface ProblemCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  metric: string;
  index: number;
}

function ProblemCard({ icon: Icon, title, description, metric, index }: ProblemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0, 0, 0.2, 1]
      }}
      className="group relative p-6 rounded-xl glass-primeops-card hover:border-red-500/30 transition-all duration-300"
    >
      {/* Subtle red glow on hover */}
      <div className="absolute inset-0 rounded-xl bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        {/* Icon */}
        <div className="w-12 h-12 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-red-400" />
        </div>

        {/* Metric */}
        <div className="text-2xl md:text-3xl font-bold text-red-400 mb-2">
          {metric}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function ProblemSection() {
  const { t } = useI18n();

  const problems = [0, 1, 2, 3, 4, 5].map((index) => ({
    icon: problemIcons[index],
    title: t(`lpAutomations.problem.cards.${index}.title`),
    description: t(`lpAutomations.problem.cards.${index}.description`),
    metric: t(`lpAutomations.problem.cards.${index}.metric`),
  }));

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, rgb(12, 24, 42) 0%, rgb(0, 33, 71) 50%, rgb(12, 24, 42) 100%)' }}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgb(176,224,230)]/10 to-transparent" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[120px]" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 mb-6">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium text-red-300">
              {t("lpAutomations.problem.badge")}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight mb-6">
            {t("lpAutomations.problem.title")}
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t("lpAutomations.problem.description")}
          </p>
        </motion.div>

        {/* Problem Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <ProblemCard
              key={index}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
              metric={problem.metric}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Contrast Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <p className="text-slate-300">
              {t("lpAutomations.problem.contrast")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProblemSection;
