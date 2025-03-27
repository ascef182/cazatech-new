// src/app/blog/[slug]/page.tsx
import { FiArrowLeft, FiCalendar, FiClock, FiTag } from "react-icons/fi";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getPostBySlug } from "@/lib/posts";

interface PageProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  // Corrigido: Aguardando a resolução dos params
  const { slug } = await Promise.resolve(params);
  const post = await getPostBySlug(slug);

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
          {post.author && (
            <>
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
                    <FiCalendar size={14} />{" "}
                    {new Date(post.date).toLocaleDateString("pt-BR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiClock size={14} /> {post.readTime}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>

        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={630}
            className="rounded-xl w-full aspect-video object-cover mb-8"
            priority
          />
        )}
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
                {post.tags?.length ? (
                  post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tags/${tag.toLowerCase()}`}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 text-sm font-medium hover:bg-accent/30 transition"
                    >
                      <FiTag className="mr-1 h-3 w-3" /> #{tag}
                    </Link>
                  ))
                ) : (
                  <span>Nenhuma tag disponível</span>
                )}
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
