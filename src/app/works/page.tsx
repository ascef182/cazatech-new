"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import HeroParallaxDemo from "@/components/hero-parallax-demo";
import { WorksFeaturesDemo } from "@/components/works/features-demo";
import { CaseStudy } from "@/components/works/CaseStudy";
import { CaseFilter } from "@/components/works/CaseFilter";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { cases } from "@/content/cases";

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Get unique categories
  const categories = Array.from(new Set(cases.map(c => c.category)));
  
  // Filter cases based on active category
  const filteredCases = activeCategory === 'all' 
    ? cases 
    : cases.filter(c => c.category === activeCategory);

  const breadcrumbItems = [
    { name: "Home", url: "https://cazatech.com.br" },
    { name: "Works", url: "https://cazatech.com.br/works" }
  ];

  return (
    <div className="bg-black">
      <BreadcrumbSchema items={breadcrumbItems} />
      <HeroParallaxDemo />
      <WorksFeaturesDemo />
      
      {/* Cases Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Cases de Sucesso Reais
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Veja como transformamos negócios com automação inteligente. 
              Resultados comprovados e mensuráveis.
            </p>
          </motion.div>

          <CaseFilter 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div className="space-y-0">
            {filteredCases.map((caseData, index) => (
              <CaseStudy 
                key={caseData.id} 
                caseData={caseData} 
                index={index}
              />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-200/20"
          >
            <h3 className="text-2xl font-bold mb-4">
              Pronto para ser o próximo case de sucesso?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Agende uma conversa gratuita e descubra como podemos multiplicar 
              seus resultados em até 30 dias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5535998026821?text=Olá! Vi os cases de sucesso e quero agendar uma conversa para meu negócio"
                target="_blank"
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
