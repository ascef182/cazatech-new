"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  MessageSquare,
  Bot,
  FileText,
  Calendar,
  CheckCircle,
  RefreshCw,
  Database,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ============================================
// 📋 PASSOS DO FLUXO
// ============================================

const steps = [
  {
    step: 1,
    title: "Cliente envia mensagem",
    description: "Texto ou áudio, qualquer formato é aceito",
    icon: MessageSquare,
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    step: 2,
    title: "IA responde automaticamente",
    description: "Resposta humanizada em segundos",
    icon: Bot,
    color: "text-purple-400",
    bgColor: "bg-purple-500/20",
    borderColor: "border-purple-500/30",
  },
  {
    step: 3,
    title: "Coleta dados do cliente",
    description: "Nome, telefone, interesse qualificado",
    icon: FileText,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/20",
    borderColor: "border-cyan-500/30",
  },
  {
    step: 4,
    title: "Agenda no Google Calendar",
    description: "Sincronização em tempo real",
    icon: Calendar,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/20",
    borderColor: "border-emerald-500/30",
  },
  {
    step: 5,
    title: "Confirma e envia lembretes",
    description: "Redução de no-show em até 40%",
    icon: CheckCircle,
    color: "text-amber-400",
    bgColor: "bg-amber-500/20",
    borderColor: "border-amber-500/30",
  },
  {
    step: 6,
    title: "Faz follow-up automatizado",
    description: "Recuperação de leads inativos",
    icon: RefreshCw,
    color: "text-pink-400",
    bgColor: "bg-pink-500/20",
    borderColor: "border-pink-500/30",
  },
  {
    step: 7,
    title: "Registra tudo no CRM",
    description: "Histórico completo de interações",
    icon: Database,
    color: "text-violet-400",
    bgColor: "bg-violet-500/20",
    borderColor: "border-violet-500/30",
  },
];

// ============================================
// 🎨 COMPONENTE PRINCIPAL
// ============================================

export function HowItWorksTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(131, 80, 232, 0.1) 0%, transparent 50%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="badge-primary mb-4">Passo a Passo</span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6"
            style={{ fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif" }}
          >
            Como funciona na{" "}
            <span className="text-gradient-primary">prática</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Do primeiro contato até o registro no CRM, tudo acontece automaticamente 
            em segundos.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line Background */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-800 md:-translate-x-1/2" />
          
          {/* Animated Line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-emerald-500 md:-translate-x-1/2"
            style={{ height: lineHeight }}
          />

          {/* Steps */}
          <div className="space-y-8 md:space-y-12">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "relative flex items-start gap-6",
                  "md:grid md:grid-cols-2 md:gap-8"
                )}
              >
                {/* Content - alternates sides on desktop */}
                <div
                  className={cn(
                    "ml-16 md:ml-0 md:text-right",
                    index % 2 !== 0 && "md:order-2 md:text-left"
                  )}
                >
                  <div
                    className={cn(
                      "p-5 rounded-xl",
                      "bg-neutral-900/60 backdrop-blur-sm",
                      "border",
                      item.borderColor,
                      "transition-all duration-300",
                      "hover:border-purple-500/40"
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center gap-3 mb-2",
                        index % 2 !== 0 && "md:flex-row",
                        index % 2 === 0 && "md:flex-row-reverse"
                      )}
                    >
                      <span className={cn("text-sm font-bold", item.color)}>
                        Passo {item.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-400">{item.description}</p>
                  </div>
                </div>

                {/* Icon - center on desktop */}
                <div
                  className={cn(
                    "absolute left-4 md:left-1/2 -translate-x-1/2",
                    "z-10"
                  )}
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center",
                      item.bgColor,
                      "border-2",
                      item.borderColor,
                      "bg-neutral-950"
                    )}
                  >
                    <item.icon className={cn("w-5 h-5", item.color)} />
                  </div>
                </div>

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>

          {/* End indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center mt-12"
          >
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 -top-4 w-px h-8 bg-gradient-to-b from-emerald-500 to-transparent" />
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          {/* End text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-6 text-emerald-400 font-medium"
          >
            Processo completo em segundos!
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksTimeline;


