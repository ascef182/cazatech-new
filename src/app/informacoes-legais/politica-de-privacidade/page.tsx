import BlogTemplate from "@/components/BlogTemplate";
import { getLegalDocument } from "@/lib/markdown";

export const metadata = {
  title: "Política de Privacidade - CazaTech",
  description: "Política de privacidade e proteção de dados da CazaTech",
};

export default async function PrivacyPolicy() {
  const md = await getLegalDocument("politica-de-privacidade");
  return (
    <BlogTemplate
      frontmatter={{ title: "" }}
      contentHtml={md.contentHtml}
      backHref="/informacoes-legais"
      backLabel="Voltar"
    />
  );
}
