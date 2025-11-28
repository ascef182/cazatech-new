import BlogArticle from "@/components/ui/blog-article";
import { getBlogPost } from "@/lib/markdown";

// Mapeamento de slugs da URL para nomes de arquivos em content/blog
const slugToFilename: Record<string, string> = {
  "desenvolvimento-sites-profissional": "desenvolvimento-sites",
  "solucoes-saas-personalizadas": "solucoes-saas",
  "automacao-processos-empresariais": "automacao-processos",
  "marketing-digital-para-agencias": "marketing-digital-agencias",
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filename = slugToFilename[slug];
  if (!filename) {
    return null;
  }
  const md = await getBlogPost(filename);
  return (
    <BlogArticle
      title={(md.frontmatter.title as string) || "Título não encontrado"}
      category={(md.frontmatter.category as string) || "Blog"}
      date={(md.frontmatter.date as string) || "Data não disponível"}
      readTime={(md.frontmatter.readTime as string) || "5 min"}
      image={
        md.frontmatter.image
          ? {
              src: md.frontmatter.image as string,
              alt: md.frontmatter.title as string,
            }
          : undefined
      }
      author={
        md.frontmatter.author as
          | { name: string; role?: string; avatar?: string }
          | undefined
      }
      html={md.contentHtml}
      backHref="/blog"
      backLabel="Voltar"
    />
  );
}
