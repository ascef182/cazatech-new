"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const items = [
  {
    name: "Pedro Costa",
    designation: "Cliente",
    quote:
      "A CazaTech transformou nossa ideia em realidade com criatividade e estratégia.",
    src: "/images/testimonial.jpeg",
  },
  {
    name: "Ana Beatriz",
    designation: "Diretora de Marketing",
    quote: "O site que desenvolveram aumentou nossas conversões em 40%.",
    src: "https://www.hubspot.com/hs-fs/hubfs/media/fotodeperfil.jpeg?width=595&name=fotodeperfil.jpeg",
  },
  {
    name: "Carlos Eduardo",
    designation: "CEO",
    quote: "A solução que criaram superou todas nossas expectativas.",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Marina Lopes",
    designation: "Growth Lead",
    quote: "Integrações e automações implementadas em tempo recorde.",
    src: "/images/testimonial.jpeg",
  },
];

export default function TestimonialSection() {
  return (
    <section
      aria-label="Depoimentos de clientes"
      className="py-16 md:py-24 bg-black"
    >
      <div className="container">
        <h2
          className="text-center text-2xl md:text-3xl font-bold mb-8 text-white/90"
          style={{ fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif" }}
        >
          Depoimentos de Clientes
        </h2>
        <AnimatedTestimonials testimonials={items} />
      </div>
    </section>
  );
}
