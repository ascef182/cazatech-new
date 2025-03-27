import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

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
    <div className="py-24">
      <div className="container relative">
        {/* Botão de Voltar */}
        <div className="absolute right-4 top-0 z-50 md:right-0">
          <Link
            href="/"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            aria-label="Voltar para a página inicial"
          >
            <FiArrowLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </Link>
        </div>

        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="tag">
              <p className="text-xs font-medium uppercase">WE ARE CAZATECH</p>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-medium mb-6">Showcase</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      <div className="h-full bg-white rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md flex flex-col">
        <div className="relative h-64 overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
            <span className="bg-white/80 text-black px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md">
              Ver projeto
            </span>
          </div>
        </div>
        <div className="p-6 flex-1">
          <span className="text-xs text-muted-foreground">{category}</span>
          <h3 className="font-medium text-xl mb-2 mt-1">{title}</h3>
          <p className="text-muted-foreground line-clamp-3">{description}</p>
        </div>
      </div>
    </Link>
  );
}
