"use client";

import React, { useState, useEffect } from "react";
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
import { cn } from "@/lib/utils";
import { useI18n } from "@/app/ClientBody";

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
      icon: <Globe className="h-5 w-5" />,
      href: "/works",
      accentColor: "#22d3ee",
      metric: "+40%",
      metricLabel: "conversão",
    },
    {
      id: "apps",
      title: t("sections.products.items.apps.title"),
      description: t("sections.products.items.apps.description"),
      process: t("sections.products.items.apps.process") as unknown as string[],
      tech: t("sections.products.items.apps.tech") as string,
      icon: <Smartphone className="h-5 w-5" />,
      href: "/works",
      accentColor: "#e879f9",
      metric: "4.8★",
      metricLabel: "app store",
    },
    {
      id: "automation",
      title: t("sections.products.items.automation.title"),
      description: t("sections.products.items.automation.description"),
      process: t("sections.products.items.automation.process") as unknown as string[],
      tech: t("sections.products.items.automation.tech") as string,
      icon: <Bot className="h-5 w-5" />,
      href: "/automacoes",
      accentColor: "#34d399",
      metric: "80%",
      metricLabel: "tempo poupado",
    },
    {
      id: "saas",
      title: t("sections.products.items.saas.title"),
      description: t("sections.products.items.saas.description"),
      process: t("sections.products.items.saas.process") as unknown as string[],
      tech: t("sections.products.items.saas.tech") as string,
      icon: <Code2 className="h-5 w-5" />,
      href: "/saas",
      accentColor: "#a78bfa",
      metric: "99.9%",
      metricLabel: "uptime",
    },
    {
      id: "seo",
      title: t("sections.products.items.seo.title"),
      description: t("sections.products.items.seo.description"),
      process: t("sections.products.items.seo.process") as unknown as string[],
      tech: t("sections.products.items.seo.tech") as string,
      icon: <Search className="h-5 w-5" />,
      href: "/blog",
      accentColor: "#fb923c",
      metric: "+200%",
      metricLabel: "tráfego",
    },
  ];

  // Auto-advance steps every 3s when a product is active
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
    <section className="py-20 bg-[#030303]" id="metodologia">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
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

        {/* Process Rows */}
        <div className="max-w-5xl mx-auto divide-y divide-white/[0.06]">
          {products.map((product, i) => {
            const isActive = activeProduct === product.id;
            const steps = Array.isArray(product.process) ? product.process : [];

            return (
              <motion.div
                key={product.id}
                onClick={() => handleCardClick(product.id)}
                animate={{ opacity: activeProduct && !isActive ? 0.4 : 1 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "group cursor-pointer py-7 transition-colors duration-300",
                  "grid grid-cols-[2.5rem_1fr_auto] md:grid-cols-[4rem_1fr_auto] gap-4 md:gap-8 items-start",
                  isActive
                    ? "bg-white/[0.025] border-l-2 pl-3 -ml-[2px]"
                    : "hover:bg-white/[0.015] pl-0"
                )}
                style={isActive ? { borderLeftColor: product.accentColor } : {}}
              >
                {/* Col 1: Number + Icon */}
                <div className="flex flex-col items-center gap-2 pt-1">
                  <span className="text-xs font-mono text-white/20 tabular-nums leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div style={{ color: product.accentColor }}>
                    {product.icon}
                  </div>
                </div>

                {/* Col 2: Content */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-tight mb-1">
                    {product.title}
                  </h3>
                  <p className="text-sm text-white/40 mb-4">
                    {product.description}
                  </p>

                  {/* Process Steps — always visible */}
                  <div className="flex items-center flex-wrap gap-y-1">
                    {steps.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <button
                          onClick={(e) => handleStepClick(idx, e)}
                          className={cn(
                            "flex items-center gap-1.5 px-2 py-1 rounded-md text-xs transition-all",
                            isActive && idx === activeStep
                              ? "bg-white/15 text-white font-medium"
                              : "text-white/30 hover:text-white/60"
                          )}
                        >
                          <span
                            className="w-4 h-4 rounded-full border text-[9px] flex items-center justify-center flex-shrink-0"
                            style={
                              isActive && idx === activeStep
                                ? {
                                    borderColor: product.accentColor,
                                    color: product.accentColor,
                                  }
                                : { borderColor: "rgba(255,255,255,0.2)" }
                            }
                          >
                            {idx + 1}
                          </span>
                          <AnimatePresence>
                            {isActive && idx === activeStep && (
                              <motion.span
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                                exit={{ opacity: 0, width: 0 }}
                                className="overflow-hidden whitespace-nowrap text-[11px]"
                              >
                                {step}
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </button>
                        {idx < steps.length - 1 && (
                          <span className="text-white/15 text-xs mx-0.5">
                            —
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Tech — visible when active */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-xs font-mono text-white/30 mt-3 overflow-hidden"
                      >
                        {product.tech}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Col 3: Metrics */}
                <div className="text-right pt-1">
                  <div
                    className="text-lg md:text-2xl font-bold tabular-nums leading-none"
                    style={{ color: product.accentColor }}
                  >
                    {product.metric}
                  </div>
                  <div className="text-[11px] text-white/30 mt-1">
                    {product.metricLabel}
                  </div>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        className="mt-4"
                      >
                        <Link
                          href={product.href}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-xs text-white/40 hover:text-white/70 transition-colors"
                        >
                          Ver serviço{" "}
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
