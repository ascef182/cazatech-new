import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import {
  FaCreditCard,
  FaShieldAlt,
  FaRocket,
  FaMobileAlt,
} from "react-icons/fa";
import { SiNextdotjs, SiReact, SiGreensock } from "react-icons/si";

export const metadata: Metadata = {
  title: "HooBank - Modern Payment Solution | CazaTech",
  description:
    "Landing page moderna para solução de pagamentos com foco em confiança e inovação.",
};

const HoobankPage = () => {
  const projectData = {
    id: "bank",
    title: "HooBank",
    category: "Bank",
    description:
      "A landing page apresenta um conceito moderno de solução de pagamentos, com foco em transmitir confiança e inovação. O layout combina elementos minimalistas com componentes interativos.",
    image: "/images/Payment.png",
    client: "HooBank",
    services: ["Web Design", "Branding", "Desenvolvimento Web"],
    year: "2025",
    design: {
      colors:
        "Primária: Azul (#2962FF) para botões e destaques secundária: Tons de cinza (#333 para texto, #777 para subtítulos). Fundo: Branco (#FFFFFF) ou cinza muito claro (#F9FAFB)",
      layoutFeatures: ["Design moderno e limpo", "Hierarquia visual"],
      uxFeatures: [
        "Carregamento progressivo",
        "Transições suaves",
        "Design responsivo",
      ],
    },
    technologies: {
      frontend: ["Next.js 14", "React 18", "GSAP"],
    },
    demoUrl: "https://hoobank-app-pi.vercel.app/",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Cabeçalho */}
      <header className="mb-12 text-center">
        <span className="text-blue-600 font-medium bg-blue-50 px-4 py-1 rounded-full inline-block">
          {projectData.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
          {projectData.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {projectData.description}
        </p>
      </header>

      {/* Imagem principal */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-12 max-w-5xl mx-auto bg-gradient-to-r from-blue-50 to-gray-50 p-2">
        <div className="relative aspect-video w-full">
          <Image
            src={projectData.image}
            alt={`Captura de tela da ${projectData.title}`}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Detalhes do projeto */}
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Informações</h2>
          <ul className="space-y-3">
            <li>
              <span className="font-medium">Cliente:</span> {projectData.client}
            </li>
            <li>
              <span className="font-medium">Serviços:</span>{" "}
              {projectData.services.join(", ")}
            </li>
            <li>
              <span className="font-medium">Ano:</span> {projectData.year}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Design</h2>
          <div className="mb-4">
            <h3 className="font-medium">Cores:</h3>
            <div className="flex gap-2 mt-2">
              <div
                className="w-8 h-8 rounded-full bg-[#2962FF]"
                title="Azul Primário"
              ></div>
              <div
                className="w-8 h-8 rounded-full bg-[#333]"
                title="Cinza Escuro"
              ></div>
              <div
                className="w-8 h-8 rounded-full bg-[#777]"
                title="Cinza Médio"
              ></div>
              <div
                className="w-8 h-8 rounded-full bg-[#F9FAFB] border border-gray-200"
                title="Cinza Claro"
              ></div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tecnologias</h2>
          <div className="flex flex-wrap gap-3">
            {projectData.technologies.frontend.map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 px-4 py-2 rounded-lg text-sm flex items-center gap-2"
              >
                {tech === "Next.js 14" && (
                  <SiNextdotjs className="text-black text-lg" />
                )}
                {tech === "React 18" && (
                  <SiReact className="text-blue-500 text-lg" />
                )}
                {tech === "GSAP" && (
                  <SiGreensock className="text-green-600 text-lg" />
                )}
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Recursos do design */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Abordagem de Design
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Layout</h3>
            <ul className="space-y-3">
              {projectData.design.layoutFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Experiência do Usuário
            </h3>
            <ul className="space-y-3">
              {projectData.design.uxFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Principais Características
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-blue-600 text-2xl mb-3">
              <FaCreditCard />
            </div>
            <h3 className="font-semibold text-lg mb-2">Pagamentos Seguros</h3>
            <p className="text-gray-600 text-sm">
              Tecnologia avançada para proteger todas as transações.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-blue-600 text-2xl mb-3">
              <FaShieldAlt />
            </div>
            <h3 className="font-semibold text-lg mb-2">Segurança</h3>
            <p className="text-gray-600 text-sm">
              Proteção de dados com criptografia de última geração.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-blue-600 text-2xl mb-3">
              <FaRocket />
            </div>
            <h3 className="font-semibold text-lg mb-2">Performance</h3>
            <p className="text-gray-600 text-sm">
              Carregamento ultrarrápido com Next.js.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-blue-600 text-2xl mb-3">
              <FaMobileAlt />
            </div>
            <h3 className="font-semibold text-lg mb-2">Responsivo</h3>
            <p className="text-gray-600 text-sm">
              Experiência perfeita em qualquer dispositivo.
            </p>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Visualização do Projeto
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="relative aspect-video w-full bg-white">
              <Image
                src="/images/Payment.png" // Substitua pela imagem real
                alt="Seção hero da HooBank"
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-center text-gray-600">Seção Hero</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="relative aspect-video w-full bg-white">
              <Image
                src="/images/Payment.png" // Substitua pela imagem real
                alt="Seção de features da HooBank"
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-center text-gray-600">Seção de Recursos</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white">
        <h2 className="text-2xl font-bold mb-4">
          Experimente a Experiência HooBank
        </h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Veja como criamos uma landing page moderna que combina design
          minimalista com alta performance.
        </p>
        <a
          href={projectData.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-8 rounded-lg transition-colors"
        >
          Ver Demonstração
        </a>
      </section>
    </div>
  );
};

export default HoobankPage;
