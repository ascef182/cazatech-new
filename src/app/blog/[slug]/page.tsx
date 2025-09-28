import BlogArticle from "@/components/ui/blog-article";
import { getMarkdownData } from "@/lib/markdown";

const slugToFilename: Record<string, string> = {
  "desenvolvimento-sites-profissional":
    "Desenvolvimento de Sites_ Como um Site Profissional Impulsiona Seu Negócio e Vendas Online.md",
  "solucoes-saas-personalizadas":
    "Soluções SaaS Personalizadas_ O Futuro da Otimização de Processos Empresariais.md",
  "automacao-processos-empresariais":
    "Automação de Processos_ Reduza Custos e Aumente a Eficiência com Tecnologia Inteligente.md",
  "parcerias-estrategicas-desenvolvedores": "Parcerias CazaTech.md",
  "marketing-digital-para-agencias":
    "Marketing Digital para Agências_ Alavancando Resultados com Desenvolvimento Web e Automação.md",
  "tendencias-transformacao-digital":
    "Tendências de Transformação Digital para Empresas Modernas.md",
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
  const md = await getMarkdownData(filename);
  return (
    <BlogArticle
      title={md.frontmatter.title || "Título não encontrado"}
      category={md.frontmatter.category || "Blog"}
      date={md.frontmatter.date || "Data não disponível"}
      readTime={md.frontmatter.readTime || "5 min"}
      image={
        md.frontmatter.image
          ? { src: md.frontmatter.image, alt: md.frontmatter.title }
          : undefined
      }
      author={md.frontmatter.author}
      html={md.contentHtml}
      backHref="/blog"
      backLabel="Voltar"
    />
  );
}
