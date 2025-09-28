"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Zap, Shield, Clock } from "lucide-react";
import Link from "next/link";

interface PricingTier {
  name: string;
  setupPrice: string;
  monthlyPrice: string;
  description: string;
  features: string[];
  highlight?: boolean;
  color: string;
  whatsappText: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    setupPrice: "R$ 1.990",
    monthlyPrice: "R$ 299",
    description: "Ideal para profissionais autônomos e pequenos negócios",
    features: [
      "Atendimento automatizado 24/7",
      "Respostas inteligentes personalizadas",
      "Até 1 número WhatsApp",
      "Integração básica com planilhas",
      "Suporte por 15 dias",
      "Treinamento da equipe incluído",
    ],
    color: "border-pink-500/30 bg-pink-500/5",
    whatsappText: "Olá! Quero contratar o plano Starter de automação WhatsApp",
  },
  {
    name: "Growth",
    setupPrice: "R$ 2.990",
    monthlyPrice: "R$ 499",
    description: "Perfeito para empresas em crescimento",
    features: [
      "Tudo do Starter +",
      "Qualificação automática de leads",
      "Até 5 números WhatsApp",
      "Integrações avançadas (CRM, pagamentos)",
      "Agendamentos automáticos",
      "Relatórios de performance",
      "Suporte por 30 dias",
      "Otimizações mensais",
    ],
    highlight: true,
    color: "border-purple-500/30 bg-purple-500/5",
    whatsappText: "Olá! Quero contratar o plano Growth de automação WhatsApp",
  },
  {
    name: "Enterprise",
    setupPrice: "Sob consulta",
    monthlyPrice: "Personalizado",
    description: "Solução completa para grandes empresas",
    features: [
      "Tudo do Growth +",
      "Números WhatsApp ilimitados",
      "Integrações customizadas",
      "API dedicada",
      "SLA garantido",
      "Suporte prioritário 24/7",
      "Gerente de conta dedicado",
      "Treinamentos avançados",
    ],
    color: "border-blue-500/30 bg-blue-500/5",
    whatsappText:
      "Olá! Quero uma proposta personalizada para o plano Enterprise",
  },
];

export const PricingTable = () => {
  return (
    <section id="planos" className="relative bg-background py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
            style={{ fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif" }}
          >
            Planos que Cabem no Seu Bolso
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Implementação rápida, sem fidelidade e com garantia de resultados.
          </p>
        </motion.div>

        {/* Garantia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <Shield className="w-5 h-5 text-emerald-500" />
            <span className="text-emerald-600 font-semibold">
              Garantia: Implementação em 7 dias ou 50% de desconto
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                </div>
              )}

              <Card
                className={`relative h-full ${tier.color} border-2 ${
                  tier.highlight ? "scale-105" : ""
                } transition-all duration-300 hover:shadow-lg`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-purple-600" />
                    <CardTitle className="text-xl font-bold">
                      {tier.name}
                    </CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {tier.description}
                  </p>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-foreground">
                      {tier.setupPrice}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      setup único
                    </div>
                    <div className="text-xl font-semibold text-purple-600">
                      + {tier.monthlyPrice}
                    </div>
                    <div className="text-sm text-muted-foreground">por mês</div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3 pt-4">
                    <Button
                      asChild
                      className={`w-full ${
                        tier.highlight
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                          : "bg-black hover:bg-black/90"
                      } text-white`}
                    >
                      <Link
                        href={`https://wa.me/5535998026821?text=${encodeURIComponent(
                          tier.whatsappText
                        )}`}
                        target="_blank"
                      >
                        Contratar {tier.name}
                      </Link>
                    </Button>

                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Falar com Consultor</Link>
                    </Button>
                  </div>

                  {tier.name === "Growth" && (
                    <div className="flex items-center gap-2 pt-2 text-xs text-emerald-600">
                      <Clock className="w-4 h-4" />
                      <span>Implementação garantida em 7 dias</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Templates Offer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="border-emerald-500/30 bg-emerald-500/5 overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-xs font-bold transform rotate-12 translate-x-2 -translate-y-1">
              OFERTA LIMITADA
            </div>
            <CardHeader>
              <CardTitle className="text-emerald-600 text-xl">
                🚀 Pacote Completo: 2000 Templates de Atendimento
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <p className="text-muted-foreground mb-4">
                  Fluxos prontos para implantar no seu negócio: prompts,
                  roteiros e automações organizados por segmento (clínicas,
                  e-commerce, serviços, etc.)
                </p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>✅ 2000+ templates testados e aprovados</li>
                  <li>✅ Organizados por nicho de mercado</li>
                  <li>✅ Pronto para usar em qualquer plataforma</li>
                  <li>✅ Atualizações gratuitas por 6 meses</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-sm line-through text-muted-foreground mb-1">
                  De R$ 999,90
                </div>
                <div className="text-3xl font-bold text-emerald-600 mb-4">
                  R$ 97,00
                </div>
                <Button
                  asChild
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8"
                >
                  <Link
                    href="https://wa.me/5535998026821?text=Quero%20comprar%20o%20pacote%20de%202000%20templates%20por%20R%24%2097"
                    target="_blank"
                  >
                    Comprar Agora
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
