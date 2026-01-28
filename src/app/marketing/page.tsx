"use client";

import HeroMarketing from "@/components/marketing/HeroMarketing";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { marketingContent } from "@/content/marketing";
import { FAQSchema } from "@/components/seo/JsonLd";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Target, Search, PenTool, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MarketingPage() {
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

      {/* Sticky Scroll Section */}
      <section className="w-full bg-black py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white" style={{ fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif" }}>
          Funil de Alta Conversão
        </h2>
        <StickyScroll
          content={marketingContent.sticky.map((s) => ({
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

      {/* FAQ e CTA final */}
      <section id="faq" className="relative bg-background py-20">
        <FAQSchema faqs={marketingContent.faq} />
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold">Perguntas frequentes</h3>
              <ul className="mt-4 space-y-4 text-muted-foreground">
                {marketingContent.faq.map((f) => (
                  <li key={f.q}>
                    <strong className="text-foreground">{f.q}</strong>
                    <br />
                    {f.a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border p-6 bg-black text-white">
              <h3 className="text-2xl font-bold">
                Quer escalar suas vendas?
              </h3>
              <p className="mt-2 text-white/80">
                Agende um diagnóstico gratuito da sua presença digital.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link
                    href="https://wa.me/5511936205799?text=Quero%20um%20diagn%C3%B3stico%20de%20marketing"
                    target="_blank"
                  >
                    Falar no WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
