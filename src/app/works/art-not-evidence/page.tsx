import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import {
  FaUserMd,
  FaCalendarAlt,
  FaQuoteLeft,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";
import { TbEngine } from "react-icons/tb";

export const metadata: Metadata = {
  title: "Dr. Eduardo Costa | CazaTech",
  description:
    "Plataforma inovadora para visualização dos trabalhos do Dr. Eduardo Costa.",
};

const EduardoCostaPage = () => {
  const projectData = {
    id: "art-not-evidence",
    title: "Dr. Eduardo Costa",
    category: "Médico",
    description:
      "Plataforma inovadora para visualização dos trabalhos de Eduardo.",
    image: "/images/eduardo.png",
    client: "Eduardo Costa",
    services: ["Desenvolvimento Web", "Design"],
    year: "2024",
    design: {
      colors: "Tons de azul com branco puro",
      typography: "Archivo Black + Space Grotesk",
      layoutFeatures: ["Design limpo"],
      uxFeatures: ["Navegação simples", "Informações relevantes"],
    },
    features: ["Redes Sociais", "Testemunhas", "Agendamento de consultas"],
    technologies: {
      frontend: ["HTML", "CSS", "BootStrap", "JavaScript"],
      plugins: ["Google Maps API", "Unreal Engine"],
    },
    demoUrl: "https://ascef182.github.io/Dr-Eduardo-Co0sta/",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Cabeçalho */}
      <header className="mb-12 text-center">
        <span className="text-blue-600 font-medium">
          {projectData.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
          {projectData.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {projectData.description}
        </p>
      </header>

      {/* Imagem principal */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-12 max-w-4xl mx-auto">
        <div className="relative aspect-video w-full bg-blue-50">
          <Image
            src={projectData.image}
            alt={`Captura de tela da plataforma ${projectData.title}`}
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
          <ul className="space-y-3">
            <li>
              <span className="font-medium">Cores:</span>{" "}
              {projectData.design.colors}
            </li>
            <li>
              <span className="font-medium">Tipografia:</span>{" "}
              {projectData.design.typography}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tecnologias</h2>
          <div className="mb-4">
            <h3 className="font-medium">Frontend:</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {projectData.technologies.frontend.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {tech === "BootStrap" && (
                    <SiBootstrap className="mr-1 text-purple-500" />
                  )}
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-medium">Plugins:</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {projectData.technologies.plugins.map((plugin) => (
                <span
                  key={plugin}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {plugin === "Google Maps API" && (
                    <FaMapMarkerAlt className="mr-1 text-red-500" />
                  )}
                  {plugin === "Unreal Engine" && (
                    <TbEngine className="mr-1 text-gray-500" />
                  )}
                  {plugin}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recursos do design */}
      <section className="mb-16 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Abordagem de Design
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
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
          <div>
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
          Funcionalidades Principais
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm">
            <div className="text-blue-600 text-2xl mb-3">
              <FaUserMd />
            </div>
            <h3 className="font-semibold text-lg mb-2">Perfil Profissional</h3>
            <p className="text-gray-600">
              Apresentação completa da formação, especializações e áreas de
              atuação.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm">
            <div className="text-blue-600 text-2xl mb-3">
              <FaQuoteLeft />
            </div>
            <h3 className="font-semibold text-lg mb-2">Depoimentos</h3>
            <p className="text-gray-600">
              Seção com testemunhos de pacientes e colegas de profissão.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm">
            <div className="text-blue-600 text-2xl mb-3">
              <FaCalendarAlt />
            </div>
            <h3 className="font-semibold text-lg mb-2">Agendamento</h3>
            <p className="text-gray-600">
              Sistema integrado para marcação de consultas online.
            </p>
          </div>
        </div>
      </section>

      {/* Galeria (opcional) */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Visualização da Plataforma
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="relative aspect-video w-full bg-white">
              <Image
                src="/images/eduardo-home.png" // Substitua pela imagem real
                alt="Página inicial da plataforma"
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-center text-gray-600">Página Inicial</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="relative aspect-video w-full bg-white">
              <Image
                src="/images/eduardo-agendamento.png" // Substitua pela imagem real
                alt="Sistema de agendamento"
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-center text-gray-600">Agendamento Online</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-blue-50 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Conheça a Plataforma
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Explore a demonstração ao vivo e veja como criamos uma solução digital
          personalizada para o Dr. Eduardo Costa.
        </p>
        <a
          href={projectData.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
        >
          Acessar Demonstração
        </a>
      </section>
    </div>
  );
};

export default EduardoCostaPage;
