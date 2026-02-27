"use client";

import React, { useState, useEffect } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  Bot,
  Smartphone,
  Globe,
  Code2,
  Search,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/app/ClientBody";

const Skeleton = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-white/10 bg-neutral-900/50 mask-image-gradient ${className}`}
  >
    {children}
  </div>
);

export default function CazaTechProductsSection() {
  const { t } = useI18n();
  const [activeProduct, setActiveProduct] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  const products = [
    {
      id: "websites",
      title: t("sections.products.items.websites.title"),
      description: t("sections.products.items.websites.description"),
      process: t("sections.products.items.websites.process") as unknown as string[],
      tech: t("sections.products.items.websites.tech") as string,
      results: t("sections.products.items.websites.results") as string,
      header: (
        <Skeleton className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 flex items-center justify-center group overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <Globe className="w-8 h-8 text-cyan-400" />
          </motion.div>
        </Skeleton>
      ),
      className: "md:col-span-2 md:row-span-1",
      icon: <Globe className="h-6 w-6 text-cyan-400" />,
      href: "/works",
    },
    {
      id: "apps",
      title: t("sections.products.items.apps.title"),
      description: t("sections.products.items.apps.description"),
      process: t("sections.products.items.apps.process") as unknown as string[],
      tech: t("sections.products.items.apps.tech") as string,
      results: t("sections.products.items.apps.results") as string,
      header: (
        <Skeleton className="bg-gradient-to-br from-purple-900/40 to-fuchsia-900/40 flex items-center justify-center overflow-hidden">
          <Smartphone className="w-16 h-16 text-fuchsia-400/50 group-hover:rotate-6 transition-transform duration-500" />
        </Skeleton>
      ),
      className: "md:col-span-1 md:row-span-1",
      icon: <Smartphone className="h-6 w-6 text-fuchsia-400" />,
      href: "/works",
    },
    {
      id: "automation",
      title: t("sections.products.items.automation.title"),
      description: t("sections.products.items.automation.description"),
      process: t("sections.products.items.automation.process") as unknown as string[],
      tech: t("sections.products.items.automation.tech") as string,
      results: t("sections.products.items.automation.results") as string,
      header: (
        <Skeleton className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 flex items-center justify-center group overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <Bot className="w-8 h-8 text-emerald-400" />
          </motion.div>
        </Skeleton>
      ),
      className: "md:col-span-3 md:row-span-1",
      icon: <Bot className="h-6 w-6 text-emerald-400" />,
      href: "/automacoes",
    },
    {
      id: "saas",
      title: t("sections.products.items.saas.title"),
      description: t("sections.products.items.saas.description"),
      process: t("sections.products.items.saas.process") as unknown as string[],
      tech: t("sections.products.items.saas.tech") as string,
      results: t("sections.products.items.saas.results") as string,
      header: (
        <Skeleton className="bg-gradient-to-br from-violet-900/40 to-purple-900/40 flex items-center justify-center">
          <Code2 className="w-16 h-16 text-violet-400/50" />
        </Skeleton>
      ),
      className: "md:col-span-1 md:row-span-1",
      icon: <Code2 className="h-6 w-6 text-violet-400" />,
      href: "/saas",
    },
    {
      id: "seo",
      title: t("sections.products.items.seo.title"),
      description: t("sections.products.items.seo.description"),
      process: t("sections.products.items.seo.process") as unknown as string[],
      tech: t("sections.products.items.seo.tech") as string,
      results: t("sections.products.items.seo.results") as string,
      header: (
        <Skeleton className="bg-gradient-to-br from-orange-900/40 to-red-900/40 flex items-center justify-center overflow-hidden">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Search className="w-16 h-16 text-orange-400/50" />
          </motion.div>
        </Skeleton>
      ),
      className: "md:col-span-2 md:row-span-1",
      icon: <Search className="h-6 w-6 text-orange-400" />,
      href: "/blog",
    },
  ];

  // Auto-advance steps every 3s when a card is active
  useEffect(() => {
    if (!activeProduct) return;
    const product = products.find((p) => p.id === activeProduct);
    if (!product) return;

    const timer = setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % product.process.length);
    }, 3000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeProduct, activeStep]);

  function handleCardClick(productId: string) {
    if (activeProduct === productId) {
      setActiveProduct(null);
      setActiveStep(0);
    } else {
      setActiveProduct(productId);
      setActiveStep(0);
    }
  }

  function handleStepClick(stepIndex: number, e: React.MouseEvent) {
    e.stopPropagation();
    setActiveStep(stepIndex);
  }

  return (
    <section className="py-20 bg-black" id="metodologia">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm mb-6">
            <span className="text-[10px] font-light uppercase tracking-[0.08em] text-white/70">
              {t("sections.products.badge")}
            </span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span className="text-xs font-light tracking-tight text-white/80">
              {t("sections.products.title")}
            </span>
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {t("sections.products.subtitle")}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto font-light">
            {t("sections.products.description")}
          </p>
        </div>

        <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
          {products.map((product) => {
            const isActive = activeProduct === product.id;
            const steps = Array.isArray(product.process) ? product.process : [];

            return (
              <motion.div
                key={product.id}
                animate={{
                  opacity: activeProduct && !isActive ? 0.5 : 1,
                  scale: activeProduct && !isActive ? 0.97 : 1,
                }}
                transition={{ duration: 0.3 }}
                onClick={() => handleCardClick(product.id)}
                className={`cursor-pointer ${product.className}`}
              >
                <BentoGridItem
                  className="h-full"
                  title={product.title}
                  description={
                    <AnimatePresence mode="wait">
                      {!isActive ? (
                        <motion.div
                          key="idle"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-1.5 flex-wrap mt-1"
                        >
                          {steps.map((_, idx) => (
                            <span
                              key={idx}
                              className="w-5 h-5 rounded-full border border-white/20 bg-white/5 text-white/40 text-[9px] flex items-center justify-center"
                            >
                              {idx + 1}
                            </span>
                          ))}
                          <span className="text-white/40 text-[11px] ml-0.5">
                            Como fazemos →
                          </span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="active"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-emerald-400 text-xs font-medium mt-1"
                        >
                          ✦ {product.results}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  }
                  icon={product.icon}
                  header={
                    <AnimatePresence mode="wait">
                      {!isActive ? (
                        <motion.div
                          key="idle-header"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="flex-1"
                        >
                          {product.header}
                        </motion.div>
                      ) : (
                        <motion.div
                          key="active-header"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="flex flex-col flex-1 gap-3 py-1 min-h-0"
                        >
                          {/* Progress bar */}
                          <div className="relative w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              className="absolute inset-y-0 left-0 bg-white/60 rounded-full"
                              animate={{
                                width: `${((activeStep + 1) / steps.length) * 100}%`,
                              }}
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          </div>

                          {/* Step pills */}
                          <div className="flex items-center gap-1.5 overflow-x-auto">
                            {steps.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={(e) => handleStepClick(idx, e)}
                                className={`flex-shrink-0 w-6 h-6 rounded-full border text-[10px] flex items-center justify-center transition-all ${
                                  idx === activeStep
                                    ? "border-white/60 bg-white/20 text-white"
                                    : "border-white/20 bg-white/5 text-white/40 hover:border-white/40"
                                }`}
                              >
                                {idx + 1}
                              </button>
                            ))}
                          </div>

                          {/* Step content */}
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={activeStep}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.2 }}
                              className="flex-1 min-h-0"
                            >
                              <p className="text-white font-semibold text-sm leading-tight">
                                {steps[activeStep]}
                              </p>
                              <p className="text-white/50 text-xs mt-1 font-mono">
                                {product.tech}
                              </p>
                            </motion.div>
                          </AnimatePresence>

                          {/* View service link */}
                          <Link
                            href={product.href}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-xs text-white/50 hover:text-white/90 transition-colors"
                          >
                            Ver serviço completo
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  }
                />
              </motion.div>
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}
