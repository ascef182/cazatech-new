"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { automacoesContent } from "@/content/automacoes";
import { trackWhatsAppClick } from "@/components/analytics/GoogleAnalytics";

export default function HeroAutomacoes() {
  const images = automacoesContent.hero.backgroundImages;
  return (
    <section className="relative mx-auto flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Background: 3 horizontal carousels com direções alternadas */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none px-6 md:px-10">
        <div className="absolute inset-0 flex flex-col justify-center gap-12 md:gap-16 opacity-80">
          {/* Row 1 */}
          <div className="relative h-28 md:h-32 lg:h-36 overflow-hidden">
            <div className="animate-marquee inline-flex items-center gap-6 will-change-transform">
              {[...images, ...images].map((src, i) => (
                <img
                  key={`r1-${i}`}
                  src={src}
                  alt="n8n"
                  className="h-28 md:h-32 lg:h-36 w-auto rounded-xl opacity-90"
                  draggable={false}
                />
              ))}
            </div>
          </div>
          {/* Row 2 (reverse) */}
          <div className="relative h-28 md:h-32 lg:h-36 overflow-hidden">
            <div
              className="animate-marquee inline-flex items-center gap-6 will-change-transform"
              style={{
                animationDirection: "reverse",
                animationDuration: "28s",
              }}
            >
              {[...images, ...images].map((src, i) => (
                <img
                  key={`r2-${i}`}
                  src={src}
                  alt="n8n"
                  className="h-28 md:h-32 lg:h-36 w-auto rounded-xl opacity-90"
                  draggable={false}
                />
              ))}
            </div>
          </div>
          {/* Row 3 */}
          <div className="relative h-28 md:h-32 lg:h-36 overflow-hidden">
            <div
              className="animate-marquee inline-flex items-center gap-6 will-change-transform"
              style={{ animationDuration: "26s" }}
            >
              {[...images, ...images].map((src, i) => (
                <img
                  key={`r3-${i}`}
                  src={src}
                  alt="n8n"
                  className="h-28 md:h-32 lg:h-36 w-auto rounded-xl opacity-90"
                  draggable={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance md:text-4xl lg:text-6xl">
        Sua empresa atendendo 24h por dia — sem depender de ninguém.
      </h2>
      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
        A Secretária v3 é uma automação completa no WhatsApp que agenda, envia
        PIX, confirma consultas, faz follow-up e transforma conversas em vendas
        reais.
      </p>

      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <Button
          asChild
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-500/25"
        >
          <Link
            href="https://wa.me/5535998026821?text=Olá! Quero instalar a Secretária v3 na minha empresa."
            target="_blank"
            onClick={() =>
              trackWhatsAppClick("automacoes-hero", "Instalar Secretária v3")
            }
          >
            Instalar Secretária v3
          </Link>
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20"
            >
              Ver Demonstração
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            <video
              src="/videos/demonstracao.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-auto"
            />
          </DialogContent>
        </Dialog>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/50" />
    </section>
  );
}
