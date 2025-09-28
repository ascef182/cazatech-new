import { processMarkdown, readMarkdownFile } from "@/lib/markdown";

export const metadata = {
  title: "Política de Privacidade - CazaTech",
  description: "Política de privacidade e proteção de dados da CazaTech",
};

export default function PrivacyPolicy() {
  const markdownContent = readMarkdownFile("Política de Privacidade da CazaTech.md");
  const htmlContent = processMarkdown(markdownContent);

  return (
    <article className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-700">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="font-medium text-blue-800 mb-2">
          📧 Contato - Encarregado de Dados
        </h4>
        <p className="text-sm text-blue-700">
          Para exercer seus direitos ou esclarecer dúvidas sobre esta política:
        </p>
        <p className="text-sm text-blue-700 mt-1">
          E-mail: support@caza-tech.com
        </p>
      </div>

      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-500">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Esta política está em conformidade com a LGPD (Lei 13.709/2018)
        </p>
      </div>
    </article>
  );
}