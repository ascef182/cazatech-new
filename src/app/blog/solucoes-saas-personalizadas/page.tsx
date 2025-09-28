import { processMarkdown, readMarkdownFile } from "@/lib/markdown";

export const metadata = {
  title: "Soluções SaaS Personalizadas: O Futuro da Otimização de Processos Empresariais",
  description: "Explore como soluções SaaS personalizadas podem revolucionar a gestão empresarial e impulsionar a eficiência operacional.",
};

export default function BlogPost() {
  const markdownContent = readMarkdownFile("Soluções SaaS Personalizadas_ O Futuro da Otimização de Processos Empresariais.md");
  const htmlContent = processMarkdown(markdownContent);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <article className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-700">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </article>
        
        <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border">
          <h3 className="text-lg font-semibold mb-3">Precisa de uma solução SaaS personalizada?</h3>
          <p className="text-gray-600 mb-4">
            A CazaTech desenvolve soluções SaaS sob medida para otimizar seus processos empresariais. 
            Vamos conversar sobre suas necessidades específicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/5535998026821?text=Olá! Quero uma solução SaaS personalizada"
              className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition font-medium"
            >
              Solicitar Proposta
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
