"use client";
import Link from "next/link";
import Image from "next/image";
import { FiCalendar, FiClock, FiTag, FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";

// Lista alinhada com as rotas reais existentes em /src/app/blog
const recentPosts = [
  {
    id: "desenvolvimento-sites-profissional",
    title: "Como um Site Profissional Impulsiona Seu Negócio e Vendas Online",
    excerpt:
      "Descubra como um site profissional pode transformar sua presença digital e impulsionar suas vendas online.",
    category: "Desenvolvimento",
    date: "20 Dezembro 2024",
    readTime: "12 min",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    tags: ["Sites", "Vendas"],
  },
  {
    id: "solucoes-saas-personalizadas",
    title: "Soluções SaaS Personalizadas: O Futuro da Otimização de Processos",
    excerpt:
      "Explore como soluções SaaS personalizadas podem revolucionar a gestão empresarial e impulsionar a eficiência operacional.",
    category: "SaaS",
    date: "18 Dezembro 2024",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tags: ["SaaS", "Processos"],
  },
  {
    id: "automacao-processos-empresariais",
    title: "Automação de Processos: Reduza Custos e Aumente a Eficiência",
    excerpt:
      "Descubra como a automação de processos pode transformar sua empresa, reduzindo custos operacionais e aumentando a eficiência.",
    category: "Automação",
    date: "16 Dezembro 2024",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800&auto=format&fit=crop",
    tags: ["Automação", "Eficiência"],
  },
  {
    id: "atendimento-automatizado-whatsapp",
    title: "Atendimento Automatizado no WhatsApp: Guia Completo",
    excerpt:
      "Como estruturar um funil de atendimento que qualifica leads e fecha vendas em escala.",
    category: "Automação",
    date: "15 Dezembro 2024",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1524749292158-7540c2494485?q=80&w=800&auto=format&fit=crop",
    tags: ["WhatsApp", "Automação"],
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
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800&auto=format&fit=crop",
    tags: ["Case", "Vendas"],
  },
  {
    id: "conteudo-educativo-linkedin",
    title: "O Poder do Conteúdo Educativo no LinkedIn em 2024",
    excerpt:
      "Como estabelecer autoridade no seu setor através de posts educativos no LinkedIn.",
    category: "Social Media",
    date: "1 Maio 2024",
    readTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=800&auto=format&fit=crop",
    tags: ["LinkedIn", "Conteúdo"],
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
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tags: ["Ferramentas", "Automação"],
  },
  {
    id: "seo-tecnico-para-nextjs",
    title: "SEO Técnico para Next.js: Checklist 2024",
    excerpt: "Melhore Core Web Vitals, metadados, sitemap e schema markup.",
    category: "Tecnologia",
    date: "12 Abril 2024",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tags: ["SEO", "Next.js"],
  },
  {
    id: "landing-pages-que-convertem",
    title: "Landing Pages que Convertem: 10 Princípios Essenciais",
    excerpt:
      "Os pilares que aumentam conversão em páginas de destino modernas.",
    category: "Estratégia",
    date: "8 Abril 2024",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    tags: ["CRO", "Landing Page"],
  },
];

const categories = [
  { name: "Automação", count: 18 },
  { name: "Desenvolvimento", count: 12 },
  { name: "SaaS", count: 10 },
  { name: "Cases", count: 8 },
  { name: "Estratégia", count: 6 },
  { name: "Tecnologia", count: 4 },
];

export default function BlogPage() {
  return (
    <div className="relative">
      {/* Hero moderno */}
      <section className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        </div>
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-white"
          >
            Blog CazaTech
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-white/70 max-w-2xl mx-auto"
          >
            Estratégias práticas de automação WhatsApp, cases reais e insights
            para multiplicar seus resultados.
          </motion.p>
        </div>
      </section>

      <div className="container relative -mt-8 md:-mt-12 pb-16">
        {/* Botão de Voltar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border hover:bg-accent transition-all duration-200 shadow-sm"
            aria-label="Voltar para a página inicial"
          >
            <FiArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Voltar ao início</span>
          </Link>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Recent Posts */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Artigos Recentes</h2>
              <div className="flex gap-2">
                {categories.slice(0, 3).map((cat) => (
                  <span
                    key={cat.name}
                    className="px-3 py-1 text-xs bg-accent rounded-full"
                  >
                    {cat.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              {recentPosts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-xl border bg-card hover:shadow-lg transition-all duration-300"
                >
                  <div className="md:flex">
                    <div className="md:w-80 h-48 md:h-56 relative overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 320px"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 text-xs font-medium bg-black/70 text-white rounded-md backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <FiCalendar className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FiClock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs bg-muted rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-xl border bg-card p-6"
            >
              <h3 className="font-bold mb-4">Categorias</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <div
                    key={cat.name}
                    className="flex items-center justify-between py-2 hover:bg-accent rounded-md px-2 transition-colors cursor-pointer"
                  >
                    <span className="text-sm">{cat.name}</span>
                    <span className="text-xs bg-muted px-2 py-1 rounded">
                      {cat.count}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-xl border bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 p-6"
            >
              <h3 className="font-bold mb-2">Pronto para Automatizar?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Implemente automação WhatsApp que realmente converte.
              </p>
              <Link
                href="https://wa.me/5511936205799?text=Olá! Vi o blog e quero automatizar meu WhatsApp"
                target="_blank"
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm font-medium"
              >
                Falar no WhatsApp
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
