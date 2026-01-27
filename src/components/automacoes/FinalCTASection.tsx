"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/app/ClientBody";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { submitToFormspree } from "@/lib/formspree";
import { trackWhatsAppClick } from "@/components/analytics/GoogleAnalytics";
import {
  ArrowRight,
  CheckCircle,
  Calendar,
  MessageSquare,
  Loader2,
  Sparkles
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  business: string;
}

function LeadForm() {
  const { t } = useI18n();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    business: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error(t("lpAutomations.cta.form.errorRequired"));
      return;
    }

    setStatus("loading");

    try {
      await submitToFormspree({
        ...formData,
        source: "lp-secretaria-v3",
        sourceUrl: typeof window !== "undefined" ? window.location.href : "",
      });

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", business: "" });

      // Reset after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Form error:", error);
      toast.error(t("lpAutomations.cta.form.errorSubmit"));
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center p-8 rounded-2xl glass-primeops-card text-center"
      >
        <div className="w-16 h-16 rounded-full bg-[rgb(0,53,102)] border border-[rgb(176,224,230)]/30 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-[rgb(176,224,230)]" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          {t("lpAutomations.cta.form.successTitle")}
        </h3>
        <p className="text-slate-400">
          {t("lpAutomations.cta.form.successMessage")}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
          {t("lpAutomations.cta.form.name")} *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-[rgb(0,33,71)]/50 border border-[rgb(176,224,230)]/20 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[rgb(176,224,230)]/30 focus:border-[rgb(176,224,230)]/50 transition-all"
          placeholder={t("lpAutomations.cta.form.namePlaceholder")}
          disabled={status === "loading"}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
          {t("lpAutomations.cta.form.email")} *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-[rgb(0,33,71)]/50 border border-[rgb(176,224,230)]/20 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[rgb(176,224,230)]/30 focus:border-[rgb(176,224,230)]/50 transition-all"
          placeholder={t("lpAutomations.cta.form.emailPlaceholder")}
          disabled={status === "loading"}
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1.5">
          {t("lpAutomations.cta.form.phone")} *
        </label>
        <input
          type="tel"
          id="phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-[rgb(0,33,71)]/50 border border-[rgb(176,224,230)]/20 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[rgb(176,224,230)]/30 focus:border-[rgb(176,224,230)]/50 transition-all"
          placeholder={t("lpAutomations.cta.form.phonePlaceholder")}
          disabled={status === "loading"}
        />
      </div>

      {/* Business Type */}
      <div>
        <label htmlFor="business" className="block text-sm font-medium text-slate-300 mb-1.5">
          {t("lpAutomations.cta.form.business")}
        </label>
        <select
          id="business"
          value={formData.business}
          onChange={(e) => setFormData({ ...formData, business: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-[rgb(0,33,71)]/50 border border-[rgb(176,224,230)]/20 text-white focus:outline-none focus:ring-2 focus:ring-[rgb(176,224,230)]/30 focus:border-[rgb(176,224,230)]/50 transition-all"
          disabled={status === "loading"}
        >
          <option value="">{t("lpAutomations.cta.form.businessPlaceholder")}</option>
          <option value="clinica">{t("lpAutomations.cta.form.businessOptions.clinica")}</option>
          <option value="imobiliaria">{t("lpAutomations.cta.form.businessOptions.imobiliaria")}</option>
          <option value="advocacia">{t("lpAutomations.cta.form.businessOptions.advocacia")}</option>
          <option value="ecommerce">{t("lpAutomations.cta.form.businessOptions.ecommerce")}</option>
          <option value="servicos">{t("lpAutomations.cta.form.businessOptions.servicos")}</option>
          <option value="outro">{t("lpAutomations.cta.form.businessOptions.outro")}</option>
        </select>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full btn-primeops-primary py-6 rounded-lg transition-all duration-300"
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            {t("lpAutomations.cta.form.submitting")}
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            {t("lpAutomations.cta.form.submit")}
          </span>
        )}
      </Button>

      {/* Trust Indicators */}
      <div className="flex flex-wrap justify-center gap-4 pt-4">
        <span className="flex items-center gap-1.5 text-xs text-slate-500">
          <CheckCircle className="w-3 h-3 text-[rgb(176,224,230)]" />
          {t("lpAutomations.cta.form.trust.free")}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-slate-500">
          <CheckCircle className="w-3 h-3 text-[rgb(176,224,230)]" />
          {t("lpAutomations.cta.form.trust.noCommitment")}
        </span>
      </div>
    </form>
  );
}

export function FinalCTASection() {
  const { t } = useI18n();

  const benefits = [0, 1, 2, 3].map((index) =>
    t(`lpAutomations.cta.benefits.${index}`)
  );

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, rgb(12, 24, 42) 0%, rgb(0, 33, 71) 50%, rgb(12, 24, 42) 100%)' }}>
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
          className="text-center mb-12"
        >
          {/* Badge */}
          <div className="badge-primeops inline-flex mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("lpAutomations.cta.badge")}</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight mb-6">
            {t("lpAutomations.cta.title")}
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t("lpAutomations.cta.description")}
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Left: Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              {t("lpAutomations.cta.valueTitle")}
            </h3>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[rgb(0,53,102)]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[rgb(176,224,230)]" />
                  </div>
                  <span className="text-slate-300">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Alternative: WhatsApp Direct */}
            <div className="p-6 rounded-xl glass-primeops-card">
              <p className="text-sm text-slate-400 mb-4">
                {t("lpAutomations.cta.preferWhatsapp")}
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full btn-primeops-secondary"
              >
                <Link
                  href="https://wa.me/5535998026821?text=Olá! Quero agendar uma demonstração da Secretária V3."
                  target="_blank"
                  onClick={() => trackWhatsAppClick("lp-cta", "WhatsApp Direto")}
                  className="flex items-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  {t("lpAutomations.cta.whatsappButton")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="p-8 rounded-2xl glass-primeops-card">
              <h4 className="text-lg font-semibold text-white mb-6 text-center">
                {t("lpAutomations.cta.formTitle")}
              </h4>
              <LeadForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTASection;
