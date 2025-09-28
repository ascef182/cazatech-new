import { processMarkdown, readMarkdownFile } from "@/lib/markdown";

export const metadata = {
  title: "Automação de Processos: Reduza Custos e Aumente a Eficiência com Tecnologia Inteligente",
  description: "Descubra como a automação de processos pode transformar sua empresa, reduzindo custos operacionais e aumentando a eficiência.",
};

export default function BlogPost() {
  const markdownContent = readMarkdownFile("Automação de Processos_ Reduza Custos e Aumente a Eficiência com Tecnologia Inteligente.md");
  const htmlContent = processMarkdown(markdownContent);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <article className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-700">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </article>
        
        <div className="mt-12 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border">
          <h3 className="text-lg font-semibold mb-3">Pronto para automatizar seus processos?</h3>
          <p className="text-gray-600 mb-4">
            A CazaTech implementa automações inteligentes que reduzem custos e aumentam a eficiência. 
            Vamos identificar as melhores oportunidades para seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/5535998026821?text=Olá! Quero automatizar meus processos empresariais"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
            <a
              href="/automacoes"
              className="inline-flex items-center justify-center px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition font-medium"
            >
              Ver Automações
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
