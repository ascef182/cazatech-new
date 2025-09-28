import { processMarkdown, readMarkdownFile } from "@/lib/markdown";

export const metadata = {
  title: "Central de Ajuda - CazaTech",
  description: "Central de ajuda e suporte da CazaTech",
};

export default function HelpCenter() {
  const markdownContent = readMarkdownFile("Central de Ajuda da CazaTech.md");
  const htmlContent = processMarkdown(markdownContent);

  return (
    <article className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-700">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-3">
          💬 Não encontrou o que procurava?
        </h4>
        <p className="text-blue-700 mb-4">
          Nossa equipe está sempre disponível para ajudar. Entre em contato e
          resolveremos sua dúvida rapidamente!
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/5535998026821?text=Olá! Preciso de ajuda com"
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition text-sm font-medium"
          >
            Enviar E-mail
          </a>
        </div>
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