import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { FaShoppingBasket, FaLeaf, FaClock, FaSearch } from 'react-icons/fa';
import { SiStripe } from 'react-icons/si';

export const metadata: Metadata = {
  title: 'FoodFarm - Ecommerce Orgânico | CazaTech',
  description: 'Plataforma de supermercado online que combina produtos frescos e orgânicos.',
};

const FoodFarmPage = () => {
  const projectData = {
    id: "organicos",
    title: "FoodFarm",
    category: "Orgânicos ecommerce",
    description: "Plataforma de supermercado online que combina produtos frescos e orgânicos.",
    image: "https://templatesjungle.com/wp-content/uploads/edd/2024/04/foodfarm-grocery-store-cover-1400x1050.jpg",
    client: "FoodFarm",
    services: ["Desenvolvimento FrontEnd", "UX Design"],
    year: "2025",
    design: {
      colors: "Verde natural com detalhes em tons vivos",
      typography: "Montserrat + Open Sans",
      layoutFeatures: [
        "Navegação intuitiva com categorias destacadas",
        "Layout responsivo com imagens de alta resolução de produtos",
        "Checkout simplificado em etapas",
      ],
      uxFeatures: [
        "Recomendações baseadas em preferências alimentares",
        "Organizador de lista de compras integrado",
        "Pesquisa de produto",
      ],
    },
    features: [
      "Integração com entregas em até 2 horas",
      "Inventário em tempo real para atualização de disponibilidade",
      "Assinaturas personalizadas para entregas semanais de produtos frescos",
    ],
    technologies: {
      frontend: ["HTML", "CSS", "JavaScript"],
      plugins: ["Stripe"],
    },
    demoUrl: "https://ascef182.github.io/foodfarm-template/",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Cabeçalho */}
      <header className="mb-12">
        <span className="text-green-600 font-medium">{projectData.category}</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">{projectData.title}</h1>
        <p className="text-xl text-gray-600 max-w-3xl">{projectData.description}</p>
      </header>

      {/* Imagem principal */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-12">
        <Image
          src={projectData.image}
          alt={`Captura de tela do ${projectData.title}`}
          width={1400}
          height={1050}
          className="w-full h-auto object-cover"
          priority
        />
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
              <span className="font-medium">Serviços:</span> {projectData.services.join(', ')}
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
              <span className="font-medium">Cores:</span> {projectData.design.colors}
            </li>
            <li>
              <span className="font-medium">Tipografia:</span> {projectData.design.typography}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tecnologias</h2>
          <div className="mb-4">
            <h3 className="font-medium">Frontend:</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {projectData.technologies.frontend.map((tech) => (
                <span key={tech} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-medium">Plugins:</h3>
            <div className="flex items-center gap-2 mt-1">
              {projectData.technologies.plugins.map((plugin) => (
                <span key={plugin} className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center">
                  {plugin === 'Stripe' && <SiStripe className="mr-1 text-blue-500" />}
                  {plugin}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recursos do design */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recursos de Design</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Layout</h3>
            <ul className="space-y-3">
              {projectData.design.layoutFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">UX</h3>
            <ul className="space-y-3">
              {projectData.design.uxFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Destaques</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projectData.features.map((feature, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg">
              <div className="text-green-600 text-2xl mb-3">
                {index === 0 && <FaClock />}
                {index === 1 && <FaShoppingBasket />}
                {index === 2 && <FaLeaf />}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.split(' - ')[0]}</h3>
              <p className="text-gray-600">{feature.split(' - ')[1] || feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-gray-50 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Experimente você mesmo</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Visite a demonstração ao vivo e explore todas as funcionalidades desta plataforma de ecommerce orgânico.
        </p>
        <a
          href={projectData.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
        >
          Ver Demonstração
        </a>
      </section>
    </div>
  );
};

export default FoodFarmPage;