"use client";

import HeroMarketing from "@/components/marketing/HeroMarketing";
import FunnelChart from "@/components/marketing/FunnelChart";
import { marketingContent } from "@/content/marketing";
import { FAQSchema } from "@/components/seo/JsonLd";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Target, Search, PenTool, Palette } from "lucide-react";
import { MasterLeadForm } from "@/components/forms/MasterLeadForm";
import { useState } from "react";

export default function MarketingPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const iconMap: Record<string, React.ReactNode> = {
    target: <Target className="h-4 w-4 text-neutral-500" />,
    search: <Search className="h-4 w-4 text-neutral-500" />,
    pen: <PenTool className="h-4 w-4 text-neutral-500" />,
    palette: <Palette className="h-4 w-4 text-neutral-500" />,
  };

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <HeroMarketing />

      {/* Bento Grid Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white" style={{ fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif" }}>
            Estratégia 360º
          </h2>
          <BentoGrid className="max-w-4xl mx-auto">
            {marketingContent.bentoGrid.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-900 to-purple-900" />}
                icon={iconMap[item.icon]}
                className={i === 0 || i === 3 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Funnel Chart Section */}
      <section className="w-full bg-black py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white" style={{ fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif" }}>
            Funil de Alta Conversão
          </h2>
          <p className="text-center text-neutral-400 max-w-2xl mx-auto mb-12">
            Visualize como otimizamos cada etapa da jornada do cliente para maximizar suas conversões e ROI.
          </p>
          <FunnelChart />
        </div>
      </section>

      {/* FAQ e CTA final */}
      <section id="faq" className="relative bg-black py-20">
        <FAQSchema faqs={marketingContent.faq} />
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-neutral-900/50 rounded-2xl border border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif" }}>
                Perguntas frequentes
              </h3>
              <ul className="space-y-6">
                {marketingContent.faq.map((f) => (
                  <li key={f.q} className="border-b border-white/10 pb-4 last:border-0">
                    <strong className="text-white block mb-2 font-medium">{f.q}</strong>
                    <p className="text-neutral-400 text-sm leading-relaxed">{f.a}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-purple-500/20 p-8 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-neutral-900">
              <MasterLeadForm
                variant="full"
                source="marketing-page"
                product="marketing"
                title="Quer escalar suas vendas?"
                description="Preencha o diagnóstico e receba uma análise gratuita do seu potencial de crescimento."
                buttonText="Solicitar Diagnóstico"
                onSuccess={() => setIsFormOpen(false)}
                dark={true}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
