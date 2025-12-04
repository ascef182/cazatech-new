"use client";

import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  Bot,
  Zap,
  Smartphone,
  Rocket,
  BarChart3,
  Globe,
  Code2,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CazaTechProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);

  return (
    <section className="py-20 bg-black" id="solucoes">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm mb-6">
            <span className="text-[10px] font-light uppercase tracking-[0.08em] text-white/70">
              Soluções
            </span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span className="text-xs font-light tracking-tight text-white/80">
              Ecossistema CazaTech
            </span>
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Soluções em destaque
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto font-light">
            Tecnologia de ponta para escalar seu negócio, do atendimento ao
            marketing.
          </p>
        </div>

        <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
          {products.map((product, i) => (
            <BentoGridItem
              key={i}
              title={product.title}
              description={product.description}
              header={
                <div
                  onClick={() => setSelectedProduct(product)}
                  className="cursor-pointer h-full"
                >
                  {product.header}
                </div>
              }
              className={product.className}
              icon={product.icon}
            />
          ))}
        </BentoGrid>
      </div>

      {/* Modal com detalhes */}
      <Dialog
        open={!!selectedProduct}
        onOpenChange={() => setSelectedProduct(null)}
      >
        <DialogContent className="bg-neutral-900 border-neutral-800 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-white text-2xl flex items-center gap-3">
              {selectedProduct?.icon}
              {selectedProduct?.title}
            </DialogTitle>
            <DialogDescription className="text-white/60 text-base pt-2">
              {selectedProduct?.fullDescription}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <div>
              <h4 className="text-white font-semibold mb-2">
                O que está incluído:
              </h4>
              <ul className="space-y-2 text-white/70">
                {selectedProduct?.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {selectedProduct?.cta && (
              <div className="pt-4 flex gap-3">
                <Button
                  asChild
                  className="bg-white text-black hover:bg-white/90"
                >
                  <Link href={selectedProduct.cta.primary.href}>
                    {selectedProduct.cta.primary.text}
                  </Link>
                </Button>
                {selectedProduct.cta.secondary && (
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    <Link href={selectedProduct.cta.secondary.href}>
                      {selectedProduct.cta.secondary.text}
                    </Link>
                  </Button>
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

const Skeleton = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-white/10 bg-neutral-900/50 mask-image-gradient ${className}`}
  >
    {children}
  </div>
);

const products = [
  {
    title: "Websites de Alta Conversão",
    description:
      "Sites institucionais e landing pages que transformam visitantes em clientes.",
    fullDescription:
      "Desenvolvemos sites modernos, rápidos e otimizados para conversão. Focamos em UX, performance e SEO para garantir que seu site não apenas impressione, mas também converta.",
    header: (
      <Skeleton className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 flex items-center justify-center group overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <Globe className="w-8 h-8 text-cyan-400" />
        </motion.div>
      </Skeleton>
    ),
    className: "md:col-span-2 md:row-span-1",
    icon: <Globe className="h-6 w-6 text-cyan-400" />,
    features: [
      "Design moderno e responsivo",
      "Otimização para conversão (CRO)",
      "Integração com ferramentas de marketing",
      "Hospedagem e domínio inclusos",
      "Suporte técnico contínuo",
    ],
    cta: {
      primary: { text: "Ver Portfolio", href: "/works" },
      secondary: { text: "Solicitar Orçamento", href: "/contact" },
    },
  },
  {
    title: "Apps Personalizados",
    description:
      "Aplicativos móveis e web que resolvem problemas reais do seu negócio.",
    fullDescription:
      "Criamos aplicativos sob medida para iOS, Android e Web. Do MVP ao produto escalável, com foco em experiência do usuário e performance.",
    header: (
      <Skeleton className="bg-gradient-to-br from-purple-900/40 to-fuchsia-900/40 flex items-center justify-center overflow-hidden">
        <Smartphone className="w-16 h-16 text-fuchsia-400/50 group-hover:rotate-6 transition-transform duration-500" />
      </Skeleton>
    ),
    className: "md:col-span-1 md:row-span-1",
    icon: <Smartphone className="h-6 w-6 text-fuchsia-400" />,
    features: [
      "Apps nativos (iOS/Android) e PWA",
      "Integração com APIs e serviços externos",
      "Interface intuitiva e moderna",
      "Notificações push e funcionalidades offline",
      "Publicação nas lojas de apps",
    ],
    cta: {
      primary: { text: "Falar com Consultor", href: "/contact" },
    },
  },
  {
    title: "Automação de Atendimento",
    description:
      "Chatbots inteligentes no WhatsApp com IA para atendimento 24/7.",
    fullDescription:
      "A Secretária v3 é nossa solução de automação de atendimento via WhatsApp. Atende, agenda, cobra e recupera leads automaticamente.",
    header: (
      <Skeleton className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 flex items-center justify-center group overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <Bot className="w-8 h-8 text-emerald-400" />
        </motion.div>
      </Skeleton>
    ),
    className: "md:col-span-3 md:row-span-1",
    icon: <Bot className="h-6 w-6 text-emerald-400" />,
    features: [
      "Atendimento humanizado 24/7",
      "Agendamento automático no Google Calendar",
      "Lembretes e confirmações por WhatsApp",
      "Cobrança integrada com Asaas",
      "Recuperação de leads perdidos",
    ],
    cta: {
      primary: { text: "Conhecer Secretária v3", href: "/automacoes" },
      secondary: { text: "Ver Demo", href: "/automacoes#demo" },
    },
  },
  {
    title: "SaaS sob Medida",
    description:
      "Plataformas completas e escaláveis para seu modelo de negócio.",
    fullDescription:
      "Desenvolvemos software como serviço (SaaS) do zero. Da arquitetura à escala, com segurança, IA e infraestrutura cloud.",
    header: (
      <Skeleton className="bg-gradient-to-br from-violet-900/40 to-purple-900/40 flex items-center justify-center">
        <Code2 className="w-16 h-16 text-violet-400/50" />
      </Skeleton>
    ),
    className: "md:col-span-1 md:row-span-1",
    icon: <Code2 className="h-6 w-6 text-violet-400" />,
    features: [
      "MVP ágil em 4-8 semanas",
      "Arquitetura escalável e segura",
      "Dashboards e relatórios customizados",
      "API para integrações",
      "Infraestrutura cloud (AWS/Vercel)",
    ],
    cta: {
      primary: { text: "Saber Mais", href: "/saas" },
      secondary: { text: "Agendar Consultoria", href: "/contact" },
    },
  },
  {
    title: "SEO e Performance",
    description: "Otimização técnica para ranquear no Google e converter mais.",
    fullDescription:
      "Auditoria SEO completa, otimização técnica, conteúdo estratégico e acompanhamento de métricas para aumentar sua visibilidade online.",
    header: (
      <Skeleton className="bg-gradient-to-br from-orange-900/40 to-red-900/40 flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Search className="w-16 h-16 text-orange-400/50" />
        </motion.div>
      </Skeleton>
    ),
    className: "md:col-span-2 md:row-span-1",
    icon: <Search className="h-6 w-6 text-orange-400" />,
    features: [
      "Auditoria técnica completa",
      "Otimização de Core Web Vitals",
      "Estratégia de palavras-chave",
      "Link building e autoridade",
      "Relatórios mensais de progresso",
    ],
    cta: {
      primary: { text: "Análise Gratuita", href: "/contact" },
    },
  },
];
