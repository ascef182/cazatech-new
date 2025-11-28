"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

// Depoimentos reais da CazaTech
const testimonials = [
  {
    tempId: 0,
    testimonial: "A CazaTech revolucionou nosso atendimento! Implementaram uma automação que responde instantaneamente e aumentou nossa taxa de conversão em 280%.",
    by: "Carlos Mendes, CEO na Loja Men Wear",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 1,
    testimonial: "Nossa empresa cresceu 350% após a automação WhatsApp da CazaTech. O ROI foi incrível - recuperamos o investimento em apenas 2 meses!",
    by: "Ana Paula Silva, Diretora Comercial na Beleza & Estilo",
    imgSrc: "https://i.pravatar.cc/150?img=47"
  },
  {
    tempId: 2,
    testimonial: "O que mais me impressionou foi a qualidade da entrega. A CazaTech entendeu exatamente nossa necessidade e criou fluxos perfeitos.",
    by: "Roberto Santos, Gerente de Vendas na AutoPeças Brasil",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 3,
    testimonial: "Desde que implementamos a automação da CazaTech, nossa equipe consegue focar no que realmente importa: fechar vendas!",
    by: "Mariana Costa, Coordenadora de Marketing na Imóveis Top",
    imgSrc: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 4,
    testimonial: "Parceria incrível com a CazaTech! Eles não apenas entregaram a automação, mas nos ajudaram a otimizar todo nosso processo de vendas.",
    by: "Fernando Oliveira, Proprietário do Restaurante Sabor & Arte",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 5,
    testimonial: "A automação WhatsApp da CazaTech nos permitiu escalar sem contratar mais pessoas. Atendemos 5x mais clientes com a mesma equipe!",
    by: "Juliana Ferreira, Sócia-Diretora na Clínica Vida Saudável",
    imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 6,
    testimonial: "Outstanding service and results! CazaTech delivered an automation that perfectly fits our business needs. Engagement increased by 250%.",
    by: "Michael Thompson, Marketing Director at Global Ventures",
    imgSrc: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 7,
    testimonial: "A CazaTech transformou nossa forma de trabalhar. Antes perdíamos muitos leads por demora no atendimento. Hoje, convertemos 85% dos contatos!",
    by: "Patricia Rocha, Gerente Geral na Moda Feminina Elegance",
    imgSrc: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 8,
    testimonial: "Investimento que se paga sozinho! A automação da CazaTech aumentou nossas vendas em 420% no primeiro trimestre.",
    by: "Diego Almeida, CEO na TechStart Inovação",
    imgSrc: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 9,
    testimonial: "A qualidade da entrega da CazaTech superou todas nossas expectativas. A automação funciona perfeitamente e o ROI foi de 500% no primeiro ano!",
    by: "Rodrigo Nascimento, Diretor Comercial na Construtora Horizonte",
    imgSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-white text-black border-white" 
          : "z-0 bg-neutral-900 text-white border-neutral-700 hover:border-purple-500/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px rgb(168 85 247 / 0.3)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
          backgroundColor: isCenter ? 'rgb(168 85 247)' : 'rgb(64 64 64)'
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 bg-neutral-800 object-cover object-top"
        style={{
          boxShadow: isCenter ? "3px 3px 0px rgb(168 85 247)" : "3px 3px 0px rgb(64 64 64)"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-xl font-extralight tracking-tight leading-relaxed",
        isCenter ? "text-black" : "text-white"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm font-light italic tracking-tight",
        isCenter ? "text-black/70" : "text-white/60"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

interface StaggerTestimonialsProps {
  className?: string;
}

export const StaggerTestimonials: React.FC<StaggerTestimonialsProps> = ({ className }) => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className={cn("relative w-full overflow-hidden bg-black py-24", className)}>
      {/* Header */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm mb-6">
          <span className="text-[10px] font-light uppercase tracking-[0.08em] text-white/70">Depoimentos</span>
          <span className="h-1 w-1 rounded-full bg-white/40" />
          <span className="text-xs font-light tracking-tight text-white/80">Clientes Reais</span>
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-white mb-4">
          O que nossos clientes dizem
        </h2>
        <p className="text-lg font-light tracking-tight text-white/60 max-w-2xl mx-auto">
          Resultados reais de empresas que transformaram seus negócios com nossas soluções.
        </p>
      </div>

      {/* Testimonials Carousel */}
      <div
        className="relative w-full"
        style={{ height: 500 }}
      >
        {testimonialsList.map((testimonial, index) => {
          const position = testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
          return (
            <TestimonialCard
              key={testimonial.tempId}
              testimonial={testimonial}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          <button
            onClick={() => handleMove(-1)}
            className={cn(
              "flex h-14 w-14 items-center justify-center text-2xl transition-all duration-300",
              "bg-neutral-900 border-2 border-neutral-700 hover:bg-purple-600 hover:border-purple-600 hover:text-white",
              "text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            )}
            aria-label="Depoimento anterior"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => handleMove(1)}
            className={cn(
              "flex h-14 w-14 items-center justify-center text-2xl transition-all duration-300",
              "bg-neutral-900 border-2 border-neutral-700 hover:bg-purple-600 hover:border-purple-600 hover:text-white",
              "text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            )}
            aria-label="Próximo depoimento"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StaggerTestimonials;


