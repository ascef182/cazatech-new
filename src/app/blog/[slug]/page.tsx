import BlogArticle from "@/components/ui/blog-article";
import { getBlogPost } from "@/lib/markdown";

// Mapeamento de slugs da URL para nomes de arquivos em content/blog
const slugToFilename: Record<string, string> = {
  "desenvolvimento-sites-profissional": "desenvolvimento-sites",
  "solucoes-saas-personalizadas": "solucoes-saas",
  "automacao-processos-empresariais": "automacao-processos",
  "marketing-digital-para-agencias": "marketing-digital-agencias",
  "automacao-processos-guia-roi": "automacao-processos-guia-roi",
  "ai-powered-marketing-automation": "ai-powered-marketing-automation",
  "ai-seo-automation-tools": "ai-seo-automation-tools",
  "building-saas-high-conversion": "building-saas-high-conversion",
  "business-process-automation-roi": "business-process-automation-roi",
  "ecommerce-seo-strategies": "ecommerce-seo-strategies",
  "ferramentas-seo-automacao-ia": "ferramentas-seo-automacao-ia",
  "nextjs-seo-performance": "nextjs-seo-performance",
  "saas-development-trends": "saas-development-trends",
  "seo-ecommerce-faturamento-alto": "seo-ecommerce-faturamento-alto",
  "tendencias-saas-empresas": "tendencias-saas-empresas",
  "whatsapp-business-automation": "whatsapp-business-automation",
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filename = slugToFilename[slug];
  if (!filename) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Post não encontrado</h1>
        <p className="text-muted-foreground mb-8">
          O post que você está procurando não existe ou foi removido.
        </p>
        <a
          href="/blog"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          Voltar para o blog
        </a>
      </div>
    );
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
