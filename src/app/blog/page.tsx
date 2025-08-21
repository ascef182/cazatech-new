"use client";
import Link from "next/link";
import Image from "next/image";
import { FiCalendar, FiClock, FiTag, FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";

// Dados dos posts - agora definidos como constante interna
const recentPosts = [
  {
    id: "conteudo-educativo-linkedin",
    title: "O Poder do Conteúdo Educativo no LinkedIn",
    excerpt:
      "Como estabelecer autoridade no seu setor através de posts educativos no LinkedIn.",
    category: "Social Media",
    date: "1 Maio 2024",
    readTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["LinkedIn", "Autoridade", "Conteúdo Educativo"],
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
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["Ferramentas", "Marketing Digital", "2024"],
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
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["Case", "Vendas", "Resultados"],
  },
  {
    id: "atendimento-automatizado-whatsapp",
    title: "Atendimento Automatizado no WhatsApp: Guia Completo",
    excerpt:
      "Como estruturar um funil de atendimento que qualifica leads e fecha vendas em escala.",
    category: "Automação",
    date: "12 Maio 2024",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1524749292158-7540c2494485?q=80&w=800&auto=format&fit=crop",
    tags: ["WhatsApp", "Automação", "Vendas"],
  },
  {
    id: "seo-tecnico-para-nextjs",
    title: "SEO Técnico para Next.js: Checklist 2024",
    excerpt:
      "Estratégias práticas para ranquear melhor: performance, meta tags, schema e sitemap.",
    category: "Tendências",
    date: "28 Maio 2024",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop",
    tags: ["SEO", "Next.js", "Performance"],
  },
  {
    id: "landing-pages-que-convertem",
    title: "Landing Pages que Convertem: 10 Princípios Essenciais",
    excerpt:
      "Do herói ao CTA: as escolhas de UX/UI que aumentam a taxa de conversão.",
    category: "Cases",
    date: "02 Junho 2024",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    tags: ["CRO", "UX", "UI"],
  },
];

const categories = [
  { name: "Automação", count: 12 },
  { name: "Social Media", count: 8 },
  { name: "Ferramentas", count: 5 },
  { name: "Cases", count: 7 },
  { name: "Tendências", count: 3 },
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
            className="text-4xl md:text-5xl font-extrabold"
          >
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Blog CazaTech
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-white/70 max-w-2xl mx-auto"
          >
            Conhecimento estratégico em automação, social media e marketing
            digital.
          </motion.p>
        </div>
      </section>

      <div className="container relative -mt-8 md:-mt-12 pb-16">
        {/* Botão de Voltar */}
        <div className="absolute left-4 -top-10 md:-top-14 z-50 md:left-0">
          <Link
            href="/"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            aria-label="Voltar para a página inicial"
          >
            <FiArrowLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </Link>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Recent Posts */}
          <div className="md:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold">Artigos Recentes</h2>

            {recentPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-md"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 h-48 md:h-auto relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <FiTag className="h-4 w-4" />
                      <span>{post.category}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      <Link
                        href={`/blog/${post.id}`}
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <FiCalendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiClock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter - Google Forms */}
            <div className="rounded-2xl border overflow-hidden">
              <div className="p-6 bg-card">
                <h2 className="text-2xl font-bold mb-2">
                  Assine nossa newsletter
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Receba os melhores conteúdos sobre marketing digital
                  diretamente no seu e-mail.
                </p>
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSebj7Az0IWKWTaRx0PYt8X8SC7atwWFdK0LAW8RoUvfjRdNcQ/viewform?embedded=true"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  className="rounded-md bg-white dark:bg-gray-900/50 border"
                >
                  Carregando…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
