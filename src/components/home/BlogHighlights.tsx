// components/home/BlogHighlights.tsx
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiArrowRight } from "react-icons/fi";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category?: string;
}

export default function BlogHighlights() {
  // Dados hardcoded usando as mesmas imagens do blog
  const featuredPosts: BlogPost[] = [
    {
      id: "1",
      slug: "ferramentas-marketing-2024",
      title: "Ferramentas Essenciais para Marketing Digital em 2024",
      excerpt:
        "Conheça as ferramentas que vão potencializar suas estratégias digitais este ano.",
      date: "24 Abril 2024",
      readTime: "6 min",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Marketing Digital",
    },
    {
      id: "2",
      slug: "conteudo-educativo-linkedin",
      title: "O Poder do Conteúdo Educativo no LinkedIn",
      excerpt:
        "Como estabelecer autoridade no seu setor através de posts educativos.",
      date: "1 Maio 2024",
      readTime: "4 min",
      image:
        "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Redes Sociais",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-sm font-semibold text-pink-600 mb-2 block">
              NOSSO BLOG
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Destaques do <span className="text-pink-600">Blog</span>
            </h2>
            <p className="text-gray-500 mt-2 max-w-lg">
              Artigos selecionados para ajudar no seu crescimento profissional
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="border-pink-600 text-pink-600 hover:bg-pink-50"
          >
            <Link href="/blog" className="flex items-center gap-2">
              Ver todos os artigos <FiArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Grid de Posts */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="group rounded-xl overflow-hidden transition-all hover:-translate-y-1"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="relative h-64 rounded-t-xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  {post.category && (
                    <span className="absolute top-4 right-4 bg-pink-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  )}
                </div>

                <div className="bg-gray-50 p-6 rounded-b-xl border border-gray-100">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} de leitura</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{post.excerpt}</p>

                  <div className="flex items-center text-pink-600 font-medium">
                    Ler artigo
                    <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
