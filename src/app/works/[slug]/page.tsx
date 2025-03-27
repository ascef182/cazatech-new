import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  client?: string;
  services?: string[];
  year?: string;
  design?: {
    colors: string;
    typography: string;
    layoutFeatures: string[];
    uxFeatures: string[];
  };
  features?: string[];
  technologies?: {
    frontend: string[];
    plugins?: string[];
  };
  demoUrl?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "portfolio",
    title: "Portifólio Website",
    category: "Portifólio",
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
  },
  {
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
  },
  {
    id: "organicos",
    title: "FoodFarm",
    category: "Orgânicos ecommerce",
    description:
      "Plataforma de supermercado online que combina produtos frescos e orgânicos.",
    image:
      "https://templatesjungle.com/wp-content/uploads/edd/2024/04/foodfarm-grocery-store-cover-1400x1050.jpg",
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
  },
  {
    id: "art-not-evidence",
    title: "Dr. Eduardo Costa",
    category: "Médico",
    description:
      "Plataforma inovadora para visualização dos trabalho de Eduardo.",
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
  },
];

export default function PortfolioDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const portfolio = portfolioItems.find((item) => item.id === params.slug);

  if (!portfolio) {
    notFound();
  }

  return (
    <div className="py-24">
      <div className="container max-w-5xl">
        <div className="mb-10">
          <Link
            href="/works"
            className="text-sm font-medium flex items-center hover:text-primary transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Voltar para projetos
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="mb-4">
              <span className="text-sm text-muted-foreground uppercase">
                {portfolio.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-medium mb-4">
                {portfolio.title}
              </h1>
              <p className="text-muted-foreground">{portfolio.description}</p>
            </div>

            <div className="space-y-4">
              {portfolio.client && (
                <div>
                  <h3 className="font-medium">Cliente</h3>
                  <p className="text-muted-foreground">{portfolio.client}</p>
                </div>
              )}

              {portfolio.services && (
                <div>
                  <h3 className="font-medium">Serviços</h3>
                  <p className="text-muted-foreground">
                    {portfolio.services.join(", ")}
                  </p>
                </div>
              )}

              {portfolio.year && (
                <div>
                  <h3 className="font-medium">Ano</h3>
                  <p className="text-muted-foreground">{portfolio.year}</p>
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src={portfolio.image}
                alt={portfolio.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Seção Sobre o Projeto Dinâmica */}
        <div className="mt-16">
          <h2 className="text-2xl font-medium mb-6">Sobre o projeto</h2>
          <div className="prose max-w-none">
            {portfolio.design && (
              <>
                <h3 className="text-xl font-semibold mt-6 mb-3">
                  Design e Conceito
                </h3>

                <h4 className="font-medium mb-2">Identidade Visual</h4>
                <ul className="list-disc ml-6 mb-4 text-muted-foreground">
                  <li>
                    <strong>Paleta de Cores:</strong> {portfolio.design.colors}
                  </li>
                  <li>
                    <strong>Tipografia:</strong> {portfolio.design.typography}
                  </li>
                  <li>
                    <strong>Layout:</strong>
                    <ul className="list-disc ml-6">
                      {portfolio.design.layoutFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </li>
                </ul>

                <h4 className="font-medium mb-2">Experiência do Usuário</h4>
                <ul className="list-disc ml-6 mb-4 text-muted-foreground">
                  {portfolio.design.uxFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </>
            )}

            {portfolio.features && (
              <>
                <h3 className="text-xl font-semibold mt-6 mb-3">
                  Funcionalidades Principais
                </h3>
                <ul className="list-disc ml-6 mb-4 text-muted-foreground">
                  {portfolio.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </>
            )}

            {portfolio.technologies && (
              <>
                <h3 className="text-xl font-semibold mt-6 mb-3">
                  Tecnologias Utilizadas
                </h3>

                <div className="space-y-4">
                  {portfolio.technologies.frontend && (
                    <div>
                      <h4 className="font-medium mb-2">Front-End</h4>
                      <ul className="list-disc ml-6">
                        {portfolio.technologies.frontend.map((tech, index) => (
                          <li key={index}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {portfolio.technologies.plugins && (
                    <div>
                      <h4 className="font-medium mb-2">
                        Plugins & Bibliotecas
                      </h4>
                      <ul className="list-disc ml-6">
                        {portfolio.technologies.plugins.map((plugin, index) => (
                          <li key={index}>{plugin}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </>
            )}

            {portfolio.demoUrl && (
              <div className="mt-8">
                <Link
                  href={portfolio.demoUrl}
                  className="inline-flex items-center px-6 py-3 bg-violet-700 text-white rounded-lg hover:bg-violet-800 transition-colors font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row justify-between gap-4">
          <Link
            href="/contact"
            className="bg-black text-white py-3 px-6 rounded hover:bg-black/90 transition-colors font-medium text-center"
          >
            Iniciar um projeto
          </Link>

          <Link
            href="/works"
            className="border border-black py-3 px-6 rounded hover:bg-gray-100 transition-colors font-medium text-center"
          >
            Ver outros projetos
          </Link>
        </div>
      </div>
    </div>
  );
}
