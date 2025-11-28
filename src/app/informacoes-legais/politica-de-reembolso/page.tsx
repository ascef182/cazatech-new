import BlogTemplate from "@/components/BlogTemplate";
import { getLegalDocument } from "@/lib/markdown";

export const metadata = {
  title: "Política de Reembolso - CazaTech",
  description: "Política de reembolso e cancelamento dos serviços da CazaTech",
};

export default async function RefundPolicy() {
  const md = await getLegalDocument("politica-de-reembolso");
  return (
    <BlogTemplate
      frontmatter={{ title: "" }}
      contentHtml={md.contentHtml}
      backHref="/informacoes-legais"
      backLabel="Voltar"
    />
  );
}
