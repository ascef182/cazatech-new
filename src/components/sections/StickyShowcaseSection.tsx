"use client";

import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Automação que converte",
    description:
      "Fluxos inteligentes para captação, qualificação e fechamento no WhatsApp.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-black">
        <Image
          src="/images/globo.png"
          alt="Automação"
          width={140}
          height={140}
          className="opacity-90"
        />
      </div>
    ),
  },
  {
    title: "Web design ",
    description:
      "Páginas rápidas, bonitas e focadas em conversão, com SEO técnico.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-black-900/25">
        <Image
          src="/images/globo.png"
          alt="Web design"
          width={220}
          height={140}
          className="opacity-90"
        />
      </div>
    ),
  },
  {
    title: "Automações",
    description: "Templates e frameworks prontos para acelerar sua produção.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-slate-900/25">
        <Image src="/images/globo.png" alt="Código" width={120} height={120} />
      </div>
    ),
  },
  {
    title: "Pacotes sob medida",
    description:
      "Planos para autônomos, times até 5 pessoas e soluções personalizadas.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-black-900/25">
        <Image
          src="/images/globo.png"
          alt="CazaTech"
          width={120}
          height={120}
        />
      </div>
    ),
  },
];

export default function StickyShowcaseSection() {
  return (
    <section className="w-full bg-black">
      <StickyScroll content={content} />
    </section>
  );
}
