export const metadata = {
  title: "Marketing Digital - Em Breve | CazaTech",
  description:
    "Nossa área de marketing digital está sendo finalizada. Em breve, estratégias completas para acelerar seu negócio online.",
};

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo ou ícone */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
        </div>

        {/* Título principal */}
        <h1
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif" }}
        >
          Em Breve!
        </h1>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Nossa área de{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-semibold">
            Marketing Digital
          </span>{" "}
          está sendo finalizada
        </p>

        {/* Descrição */}
        <div className="text-gray-400 mb-12 space-y-4">
          <p className="text-lg">
            Estamos preparando estratégias completas para acelerar seu negócio
            online:
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <h3 className="font-medium text-white mb-2">
                📈 Estratégia Digital
              </h3>
              <p>Planejamento completo para crescimento online</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <h3 className="font-medium text-white mb-2">
                🎯 Ads & Performance
              </h3>
              <p>Campanhas otimizadas para máximo ROI</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <h3 className="font-medium text-white mb-2">📱 Social Media</h3>
              <p>Gestão profissional de redes sociais</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <h3 className="font-medium text-white mb-2">
                📧 E-mail Marketing
              </h3>
              <p>Automações que nutrem e convertem</p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://wa.me/5535998026821?text=Olá! Quero saber mais sobre os serviços de marketing digital da CazaTech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
          >
            Falar com Especialista
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
          >
            Receber Novidades
          </a>
        </div>

        {/* Informação adicional */}
        <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
          <h3 className="font-semibold text-white mb-2">💡 Enquanto isso...</h3>
          <p className="text-gray-300 text-sm mb-4">
            Já oferecemos automação WhatsApp e desenvolvimento de sites que
            convertem. Quer acelerar suas vendas agora?
          </p>
          <div className="flex flex-col sm:flex-row gap-2 text-sm">
            <a
              href="/automacoes"
              className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-lg hover:bg-purple-600/30 transition"
            >
              Ver Automações
            </a>
            <a
              href="/works"
              className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-lg hover:bg-blue-600/30 transition"
            >
              Ver Projetos
            </a>
          </div>
        </div>

        {/* Volta ao início */}
        <div className="mt-12">
          <a
            href="/"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            ← Voltar ao início
          </a>
        </div>
      </div>

      {/* Efeito de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}

