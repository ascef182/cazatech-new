"use client";

import HeroSaas from "@/components/saas/HeroSaas";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { saasContent } from "@/content/saas";
import { FAQSchema } from "@/components/seo/JsonLd";
import Image from "next/image";
import { Contact2 } from "@/components/ui/contact-2";
import { motion } from "motion/react";
import { Calendar, Scissors, TrendingUp, Sparkles } from "lucide-react";

export default function SaasPage() {
  const saasExamples = [
    {
      title: "Sistema de Agendamento Médico",
      description: "Plataforma completa para clínicas com agenda inteligente, lembretes automáticos e gestão de pacientes.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
      icon: Calendar,
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "App de Barbearia",
      description: "Agendamento online, controle de fila, pagamentos integrados e programa de fidelidade.",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop",
      icon: Scissors,
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Gestão Financeira com IA",
      description: "Dashboard inteligente com análise preditiva, categorização automática e insights em tempo real.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      icon: TrendingUp,
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <HeroSaas />

      {/* Exemplos de SaaS Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm mb-6">
              <Sparkles className="w-3 h-3 text-purple-400" />
              <span className="text-xs font-light tracking-tight text-white/80">Exemplos Reais</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
              O que podemos construir?
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Desenvolvemos SaaS personalizados para diversos segmentos, do MVP ao produto escalável.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {saasExamples.map((example, i) => {
              const Icon = example.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={example.image}
                      alt={example.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${example.gradient} mix-blend-overlay`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 p-3 rounded-xl bg-black/50 backdrop-blur-md border border-white/10">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {example.title}
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {example.description}
                    </p>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sticky Scroll Section */}
      <section className="w-full bg-black py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white tracking-tight">
          Tecnologia de Ponta
        </h2>
        <StickyScroll
          content={saasContent.sticky.map((s) => ({
            title: s.title,
            description: s.description,
            content: (
              <div className="h-full w-full flex items-center justify-center bg-black">
                <Image
                  src={s.image}
                  alt={s.title}
                  width={320}
                  height={220}
                  className="rounded-lg object-cover"
                />
              </div>
            ),
          }))}
        />
      </section>

      {/* Contact Form Section */}
      <Contact2
        title="Tem uma ideia de SaaS?"
        description="Transformamos sua visão em um produto digital escalável e lucrativo. Agende uma conversa para discutir seu projeto."
        phone="+55 35 99802-6821"
        email="support@caza-tech.com"
        web={{ label: "caza-tech.com", url: "https://caza-tech.com" }}
      />
    </div>
  );
}
