import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiCalendar, FiClock, FiTag, FiArrowLeft } from "react-icons/fi";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  content: string;
}

const getPost = async (slug: string): Promise<BlogPost | null> => {
  // Simulação de banco de dados
  await new Promise((resolve) => setTimeout(resolve, 100));

  const posts: BlogPost[] = [
    {
      id: "conteudo-educativo-linkedin",
      title: "O Poder do Conteúdo Educativo no LinkedIn em 2024",
      excerpt:
        "Como estabelecer autoridade no seu setor através de posts educativos no LinkedIn e gerar leads qualificados.",
      category: "Social Media",
      date: "1 Maio 2024",
      readTime: "4 min",
      image:
        "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      author: {
        name: "Ana Souza",
        role: "Especialista em Social Media B2B",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      tags: ["LinkedIn", "Marketing B2B", "Conteúdo Educativo"],
      content: "<article>...</article>",
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
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      author: {
        name: "Carlos Mendes",
        role: "Especialista em Tecnologia Marketing",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      tags: ["Ferramentas", "Automação", "SEO"],
      content: "<article>...</article>",
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
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      author: {
        name: "Juliana Lima",
        role: "Consultora de Growth Marketing",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      },
      tags: ["Case", "Vendas", "Resultados", "Setor Alimentício"],
      content: "<article>...</article>",
    },
  ];

  return posts.find((post) => post.id === slug) || null;
};

interface PageProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="container py-8 md:py-12 relative">
      {/* Botão de Voltar */}
      <div className="absolute right-4 top-[var(--header-height)] z-50 md:right-8">
        <Link
          href="/blog"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          aria-label="Voltar para todos os artigos"
        >
          <FiArrowLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        </Link>
      </div>

      {/* Cabeçalho do Post */}
      <div className="max-w-3xl mx-auto mb-12">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
          {post.category}
        </span>

        <h1 className="text-3xl md:text-[2.5rem] font-bold leading-tight mb-6">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 mb-8">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <p className="font-medium">{post.author.name}</p>
            <div className="flex gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <FiCalendar size={14} /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <FiClock size={14} /> {post.readTime} de leitura
              </span>
            </div>
          </div>
        </div>

        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={630}
          className="rounded-xl w-full aspect-video object-cover mb-8"
          priority
        />
      </div>

      {/* Conteúdo do Post */}
      <div className="max-w-2xl mx-auto">
        <div
          className="prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Rodapé do Post */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between gap-6 items-start">
            <div>
              <h3 className="text-lg font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tags/${tag.toLowerCase()}`}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 text-sm font-medium hover:bg-accent/30 transition"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-end">
              <h3 className="text-lg font-semibold mb-3">Compartilhe</h3>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Compartilhar no LinkedIn"
                >
                  <FaLinkedin className="h-4 w-4 text-blue-600" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Compartilhar no Twitter"
                >
                  <FaTwitter className="h-4 w-4 text-blue-400" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Compartilhar no Facebook"
                >
                  <FaFacebook className="h-4 w-4 text-blue-800" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
