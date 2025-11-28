import BlogTemplate from "@/components/BlogTemplate";
import { getLegalDocument } from "@/lib/markdown";

export const metadata = {
  title: "Parcerias - CazaTech",
  description: "Programa de parcerias e afiliados da CazaTech",
};

export default async function Partnerships() {
  const md = await getLegalDocument("parcerias");
  return (
    <BlogTemplate
      frontmatter={{ title: "" }}
      contentHtml={md.contentHtml}
      backHref="/informacoes-legais"
      backLabel="Voltar"
    />
  );
}
