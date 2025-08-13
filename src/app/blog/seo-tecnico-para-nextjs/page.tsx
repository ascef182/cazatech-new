import Link from "next/link";

export default function Post() {
  return (
    <article className="container py-12 md:py-20 prose prose-neutral dark:prose-invert max-w-3xl">
      <Link href="/blog" className="text-sm text-muted-foreground">
        ← Voltar
      </Link>
      <h1>SEO Técnico para Next.js: Checklist 2024</h1>
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
    </article>
  );
}
