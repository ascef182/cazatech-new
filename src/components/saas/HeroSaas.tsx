"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BeamGridBackground from "@/components/ui/beam-grid-background";

export default function HeroSaas() {
  return (
    <section className="relative mx-auto flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* BeamGrid Background */}
      <BeamGridBackground 
        asBackground
        darkBeamColor="rgba(139, 92, 246, 0.8)"
        beamColor="rgba(139, 92, 246, 0.8)"
        darkGridColor="#18181b"
        gridColor="#27272a"
        beamCount={6}
        extraBeamCount={2}
        beamSpeed={0.08}
        glowIntensity={60}
        fadeIntensity={15}
      />
      
      <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance md:text-4xl lg:text-6xl">
        Transforme sua ideia em um SaaS escalável
      </h2>
      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
        Do MVP ao produto completo. Desenvolvemos plataformas SaaS robustas, 
        com arquitetura moderna, pagamentos integrados e dashboards intuitivos.
      </p>

      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-500/25">
          <Link href="https://wa.me/5535998026821?text=Quero%20criar%20meu%20SaaS" target="_blank">
            Falar com Especialista
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20"
        >
          <Link href="#processo">
            Ver Processo
          </Link>
        </Button>
      </div>
    </section>
  );
}
