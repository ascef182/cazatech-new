"use client";

import { motion } from "motion/react";
import {
  Stethoscope,
  Building2,
  Scale,
  Scissors,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

// ============================================
// 📋 DADOS DOS NICHOS
// ============================================

const nichos = [
  {
    icon: Stethoscope,
    title: "Clínicas e Consultórios",
    subtitle: "Médicos, Dentistas, Psicólogos",
    problems: [
      "No-show alto (até 30% de faltas)",
      "Atendimento lento no WhatsApp",
      "Cobrança manual demorada",
    ],
    results: "Redução de 40% nas faltas",
    gradient: "from-rose-500 to-pink-600",
    bgGlow: "rgba(244, 63, 94, 0.15)",
  },
  {
    icon: Building2,
    title: "Imobiliárias",
    subtitle: "Corretores e Incorporadoras",
    problems: [
      "Leads não qualificados",
      "Corretores sobrecarregados",
      "Perda de leads fora do horário",
    ],
    results: "3x mais leads qualificados",
    gradient: "from-blue-500 to-indigo-600",
    bgGlow: "rgba(59, 130, 246, 0.15)",
  },
  {
    icon: Scale,
    title: "Escritórios de Advocacia",
    subtitle: "Advogados e Jurídico",
    problems: [
      "Triagem manual de casos",
      "Tempo de resposta alto",
      "Dificuldade no follow-up",
    ],
    results: "50% mais eficiência",
    gradient: "from-amber-500 to-orange-600",
    bgGlow: "rgba(245, 158, 11, 0.15)",
  },
  {
    icon: Scissors,
    title: "Salões e Estéticas",
    subtitle: "Cabeleireiros, Estéticas, Spas",
    problems: [
      "Agendamento caótico",
      "Lembretes manuais",
      "Clientes esquecem horário",
    ],
    results: "Agenda 100% organizada",
    gradient: "from-purple-500 to-violet-600",
    bgGlow: "rgba(131, 80, 232, 0.15)",
  },
];

// ============================================
// 🎨 COMPONENTE PRINCIPAL
// ============================================

export function NicheCards() {
  return (
    <section className="relative py-24 md:py-32 bg-neutral-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-secondary mb-4">Segmentos</span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6"
          >
            Feito para o seu{" "}
            <span className="text-gradient-primary">segmento</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            A Secretária v3 é personalizada para resolver os problemas específicos 
            do seu tipo de negócio.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {nichos.map((nicho, index) => (
            <motion.div
              key={nicho.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`https://wa.me/5535998026821?text=Olá! Tenho uma ${nicho.title.toLowerCase()} e quero saber mais sobre a Secretária v3.`}
                target="_blank"
                className="block h-full"
              >
                <div
                  className={cn(
                    "group relative h-full p-6 md:p-8 rounded-2xl",
                    "bg-neutral-900/70 backdrop-blur-xl",
                    "border border-white/10",
                    "transition-all duration-500",
                    "hover:border-purple-500/40 hover:-translate-y-2"
                  )}
                >
                  {/* Glow Effect on Hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at top left, ${nicho.bgGlow} 0%, transparent 60%)`,
                    }}
                  />

                  {/* Header */}
                  <div className="relative flex items-start gap-4 mb-6">
                    <div
                      className={cn(
                        "w-14 h-14 rounded-xl flex items-center justify-center shrink-0",
                        "bg-gradient-to-br",
                        nicho.gradient
                      )}
                    >
                      <nicho.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {nicho.title}
                      </h3>
                      <p className="text-sm text-neutral-500">{nicho.subtitle}</p>
                    </div>
                  </div>

                  {/* Problems List */}
                  <div className="relative mb-6">
                    <h4 className="text-sm font-medium text-neutral-400 mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                      Problemas que resolvemos:
                    </h4>
                    <ul className="space-y-2">
                      {nicho.problems.map((problem, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-neutral-300 text-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2 shrink-0" />
                          {problem}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Result Badge */}
                  <div className="relative flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <span className="text-sm font-medium text-emerald-400">
                        {nicho.results}
                      </span>
                    </div>

                    {/* Arrow */}
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center",
                        "bg-white/5 border border-white/10",
                        "transition-all duration-300",
                        "group-hover:bg-purple-500 group-hover:border-purple-500"
                      )}
                    >
                      <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-neutral-500 mb-4">
            Não encontrou seu segmento?
          </p>
          <Link
            href="https://wa.me/5535998026821?text=Olá! Meu segmento não está listado, mas gostaria de saber se a Secretária v3 funciona para meu negócio."
            target="_blank"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors"
          >
            Fale conosco e veja se podemos ajudar
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default NicheCards;

