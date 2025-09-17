"use client";

import { motion } from "motion/react";
import HeroAutomacoes from "@/components/automacoes/HeroAutomacoes";
import HeroScrollVideo from "@/components/automacoes/HeroScrollVideo";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { automacoesContent } from "@/content/automacoes";
import { PricingTable } from "@/components/automacoes/PricingTable";
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

      {/* Scroll com vídeo demonstrativo no estilo da home */}
      <HeroScrollVideo />

      {/* O que é e como funciona */}
      <section className="relative bg-background">
        <div className="container py-14 md:py-20">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {automacoesContent.features.map((f, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border bg-card text-card-foreground p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 text-pink-600">
                  {f.icon === "chat" && <MessageSquare className="h-5 w-5" />}
                  {f.icon === "route" && <Route className="h-5 w-5" />}
                  {f.icon === "clock" && <Clock className="h-5 w-5" />}
                  <h3 className="font-semibold">{f.title}</h3>
                </div>
                <p className="mt-2 text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="rounded-2xl border p-6 bg-black text-white"
            >
              <h3 className="text-xl font-bold">Por que agora?</h3>
              <ul className="mt-4 space-y-3 text-white/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-pink-500" />{" "}
                  Reduza tempo de atendimento em até 80%
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-purple-500" />{" "}
                  Aumente conversão com respostas instantâneas
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-500" />{" "}
                  Escale sem contratar mais equipe
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border p-6 bg-gradient-to-br from-pink-500/15 via-purple-500/10 to-blue-500/15"
            >
              <h3 className="text-xl font-bold">Como funciona o fluxo</h3>
              <p className="mt-2 text-muted-foreground">
                Captação → Qualificação → Triagem → Agendamento →
                Pós-atendimento
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Você enviará o JSON do fluxo em "Secretária" e nós adaptaremos a
                narrativa, elementos de UI e copy para conversão.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tipos de automação (Bento Grid) */}
      <section className="relative bg-black py-16 md:py-24">
        <div className="container">
          <h2
            className="mb-8 text-center text-3xl md:text-4xl font-bold text-white"
            style={{ fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif" }}
          >
            O que podemos automatizar
          </h2>
          <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
            {automacoesContent.bentoGrid.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                className={item.span === 2 ? "md:col-span-2" : undefined}
                icon={
                  item.icon === "calendar" ? (
                    <CalendarDays className="h-4 w-4 text-neutral-400" />
                  ) : item.icon === "receipt" ? (
                    <Receipt className="h-4 w-4 text-neutral-400" />
                  ) : item.icon === "repeat" ? (
                    <Repeat className="h-4 w-4 text-neutral-400" />
                  ) : (
                    <Bot className="h-4 w-4 text-neutral-400" />
                  )
                }
              />
            ))}
          </BentoGrid>
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

      {/* Depoimentos */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container">
          <h2
            className="text-center text-2xl md:text-3xl font-bold mb-8 text-white/90"
            style={{ fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif" }}
          >
            Depoimentos de Clientes
          </h2>
          <AnimatedTestimonials testimonials={automacoesContent.testimonials} />
        </div>
      </section>

      {/* Planos */}
      <PricingTable />

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
