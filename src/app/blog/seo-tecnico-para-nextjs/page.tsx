"use client";
import BlogArticle from "@/components/ui/blog-article";

export default function Post() {
  return (
    <BlogArticle
      title="SEO Técnico para Next.js: Checklist 2024"
      category="Tecnologia"
      date="12 Abril 2024"
      readTime="5 min"
    >
      <p>
        Melhore Core Web Vitals, utilize metadados, sitemap e schema markup.
      </p>
      <h2>Performance</h2>
      <ul>
        <li>Otimize imagens (Next/Image, formatos modernos)</li>
        <li>Evite JS desnecessário (lazy/dynamic imports)</li>
        <li>Cache e CDN</li>
      </ul>
      <h2>Metadados e OpenGraph</h2>
      <p>Use metadata no App Router para cada página crítica.</p>
      <h2>Schema</h2>
      <p>Adicione JSON-LD para Article, Product, Breadcrumb.</p>
    </BlogArticle>
  );
}
