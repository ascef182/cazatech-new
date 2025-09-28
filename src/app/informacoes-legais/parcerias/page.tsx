import BlogTemplate from "@/components/BlogTemplate";
import { getMarkdownData } from "@/lib/markdown";

export const metadata = {
  title: "Parcerias - CazaTech",
  description: "Programa de parcerias e afiliados da CazaTech",
};

export default async function Partnerships() {
  const md = await getMarkdownData("Parcerias CazaTech.md");
  return (
    <BlogTemplate
      frontmatter={{ title: "" }}
      contentHtml={md.contentHtml}
      backHref="/informacoes-legais"
      backLabel="Voltar"
    />
  );
}
