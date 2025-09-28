import { processMarkdown, readMarkdownFile } from "@/lib/markdown";

export const metadata = {
  title: "Parcerias - CazaTech",
  description: "Programa de parcerias e afiliados da CazaTech",
};

export default function Partnerships() {
  const markdownContent = readMarkdownFile("Parcerias CazaTech.md");
  const htmlContent = processMarkdown(markdownContent);

  return (
    <article className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-700">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      
      <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg">
        <h4 className="font-semibold text-purple-800 mb-3">
          🚀 Pronto para começar?
        </h4>
        <p className="text-purple-700 mb-4">
          Junte-se ao nosso programa de parcerias e comece a gerar renda extra
          indicando nossos serviços de automação e desenvolvimento.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/5535998026821?text=Olá! Quero saber mais sobre o programa de parcerias da CazaTech"
            className="inline-flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero ser Parceiro
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition text-sm font-medium"
          >
            Mais Informações
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