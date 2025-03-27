import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiCalendar, FiClock, FiTag, FiArrowLeft } from "react-icons/fi";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  content: string;
}

const getPost = async (slug: string): Promise<BlogPost | null> => {
  // Simulação de banco de dados
  await new Promise((resolve) => setTimeout(resolve, 100));

  const posts: BlogPost[] = [
    {
      id: "conteudo-educativo-linkedin",
      title: "O Poder do Conteúdo Educativo no LinkedIn em 2024",
      excerpt:
        "Como estabelecer autoridade no seu setor através de posts educativos no LinkedIn e gerar leads qualificados.",
      category: "Social Media",
      date: "1 Maio 2024",
      readTime: "4 min",
      image:
        "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      author: {
        name: "Ana Souza",
        role: "Especialista em Social Media B2B",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      tags: ["LinkedIn", "Marketing B2B", "Conteúdo Educativo"],
      content: `
<article>
  <h1>O Poder do LinkedIn em 2024: Como se Destacar na Principal Rede Profissional</h1>
  
  <p>Em 2024, o LinkedIn consolidou-se como a plataforma indispensável para profissionais que buscam <strong>visibilidade, networking e oportunidades de negócios</strong>. Com atualizações em seu algoritmo, a rede prioriza <strong>conteúdo educativo</strong> e recompensa quem compartilha conhecimento relevante.</p>
  
  <div class="bg-primary/5 p-4 rounded-lg border-l-4 border-primary mb-6">
    <p class="font-semibold">📌 Neste artigo, você vai aprender:</p>
    <ul class="mt-2 space-y-2">
      <li><strong>✔ Como o novo algoritmo do LinkedIn funciona</strong> (e como aproveitá-lo)</li>
      <li><strong>✔ 3 estratégias comprovadas</strong> para aumentar seu alcance</li>
      <li><strong>✔ Erros comuns</strong> que prejudicam sua visibilidade</li>
      <li><strong>✔ Case real</strong>: como um consultor gerou +15 oportunidades em 3 meses</li>
    </ul>
  </div>

  <h2>1. O Algoritmo do LinkedIn em 2024: As Mudanças Chave</h2>
  
  <p>O LinkedIn está priorizando:</p>
  
  <ul class="space-y-2">
    <li><span class="emoji">📌</span> <strong>Conteúdo educativo</strong> (guias, tutoriais, insights acionáveis)</li>
    <li><span class="emoji">📌</span> <strong>Interações profundas</strong> (comentários > curtidas)</li>
    <li><span class="emoji">📌</span> <strong>Publicações longas</strong> (posts com 1.500+ caracteres têm +37% de alcance)</li>
    <li><span class="emoji">📌</span> <strong>Consistência</strong> (perfis ativos semanalmente são favorecidos)</li>
  </ul>
  
  <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg my-6">
    <p><strong>🚀 Dado crucial:</strong> Profissionais que compartilham conhecimento estratégico <strong>ganham até 3x mais visibilidade</strong> que perfis focados em autopromoção.</p>
  </div>

  <h2>2. Estratégias para se Destacar em 2024</h2>

  <div class="grid md:grid-cols-2 gap-6 my-6">
    <div class="bg-background p-4 rounded-lg border border-border">
      <h3 class="font-semibold mb-2">📌 Conteúdo Educativo</h3>
      <p><strong>Exemplo ruim:</strong> <em>"Contrate meus serviços!"</em></p>
      <p><strong>Exemplo bom:</strong> <em>"3 erros que profissionais cometem no LinkedIn (e como corrigi-los)"</em></p>
    </div>
    
    <div class="bg-background p-4 rounded-lg border border-border">
      <h3 class="font-semibold mb-2">📌 Vídeos Curtos</h3>
      <p>Posts com vídeo têm <strong>5x mais alcance</strong>. Grave dicas em 30-60 segundos.</p>
    </div>
  </div>

  <h2>3. Erros que Arruinam Seu Alcance</h2>
  
  <div class="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg my-4">
    <ul class="space-y-2">
      <li><span class="emoji">❌</span> <strong>Autopromoção excessiva</strong> (O LinkedIn penaliza conteúdo muito comercial)</li>
      <li><span class="emoji">❌</span> <strong>Hashtags irrelevantes</strong> (Use no máximo 3-5 por post)</li>
      <li><span class="emoji">❌</span> <strong>Links externos</strong> (O algoritmo prefere conteúdo nativo)</li>
    </ul>
  </div>

  <h2>4. Case Prático: +15 Oportunidades em 3 Meses</h2>
  
  <div class="bg-green-50 dark:bg-green-900/10 p-6 rounded-xl my-6">
    <h3 class="font-semibold mb-2">📈 Estratégia usada por João Silva (Consultor de Marketing):</h3>
    <ul class="space-y-2">
      <li>✔ <strong>1 guia semanal</strong> com tutoriais práticos</li>
      <li>✔ <strong>2 vídeos curtos</strong> por semana</li>
      <li>✔ <strong>Interações diárias</strong> em posts estratégicos</li>
    </ul>
    <p class="mt-4 font-semibold">👉 Resultado: <strong>+5.000 seguidores</strong> e <strong>15 oportunidades de negócios</strong>.</p>
  </div>
</article>


      `,
    },
    {
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
      
      <div class="bg-primary/5 p-4 rounded-lg border-l-4 border-primary mb-6">
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
        <p><strong>🚀 Dato crucial:</strong> Profissionais que usam IA geram <strong>3x mais conteúdo</strong> com a mesma equipe.</p>
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
    },
    {
      id: "case-vendas-alimenticio",
      title: "Case de Sucesso: Como Aumentamos as Vendas em 300%",
      excerpt:
        "O processo completo que usamos para transformar os resultados de um cliente do setor alimentício.",
      category: "Cases",
      date: "17 Abril 2024",
      readTime: "8 min",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      author: {
        name: "Juliana Lima",
        role: "Consultora de Growth Marketing",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      },
      tags: ["Case", "Vendas", "Resultados", "Setor Alimentício"],
      content: `
       <h2>O Desafio Inicial</h2>
        <p>Uma rede de cafeterias premium com 5 unidades enfrentava:</p>
        <ul>
          <li>Vendas estagnadas há 2 anos</li>
          <li>Taxa de conversão do site em 1.2%</li>
          <li>Alto custo por lead (R$ 38,50)</li>
          <li>Falta de automação no marketing</li>
        </ul>

        <h2>A Estratégia Implementada</h2>
        
        <h3>1. Redesenho Completo da Jornada do Cliente</h3>
        <div class="bg-accent/10 p-4 rounded-lg my-4">
          <ul>
            <li>Landing page otimizada (conversão saltou para 5.8%)</li>
            <li>Sequência de e-mails automatizada com gatilhos comportamentais</li>
            <li>Campanhas de remarketing segmentadas</li>
          </ul>
        </div>
        
        <h3>2. Conteúdo Educativo nas Redes Sociais</h3>
        <p>Criamos a série "A Arte do Café Especial" no Instagram com:</p>
        <ul>
          <li>Posts diários com curiosidades sobre grãos</li>
          <li>Reels mostrando o processo de preparo</li>
          <li>Stories interativos com quizzes sobre café</li>
        </ul>

        <h3>3. Programa de Fidelidade Digital</h3>
        <p>Implementamos um sistema que recompensava:</p>
        <div class="grid md:grid-cols-3 gap-4 my-6">
          <div class="bg-background p-4 rounded-lg border border-border">
            <p class="text-xl font-bold text-primary">+15%</p>
            <p class="text-sm">de retenção de clientes</p>
          </div>
          <div class="bg-background p-4 rounded-lg border border-border">
            <p class="text-xl font-bold text-primary">2.5x</p>
            <p class="text-sm">mais visitas às unidades</p>
          </div>
        </div>

        <h2>Resultados Alcançados em 6 Meses</h2>
        <table class="w-full my-6 border-collapse">
          <thead>
            <tr class="bg-accent/10">
              <th class="p-3 text-left border-b">Métrica</th>
              <th class="p-3 text-left border-b">Antes</th>
              <th class="p-3 text-left border-b">Depois</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="p-3">Vendas Mensais</td>
              <td class="p-3">R$ 120k</td>
              <td class="p-3 font-bold">R$ 480k</td>
            </tr>
            <tr class="border-b">
              <td class="p-3">Custo por Lead</td>
              <td class="p-3">R$ 38,50</td>
              <td class="p-3 font-bold">R$ 12,20</td>
            </tr>
            <tr class="border-b">
              <td class="p-3">Seguidores no Instagram</td>
              <td class="p-3">1.200</td>
              <td class="p-3 font-bold">8.700</td>
            </tr>
          </tbody>
        </table>

        <div class="bg-primary/10 p-6 rounded-xl my-8 border border-primary/20">
          <h3 class="text-lg font-semibold mb-3">Lições Aprendidas</h3>
          <p>Este caso demonstra como <strong>conteúdo educativo</strong> combinado com <strong>automação estratégica</strong> pode transformar negócios tradicionais. O segredo foi:</p>
          <ul class="mt-2">
            <li>Entender profundamente o público-alvo</li>
            <li>Criar conteúdo que educa e entrega valor</li>
            <li>Automatizar processos sem perder a autenticidade</li>
          </ul>
        </div>
      `,
    },
  ];

  return posts.find((post) => post.id === slug) || null;
};

interface PageProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="container py-8 md:py-12 relative">
      {/* Botão de Voltar */}
      <div className="absolute right-4 top-[var(--header-height)] z-50 md:right-8">
        <Link
          href="/blog"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          aria-label="Voltar para todos os artigos"
        >
          <FiArrowLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        </Link>
      </div>

      {/* Cabeçalho do Post */}
      <div className="max-w-3xl mx-auto mb-12">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
          {post.category}
        </span>

        <h1 className="text-3xl md:text-[2.5rem] font-bold leading-tight mb-6">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 mb-8">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <p className="font-medium">{post.author.name}</p>
            <div className="flex gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <FiCalendar size={14} /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <FiClock size={14} /> {post.readTime} de leitura
              </span>
            </div>
          </div>
        </div>

        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={630}
          className="rounded-xl w-full aspect-video object-cover mb-8"
          priority
        />
      </div>

      {/* Conteúdo do Post */}
      <div className="max-w-2xl mx-auto">
        <div
          className="prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Rodapé do Post */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between gap-6 items-start">
            <div>
              <h3 className="text-lg font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tags/${tag.toLowerCase()}`}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 text-sm font-medium hover:bg-accent/30 transition"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-end">
              <h3 className="text-lg font-semibold mb-3">Compartilhe</h3>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Compartilhar no LinkedIn"
                >
                  <FaLinkedin className="h-4 w-4 text-blue-600" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Compartilhar no Twitter"
                >
                  <FaTwitter className="h-4 w-4 text-blue-400" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Compartilhar no Facebook"
                >
                  <FaFacebook className="h-4 w-4 text-blue-800" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
