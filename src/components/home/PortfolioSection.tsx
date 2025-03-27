"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white text-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Título e Descrição */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2
            variants={item}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Soluções Digitais Criativas
          </motion.h2>
          <motion.p
            variants={item}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Explore nosso portfólio e descubra o poder transformador da
            criatividade para seu projeto.
          </motion.p>
        </motion.div>

        {/* Grid de Projetos - Layout 2x2 */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <PortfolioCard
            image="/images/portfolio5.png"
            title="Portfólio"
            description="Transformamos sua trajetória em um portfólio digital impactante. Destaque projetos, competências e conquistas com um design estratégico."
            href="/works/portfolio"
            variants={item}
          />

          <PortfolioCard
            image="/images/Payment.png"
            title="Next Generation Payment Method"
            description="Landing page apresenta um conceito moderno de solução de pagamentos, com foco em transmitir confiança e inovação para o banco."
            href="/works/bank"
            variants={item}
          />

          <PortfolioCard
            image="https://templatesjungle.com/wp-content/uploads/edd/2024/04/foodfarm-grocery-store-cover-1400x1050.jpg"
            title="Orgânicos eCommerce"
            description="FoodFarm é um template construído para comercialização de produtos orgânicos."
            href="/works/organicos"
            variants={item}
          />

          <PortfolioCard
            image="/images/eduardo.png"
            title="Área da Saúde"
            description="Exemplos de site para profissionais da área da saúde."
            href="/works/art-not-evidence"
            variants={item}
          />
        </motion.div>

        {/* Botão de CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="/works"
            className="inline-block px-8 py-3 bg-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Ver todos os projetos
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

interface PortfolioCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
  variants: Variants;
}

function PortfolioCard({
  image,
  title,
  description,
  href,
  variants,
}: PortfolioCardProps) {
  return (
    <motion.div variants={variants} className="w-full">
      <Link href={href} className="group block h-full">
        <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full flex flex-col border border-gray-200 hover:border-purple-300">
          {/* Imagem - agora quadrada em telas grandes */}
          <div className="relative w-full aspect-square md:aspect-[4/3]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-all duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="inline-flex items-center px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                Ver projeto
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="p-6 flex-grow flex flex-col justify-center">
            <h3 className="font-bold text-xl md:text-2xl text-gray-900 mb-3">
              {title}
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
              {description}
            </p>
            <span className="inline-flex items-center text-purple-600 font-medium">
              Ver estudo de caso
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
