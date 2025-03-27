import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="tag">
              <p className="text-xs font-medium uppercase">WE ARE CAZATECH</p>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-medium mb-6">Showcase</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PortfolioCard
            image="/images/portfolio5.png"
            title="Portifólio"
            description="Transformamos sua trajetória em um portfólio digital impactante. Destaque projetos, competências e conquistas com um design estratégico e profissional."
            href="/works/portfolio"
          />

          <PortfolioCard
            image="/images/Payment.png"
            title="Bancos"
            description="Landing page apresenta um conceito moderno de solução de pagamentos, com foco em transmitir confiança e inovação para o banco."
            href="/works/bank"
          />

          <PortfolioCard
            image="https://templatesjungle.com/wp-content/uploads/edd/2024/04/foodfarm-grocery-store-cover-1400x1050.jpg"
            title="Orgânicos ecommerce"
            description="FoodFarm é um template construído para comercialização de produtos orgânicos."
            href="/works/organicos"
          />

          <PortfolioCard
            image="/images/eduardo.png"
            title="Área da saúde"
            description="Exemplos de site para profissionais da área da saúde."
            href="/works/art-not-evidence"
          />
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
}: {
  image: string;
  title: string;
  description: string;
  href: string;
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
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
            <span className="bg-purple-300/70 text-black px-6 py-6 rounded-full text-base font-medium backdrop-blur-md">
              Ver projeto
            </span>
          </div>
        </div>
        <div className="p-6 flex-1">
          <h3 className="font-medium text-xl mb-2">{title}</h3>
          <p className="text-muted-foreground line-clamp-3">{description}</p>
        </div>
      </div>
    </Link>
  );
}
