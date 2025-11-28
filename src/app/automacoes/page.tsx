"use client";

import HeroAutomacoes from "@/components/automacoes/HeroAutomacoes";
import { Iphone16Pro } from "@/components/ui/iphone-16-pro";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { automacoesContent } from "@/content/automacoes";
import { BenefitsSection } from "@/components/automacoes/BenefitsSection";
import { NicheCards } from "@/components/automacoes/NicheCards";
import { HowItWorksTimeline } from "@/components/automacoes/HowItWorksTimeline";
import { WaitlistCTA } from "@/components/automacoes/WaitlistCTA";
import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";
import { FAQSchema } from "@/components/seo/JsonLd";

export default function AutomacoesPage() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero com grid de imagens n8n e CTA igual à raíz */}
      <HeroAutomacoes />

      {/* iPhone 16 Pro mockup com vídeo demonstrativo */}
      <section id="demo" className="flex justify-center items-center py-16 md:py-24 bg-white">
        <div className="text-center">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full bg-purple-100 text-purple-700 mb-4">
            Demonstração
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-black"
          >
            Como funciona na prática?
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Assista uma conversa real da Secretária v3 em ação
          </p>
          <div className="flex justify-center">
            <div className="relative w-full max-w-[433px] px-4">
              <Iphone16Pro
                videoSrc="/videos/demonstração.mp4"
                width={433}
                height={882}
                className="w-full h-auto"
                shadow
                rounded
                hoverAnimation
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <HowItWorksTimeline />

      {/* Database API Animation - Integrations */}
      <section className="w-full bg-black py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm mb-6">
              <span className="text-[10px] font-light uppercase tracking-[0.08em] text-white/70">Integrações</span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span className="text-xs font-light tracking-tight text-white/80">Conecte Tudo</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4">
              Integração com suas ferramentas
            </h2>
            <p className="text-lg font-light tracking-tight text-white/60 max-w-2xl mx-auto">
              Conectamos WhatsApp, N8N, CRMs e bancos de dados em um fluxo automatizado.
            </p>
          </div>
          <div className="flex justify-center">
            <DatabaseWithRestApi 
              circleText="API"
              badgeTexts={{
                first: "WhatsApp",
                second: "N8N",
                third: "CRM",
                fourth: "Database"
              }}
              buttonTexts={{
                first: "CazaTech",
                second: "Integração"
              }}
              title="Troca de dados via REST API personalizada"
              lightColor="#8350E8"
            />
          </div>
        </div>
      </section>

      {/* Prova visual (Sticky Showcase) */}
      <section className="w-full bg-black">
        <StickyScroll
          content={automacoesContent.sticky.map((s) => ({
            title: s.title,
            description: s.description,
            content: (
              <div className="h-full w-full flex items-center justify-center bg-black">
                <Image
                  src={s.image}
                  alt={s.title}
                  width={320}
                  height={220}
                  className="rounded-lg"
                />
              </div>
            ),
          }))}
        />
      </section>

      {/* Benefits Section (substitui pricing) */}
      <BenefitsSection />

      {/* Niche Cards */}
      <NicheCards />

      {/* FAQ Section */}
      <section id="faq" className="relative bg-neutral-950 py-16 md:py-24">
        <FAQSchema faqs={automacoesContent.faq} />
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm mb-6">
              <span className="text-[10px] font-light uppercase tracking-[0.08em] text-white/70">FAQ</span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span className="text-xs font-light tracking-tight text-white/80">Dúvidas Frequentes</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4">
              Perguntas frequentes
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-6">
              {automacoesContent.faq.map((f) => (
                <li key={f.q} className="border-b border-white/10 pb-6">
                  <strong className="text-white block mb-2 font-light text-lg">{f.q}</strong>
                  <span className="text-white/60 text-sm font-light leading-relaxed">{f.a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Final - Captura de Email */}
      <WaitlistCTA 
        title="Automatize seu atendimento"
        subtitle="Receba uma consultoria gratuita e descubra como aumentar suas vendas com automação."
        buttonText="Quero Automatizar"
        successMessage="Entraremos em contato em breve!"
      />
    </div>
  );
}
