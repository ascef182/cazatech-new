import { Metadata } from "next";
import LeadershipSection from "@/components/consultoria/LeadershipSection";
import ConsultationForm from "@/components/consultoria/ConsultationForm";
import { Sparkles } from "@/components/ui/sparkles";

export const metadata: Metadata = {
  title: "Consultoria Técnica & Liderança | CazaTech",
  description: "Agende uma consultoria com Pâm Ascef e nossa equipe de especialistas para transformar sua ideia em um produto digital escalável.",
};

export default function ConsultoriaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero / Leadership Section */}
      <LeadershipSection />

      {/* Form Section with Particles */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Sparkles
            background="transparent"
            minSize={0.6}
            size={1.4}
            density={50}
            className="w-full h-full"
            color="#FFFFFF"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-8">
              <h3 className="text-3xl font-bold leading-tight">
                Por que agendar uma consultoria?
              </h3>
              <ul className="space-y-6">
                {[
                  {
                    title: "Diagnóstico Preciso",
                    desc: "Entendemos seu momento atual e identificamos gargalos técnicos e de processo.",
                  },
                  {
                    title: "Arquitetura Escalável",
                    desc: "Planejamos a estrutura do seu software para crescer sem dívida técnica.",
                  },
                  {
                    title: "Estratégia de Produto",
                    desc: "Alinhamos tecnologia com seus objetivos de negócio para maximizar o ROI.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-sm">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

