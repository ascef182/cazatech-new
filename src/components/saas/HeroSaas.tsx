"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { saasContent } from "@/content/saas";

export default function HeroSaas() {
  const images = saasContent.hero.backgroundImages;
  return (
    <section className="relative mx-auto flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl bg-black text-white">
      {/* Background: 3 horizontal carousels com direções alternadas */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none px-6 md:px-10">
        <div className="absolute inset-0 flex flex-col justify-center gap-8 opacity-80">
          {/* Row 1 */}
          <div className="relative h-28 md:h-32 lg:h-36 overflow-hidden">
            <div className="animate-marquee inline-flex items-center gap-6 will-change-transform">
              {[...images, ...images, ...images, ...images].map((src, i) => (
                <img
                  key={`r1-${i}`}
                  src={src}
                  alt="SaaS Interface"
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
              {[...images, ...images, ...images, ...images].map((src, i) => (
                <img
                  key={`r2-${i}`}
                  src={src}
                  alt="SaaS Interface"
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
              {[...images, ...images, ...images, ...images].map((src, i) => (
                <img
                  key={`r3-${i}`}
                  src={src}
                  alt="SaaS Interface"
                  className="h-28 md:h-32 lg:h-36 w-auto rounded-xl opacity-90"
                  draggable={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <h2
        className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance md:text-4xl lg:text-6xl"
        style={{ fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif" }}
      >
        {saasContent.hero.title}
      </h2>
      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
        {saasContent.hero.subtitle}
      </p>

      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <Button asChild className="bg-purple-600 hover:bg-purple-700">
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

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/70" />
    </section>
  );
}
