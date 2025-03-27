import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Informações Legais - CazaTech",
  description: "Informações legais e documentos regulatórios",
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Informações Legais
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="md:w-1/4">
            <nav className="space-y-2">
              <Link
                href="/informacoes-legais/politica-de-privacidade"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/informacoes-legais/termos-de-uso"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
              >
                Termos de Uso
              </Link>
              <Link
                href="/informacoes-legais/faq"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
              >
                FAQ/Perguntas Frequentes
              </Link>
            </nav>
          </aside>

          {/* Conteúdo */}
          <main className="md:w-3/4">{children}</main>
        </div>
      </div>
    </div>
  );
}
