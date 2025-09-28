import { processMarkdown, readMarkdownFile } from "@/lib/markdown";

export const metadata = {
  title: "Política de Reembolso - CazaTech",
  description: "Política de reembolso e cancelamento dos serviços da CazaTech",
};

export default function RefundPolicy() {
  const markdownContent = readMarkdownFile("Política de Reembolso da CazaTech.md");
  const htmlContent = processMarkdown(markdownContent);

  return (
    <article className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-700">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="font-medium text-blue-800 mb-2">💡 Importante</h4>
        <p className="text-sm text-blue-700">
          Antes de solicitar reembolso, entre em contato conosco. Muitas vezes
          podemos resolver questões através de ajustes no projeto.
        </p>
      </div>

      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-500">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Contato: support@caza-tech.com
        </p>
      </div>
    </article>
  );
}