"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Zap,
  MessageSquare,
  Clock,
  Users,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";

export default function AutomacoesPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero futurista */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>
        <div className="container py-24 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
            >
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Atendimento Automatizado no WhatsApp
              </span>
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              className="mt-4 md:mt-6 text-lg md:text-xl text-white/70"
            >
              Capte, qualifique e atenda clientes 24/7 com um fluxo inteligente
              que reduz custos, aumenta conversões e acelera agendamentos.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="mt-8 flex items-center justify-center gap-3"
            >
              <Button
                asChild
                size="lg"
                className="bg-black hover:bg-black text-white"
              >
                <Link
                  href="https://api.whatsapp.com/send/?phone=5535998026821&text=Quero%20automatizar%20meu%20WhatsApp"
                  target="_blank"
                >
                  <PhoneCall className="mr-2 h-4 w-4" /> Falar com um
                  especialista
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-black text-white hover:bg-black/90 border-white/20"
              >
                <Link href="#planos">Ver planos</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* O que é e como funciona */}
      <section className="relative bg-background">
        <div className="container py-14 md:py-20">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <MessageSquare className="h-5 w-5" />,
                title: "Atendimento Inteligente",
                desc: "Receba e responda automaticamente com linguagem natural, mantendo um tom humano.",
              },
              {
                icon: <Users className="h-5 w-5" />,
                title: "Qualificação e Triagem",
                desc: "Identifique necessidades e direcione para vendas, suporte ou agendamento.",
              },
              {
                icon: <Clock className="h-5 w-5" />,
                title: "Agendamentos 24/7",
                desc: "Integração com agenda: o cliente escolhe o horário direto pelo WhatsApp.",
              },
            ].map((f, i) => (
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
                  {f.icon}
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

      {/* Planos */}
      <section id="planos" className="relative bg-background">
        <div className="container py-14 md:py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Planos sob medida
            </h2>
            <p className="mt-2 text-muted-foreground">
              Cores da sua marca. Foco em conversão. Sem fidelidade.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                tag: "Autônomos",
                className: "border-pink-500/30",
                accent: "from-pink-500/20 to-transparent",
                items: [
                  "Atendimento 24/7",
                  "Respostas rápidas",
                  "Até 1 número",
                ],
              },
              {
                tag: "Até 5 pessoas",
                className: "border-purple-500/30",
                accent: "from-purple-500/20 to-transparent",
                items: [
                  "Fila de atendimento",
                  "Triagem inteligente",
                  "Até 5 números",
                ],
              },
              {
                tag: "> 5 pessoas (Personalizado)",
                className: "border-blue-500/30",
                accent: "from-blue-500/20 to-transparent",
                items: [
                  "Integrações e SLA",
                  "Relatórios",
                  "Onboarding dedicado",
                ],
              },
            ].map((p, i) => (
              <motion.div
                key={p.tag}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: i * 0.1 }}
              >
                <Card
                  className={`relative h-full border ${p.className} overflow-hidden`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${p.accent}`}
                    aria-hidden
                  />
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-pink-600" /> {p.tag}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {p.items.map((it) => (
                        <li key={it} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />{" "}
                          {it}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex items-center gap-2">
                      <Button
                        asChild
                        className="bg-black hover:bg-black text-white"
                      >
                        <Link
                          href="https://api.whatsapp.com/send/?phone=5535998026821&text=Quero%20este%20plano"
                          target="_blank"
                        >
                          Falar no WhatsApp
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="bg-black text-white hover:bg-black/90"
                      >
                        <Link href="#faq">Detalhes</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ e CTA final */}
      <section id="faq" className="relative bg-background">
        <div className="container py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold">Perguntas frequentes</h3>
              <ul className="mt-4 space-y-4 text-muted-foreground">
                <li>
                  <strong className="text-foreground">
                    É necessário trocar meu número?
                  </strong>
                  <p>
                    Não. Integramos no seu número atual ou criamos um dedicado
                    ao atendimento.
                  </p>
                </li>
                <li>
                  <strong className="text-foreground">
                    Posso intervir a qualquer momento?
                  </strong>
                  <p>Sim. O fluxo transfere para humano quando desejar.</p>
                </li>
                <li>
                  <strong className="text-foreground">
                    Quanto tempo para implementar?
                  </strong>
                  <p>
                    De 3 a 10 dias úteis, conforme integrações e personalização.
                  </p>
                </li>
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
