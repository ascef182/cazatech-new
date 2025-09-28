import { processMarkdown, readMarkdownFile } from "@/lib/markdown";

export const metadata = {
  title: "Termos de Uso - CazaTech",
  description: "Termos de uso dos serviços da CazaTech",
};

export default function TermsOfUse() {
  const markdownContent = readMarkdownFile("Termos de Uso da CazaTech.md");
  const htmlContent = processMarkdown(markdownContent);

  return (
    <article className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-700">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-500">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Para dúvidas sobre estes termos, entre em contato:
          support@caza-tech.com
        </p>
      </div>
    </article>
  );
}
