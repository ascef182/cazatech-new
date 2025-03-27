import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft, FiCalendar, FiClock, FiTag } from "react-icons/fi";

export default function PostPage() {
  // Dados do post diretamente na página
  const post = {
    id: "ferramentas-marketing-2024",
    title: "Ferramentas Essenciais para Marketing Digital em 2024",
    excerpt:
      "Conheça as ferramentas que vão potencializar suas estratégias digitais este ano.",
    category: "Ferramentas",
    date: "24 Abril 2024",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Carlos Mendes",
      role: "Especialista em Tecnologia Marketing",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    tags: ["Ferramentas", "Automação", "SEO"],
    content: `
      <article>
        <h1>As Ferramentas Que Todo Profissional de Marketing Precisa em 2024</h1>
        
        <p>Com as mudanças em algoritmos, privacidade e IA generativa, selecionamos as <strong>15 ferramentas</strong> que entregam resultados reais este ano. Baseado em análise de +200 cases de sucesso.</p>
        
        <div class="bg-primary/10 p-4 rounded-lg border-l-4 border-primary mb-6">
          <p class="font-semibold">📌 Neste guia:</p>
          <ul class="mt-2 space-y-2">
            <li><strong>✔ Ferramentas de IA</strong> para produtividade (testadas por profissionais)</li>
            <li><strong>✔ Plataformas de automação</strong> que valem o investimento</li>
            <li><strong>✔ Comparativo de custo-benefício</strong> (de gratuito a enterprise)</li>
            <li><strong>✔ Erros comuns</strong> na hora de escolher ferramentas</li>
          </ul>
        </div>
  
        <h2>1. Ferramentas de IA Generativa (Obrigatórias em 2024)</h2>
        
        <div class="grid md:grid-cols-2 gap-6 my-4">
          <div class="bg-background p-4 rounded-lg border border-border">
            <h3 class="font-semibold flex items-center gap-2">🎨 <span>ChatGPT-4o</span></h3>
            <p><strong>Para:</strong> Criação de roteiros, ideias de conteúdo e otimização de copy.</p>
            <p class="text-sm text-muted-foreground mt-2">👉 <strong>Dica:</strong> Use o modo "Advanced Data Analysis" para relatórios.</p>
          </div>
          
          <div class="bg-background p-4 rounded-lg border border-border">
            <h3 class="font-semibold flex items-center gap-2">📹 <span>HeyGen</span></h3>
            <p><strong>Para:</strong> Criar vídeos com avatares digitais (sem gravação).</p>
            <p class="text-sm text-muted-foreground mt-2">👉 <strong>Custo-benefício:</strong> 83% mais barato que produção tradicional.</p>
          </div>
        </div>
  
        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg my-6">
          <p><strong>🚀 Dado crucial:</strong> Profissionais que usam IA geram <strong>3x mais conteúdo</strong> com a mesma equipe.</p>
        </div>
  
        <h2>2. Automação de Marketing (Top 3 para Escalar)</h2>
        
        <table class="w-full my-4 border-collapse">
          <thead>
            <tr class="bg-accent/10">
              <th class="p-3 text-left border-b">Ferramenta</th>
              <th class="p-3 text-left border-b">Melhor Para</th>
              <th class="p-3 text-left border-b">Preço (Mensal)</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="p-3 font-semibold">ActiveCampaign</td>
              <td class="p-3">Automação de e-mails complexos</td>
              <td class="p-3">$49+</td>
            </tr>
            <tr class="border-b">
              <td class="p-3 font-semibold">Zapier</td>
              <td class="p-3">Integrar +5.000 apps</td>
              <td class="p-3">$19.99+</td>
            </tr>
            <tr class="border-b">
              <td class="p-3 font-semibold">Make (ex-Integromat)</td>
              <td class="p-3">Automações visuais avançadas</td>
              <td class="p-3">$9+</td>
            </tr>
          </tbody>
        </table>
  
        <h2>3. Ferramentas Grátis Que Valem Ouro</h2>
        
        <ul class="space-y-3 my-4">
          <li><span class="emoji">🔧</span> <strong>Canva</strong> (design rápido + novos templates de vídeo)</li>
          <li><span class="emoji">🔧</span> <strong>Google Trends</strong> (encontrar tópicos em alta)</li>
          <li><span class="emoji">🔧</span> <strong>ChatGPT-3.5</strong> (versão gratuita para ideias)</li>
        </ul>
  
        <div class="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg my-6">
          <h3 class="font-semibold mb-2">⚠️ Erros Comuns ao Escolher Ferramentas</h3>
          <ul class="space-y-2">
            <li><span class="emoji">❌</span> <strong>Assinar planos caros sem testar</strong> (sempre comece com trials)</li>
            <li><span class="emoji">❌</span> <strong>Ignorar integrações</strong> (verifique se conecta com seu CRM)</li>
            <li><span class="emoji">❌</span> <strong>Focar só em preço</strong> (ferramentas baratas podem custar caro em tempo)</li>
          </ul>
        </div>
  
        <h2>4. Case: Como Reduzimos Custos em 40% com as Ferramentas Certas</h2>
        
        <div class="bg-green-50 dark:bg-green-900/10 p-6 rounded-xl my-6">
          <h3 class="font-semibold mb-2">📈 Estratégia usada pela Agência GrowthHouse:</h3>
          <ul class="space-y-2">
            <li>✔ <strong>Substituíram</strong> 3 ferramentas por uma só (Make + ChatGPT)</li>
            <li>✔ <strong>Automatizaram</strong> 70% do atendimento ao cliente com IA</li>
            <li>✔ <strong>Redução</strong> de $2.300/mês em custos operacionais</li>
          </ul>
        </div>
      </article>
    `,
  };

  return (
    <div className="container py-12 md:py-20 relative max-w-4xl">
      {/* Botão de Voltar */}
      <div className="absolute right-4 top-[var(--header-height)] z-50 md:right-8">
        <Link
          href="/blog"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          aria-label="Voltar para o blog"
        >
          <FiArrowLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        </Link>
      </div>

      {/* Cabeçalho do Post */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <FiTag className="h-4 w-4" />
          <span>{post.category}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex justify-between items-center text-sm text-muted-foreground mb-8">
          <div className="flex items-center gap-2">
            <FiCalendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiClock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
      </div>

      {/* Conteúdo do Post */}
      <article
        className="prose dark:prose-invert max-w-none
                   prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
                   prose-p:my-4 prose-p:leading-relaxed
                   prose-ul:my-4 prose-li:my-1
                   prose-blockquote:border-l-primary prose-blockquote:border-l-4
                   prose-blockquote:bg-primary/10 prose-blockquote:px-4 prose-blockquote:py-2
                   prose-blockquote:rounded-r-lg
                   prose-a:text-primary hover:prose-a:underline
                   prose-strong:text-foreground
                   prose-img:rounded-lg prose-img:shadow-md
                   prose-table:w-full prose-table:border-collapse
                   prose-th:p-3 prose-th:text-left prose-th:border-b prose-th:bg-accent/10
                   prose-td:p-3 prose-td:border-b"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Seção do Autor */}
      <div className="mt-12 pt-6 border-t border-border">
        <div className="flex items-center gap-4">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={64}
            height={64}
            className="rounded-full"
          />
          <div>
            <h3 className="font-semibold">{post.author.name}</h3>
            <p className="text-sm text-muted-foreground">{post.author.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
