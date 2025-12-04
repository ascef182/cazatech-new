"use client";

import { motion } from "motion/react";
import { MessageSquare, Brain, Zap, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Cliente envia mensagem",
    description: "Seu cliente inicia uma conversa no WhatsApp a qualquer hora do dia ou da noite.",
    details: [
      "Integração com WhatsApp Business API oficial",
      "Multi-atendente: vários canais simultâneos",
      "Histórico completo de conversas",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    icon: Brain,
    title: "IA processa e qualifica",
    description: "Nossa inteligência artificial entende a intenção, contexto e urgência da mensagem.",
    details: [
      "Análise de sentimento em tempo real",
      "Detecção de intenção de compra",
      "Score de qualificação automático",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    icon: Zap,
    title: "Ação automatizada",
    description: "O sistema executa a ação ideal: responde, agenda, cobra ou escala para humano.",
    details: [
      "Respostas contextualizadas",
      "Integração com Google Calendar, Asaas, CRM",
      "Escalada inteligente para equipe humana",
    ],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Resultado mensurado",
    description: "Dashboard mostra métricas de atendimento, conversão e satisfação em tempo real.",
    details: [
      "Taxa de conversão por canal",
      "Tempo médio de resposta",
      "NPS e satisfação do cliente",
    ],
    gradient: "from-orange-500 to-red-500",
  },
];

export function HowItWorksTimeline() {
  return (
    <section className="py-20 md:py-32 bg-neutral-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(131, 80, 232, 0.1) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm mb-6">
            <span className="text-[10px] font-light uppercase tracking-[0.08em] text-white/70">
              Processo
            </span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span className="text-xs font-light tracking-tight text-white/80">
              4 Passos Simples
            </span>
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Como funciona na prática
          </h2>

          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
            Do primeiro contato até a conversão, tudo automatizado e inteligente.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[27px] top-[120px] w-0.5 h-[calc(100%+3rem)] bg-gradient-to-b from-purple-500/50 to-transparent hidden md:block" />
              )}

              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Number & Icon */}
                <div className="flex items-center gap-4 shrink-0">
                  <div className="relative">
                    <div
                      className={cn(
                        "w-14 h-14 rounded-xl flex items-center justify-center",
                        "bg-gradient-to-br",
                        step.gradient,
                        "shadow-lg"
                      )}
                    >
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-neutral-900 border-2 border-purple-500 flex items-center justify-center">
                      <span className="text-xs font-bold text-purple-400">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div
                    className={cn(
                      "p-8 rounded-2xl",
                      "bg-neutral-900/80 backdrop-blur-xl",
                      "border border-white/10",
                      "hover:border-purple-500/30 transition-all duration-300"
                    )}
                  >
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-neutral-400 text-lg mb-6">{step.description}</p>

                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-neutral-400">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksTimeline;
