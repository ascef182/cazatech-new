"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

// Dados dos projetos
const projects = [
  {
    id: "portfolio",
    title: "Portifólio",
    description:
      "Transformamos sua trajetória em um portfólio digital impactante...",
    image: "/images/portfolio5.png",
    category: "Portifólio",
  },
  {
    id: "bank",
    title: "Bancos",
    description:
      "Landing page apresenta um conceito moderno de solução de pagamentos...",
    image: "/images/Payment.png",
    category: "Bank",
  },
  {
    id: "organicos",
    title: "Orgânicos ecommerce",
    description:
      "FoodFarm é um template construído para comercialização de produtos orgânicos...",
    image:
      "https://templatesjungle.com/wp-content/uploads/edd/2024/04/foodfarm-grocery-store-cover-1400x1050.jpg",
    category: "E-commerce",
  },
  {
    id: "art-not-evidence",
    title: "Área da saúde",
    description: "Exemplos de site para profissionais da área da saúde...",
    image: "/images/eduardo.png",
    category: "Saúde",
  },
];

export default function WorksPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative bg-black text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        </div>
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Portfólio de Sites
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-white/70 max-w-2xl mx-auto"
          >
            Seleção de projetos que combinam performance, UX e estética moderna.
          </motion.p>
        </div>
      </section>

      <div className="container relative -mt-10 md:-mt-14 pb-24">
        {/* Botão de Voltar */}
        <div className="absolute left-4 -top-10 md:-top-14 z-50 md:left-0">
          <Link
            href="/"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            aria-label="Voltar para a página inicial"
          >
            <FiArrowLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </Link>
        </div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <PortfolioCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              href={`/works/${project.id}`}
              category={project.category}
            />
          ))}
        </div>
      </div>

      {/* Floating WhatsApp removido (uso global via CTAFloaters) */}
    </div>
  );
}

function PortfolioCard({
  image,
  title,
  description,
  href,
  category,
}: {
  image: string;
  title: string;
  description: string;
  href: string;
  category: string;
}) {
  return (
    <Link href={href} className="group block h-full">
      <div className="relative h-full overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm transition-all hover:shadow-lg">
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
          aria-hidden
        >
          <div className="absolute -inset-40 bg-gradient-to-tr from-pink-500/10 via-purple-500/10 to-blue-500/10 blur-2xl" />
        </div>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70" />
          <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur px-3 py-1 text-xs font-medium text-gray-900">
            {category}
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-semibold text-lg md:text-xl">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-3">
            {description}
          </p>
          <div className="mt-4 inline-flex items-center text-sm font-medium text-pink-600 group-hover:text-pink-500">
            Ver projeto
            <svg
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
