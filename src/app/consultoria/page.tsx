import { Metadata } from "next";
import LeadershipSection from "@/components/consultoria/LeadershipSection";
import ConsultationForm from "@/components/consultoria/ConsultationForm";
import { Sparkles } from "@/components/ui/sparkles";
import WhySection from "@/components/consultoria/WhySection";

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
            <WhySection />
            
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

