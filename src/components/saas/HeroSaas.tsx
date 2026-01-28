"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BeamGridBackground from "@/components/ui/beam-grid-background";
import { trackWhatsAppClick } from "@/components/analytics/GoogleAnalytics";
import { useI18n } from "@/app/ClientBody";

export default function HeroSaas() {
  const { t } = useI18n();
  return (
    <section className="relative mx-auto flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* BeamGrid Background */}
      <BeamGridBackground
        asBackground
        darkBeamColor="rgba(90, 64, 188, 0.7)"
        beamColor="rgba(90, 64, 188, 0.7)"
        darkGridColor="#18181b"
        gridColor="#27272a"
        beamCount={6}
        extraBeamCount={2}
        beamSpeed={0.08}
        glowIntensity={50}
        fadeIntensity={15}
      />
      
      <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-medium text-balance md:text-4xl lg:text-6xl tracking-tight">
        {t("saas.hero.title")}
      </h2>
      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base font-normal">
        {t("saas.hero.subtitle")}
      </p>

      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <Button asChild className="bg-[#5A40BC] hover:bg-[#462F96] text-white shadow-lg">
          <Link
            href="https://wa.me/5511936205799?text=Quero%20criar%20meu%20SaaS"
            target="_blank"
            onClick={() =>
              trackWhatsAppClick("saas-hero", "Quero criar meu SaaS")
            }
          >
            {t("saas.hero.ctaPrimary")}
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20"
        >
          <Link href="#exemplos">
            {t("saas.hero.ctaSecondary")}
          </Link>
        </Button>
      </div>
    </section>
  );
}
