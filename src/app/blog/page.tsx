import Link from "next/link";
import Image from "next/image";
import { FiCalendar, FiClock, FiTag, FiArrowLeft } from "react-icons/fi";

// Dados dos posts - agora definidos como constante interna
const recentPosts = [
  {
    id: "conteudo-educativo-linkedin",
    title: "O Poder do Conteúdo Educativo no LinkedIn",
    excerpt:
      "Como estabelecer autoridade no seu setor através de posts educativos no LinkedIn.",
    category: "Social Media",
    date: "1 Maio 2024",
    readTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["LinkedIn", "Autoridade", "Conteúdo Educativo"],
  },
  {
    id: "ferramentas-marketing-2024",
    title: "Ferramentas Essenciais para Marketing Digital em 2024",
    excerpt:
      "Conheça as ferramentas que vão potencializar suas estratégias digitais este ano.",
    category: "Ferramentas",
    date: "24 Abril 2024",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["Ferramentas", "Marketing Digital", "2024"],
  },
  {
    id: "case-vendas-alimenticio",
    title: "Case de Sucesso: Como Aumentamos as Vendas em 300%",
    excerpt:
      "O processo completo que usamos para transformar os resultados de um cliente do setor alimentício.",
    category: "Cases",
    date: "17 Abril 2024",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["Case", "Vendas", "Resultados"],
  },
];

const categories = [
  { name: "Automação", count: 12 },
  { name: "Social Media", count: 8 },
  { name: "Ferramentas", count: 5 },
  { name: "Cases", count: 7 },
  { name: "Tendências", count: 3 },
];

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-20 relative">
      {/* Botão de Voltar */}
      <div className="absolute right-4 top-[var(--header-height)] z-50 md:right-8">
        <Link
          href="/"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          aria-label="Voltar para a página inicial"
        >
          <FiArrowLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        </Link>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Blog <span className="text-primary">CazaTech</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Conhecimento estratégico em automação, social media e marketing
          digital
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Recent Posts */}
        <div className="md:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold">Artigos Recentes</h2>

          {recentPosts.map((post) => (
            <article
              key={post.id}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow dark:border-gray-700"
            >
              <div className="md:flex">
                <div className="md:w-1/3 h-48 md:h-auto relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <FiTag className="h-4 w-4" />
                    <span>{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    <Link
                      href={`/blog/${post.id}`} // Link corrigido para a página do post
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiClock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Newsletter - Google Forms */}
          <div className="border rounded-lg overflow-hidden dark:border-gray-700">
            <div className="p-6 bg-card">
              <h2 className="text-2xl font-bold mb-2">
                Assine nossa newsletter
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Receba os melhores conteúdos sobre marketing digital diretamente
                no seu e-mail.
              </p>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSebj7Az0IWKWTaRx0PYt8X8SC7atwWFdK0LAW8RoUvfjRdNcQ/viewform?embedded=true"
                width="100%"
                height="400"
                frameBorder="0"
                className="rounded-md bg-white dark:bg-gray-900/50 border dark:border-gray-700"
              >
                Carregando…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
