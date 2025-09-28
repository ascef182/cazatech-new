import BlogTemplate from "@/components/BlogTemplate";
import { getMarkdownData } from "@/lib/markdown";

export const metadata = {
  title: "Termos de Uso - CazaTech",
  description: "Termos de uso dos serviços da CazaTech",
};

export default async function TermsOfUse() {
  const md = await getMarkdownData("Termos de Uso da CazaTech.md");
  return (
    <BlogTemplate
      frontmatter={{ title: "" }}
      contentHtml={md.contentHtml}
      backHref="/informacoes-legais"
      backLabel="Voltar"
    />
  );
}
