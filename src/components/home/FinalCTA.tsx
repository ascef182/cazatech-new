"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
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
// 🎨 COMPONENTE PRINCIPAL
// ============================================

export function FinalCTA() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/30 to-neutral-950" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Glow Effects */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(131, 80, 232, 0.3) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-8"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">
              Pronto para começar?
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif" }}
          >
            Vamos construir algo{" "}
            <span className="text-gradient-primary">grande</span> juntos?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10"
          >
            Mais de 50 projetos entregues para médicos, dentistas, imobiliárias,
            advogados e empresas que precisavam escalar com tecnologia.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary CTA - Abre Dialog */}
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
                  Começar Agora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-neutral-900 border-neutral-800">
                <DialogHeader>
                  <DialogTitle className="sr-only">
                    Formulário de Contato
                  </DialogTitle>
                </DialogHeader>
                <MasterLeadForm
                  variant="minimal"
                  source="home-final-cta"
                  title="Vamos conversar?"
                  description="Preencha o formulário e entraremos em contato em até 24 horas."
                  buttonText="Enviar Mensagem"
                  onSuccess={() => setIsDialogOpen(false)}
                />
              </DialogContent>
            </Dialog>

            {/* Secondary CTA - WhatsApp Direto */}
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
              <Link
                href="https://wa.me/5535998026821?text=Olá! Vi o site e quero conversar sobre um projeto."
                target="_blank"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </Link>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-neutral-500"
          >
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-emerald-500"
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
              <span className="text-sm">Sem fidelidade</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-emerald-500"
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
              <span className="text-sm">Resposta em 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-emerald-500"
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
              <span className="text-sm">Garantia de entrega</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />
    </section>
  );
}

export default FinalCTA;


