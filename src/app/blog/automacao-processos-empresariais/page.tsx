"use client";
import BlogArticle from "@/components/ui/blog-article";

export default function BlogPost() {
  const post = {
    id: "automacao-processos-empresariais",
    title:
      "Automação de Processos: Reduza Custos e Aumente a Eficiência com Tecnologia Inteligente",
    excerpt:
      "Descubra como a automação de processos pode transformar sua empresa, reduzindo custos operacionais e aumentando a eficiência.",
    category: "Automação",
    date: "10 Janeiro 2024",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Roberto Santos",
      role: "Especialista em Automação de Processos",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    },
    tags: ["Automação", "Processos", "Eficiência", "Tecnologia"],
    content: `
      <article>
        <h2>Por que Automatizar Processos?</h2>
        <p>A automação de processos não é apenas uma tendência tecnológica - é uma necessidade competitiva. Empresas que automatizam reduzem custos operacionais em média 30% e aumentam a produtividade em 40%.</p>

        <h2>Principais Benefícios</h2>
        <ul>
          <li><strong>Redução de Custos:</strong> Eliminação de tarefas manuais repetitivas</li>
          <li><strong>Aumento de Produtividade:</strong> Equipe focada em atividades estratégicas</li>
          <li><strong>Melhor Qualidade:</strong> Menos erros humanos e maior consistência</li>
          <li><strong>Escalabilidade:</strong> Crescimento sem aumento proporcional de custos</li>
        </ul>

        <h2>Áreas que Mais se Beneficiam</h2>
        <p>Diferentes setores podem ser transformados pela automação:</p>
        <ul>
          <li>Atendimento ao cliente (chatbots e help desks)</li>
          <li>Processos administrativos (documentos e aprovações)</li>
          <li>Vendas e marketing (automação de campanhas)</li>
          <li>Operações (monitoramento e controle)</li>
        </ul>

        <div class="bg-primary/10 p-6 rounded-xl my-8 border border-primary/20">
          <h3 class="text-lg font-semibold mb-3">ROI Médio de Automação</h3>
          <p>Empresas que investem em automação veem retorno médio de <strong>383% no primeiro ano</strong>, segundo estudos da McKinsey.</p>
        </div>
      </article>
    `,
  };

  return (
    <BlogArticle
      title={post.title}
      category={post.category}
      date={post.date}
      readTime={post.readTime}
      image={{ src: post.image, alt: post.title }}
      author={post.author}
      html={post.content}
    />
  );
}
