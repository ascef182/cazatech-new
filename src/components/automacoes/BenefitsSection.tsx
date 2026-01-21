"use client";

import { motion } from "framer-motion";
import { Clock, TrendingUp, Users, Zap, Shield, BarChart } from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Clock,
    title: "Disponibilidade 24/7",
    description:
      "Atendimento automático que nunca dorme. Seus clientes recebem resposta instantânea a qualquer hora do dia.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Aumento de 300% em conversões",
    description:
      "Fluxos otimizados para converter visitantes em clientes pagantes com qualificação inteligente.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Escale sem contratar",
    description:
      "Atenda 10x mais clientes simultaneamente sem aumentar sua equipe ou custos operacionais.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Zap,
    title: "Respostas em segundos",
    description:
      "Tempo médio de resposta abaixo de 3 segundos. Elimine filas de espera e abandono de leads.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Integração segura",
    description:
      "Conexão criptografada com WhatsApp Business API oficial. Seus dados e de seus clientes protegidos.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: BarChart,
    title: "Análise em tempo real",
    description:
      "Dashboard completo com métricas de atendimento, conversão e satisfação do cliente.",
    gradient: "from-pink-500 to-rose-500",
  },
];

export function BenefitsSection() {
  // Triplicar para garantir loop infinito suave
  const infiniteBenefits = [...benefits, ...benefits, ...benefits];

  return (
    <section className="py-20 md:py-32 bg-neutral-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Glow Effect */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(131, 80, 232, 0.15) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm mb-6">
            <span className="text-[10px] font-light uppercase tracking-[0.08em] text-white/70">
              Benefícios
            </span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span className="text-xs font-light tracking-tight text-white/80">
              Resultados Comprovados
            </span>
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Por que automatizar seu WhatsApp?
          </h2>

          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
            Mais de 50 empresas já aumentaram suas vendas e reduziram custos
            operacionais com nossa solução.
          </p>
        </motion.div>

        {/* Benefits Carousel - Infinite Scroll */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 animate-infinite-scroll"
              style={{
                width: "fit-content",
              }}
            >
              {infiniteBenefits.map((benefit, index) => (
                <div
                  key={`${benefit.title}-${index}`}
                  className={cn(
                    "group relative flex-shrink-0 w-[350px] p-8 rounded-2xl",
                    "bg-neutral-900/80 backdrop-blur-xl",
                    "border border-white/10",
                    "transition-all duration-500",
                    "hover:border-purple-500/30 hover:-translate-y-2"
                  )}
                >
                  {/* Gradient Overlay on Hover */}
                  <div
                    className={cn(
                      "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500",
                      "group-hover:opacity-100"
                    )}
                    style={{
                      background: `linear-gradient(180deg, rgba(131, 80, 232, 0.1) 0%, transparent 50%)`,
                    }}
                  />

                  {/* Icon */}
                  <div
                    className={cn(
                      "relative w-14 h-14 rounded-xl flex items-center justify-center mb-6",
                      "bg-gradient-to-br",
                      benefit.gradient,
                      "shadow-lg group-hover:scale-110 transition-transform duration-300"
                    )}
                  >
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="relative text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="relative text-neutral-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlays para efeito de fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none z-10" />
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-356px * 6));
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }

        .animate-infinite-scroll:hover {
          animation-play-state: running;
        }
      `}</style>
    </section>
  );
}

export default BenefitsSection;
