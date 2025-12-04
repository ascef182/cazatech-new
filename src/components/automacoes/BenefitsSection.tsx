"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  Clock,
  Calendar,
  AlertCircle,
  CreditCard,
  MessageSquare,
  Users,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MasterLeadForm } from "@/components/forms/MasterLeadForm";

// ============================================
// 📋 DADOS DOS BENEFÍCIOS
// ============================================

const benefits = [
  {
    icon: Clock,
    title: "Atendimento 24/7",
    description: "Inclusive finais de semana e feriados. Nunca perca uma oportunidade.",
    highlight: "Mais vendas",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: Calendar,
    title: "Agendamento Automático",
    description: "Integração direta com Google Calendar. Agenda preenchida automaticamente.",
    highlight: "Zero trabalho manual",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: AlertCircle,
    title: "Lembretes Anti No-Show",
    description: "Confirme presença e reduza faltas em até 40% com lembretes inteligentes.",
    highlight: "-40% faltas",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: CreditCard,
    title: "Cobrança Automatizada",
    description: "PIX e Boleto via Asaas. Baixa automática e sem trabalho manual.",
    highlight: "Receba mais rápido",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: MessageSquare,
    title: "Entende Áudios",
    description: "IA que transcreve e responde naturalmente a mensagens de voz.",
    highlight: "Atendimento humanizado",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Users,
    title: "Escalamento Humano",
    description: "Transfere para atendente quando necessário. O melhor dos dois mundos.",
    highlight: "Flexível",
    gradient: "from-indigo-500 to-purple-500",
  },
];

// ============================================
// 🎨 COMPONENTE PRINCIPAL
// ============================================

export function BenefitsSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-neutral-950 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Glow Effects */}
      <div
        className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(131, 80, 232, 0.15) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 60%)",
          filter: "blur(100px)",
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
            <Sparkles className="w-3 h-3 mr-1" />
            Secretária v3
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6"
            style={{ fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif" }}
          >
            Tudo que você precisa para{" "}
            <span className="text-gradient-primary">automatizar</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            A Secretária v3 não é apenas um chatbot. É uma solução completa de atendimento 
            que trabalha 24 horas por dia, 7 dias por semana.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={cn(
                  "group relative h-full p-6 rounded-2xl",
                  "bg-neutral-900/60 backdrop-blur-xl",
                  "border border-white/10",
                  "transition-all duration-500",
                  "hover:border-purple-500/30 hover:-translate-y-1"
                )}
              >
                {/* Gradient Overlay */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl opacity-0",
                    "transition-opacity duration-500",
                    "group-hover:opacity-100"
                  )}
                  style={{
                    background: `linear-gradient(180deg, rgba(131, 80, 232, 0.08) 0%, transparent 60%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className={cn(
                    "relative w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                    "bg-gradient-to-br",
                    benefit.gradient
                  )}
                >
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="relative text-neutral-400 text-sm mb-4">
                  {benefit.description}
                </p>

                {/* Highlight Badge */}
                <div className="relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-xs font-medium text-emerald-400">
                    {benefit.highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto"
        >
          <div
            className={cn(
              "p-8 md:p-12 rounded-3xl",
              "bg-gradient-to-br from-purple-900/50 via-blue-900/30 to-neutral-900",
              "border border-purple-500/20",
              "text-center"
            )}
          >
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                boxShadow: "0 0 80px rgba(131, 80, 232, 0.2)",
              }}
            />

            <h3
              className="relative text-2xl md:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif" }}
            >
              Pronto para transformar seu atendimento?
            </h3>
            <p className="relative text-neutral-300 mb-8 max-w-lg mx-auto">
              Receba um diagnóstico gratuito do seu atendimento e descubra quanto 
              você pode economizar com a Secretária v3.
            </p>

            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary CTA */}
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className={cn(
                      "h-14 px-8 text-base font-semibold rounded-full",
                      "bg-gradient-to-r from-purple-600 to-blue-600",
                      "hover:from-purple-700 hover:to-blue-700",
                      "shadow-lg shadow-purple-500/30",
                      "hover:shadow-xl hover:shadow-purple-500/40",
                      "transition-all duration-300"
                    )}
                  >
                    Quero um Diagnóstico Gratuito
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg bg-neutral-900 border-neutral-800 max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="sr-only">
                      Diagnóstico Gratuito
                    </DialogTitle>
                  </DialogHeader>
                  <MasterLeadForm
                    variant="full"
                    source="automacoes-benefits"
                    product="automacao"
                    title="Diagnóstico Gratuito"
                    description="Preencha os dados abaixo e receba uma análise personalizada do seu atendimento em até 24h."
                    buttonText="Solicitar Diagnóstico"
                    onSuccess={() => setIsDialogOpen(false)}
                  />
                </DialogContent>
              </Dialog>

              {/* Secondary CTA */}
              <Button
                asChild
                variant="outline"
                size="lg"
                className={cn(
                  "h-14 px-8 text-base font-medium rounded-full",
                  "bg-white/10 backdrop-blur-sm border-white/20",
                  "text-white hover:bg-white/20 hover:border-white/30",
                  "transition-all duration-300"
                )}
              >
                <Link href="#demo">
                  Ver Demonstração
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4 text-neutral-500 text-sm">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Sem compromisso
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Resposta em 24h
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                100% personalizado
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BenefitsSection;


