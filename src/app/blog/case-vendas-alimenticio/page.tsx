"use client";
import Image from "next/image";
import BlogArticle from "@/components/ui/blog-article";

export default function PostPage() {
  // Dados do post diretamente na página
  const post = {
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
      <article>
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
