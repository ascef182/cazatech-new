import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft, FiCalendar, FiClock, FiTag } from "react-icons/fi";

export default function PostPage() {
  // Dados do post diretamente na página
  const post = {
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
        <h2>O Poder do LinkedIn em 2024: Como se Destacar na Principal Rede Profissional</h2>
        
        <p>Em 2024, o LinkedIn consolidou-se como a plataforma indispensável para profissionais que buscam <strong>visibilidade, networking e oportunidades de negócios</strong>. Com atualizações em seu algoritmo, a rede prioriza <strong>conteúdo educativo</strong> e recompensa quem compartilha conhecimento relevante.</p>
        
        <div class="bg-primary/10 p-4 rounded-lg border-l-4 border-primary mb-6">
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
                   prose-img:rounded-lg prose-img:shadow-md"
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
