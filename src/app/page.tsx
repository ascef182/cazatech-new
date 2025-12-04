// app/page.tsx
import { lazy, Suspense } from "react";

// Novos componentes premium (client-side only)
import {
  NeuralNetworkHero,
  StaggerTestimonials,
  RadialOrbitalTimeline,
} from "@/components/home/dynamic-sections";

// Componentes existentes
import { FinalCTA } from "@/components/home/FinalCTA";
import CazaTechProductsSection from "@/components/home/CazaTechProductsSection";

const HeroScrollDemo = lazy(() =>
  import("@/components/sections/container-scroll-section").then((module) => ({
    default: module.HeroScrollDemo,
  }))
);

export default function Home() {
  return (
    <>
      {/* Hero Premium com animação neural network */}
      <NeuralNetworkHero />

      {/* Scroll Demo */}
      <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
        <HeroScrollDemo />
      </Suspense>

      {/* Seção de Projetos */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-white mb-4">
              Conectamos você com programadores
              <br />
            </h2>
            <p className="text-white/75 max-w-2xl mx-auto font-light text-base leading-relaxed">
              Transformamos sua visão em produto digital. Automação, SaaS, sites
              e integrações complexas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-16">
            {[
              {
                title: "Automação WhatsApp",
                image:
                  "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800&auto=format&fit=crop",
                gradient: "from-emerald-500/20 to-teal-500/20",
              },
              {
                title: "SaaS e Apps",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
                gradient: "from-purple-500/20 to-pink-500/20",
              },
              {
                title: "Sites & SEO",
                image:
                  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop",
                gradient: "from-blue-500/20 to-cyan-500/20",
              },
              {
                title: "Integrações n8n",
                image:
                  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
                gradient: "from-orange-500/20 to-red-500/20",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-500 h-64"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} mix-blend-overlay`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Orbital - processo de entrega */}
      <RadialOrbitalTimeline />

      {/* Soluções CazaTech */}
      <CazaTechProductsSection />

      {/* Depoimentos com efeito stagger */}
      <StaggerTestimonials />

      {/* CTA Final */}
      <FinalCTA />
    </>
  );
}
