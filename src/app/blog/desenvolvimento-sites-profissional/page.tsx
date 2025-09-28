"use client";
import BlogArticle from "@/components/ui/blog-article";

export default function BlogPost() {
  const post = {
    id: "desenvolvimento-sites-profissional",
    title: "Como um Site Profissional Impulsiona Seu Negócio e Vendas Online",
    excerpt:
      "Descubra como um site profissional pode transformar sua presença digital e impulsionar suas vendas online com estratégias eficazes.",
    category: "Desenvolvimento Web",
    date: "15 Março 2024",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Carlos Eduardo",
      role: "Especialista em Desenvolvimento Web",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    tags: ["Desenvolvimento", "Web", "Vendas", "Estratégias"],
    content: `
      <article>
        <h2>Por que um Site Profissional é Essencial</h2>
        <p>Em um mundo cada vez mais digital, o site da sua empresa é o primeiro ponto de contato com potenciais clientes. Estudos mostram que 75% dos consumidores julgam a credibilidade de uma empresa baseada na qualidade do seu site.</p>

        <h2>O que Define um Site Profissional</h2>
        <ul>
          <li><strong>Design Responsivo:</strong> Adaptável a todos os dispositivos</li>
          <li><strong>Velocidade de Carregamento:</strong> Menos de 3 segundos para não perder visitantes</li>
          <li><strong>Conteúdo Otimizado:</strong> Textos que convertem e informam</li>
          <li><strong>SEO Técnico:</strong> Encontrado facilmente no Google</li>
        </ul>

        <h2>Impacto nas Vendas</h2>
        <p>Um site bem estruturado pode aumentar suas vendas em até 200%. Como? Através de:</p>
        <ul>
          <li>Landing pages otimizadas para conversão</li>
          <li>Integração com ferramentas de automação</li>
          <li>Chatbots para atendimento 24/7</li>
          <li>Formulários de contato estratégicos</li>
        </ul>

        <div class="bg-primary/10 p-6 rounded-xl my-8 border border-primary/20">
          <h3 class="text-lg font-semibold mb-3">Resultado Comprovado</h3>
          <p>Clientes que investiram em sites profissionais viram um aumento médio de <strong>150% nas conversões</strong> em 6 meses.</p>
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
