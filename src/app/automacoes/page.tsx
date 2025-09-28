"use client";

import { motion } from "motion/react";
import HeroAutomacoes from "@/components/automacoes/HeroAutomacoes";
import { Iphone16Pro } from "@/components/ui/iphone-16-pro";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { automacoesContent } from "@/content/automacoes";
import PricingSection4 from "@/components/ui/pricing-section-4";
import { FAQSchema } from "@/components/seo/JsonLd";
import {
  Zap,
  MessageSquare,
  Clock,
  Users,
  CheckCircle2,
  PhoneCall,
  Route,
  Bot,
  CalendarDays,
  Repeat,
  Receipt,
} from "lucide-react";

export default function AutomacoesPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero com grid de imagens n8n e CTA igual à raíz */}
      <HeroAutomacoes />

      {/* iPhone 16 Pro mockup com vídeo demonstrativo */}
      <section className="flex justify-center items-center py-16 md:py-24 bg-white">
        <div className="text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-8 text-black"
            style={{ fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif" }}
          >
            Como funciona?
          </h2>
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

      {/* Planos */}
      <section id="planos">
        <PricingSection4 />
      </section>

      {/* FAQ e CTA final */}
      <section id="faq" className="relative bg-background">
        <FAQSchema faqs={automacoesContent.faq} />
        <div className="container py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold">Perguntas frequentes</h3>
              <ul className="mt-4 space-y-4 text-muted-foreground">
                {automacoesContent.faq.map((f) => (
                  <li key={f.q}>
                    <strong className="text-foreground">{f.q}</strong>
                    <br />
                    {f.a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border p-6 bg-black text-white">
              <h3 className="text-2xl font-bold">
                Pronto para converter mais pelo WhatsApp?
              </h3>
              <p className="mt-2 text-white/80">
                Enviamos um diagnóstico gratuito com oportunidades de automação
                para seu negócio.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-black hover:bg-black text-white"
                >
                  <Link
                    href="https://api.whatsapp.com/send/?phone=5535998026821&text=Quero%20um%20diagn%C3%B3stico%20gratuito"
                    target="_blank"
                  >
                    Falar no WhatsApp
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-black text-white hover:bg-black/90"
                >
                  <Link href="#planos">Ver planos</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
