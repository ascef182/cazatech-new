"use client";
import BlogArticle from "@/components/ui/blog-article";

export default function Post() {
  return (
    <BlogArticle
      title="Landing Pages que Convertem: 10 Princípios Essenciais"
      category="Estratégia"
      date="8 Abril 2024"
      readTime="6 min"
    >
      <ol>
        <li>Hero claro com proposta de valor</li>
        <li>Prova social</li>
        <li>CTA destacado</li>
        <li>Benefícios objetivos</li>
        <li>Remoção de distrações</li>
        <li>Performance e acessibilidade</li>
        <li>Design responsivo</li>
        <li>Copy orientada a dor/ganho</li>
        <li>Garantias e FAQs</li>
        <li>Testes A/B</li>
      </ol>
    </BlogArticle>
  );
}
