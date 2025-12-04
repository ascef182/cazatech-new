"use client";

import { motion } from "motion/react";
import { Package, Bot, Eye, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// ============================================
// 📋 DADOS DOS DIFERENCIAIS
// ============================================

const diferenciais = [
  {
    icon: Package,
    title: "Entregamos produtos reais",
    description:
      "Não apenas layouts. Sistemas funcionais que geram receita desde o primeiro dia.",
    gradient: "from-purple-500 to-pink-500",
    delay: 0,
  },
  {
    icon: Bot,
    title: "Especialistas em automação e IA",
    description:
      "Fluxos complexos em n8n, integrações avançadas e agentes inteligentes que trabalham 24/7.",
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.1,
  },
  {
    icon: Eye,
    title: "Desenvolvimento transparente",
    description:
      "Acompanhe cada etapa do seu projeto em tempo real. Sem surpresas, sem atrasos.",
    gradient: "from-emerald-500 to-teal-500",
    delay: 0.2,
  },
];

// ============================================
// 🎨 COMPONENTE PRINCIPAL
// ============================================

export function WhyDifferent() {
  return (
    <section className="relative py-24 md:py-32 bg-neutral-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Glow Effect */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(131, 80, 232, 0.15) 0%, transparent 70%)",
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
          <span className="badge-primary mb-4">
            Por que escolher a CazaTech?
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6"
            style={{ fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif" }}
          >
            Por que a CazaTech é diferente?
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Não somos apenas mais uma agência. Somos parceiros de tecnologia que entregam 
            resultados mensuráveis.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {diferenciais.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
            >
              <div
                className={cn(
                  "group relative h-full p-8 rounded-2xl",
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
                    item.gradient,
                    "shadow-lg"
                  )}
                  style={{
                    boxShadow: `0 10px 30px -10px rgba(131, 80, 232, 0.5)`,
                  }}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="relative text-neutral-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Arrow on Hover */}
                <div
                  className={cn(
                    "relative mt-6 flex items-center gap-2",
                    "text-purple-400 font-medium text-sm",
                    "opacity-0 translate-x-[-10px] transition-all duration-300",
                    "group-hover:opacity-100 group-hover:translate-x-0"
                  )}
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "50+", label: "Projetos Entregues" },
            { number: "98%", label: "Clientes Satisfeitos" },
            { number: "24/7", label: "Suporte Disponível" },
            { number: "3x", label: "Mais Rápido que a Média" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default WhyDifferent;




