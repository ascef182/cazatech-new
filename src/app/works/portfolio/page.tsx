import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import {
  FaPalette,
  FaCalendarAlt,
  FaQuoteLeft,
  FaHandSparkles,
} from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";

export const metadata: Metadata = {
  title: "Portfólio Miguel Cigano | CazaTech",
  description:
    "Website impactante para apresentação do trabalho artístico do tatuador Miguel Cigano.",
};

const PortfolioPage = () => {
  const projectData = {
    id: "portfolio",
    title: "Portfólio Website",
    category: "Portfólio",
    description:
      "Miguel é um tatuador de Belo Horizonte e necessitava apresentar seu trabalho artístico de forma impactante.",
    image: "/images/portfolio5.png",
    client: "Miguel Cigano",
    services: ["Design", "Desenvolvimento", "Estratégia"],
    year: "2023",
    design: {
      colors:
        "Tons sóbrios (preto, cinza, branco) com detalhes em vermelho vibrante",
      typography: "Raleway (títulos) + Montserrat (corpo)",
      layoutFeatures: [
        "Hierarquia visual clara com seções dedicadas",
        "Grid responsivo interativo",
        "Parallax scrolling narrativo",
      ],
      uxFeatures: [
        "Navegação inteligente com menu fixo",
        "CTAs animados com efeitos hover",
        "Design mobile-first",
      ],
    },
    features: [
      "Galeria filtrada por estilos de tatuagem",
      "Sistema de agendamento integrado",
      "Seção de depoimentos interativa",
    ],
    technologies: {
      frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
      plugins: ["Chocolat.js", "Slick Slider", "Animate.css"],
    },
    demoUrl: "https://ascef182.github.io/Miguel-tattoo/",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      {/* Cabeçalho */}
      <header className="mb-12 text-center">
        <span className="text-red-600 font-medium bg-gray-100 px-4 py-1 rounded-full inline-block">
          {projectData.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4 font-raleway">
          {projectData.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-montserrat">
          {projectData.description}
        </p>
      </header>

      {/* Imagem principal */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-12 max-w-5xl mx-auto bg-gray-100 p-1">
        <div className="relative aspect-video w-full">
          <Image
            src={projectData.image}
            alt={`Captura de tela do ${projectData.title}`}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Detalhes do projeto */}
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-raleway">
            Informações
          </h2>
          <ul className="space-y-3 font-montserrat">
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-raleway">
            Design
          </h2>
          <ul className="space-y-3 font-montserrat">
            <li>
              <span className="font-medium">Cores:</span>
              <div className="flex gap-2 mt-2">
                <div
                  className="w-6 h-6 rounded-full bg-black"
                  title="Preto"
                ></div>
                <div
                  className="w-6 h-6 rounded-full bg-gray-500"
                  title="Cinza"
                ></div>
                <div
                  className="w-6 h-6 rounded-full bg-white border border-gray-300"
                  title="Branco"
                ></div>
                <div
                  className="w-6 h-6 rounded-full bg-red-600"
                  title="Vermelho vibrante"
                ></div>
              </div>
            </li>
            <li className="mt-3">
              <span className="font-medium">Tipografia:</span>{" "}
              {projectData.design.typography}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-raleway">
            Tecnologias
          </h2>
          <div className="mb-4">
            <h3 className="font-medium font-montserrat">Frontend:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {projectData.technologies.frontend.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center font-montserrat"
                >
                  {tech === "Bootstrap 5" && (
                    <SiBootstrap className="mr-1 text-purple-500" />
                  )}
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-medium font-montserrat">Plugins:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {projectData.technologies.plugins.map((plugin) => (
                <span
                  key={plugin}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm font-montserrat"
                >
                  {plugin}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recursos do design */}
      <section className="mb-16 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 font-raleway">
          Abordagem Criativa
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 font-raleway">
              Layout
            </h3>
            <ul className="space-y-3 font-montserrat">
              {projectData.design.layoutFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 font-raleway">
              Experiência do Usuário
            </h3>
            <ul className="space-y-3 font-montserrat">
              {projectData.design.uxFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 font-raleway">
          Funcionalidades Principais
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-red-100">
            <div className="text-red-600 text-2xl mb-3">
              <FaPalette />
            </div>
            <h3 className="font-semibold text-lg mb-2 font-raleway">
              Galeria de Trabalhos
            </h3>
            <p className="text-gray-600 font-montserrat">
              Apresentação filtrada por diferentes estilos de tatuagem.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-red-100">
            <div className="text-red-600 text-2xl mb-3">
              <FaCalendarAlt />
            </div>
            <h3 className="font-semibold text-lg mb-2 font-raleway">
              Agendamento
            </h3>
            <p className="text-gray-600 font-montserrat">
              Sistema integrado para marcação de sessões.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-red-100">
            <div className="text-red-600 text-2xl mb-3">
              <FaQuoteLeft />
            </div>
            <h3 className="font-semibold text-lg mb-2 font-raleway">
              Depoimentos
            </h3>
            <p className="text-gray-600 font-montserrat">
              Seção interativa com avaliações de clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Galeria de Screenshots */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 font-raleway">
          Visualização do Website
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="relative aspect-video w-full bg-white">
              <Image
                src="/images/miguel-gallery.png" // Substitua pela imagem real
                alt="Galeria de trabalhos"
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-center text-gray-600 font-montserrat">
              Galeria de Tatuagens
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="relative aspect-video w-full bg-white">
              <Image
                src="/images/miguel-booking.png" // Substitua pela imagem real
                alt="Sistema de agendamento"
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-center text-gray-600 font-montserrat">
              Agendamento Online
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-black rounded-xl text-white">
        <div className="max-w-2xl mx-auto">
          <FaHandSparkles className="text-red-600 text-4xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4 font-raleway">
            Explore o Portfólio Completo
          </h2>
          <p className="text-gray-300 mb-6 font-montserrat">
            Visite o website ao vivo e veja como criamos uma experiência
            imersiva para mostrar o trabalho artístico do Miguel.
          </p>
          <a
            href={projectData.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg transition-colors font-montserrat"
          >
            Ver Portfólio
          </a>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
