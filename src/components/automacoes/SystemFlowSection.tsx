"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/app/ClientBody";
import {
  MessageSquare,
  Bot,
  Phone,
  Calendar,
  CreditCard,
  CheckCircle,
  User,
  ArrowRight
} from "lucide-react";

const flowSteps = [
  { icon: MessageSquare, color: "primeops" },
  { icon: Bot, color: "primeops" },
  { icon: Phone, color: "primeops" },
  { icon: Calendar, color: "primeops" },
  { icon: CreditCard, color: "primeops" },
  { icon: CheckCircle, color: "primeops" },
  { icon: User, color: "amber" },
];

interface FlowStepProps {
  icon: React.ElementType;
  title: string;
  description: string;
  stepNumber: number;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
  color: string;
}

function FlowStep({
  icon: Icon,
  title,
  description,
  stepNumber,
  isActive,
  isCompleted,
  onClick,
  color
}: FlowStepProps) {
  const colorClasses = {
    primeops: {
      bg: "bg-[rgb(0,53,102)]/30",
      border: "border-[rgb(176,224,230)]/20",
      borderActive: "border-[rgb(176,224,230)]/50",
      text: "text-[rgb(176,224,230)]",
      glow: "shadow-[rgb(0,53,102)]/30"
    },
    emerald: {
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30",
      borderActive: "border-emerald-500",
      text: "text-emerald-400",
      glow: "shadow-emerald-500/20"
    },
    amber: {
      bg: "bg-amber-500/10",
      border: "border-amber-500/30",
      borderActive: "border-amber-500",
      text: "text-amber-400",
      glow: "shadow-amber-500/20"
    }
  }[color];

  return (
    <motion.button
      onClick={onClick}
      className={`
        relative flex flex-col items-center text-center p-4 rounded-xl transition-all duration-300
        ${isActive
          ? `${colorClasses.bg} border-2 ${colorClasses.borderActive} shadow-lg ${colorClasses.glow}`
          : `bg-slate-900/50 border border-slate-800 hover:border-slate-700`
        }
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Step Number */}
      <div className={`
        absolute -top-3 -right-3 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
        ${isCompleted
          ? 'bg-emerald-500 text-white'
          : isActive
            ? `${colorClasses.bg} ${colorClasses.text} border ${colorClasses.borderActive}`
            : 'bg-slate-800 text-slate-500'
        }
      `}>
        {isCompleted ? <CheckCircle className="w-4 h-4" /> : stepNumber}
      </div>

      {/* Icon */}
      <div className={`
        w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300
        ${isActive ? colorClasses.bg : 'bg-slate-800/50'}
      `}>
        <Icon className={`w-6 h-6 ${isActive || isCompleted ? colorClasses.text : 'text-slate-500'}`} />
      </div>

      {/* Title */}
      <h4 className={`text-sm font-medium mb-1 ${isActive ? 'text-white' : 'text-slate-400'}`}>
        {title}
      </h4>

      {/* Description (visible on active) */}
      <AnimatePresence>
        {isActive && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-xs text-slate-400 mt-1"
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

function FlowConnector({ isActive }: { isActive: boolean }) {
  return (
    <div className="hidden md:flex items-center justify-center px-1">
      <div className={`
        w-8 h-[2px] transition-all duration-500
        ${isActive ? 'bg-[rgb(176,224,230)]' : 'bg-slate-800'}
      `}>
        {isActive && (
          <motion.div
            className="h-full bg-[rgb(176,224,230)]"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.3 }}
          />
        )}
      </div>
      <ArrowRight className={`w-4 h-4 ${isActive ? 'text-[rgb(176,224,230)]' : 'text-slate-700'}`} />
    </div>
  );
}

export function SystemFlowSection() {
  const { t } = useI18n();
  const [activeStep, setActiveStep] = useState(0);

  const steps = flowSteps.map((step, index) => ({
    ...step,
    title: t(`lpAutomations.flow.steps.${index}.title`),
    description: t(`lpAutomations.flow.steps.${index}.description`),
    detail: t(`lpAutomations.flow.steps.${index}.detail`),
  }));

  return (
    <section id="como-funciona" className="relative w-full py-20 md:py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, rgb(12, 24, 42) 0%, rgb(0, 33, 71) 50%, rgb(12, 24, 42) 100%)' }}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgb(176,224,230)]/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[rgb(0,53,102)]/30 rounded-full blur-[150px]" />
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
            <Bot className="w-3.5 h-3.5" />
            <span>{t("lpAutomations.flow.badge")}</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight mb-6">
            {t("lpAutomations.flow.title")}
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t("lpAutomations.flow.description")}
          </p>
        </motion.div>

        {/* Flow Steps - Horizontal on Desktop */}
        <div className="flex flex-wrap md:flex-nowrap items-start justify-center gap-2 md:gap-0 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <FlowStep
                icon={step.icon}
                title={step.title}
                description={step.description}
                stepNumber={index + 1}
                isActive={activeStep === index}
                isCompleted={activeStep > index}
                onClick={() => setActiveStep(index)}
                color={step.color}
              />
              {index < steps.length - 1 && (
                <FlowConnector isActive={activeStep > index} />
              )}
            </div>
          ))}
        </div>

        {/* Detail Card */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-8 rounded-2xl glass-primeops-card">
            {/* Active Step Icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className={`
                w-12 h-12 rounded-xl flex items-center justify-center
                ${steps[activeStep].color === 'amber' ? 'bg-amber-500' : 'bg-[rgb(0,53,102)] border border-[rgb(176,224,230)]/30'}
              `}>
                {(() => {
                  const Icon = steps[activeStep].icon;
                  return <Icon className="w-6 h-6 text-white" />;
                })()}
              </div>
            </div>

            {/* Content */}
            <div className="text-center pt-4">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                {steps[activeStep].title}
              </h3>
              <p className="text-slate-400 leading-relaxed max-w-xl mx-auto">
                {steps[activeStep].detail}
              </p>
            </div>

            {/* Step Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`
                    w-2 h-2 rounded-full transition-all duration-300
                    ${activeStep === index
                      ? 'w-8 bg-[rgb(176,224,230)]'
                      : 'bg-slate-700 hover:bg-slate-600'
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Auto-advance hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-slate-500 mt-6"
        >
          {t("lpAutomations.flow.hint")}
        </motion.p>
      </div>
    </section>
  );
}

export default SystemFlowSection;
