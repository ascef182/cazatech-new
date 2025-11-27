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
}

export const cases: CaseStudy[] = [
  {
    id: "clinica-estetica-sp",
    title: "Instituto seu Olhar - Ecossistema Digital Completo",
    client: "Instituto seu Olhar",
    category: "Saúde & Tech",
    challenge:
      "A clínica sofria com processos manuais descentralizados e uma presença digital que não refletia sua autoridade técnica.",
    solution:
      "Desenvolvimento de portal web premium integrado à Secretária v3, automatizando 100% do fluxo de agendamento e triagem de pacientes.",
    results: {
      conversions: "+300% agendamentos",
      timeToContact: "Imediato (24/7)",
      revenue: "+R$ 150k/mês",
      other: "Retenção de 95%",
    },
    testimonial: {
      quote:
        "A CazaTech não entregou apenas um site, mas um sistema operacional que roda nossa clínica automaticamente.",
      author: "Dra. Fernanda Oliveira",
      company: "Instituto seu Olhar",
      position: "Diretora Médica",
    },
    image: "/templates/instituto-website.png",
    tags: ["Next.js", "n8n", "Saúde", "Automação"],
    featured: true,
  },
  {
    id: "ecommerce-moda-feminina",
    title: "AI Platform - SaaS B2B Scalable",
    client: "AI Experience Platform",
    category: "SaaS & IA",
    challenge:
      "Necessidade de validar um MVP de inteligência artificial para o mercado corporativo com alta exigência de performance.",
    solution:
      "Construção de plataforma SaaS multi-tenant com arquitetura serverless, garantindo escala automática e segurança de dados.",
    results: {
      conversions: "450+ Empresas",
      timeToContact: "Self-service",
      revenue: "R$ 280k MRR",
      other: "Churn < 2%",
    },
    testimonial: {
      quote:
        "A arquitetura proposta pela CazaTech nos permitiu escalar de 10 para 400 clientes sem mudar uma linha de código.",
      author: "Ricardo Almeida",
      company: "AI Experience Platform",
      position: "CTO",
    },
    image: "/templates/hype-website.webp",
    tags: ["SaaS", "IA", "Cloud", "B2B"],
    featured: true,
  },
  {
    id: "consultoria-financeira",
    title: "GARM - E-commerce Headless High-End",
    client: "GARM Store",
    category: "E-commerce",
    challenge:
      "O cliente precisava de uma experiência de compra ultrarrápida e personalizada que plataformas padrão não ofereciam.",
    solution:
      "E-commerce Headless com Next.js e Shopify, integrado a um checkout transparente e automação de pós-venda no WhatsApp.",
    results: {
      conversions: "Tx. Conv. 4.5%",
      timeToContact: "Automático",
      revenue: "+R$ 420k/mês",
      other: "LCP < 1.2s",
    },
    testimonial: {
      quote:
        "A velocidade do site e a automação de recuperação de carrinho mudaram o jogo do nosso faturamento.",
      author: "Gabriel Martins",
      company: "GARM Store",
      position: "Founder",
    },
    image: "/templates/garm-website.webp",
    tags: ["E-commerce", "Headless", "Performance"],
    featured: true,
  },
  {
    id: "restaurante-delivery",
    title: "Fitness Academy - Gestão de Assinaturas",
    client: "Fitness & GYM Academy",
    category: "Gestão & CRM",
    challenge:
      "Alta inadimplência e dificuldade na gestão manual de centenas de planos de assinatura recorrente.",
    solution:
      "Portal do aluno com gestão financeira automatizada (Asaas), controle de acesso e réguas de cobrança inteligentes.",
    results: {
      conversions: "+280% novos alunos",
      timeToContact: "Suporte IA",
      revenue: "Inadimplência 0%",
      other: "Gestão 100% Auto",
    },
    testimonial: {
      quote:
        "O sistema cobra, libera a catraca e avisa o aluno. Eu voltei a focar em treinar pessoas, não em cobrar boletos.",
      author: "Eduardo Ferreira",
      company: "Fitness & GYM Academy",
      position: "Proprietário",
    },
    image: "/templates/website-gym.webp",
    tags: ["CRM", "Fintech", "Gestão"],
    featured: false,
  },
  {
    id: "imobiliaria-luxo",
    title: "CloudTech - Infraestrutura Crítica",
    client: "CloudTech Solutions",
    category: "DevOps & Cloud",
    challenge:
      "Monitoramento e segurança de uma operação financeira que não podia ter downtime.",
    solution:
      "Implementação de esteira CI/CD, monitoramento em tempo real e arquitetura de microsserviços resiliente.",
    results: {
      conversions: "Uptime 99.99%",
      timeToContact: "N/A",
      revenue: "Segurança Total",
      other: "Zero Incidentes",
    },
    testimonial: {
      quote:
        "Dormimos tranquilos sabendo que a infraestrutura montada pela CazaTech segura qualquer pico de tráfego.",
      author: "André Silva",
      company: "CloudTech Solutions",
      position: "VP Engineering",
    },
    image: "/templates/clario-website.webp",
    tags: ["DevOps", "Cloud", "Security"],
    featured: false,
  },
];
