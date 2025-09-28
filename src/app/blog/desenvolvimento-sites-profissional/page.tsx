import { processMarkdown, readMarkdownFile } from "@/lib/markdown";

export const metadata = {
  title: "Como um Site Profissional Impulsiona Seu Negócio e Vendas Online",
  description: "Descubra como um site profissional pode transformar sua presença digital e impulsionar suas vendas online com estratégias eficazes.",
};

export default function BlogPost() {
  const markdownContent = readMarkdownFile("Desenvolvimento de Sites_ Como um Site Profissional Impulsiona Seu Negócio e Vendas Online.md");
  const htmlContent = processMarkdown(markdownContent);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <article className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-700">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </article>
        
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border">
          <h3 className="text-lg font-semibold mb-3">Pronto para criar seu site profissional?</h3>
          <p className="text-gray-600 mb-4">
            A CazaTech desenvolve sites que realmente convertem visitantes em clientes. 
            Entre em contato e vamos transformar sua presença digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/5535998026821?text=Olá! Quero desenvolver um site profissional"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
