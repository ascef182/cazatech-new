"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  Bot,
  Zap,
  BrainCircuit,
  Smartphone,
  Rocket,
  BarChart3,
  Globe,
  ShieldCheck,
  MessageSquareText,
  Users,
  Layers,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function CazaTechProductsSection() {
  return (
    <section className="py-20 bg-black" id="solucoes">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm mb-6">
            <span className="text-[10px] font-light uppercase tracking-[0.08em] text-white/70">Soluções</span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span className="text-xs font-light tracking-tight text-white/80">Ecossistema CazaTech</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Soluções em destaque
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto font-light">
            Tecnologia de ponta para escalar seu negócio, do atendimento ao marketing.
          </p>
        </div>
        
        <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const Skeleton = ({ children, className }: { children?: React.ReactNode; className?: string }) => (
  <div
    className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-white/10 bg-neutral-900/50 mask-image-gradient ${className}`}
  >
    {children}
  </div>
);

const items = [
  {
    title: "Conversa Humanizada",
    description: "Seu atendimento fala como humano: recebe e envia áudios, entende contexto e mantém o tom da sua marca.",
    header: (
      <Skeleton className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 flex items-center justify-center group overflow-hidden">
        <motion.div 
          whileHover={{ scale: 1.1 }} 
          className="p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <MessageSquareText className="w-8 h-8 text-purple-400" />
        </motion.div>
      </Skeleton>
    ),
    className: "md:col-span-2",
    icon: <Bot className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Resposta Rápida 24/7",
    description: "Seu cliente sempre atendido: fila inteligente, auto‑reply e disponibilidade total.",
    header: (
      <Skeleton className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 flex items-center justify-center group overflow-hidden">
        <motion.div 
          animate={{ rotate: [0, 10, -10, 0] }} 
          transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
          className="p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <Zap className="w-8 h-8 text-yellow-400" />
        </motion.div>
      </Skeleton>
    ),
    className: "md:col-span-1",
    icon: <Zap className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Análise de Sentimento",
    description: "Detecta humor e intenção para priorizar leads e adaptar mensagens.",
    header: (
      <Skeleton className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 flex items-center justify-center overflow-hidden">
        <BrainCircuit className="w-24 h-24 text-emerald-500/20 absolute -right-4 -bottom-4" />
        <div className="relative z-10 flex gap-2">
          <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs border border-emerald-500/30">Positivo</span>
          <span className="px-2 py-1 rounded bg-red-500/20 text-red-400 text-xs border border-red-500/30">Negativo</span>
        </div>
      </Skeleton>
    ),
    className: "md:col-span-1",
    icon: <BrainCircuit className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "UI Amigável e Moderna",
    description: "Dashboards intuitivos e interfaces que encantam seus usuários.",
    header: (
      <Skeleton className="bg-neutral-900 flex items-end justify-center overflow-hidden pt-8">
        <div className="w-[90%] h-full bg-neutral-800 rounded-t-xl border-t border-l border-r border-white/10 p-4 shadow-2xl relative top-2 hover:-top-0 transition-all duration-300">
          <div className="flex gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
          <div className="space-y-2">
            <div className="h-2 w-3/4 bg-neutral-700 rounded" />
            <div className="h-2 w-1/2 bg-neutral-700 rounded" />
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="h-16 bg-neutral-700/50 rounded" />
              <div className="h-16 bg-neutral-700/50 rounded" />
            </div>
          </div>
        </div>
      </Skeleton>
    ),
    className: "md:col-span-2",
    icon: <Smartphone className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Performance com SEO",
    description: "Páginas rápidas, bonitas e focadas em conversão, com SEO técnico avançado.",
    header: (
      <Skeleton className="bg-gradient-to-br from-orange-900/40 to-red-900/40 flex items-center justify-center overflow-hidden">
        <Rocket className="w-16 h-16 text-orange-500/50 group-hover:-translate-y-2 transition-transform duration-500" />
      </Skeleton>
    ),
    className: "md:col-span-2",
    icon: <Rocket className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Escalável e Estável",
    description: "Criamos com as melhores práticas para garantir estabilidade e qualidade.",
    header: (
      <Skeleton className="bg-neutral-900 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]" />
        <ShieldCheck className="w-12 h-12 text-blue-400 relative z-10" />
      </Skeleton>
    ),
    className: "md:col-span-1",
    icon: <Layers className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Automação que Converte",
    description: "Fluxos inteligentes para captação, qualificação e fechamento no WhatsApp.",
    header: (
      <Skeleton className="bg-gradient-to-br from-violet-900/40 to-fuchsia-900/40 flex items-center justify-center">
        <BarChart3 className="w-16 h-16 text-fuchsia-400/50" />
      </Skeleton>
    ),
    className: "md:col-span-3",
    icon: <Users className="h-4 w-4 text-neutral-500" />,
  },
];


