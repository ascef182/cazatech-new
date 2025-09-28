"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import ThreeDCarousel, { type CarouselItem } from "@/components/ThreeDCarousel";

export default function WorksPage() {
  const items: CarouselItem[] = useMemo(
    () => [
      {
        id: "clinica-estetica-sp",
        title: "Clínica Bella Vita",
        brand: "Saúde & Estética",
        description:
          "Agendamentos 4x maiores com qualificação e lembretes automáticos.",
        tags: ["automação", "agendamentos", "saúde"],
        imageUrl: "/images/cases/clinica-estetica.jpg",
        link: "/contact",
      },
      {
        id: "ecommerce-moda-feminina",
        title: "Encanto Fashion",
        brand: "E-commerce",
        description:
          "Carrinhos recuperados e vendas dobradas com consultor virtual.",
        tags: ["ecommerce", "vendas", "recuperação"],
        imageUrl: "/images/cases/ecommerce-moda.jpg",
        link: "/contact",
      },
      {
        id: "consultoria-financeira",
        title: "InvestSmart",
        brand: "Serviços Financeiros",
        description:
          "10x mais leads qualificados com pré-qualificação via WhatsApp.",
        tags: ["qualificação", "serviços", "B2B"],
        imageUrl: "/images/cases/consultoria-financeira.jpg",
        link: "/contact",
      },
    ],
    []
  );

  const breadcrumbItems = [
    { name: "Home", url: "https://cazatech.com" },
    { name: "Works", url: "https://cazatech.com/works" },
  ];

  return (
    <div className="bg-black">
      <BreadcrumbSchema items={breadcrumbItems} />
      <section className="py-16 md:py-24 bg-black">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Cases de Sucesso Reais
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Veja como transformamos negócios com automação inteligente.
              Resultados comprovados e mensuráveis.
            </p>
          </motion.div>

          <ThreeDCarousel items={items} />

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-200/20"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              Pronto para ser o próximo case de sucesso?
            </h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Agende uma conversa gratuita e descubra como podemos multiplicar
              seus resultados em até 30 dias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5535998026821?text=Olá! Vi os cases de sucesso e quero agendar uma conversa para meu negócio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Agendar Conversa Gratuita
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-purple-600 text-purple-600 font-semibold hover:bg-purple-50 transition-all"
              >
                Solicitar Proposta
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
