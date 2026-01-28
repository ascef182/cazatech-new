export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  challenge: string;
  solution: string;
  results: {
    conversions: string;
    timeToContact: string;
    revenue?: string;
    other?: string;
  };
  testimonial: {
    quote: string;
    author: string;
    company: string;
    position: string;
  };
  image: string;
  tags: string[];
  featured?: boolean;
  // New fields for better presentation
  shortDesc?: string;
  deliverables?: string[];
  duration?: string;
  stack?: string[];
}

export const cases: CaseStudy[] = [
  {
    id: "instituto-seu-olhar",
    title: "Instituto Seu Olhar — Site + Secretária V3",
    client: "Instituto Seu Olhar",
    category: "Saúde & Automação",
    shortDesc: "Ecossistema digital completo: site premium + atendimento automatizado 24/7 via WhatsApp com agendamento, cobrança PIX e ligações automáticas.",
    challenge:
      "Clínica de oftalmologia com processos manuais: agendamentos por telefone, confirmações manuais, alta taxa de no-show (40%) e equipe sobrecarregada respondendo as mesmas perguntas no WhatsApp.",
    solution:
      "Desenvolvimento de site institucional premium integrado à Secretária V3 — sistema completo com 13 workflows N8N que automatiza todo o fluxo: WhatsApp com IA, agendamento Google Calendar, cobrança PIX via Asaas, lembretes automáticos e escalação inteligente para humanos.",
    deliverables: [
      "Site institucional Next.js com SEO otimizado",
      "Secretária V3 com 13 workflows integrados",
      "Integração WhatsApp Business API oficial",
      "Agendamento automático Google Calendar",
      "Cobrança PIX automática (Asaas)",
      "Ligações automáticas (Retell AI)",
      "Dashboard de métricas em tempo real"
    ],
    duration: "6 semanas",
    stack: ["Next.js", "N8N", "PostgreSQL", "Asaas", "Retell AI", "OpenAI"],
    results: {
      conversions: "+300%",
      timeToContact: "24/7 Automático",
      revenue: "+R$150k/mês",
      other: "No-show: 40% → 5%",
    },
    testimonial: {
      quote:
        "A CazaTech não entregou apenas um site, mas um sistema operacional que roda nossa clínica automaticamente. Reduzi minha equipe de atendimento de 3 pessoas para 1.",
      author: "Dra. Fernanda Oliveira",
      company: "Instituto Seu Olhar",
      position: "Diretora Médica",
    },
    image: "/templates/instituto-website.png",
    tags: ["Next.js", "N8N", "Saúde", "Automação", "WhatsApp"],
    featured: true,
  },
  {
    id: "ai-experience-platform",
    title: "AI Platform — SaaS B2B Multi-tenant",
    client: "AI Experience Platform",
    category: "SaaS & IA",
    shortDesc: "Plataforma SaaS multi-tenant para empresas, com arquitetura serverless, dashboard analytics, cobrança recorrente e API documentada.",
    challenge:
      "Startup de IA precisava validar MVP para mercado corporativo com exigência de alta performance, segurança de dados e capacidade de escalar de 10 para 1.000+ clientes sem refatoração.",
    solution:
      "Arquitetura SaaS multi-tenant com isolamento de dados por empresa, autenticação SSO, dashboard de métricas em tempo real, cobrança recorrente Stripe e API REST completa com documentação Swagger.",
    deliverables: [
      "Plataforma SaaS multi-tenant",
      "Dashboard analytics em tempo real",
      "Autenticação SSO (Google, Microsoft)",
      "Cobrança recorrente Stripe",
      "API REST documentada (Swagger)",
      "Webhooks para integrações",
      "Painel admin white-label"
    ],
    duration: "12 semanas",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "OpenAI", "Vercel"],
    results: {
      conversions: "450+ empresas",
      timeToContact: "Self-service",
      revenue: "R$280k MRR",
      other: "Churn < 2%",
    },
    testimonial: {
      quote:
        "A arquitetura proposta pela CazaTech nos permitiu escalar de 10 para 450 clientes sem mudar uma linha de código. O sistema aguenta qualquer carga.",
      author: "Ricardo Almeida",
      company: "AI Experience Platform",
      position: "CTO",
    },
    image: "/templates/hype-website.webp",
    tags: ["SaaS", "IA", "Multi-tenant", "B2B", "Stripe"],
    featured: true,
  },
  {
    id: "garm-ecommerce",
    title: "GARM Store — E-commerce Headless High-End",
    client: "GARM Store",
    category: "E-commerce",
    shortDesc: "E-commerce headless ultrarrápido com Next.js + Shopify, checkout otimizado e automação de recuperação de carrinho via WhatsApp.",
    challenge:
      "Marca de moda premium com plataforma lenta (LCP > 4s), taxa de conversão abaixo do mercado (1.8%) e sem automação de pós-venda. Perdia vendas por abandono de carrinho.",
    solution:
      "E-commerce Headless com Next.js e Shopify Storefront API, checkout transparente otimizado para conversão, automação de recuperação de carrinho e pós-venda integrada ao WhatsApp.",
    deliverables: [
      "E-commerce Headless Next.js",
      "Integração Shopify Storefront API",
      "Checkout transparente otimizado",
      "Automação recuperação de carrinho",
      "Pós-venda WhatsApp automatizado",
      "SEO técnico e Schema.org",
      "Performance otimizada (LCP < 1.2s)"
    ],
    duration: "8 semanas",
    stack: ["Next.js", "Shopify", "N8N", "WhatsApp API", "Vercel"],
    results: {
      conversions: "4.5% tx. conversão",
      timeToContact: "Automático",
      revenue: "+R$420k/mês",
      other: "LCP: 4s → 1.2s",
    },
    testimonial: {
      quote:
        "A velocidade do site e a automação de recuperação de carrinho mudaram o jogo do nosso faturamento. Triplicamos as vendas em 3 meses.",
      author: "Gabriel Martins",
      company: "GARM Store",
      position: "Founder",
    },
    image: "/templates/garm-website.webp",
    tags: ["E-commerce", "Headless", "Performance", "Shopify"],
    featured: true,
  },
  {
    id: "fitness-academy",
    title: "Fitness Academy — Portal de Gestão com Asaas",
    client: "Fitness & GYM Academy",
    category: "Gestão & Fintech",
    shortDesc: "Sistema de gestão de assinaturas com cobrança recorrente automatizada, controle de acesso e réguas de cobrança inteligentes.",
    challenge:
      "Academia com 500+ alunos e alta inadimplência (35%), gestão manual de planos em planilhas, sem controle de acesso automatizado e equipe gastando horas cobrando boletos.",
    solution:
      "Portal do aluno com gestão financeira automatizada via Asaas, réguas de cobrança inteligentes (PIX, boleto, cartão), controle de acesso integrado e dashboard administrativo completo.",
    deliverables: [
      "Portal do aluno responsivo",
      "Gestão financeira Asaas",
      "Cobrança recorrente automatizada",
      "Réguas de cobrança inteligentes",
      "Controle de acesso (catraca)",
      "Dashboard administrativo",
      "Relatórios financeiros"
    ],
    duration: "6 semanas",
    stack: ["Next.js", "Node.js", "Asaas", "PostgreSQL", "N8N"],
    results: {
      conversions: "+280% novos alunos",
      timeToContact: "Suporte IA",
      revenue: "Inadimplência: 35% → 0%",
      other: "Gestão 100% automatizada",
    },
    testimonial: {
      quote:
        "O sistema cobra, libera a catraca e avisa o aluno automaticamente. Voltei a focar em treinar pessoas, não em cobrar boletos.",
      author: "Eduardo Ferreira",
      company: "Fitness Academy",
      position: "Proprietário",
    },
    image: "/templates/website-gym.webp",
    tags: ["Gestão", "Fintech", "Asaas", "Automação"],
    featured: false,
  },
  {
    id: "cloudtech-infra",
    title: "CloudTech — Infraestrutura Crítica AWS",
    client: "CloudTech Solutions",
    category: "DevOps & Cloud",
    shortDesc: "Infraestrutura cloud resiliente para operação financeira crítica com CI/CD, monitoramento em tempo real e zero downtime.",
    challenge:
      "Fintech processando milhões em transações sem tolerância a downtime, infraestrutura legacy com deploys manuais e sem monitoramento adequado de performance.",
    solution:
      "Migração para arquitetura de microsserviços AWS com esteira CI/CD completa (GitHub Actions), monitoramento Datadog, alertas inteligentes e disaster recovery automatizado.",
    deliverables: [
      "Arquitetura microsserviços AWS",
      "Esteira CI/CD GitHub Actions",
      "Monitoramento Datadog",
      "Alertas PagerDuty",
      "Disaster recovery automatizado",
      "Documentação de runbooks",
      "Treinamento da equipe"
    ],
    duration: "10 semanas",
    stack: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Datadog"],
    results: {
      conversions: "99.99% uptime",
      timeToContact: "N/A",
      revenue: "Zero incidentes",
      other: "Deploy: 4h → 15min",
    },
    testimonial: {
      quote:
        "Dormimos tranquilos sabendo que a infraestrutura montada pela CazaTech segura qualquer pico de tráfego. Zero downtime em 12 meses.",
      author: "André Silva",
      company: "CloudTech Solutions",
      position: "VP Engineering",
    },
    image: "/templates/clario-website.webp",
    tags: ["DevOps", "AWS", "Cloud", "Microsserviços"],
    featured: false,
  },
];
