import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { FaPalette } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { FiLayers } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Estudo de Caso | Portfólio Artístico - CazaTech",
  description:
    "Website para apresentação de portfólio artístico com design minimalista e alta performance.",
};

const PortfolioPage = () => {
  const projectData = {
    title: "Portfólio Digital para Artista",
    category: "Estudo de Caso",
    description:
      "Solução digital elegante para artistas visuais apresentarem seu trabalho de forma profissional e impactante.",
    image: "/images/portfolio5.png",
    overview: {
      client: "Miguel ",
      role: "Tatuador ",
      location: "Belo Horizonte, MG",
      services: [
        "Design de Interface",
        "Desenvolvimento Web",
        "Otimização SEO",
      ],
      year: "2023",
    },
    designSystem: {
      colors: ["#000000", "#1A1A1A", "#FFFFFF", "#F5F5F5"],
      typography: {
        primary: "Inter (Sans-serif)",
        secondary: "DM Sans (Headings)",
      },
      principles: ["Minimalismo", "Foco no conteúdo", "Hierarquia visual"],
    },
    features: [
      {
        icon: <FaPalette />,
        title: "Galeria Organizada",
        description: "Apresentação de trabalhos por categorias e estilos",
      },
      {
        icon: <FiCalendar />,
        title: "Agendamento Integrado",
        description: "Sistema de marcações direto pelo website",
      },
      {
        icon: <FiMessageSquare />,
        title: "Seção de Depoimentos",
        description: "Avaliações verificadas de clientes",
      },
      {
        icon: <FiLayers />,
        title: "Design Responsivo",
        description: "Experiência perfeita em todos os dispositivos",
      },
    ],
    gallery: [
      { src: "/images/gallery-view.jpg", alt: "Visualização da galeria" },
      { src: "/images/booking-view.jpg", alt: "Sistema de agendamento" },
      { src: "/images/mobile-view.jpg", alt: "Versão mobile" },
    ],
    demoUrl: "https://ascef182.github.io/Miguel-tattoo/",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="https://www.lummi.ai/api/render/image/94e77aa2-982a-4fa0-95c9-c8d6028fc4f0?token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijk0ZTc3YWEyLTk4MmEtNGZhMC05NWM5LWM4ZDYwMjhmYzRmMCIsImRvd25sb2FkU2l6ZSI6Im1lZGl1bSIsInJlbmRlclNwZWNzIjp7ImVmZmVjdHMiOnsicmVmcmFtZSI6e319fSwic2hvdWxkQXV0b0Rvd25sb2FkIjpmYWxzZSwianRpIjoiMmtKUHJ0RDZUaWg5b2JCb2QxU0VXIiwiaWF0IjoxNzQzMTE1NTcwLCJleHAiOjE3NDMxMTU2MzB9.L11Afb5MPJAveALUx-i873-xAWBZU7m6xMu9ARx0Urk"
          alt="Estúdio de tatuagem"
          fill
          className="object-cover"
          priority
        />
        <div className="container mx-auto px-6 relative z-20">
          <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm mb-4">
            {projectData.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-2xl">
            {projectData.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            {projectData.description}
          </p>
          <a
            href={projectData.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Ver Projeto Online
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <div className="relative aspect-video w-full">
              <Image
                src={projectData.image}
                alt="Visualização do projeto"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Visão Geral do Projeto</h2>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-1">
                  Cliente
                </h3>
                <p className="text-lg">{projectData.overview.client}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-1">
                  Atuação
                </h3>
                <p className="text-lg">{projectData.overview.role}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-1">
                  Localização
                </h3>
                <p className="text-lg">{projectData.overview.location}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-1">
                  Ano
                </h3>
                <p className="text-lg">{projectData.overview.year}</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-2">
                Serviços Prestados
              </h3>
              <div className="flex flex-wrap gap-2">
                {projectData.overview.services.map((service, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Sistema de Design
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Paleta de Cores</h3>
              <div className="flex gap-3">
                {projectData.designSystem.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 rounded-lg shadow-sm"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Tipografia</h3>
              <div className="space-y-2">
                <p
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {projectData.designSystem.typography.secondary}
                </p>
                <p
                  className="text-lg"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {projectData.designSystem.typography.primary}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Princípios</h3>
              <ul className="space-y-2">
                {projectData.designSystem.principles.map((principle, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Funcionalidades Principais
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectData.features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-4 text-gray-800">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Modernizado */}
      {/* CTA Compacto e Elegante */}
      <section className="relative py-16 bg-gray-800 text-white">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-1/4 -left-20 w-48 h-48 bg-blue-500 rounded-full mix-blend-overlay filter blur-xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-48 h-48 bg-purple-500 rounded-full mix-blend-overlay filter blur-xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              Pronto para elevar seu negócio digital?
            </h2>

            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
              Este projeto é um exemplo do que podemos criar para destacar sua
              marca online.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="https://api.whatsapp.com/send/?phone=551151998147&text&type=phone_number&app_absent=0"
                className="inline-flex items-center justify-center bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Fale com nossos especialistas
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>

              <a
                href={projectData.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Ver projeto ao vivo
              </a>
            </div>

            <div className="mt-8 flex justify-center gap-4 text-gray-400 text-sm">
              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Design exclusivo
              </span>
              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Tecnologia moderna
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
