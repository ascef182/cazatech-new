"use client";

import { FAQSchema } from "@/components/seo/JsonLd";
import { useI18n } from "@/app/ClientBody";

// PRIMEOPS Design - Professional Infrastructure Theme
import HeroPrimeops from "@/components/automacoes/HeroPrimeops";
import HologramSection from "@/components/automacoes/HologramSection";
import ArchitectureSection from "@/components/automacoes/ArchitectureSection";
import ProblemSection from "@/components/automacoes/ProblemSection";
import SolutionSection from "@/components/automacoes/SolutionSection";
import SystemFlowSection from "@/components/automacoes/SystemFlowSection";
import FeaturesSection from "@/components/automacoes/FeaturesSection";
import TrustSection from "@/components/automacoes/TrustSection";
import FinalCTASection from "@/components/automacoes/FinalCTASection";

export default function AutomacoesPage() {
  const { t } = useI18n();

  return (
    <div className="relative w-full overflow-hidden" style={{ background: 'rgb(12, 24, 42)' }}>
      {/* SEO Schema */}
      <FAQSchema
        faqs={[0, 1, 2, 3].map((i) => ({
          q: t(`automations.faq.items.${i}.q`),
          a: t(`automations.faq.items.${i}.a`),
        }))}
      />

      {/* PRIMEOPS Hero - Infrastructure-focused design */}
      <HeroPrimeops />

      {/* Hologram Section - Message convergence visualization */}
      <HologramSection />

      {/* Architecture Section - System layers */}
      <ArchitectureSection />

      {/* Problem Section - Hidden cost of manual support */}
      <ProblemSection />

      {/* Solution Section - PRIMEOPS as operating system */}
      <SolutionSection />

      {/* System Flow - Visual demonstration */}
      <SystemFlowSection />

      {/* Features Section - Grouped by outcome */}
      <FeaturesSection />

      {/* Trust Section - Guarantees and integrations */}
      <TrustSection />

      {/* FAQ Section - PRIMEOPS styled */}
      <section id="faq" className="relative py-16 md:py-24" style={{ background: 'rgb(12, 24, 42)' }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgb(176,224,230)]/10 to-transparent" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="badge-primeops inline-flex mb-6">
              <span>{t("automations.faq.badgeLeft")}</span>
              <span className="h-1 w-1 rounded-full bg-[rgb(176,224,230)]/30 mx-2" />
              <span>{t("automations.faq.badgeRight")}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight mb-4">
              {t("automations.faq.title")}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {[0, 1, 2, 3].map((i) => (
                <li
                  key={i}
                  className="p-6 rounded-xl glass-primeops-card"
                >
                  <strong className="text-white block mb-2 font-medium text-lg">
                    {t(`automations.faq.items.${i}.q`)}
                  </strong>
                  <span className="text-slate-300 text-base leading-relaxed">
                    {t(`automations.faq.items.${i}.a`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Decision moment */}
      <FinalCTASection />
    </div>
  );
}
