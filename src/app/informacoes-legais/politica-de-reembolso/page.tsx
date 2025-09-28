import BlogTemplate from "@/components/BlogTemplate";
import { getMarkdownData } from "@/lib/markdown";

export const metadata = {
  title: "Política de Reembolso - CazaTech",
  description: "Política de reembolso e cancelamento dos serviços da CazaTech",
};

export default async function RefundPolicy() {
  const md = await getMarkdownData("Política de Reembolso da CazaTech.md");
  return (
    <BlogTemplate
      frontmatter={{ title: "" }}
      contentHtml={md.contentHtml}
      backHref="/informacoes-legais"
      backLabel="Voltar"
    />
  );
}
