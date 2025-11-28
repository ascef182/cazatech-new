import BlogTemplate from "@/components/BlogTemplate";
import { getLegalDocument } from "@/lib/markdown";

export const metadata = {
  title: "Central de Ajuda - CazaTech",
  description: "Central de ajuda e suporte da CazaTech",
};

export default async function HelpCenter() {
  const md = await getLegalDocument("central-de-ajuda");
  return (
    <BlogTemplate
      frontmatter={{ title: "Central de Ajuda" }}
      contentHtml={md.contentHtml}
      backHref="/informacoes-legais"
      backLabel="Voltar"
    />
  );
}