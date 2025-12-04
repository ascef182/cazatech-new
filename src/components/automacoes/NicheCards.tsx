"use client";

import { motion } from "motion/react";
import {
  Stethoscope,
  Building2,
  Scale,
  Scissors,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
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
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&auto=format&fit=crop",
    benefits: [
      "Agenda sincronizada automaticamente",
      "Lembretes que reduzem no-show em 40%",
      "Cobrança via Pix sem trabalho manual",
      "Triagem de sintomas via IA",
    ],
    results: "Redução de 40% nas faltas",
    gradient: "from-rose-500 to-pink-600",
    bgGlow: "rgba(244, 63, 94, 0.15)",
  },
  {
    icon: Building2,
    title: "Imobiliárias",
    subtitle: "Corretores e Incorporadoras",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
    benefits: [
      "Qualificação automática de leads",
      "Atendimento 24h para consultas",
      "Agendamento de visitas automatizado",
      "Integração com CRM imobiliário",
    ],
    results: "3x mais leads qualificados",
    gradient: "from-blue-500 to-indigo-600",
    bgGlow: "rgba(59, 130, 246, 0.15)",
  },
  {
    icon: Scale,
    title: "Escritórios de Advocacia",
    subtitle: "Advogados e Jurídico",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop",
    benefits: [
      "Triagem automática de casos",
      "Coleta de documentos via WhatsApp",
      "Follow-up inteligente de processos",
      "Atendimento inicial sem espera",
    ],
    results: "50% mais eficiência",
    gradient: "from-amber-500 to-orange-600",
    bgGlow: "rgba(245, 158, 11, 0.15)",
  },
  {
    icon: Scissors,
    title: "Salões e Estéticas",
    subtitle: "Cabeleireiros, Estéticas, Spas",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop",
    benefits: [
      "Agenda visual sincronizada",
      "Confirmação automática de horários",
      "Lembretes personalizados",
      "Gestão de pacotes e promoções",
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

                  {/* Image */}
                  <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                    <Image
                      src={nicho.image}
                      alt={nicho.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${nicho.gradient} mix-blend-overlay opacity-30`} />
                    <div className="absolute top-4 right-4 p-3 rounded-xl bg-black/50 backdrop-blur-md border border-white/10">
                      <nicho.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Header */}
                  <div className="relative mb-6">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {nicho.title}
                    </h3>
                    <p className="text-sm text-neutral-500">{nicho.subtitle}</p>
                  </div>

                  {/* Benefits List */}
                  <div className="relative mb-6">
                    <h4 className="text-sm font-medium text-emerald-400 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      O que a Secretária v3 faz:
                    </h4>
                    <ul className="space-y-2">
                      {nicho.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-neutral-300 text-sm"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          {benefit}
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

