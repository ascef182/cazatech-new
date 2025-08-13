import Link from "next/link";

export default function Post() {
  return (
    <article className="container py-12 md:py-20 prose prose-neutral dark:prose-invert max-w-3xl">
      <Link href="/blog" className="text-sm text-muted-foreground">
        ← Voltar
      </Link>
      <h1>Landing Pages que Convertem: 10 Princípios Essenciais</h1>
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
    </article>
  );
}
