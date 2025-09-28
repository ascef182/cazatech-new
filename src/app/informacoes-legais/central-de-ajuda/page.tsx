import BlogTemplate from "@/components/BlogTemplate";
import { getMarkdownData } from "@/lib/markdown";

export const metadata = {
  title: "Central de Ajuda - CazaTech",
  description: "Central de ajuda e suporte da CazaTech",
};

export default async function HelpCenter() {
  const md = await getMarkdownData("Central de Ajuda da CazaTech.md");
  return (
    <BlogTemplate
      frontmatter={{ title: "Central de Ajuda" }}
      contentHtml={md.contentHtml}
      backHref="/informacoes-legais"
      backLabel="Voltar"
    />
  );
}