"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/app/ClientBody";
import {
  MessageSquare,
  Phone,
  Calendar,
  CreditCard,
  Link2,
  Sparkles
} from "lucide-react";

const categoryIcons = {
  atendimento: MessageSquare,
  ligacoes: Phone,
  agenda: Calendar,
  financeiro: CreditCard,
  integracoes: Link2,
};

type CategoryKey = keyof typeof categoryIcons;

interface FeatureItem {
  title: string;
  description: string;
}

interface FeatureCategoryProps {
  category: CategoryKey;
  title: string;
  description: string;
  features: FeatureItem[];
  isActive: boolean;
  onClick: () => void;
}

function FeatureCategory({
  category,
  title,
  description,
  features,
  isActive,
  onClick
}: FeatureCategoryProps) {
  const Icon = categoryIcons[category];

  return (
    <motion.div
      layout
      onClick={onClick}
      className={`
        cursor-pointer rounded-xl transition-all duration-300
        ${isActive
          ? 'col-span-full lg:col-span-2 glass-primeops-card border-2 border-[rgb(176,224,230)]/30'
          : 'glass-primeops-card hover:border-[rgb(176,224,230)]/20'
        }
      `}
    >
      <div className={`p-6 ${isActive ? 'md:p-8' : ''}`}>
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`
            w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
            ${isActive ? 'bg-[rgb(0,53,102)] border border-[rgb(176,224,230)]/30' : 'bg-[rgb(0,33,71)]/50'}
          `}>
            <Icon className={`w-6 h-6 ${isActive ? 'text-[rgb(176,224,230)]' : 'text-slate-400'}`} />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className={`font-semibold mb-1 ${isActive ? 'text-xl text-white' : 'text-lg text-slate-300'}`}>
              {title}
            </h3>
            <p className="text-sm text-slate-400 line-clamp-2">
              {description}
            </p>
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-lg bg-[rgb(0,33,71)]/50 border border-[rgb(176,224,230)]/10"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[rgb(0,53,102)]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Sparkles className="w-3 h-3 text-[rgb(176,224,230)]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-white mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-slate-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function FeaturesSection() {
  const { t } = useI18n();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("atendimento");

  const categories: CategoryKey[] = ["atendimento", "ligacoes", "agenda", "financeiro", "integracoes"];

  const getCategoryData = (category: CategoryKey) => ({
    title: t(`lpAutomations.features.categories.${category}.title`),
    description: t(`lpAutomations.features.categories.${category}.description`),
    features: [0, 1, 2, 3].map((index) => ({
      title: t(`lpAutomations.features.categories.${category}.features.${index}.title`),
      description: t(`lpAutomations.features.categories.${category}.features.${index}.description`),
    })),
  });

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, rgb(12, 24, 42) 0%, rgb(0, 33, 71) 50%, rgb(12, 24, 42) 100%)' }}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgb(176,224,230)]/10 to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-[rgb(0,53,102)]/30 rounded-full blur-[150px]" />
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("lpAutomations.features.badge")}</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight mb-6">
            {t("lpAutomations.features.title")}
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t("lpAutomations.features.description")}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {categories.map((category) => {
            const data = getCategoryData(category);
            return (
              <FeatureCategory
                key={category}
                category={category}
                title={data.title}
                description={data.description}
                features={data.features}
                isActive={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            );
          })}
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${activeCategory === category
                  ? 'w-8 bg-[rgb(176,224,230)]'
                  : 'bg-slate-700 hover:bg-slate-600'
                }
              `}
              aria-label={`Ver categoria ${category}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
