"use client";
import Link from "next/link";
import Image from "next/image";
import { FiCalendar, FiClock, FiTag, FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";

// Dados dos posts com conteúdo mais estratégico e relevante
const recentPosts = [
  {
    id: "automacao-whatsapp-resultados-comprovados",
    title: "Automação WhatsApp: Como Triplicar Vendas em 30 Dias",
    excerpt:
      "Estratégia completa para implementar automação WhatsApp que gera resultados mensuráveis. Cases reais e ROI comprovado.",
    category: "Automação",
    date: "15 Dezembro 2024",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=800&auto=format&fit=crop",
    tags: ["WhatsApp", "Automação", "ROI", "Vendas"],
  },
  {
    id: "chatbots-inteligentes-qualificacao-leads",
    title: "Chatbots Inteligentes: Qualificação de Leads que Converte",
    excerpt:
      "Como criar fluxos de qualificação automática que identificam leads prontos para comprar e aumentam a taxa de fechamento.",
    category: "Automação",
    date: "10 Dezembro 2024",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop",
    tags: ["Chatbot", "Qualificação", "Leads", "IA"],
  },
  {
    id: "case-clinica-estetica-400-agendamentos",
    title: "Case Real: Clínica Aumentou Agendamentos em 400%",
    excerpt:
      "Como uma clínica de estética saiu de 20 para 100 agendamentos mensais usando automação WhatsApp. Processo completo revelado.",
    category: "Cases",
    date: "5 Dezembro 2024",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=800&auto=format&fit=crop",
    tags: ["Case", "Saúde", "Agendamentos", "Resultados"],
  },
  {
    id: "funis-conversao-whatsapp-2024",
    title: "Funis de Conversão WhatsApp: Guia Definitivo 2024",
    excerpt:
      "Estrutura passo a passo para criar funis que convertem visitantes em clientes pagantes via WhatsApp. Templates inclusos.",
    category: "Estratégia",
    date: "28 Novembro 2024",
    readTime: "12 min",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    tags: ["Funis", "Conversão", "WhatsApp", "Templates"],
  },
  {
    id: "integracao-crm-whatsapp-vendas",
    title: "Integração CRM + WhatsApp: Vendas em Escala",
    excerpt:
      "Como integrar seu CRM com automação WhatsApp para escalar vendas sem perder o toque pessoal. Ferramentas e implementação.",
    category: "Tecnologia",
    date: "20 Novembro 2024",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tags: ["CRM", "Integração", "Vendas", "Escala"],
  },
  {
    id: "metricas-automacao-whatsapp-kpis",
    title: "Métricas que Importam: KPIs para Automação WhatsApp",
    excerpt:
      "Quais métricas acompanhar para otimizar sua automação WhatsApp e maximizar ROI. Dashboard e relatórios essenciais.",
    category: "Analytics",
    date: "12 Novembro 2024",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tags: ["Métricas", "KPIs", "ROI", "Analytics"],
  },
];

const categories = [
  { name: "Automação", count: 15 },
  { name: "Cases", count: 8 },
  { name: "Estratégia", count: 6 },
  { name: "Tecnologia", count: 4 },
  { name: "Analytics", count: 3 },
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
            Estratégias práticas de automação WhatsApp, cases reais e insights para multiplicar seus resultados.
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
                  <span key={cat.name} className="px-3 py-1 text-xs bg-accent rounded-full">
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
                          <Link href={`/blog/${post.id}`}>
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
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
                            <span key={tag} className="px-2 py-1 text-xs bg-muted rounded">
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
                  <div key={cat.name} className="flex items-center justify-between py-2 hover:bg-accent rounded-md px-2 transition-colors cursor-pointer">
                    <span className="text-sm">{cat.name}</span>
                    <span className="text-xs bg-muted px-2 py-1 rounded">{cat.count}</span>
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
                href="https://wa.me/5535998026821?text=Olá! Vi o blog e quero automatizar meu WhatsApp"
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
