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
    title: "Instituto seu Olhar - Site UI/UX + Automação WhatsApp",
    client: "Instituto seu Olhar",
    category: "Saúde & Estética",
    challenge:
      "Necessidade de um site profissional que transmitisse a identidade da clínica médica e agilizasse os agendamentos.",
    solution:
      "Site com UI/UX personalizado de acordo com a identidade visual da clínica, integrado com automação no WhatsApp para agendamentos e atendimento automatizado.",
    results: {
      conversions: "+300% agendamentos",
      timeToContact: "Atendimento instantâneo",
      revenue: "+R$ 150k/mês",
      other: "Zero perda de leads",
    },
    testimonial: {
      quote:
        "O site transmite exatamente nossa essência e a automação no WhatsApp revolucionou nossos agendamentos.",
      author: "Dra. Fernanda Oliveira",
      company: "Instituto seu Olhar",
      position: "Diretora",
    },
    image: "/templates/instituto-website.png",
    tags: ["site", "automação", "saúde"],
    featured: true,
  },
  {
    id: "ecommerce-moda-feminina",
    title: "Startup de IA - Experiências Personalizadas para Empresas",
    client: "AI Experience Platform",
    category: "Tecnologia & IA",
    challenge:
      "Startup precisava de um site profissional que transmitisse credibilidade e explicasse suas soluções de IA para empresas de médio porte.",
    solution:
      "Site moderno e profissional desenvolvido para apresentar suas experiências com IA de forma clara e atrativa para empresas.",
    results: {
      conversions: "+350% leads qualificados",
      timeToContact: "Conversões diretas",
      revenue: "+R$ 280k em contratos",
      other: "Captação de clientes enterprise",
    },
    testimonial: {
      quote:
        "O site transformou nossa presença digital. Agora empresas de médio porte nos procuram diariamente.",
      author: "Ricardo Almeida",
      company: "AI Experience Platform",
      position: "CEO",
    },
    image: "/templates/hype-website.webp",
    tags: ["site", "ia", "saas", "B2B"],
    featured: true,
  },
  {
    id: "consultoria-financeira",
    title: "GARM - E-commerce Completo com Checkout e Automação",
    client: "GARM Store",
    category: "E-commerce",
    challenge:
      "Necessidade de um sistema completo de e-commerce com checkout integrado e acompanhamento automatizado de pedidos.",
    solution:
      "Sistema completo de e-commerce com checkout integrado, gateway de pagamento e automação para rastreamento de pedidos via WhatsApp.",
    results: {
      conversions: "+500% vendas online",
      timeToContact: "Acompanhamento automático",
      revenue: "+R$ 420k/mês",
      other: "95% satisfação do cliente",
    },
    testimonial: {
      quote:
        "Nossa loja online agora é profissional e o acompanhamento automático via WhatsApp encanta nossos clientes.",
      author: "Gabriel Martins",
      company: "GARM Store",
      position: "Proprietário",
    },
    image: "/templates/garm-website.webp",
    tags: ["ecommerce", "checkout", "automação"],
    featured: true,
  },
  {
    id: "restaurante-delivery",
    title: "Fitness & GYM - Site + Automação de Pagamentos",
    client: "Fitness & GYM Academy",
    category: "Fitness & Saúde",
    challenge:
      "Academia precisava de presença online forte e automatização de lembretes de pagamento e suporte aos alunos.",
    solution:
      "Site profissional para academia integrado com automação para lembretes de pagamento, suporte a dúvidas via WhatsApp e campanhas de email marketing.",
    results: {
      conversions: "+280% captação de alunos",
      timeToContact: "Suporte 24/7",
      revenue: "+R$ 85k/mês",
      other: "98% inadimplência zerada",
    },
    testimonial: {
      quote:
        "O site trouxe credibilidade e a automação resolveu nosso problema de inadimplência. Foco total nos treinos agora.",
      author: "Eduardo Ferreira",
      company: "Fitness & GYM Academy",
      position: "Proprietário",
    },
    image: "/templates/website-gym.webp",
    tags: ["site", "automação", "fitness", "email-marketing"],
    featured: false,
  },
  {
    id: "imobiliaria-luxo",
    title: "SaaS Completo - Deploy em Nuvem e Monitoramento",
    client: "CloudTech Solutions",
    category: "SaaS & Tecnologia",
    challenge:
      "Startup precisava de um SaaS completo desde o desenvolvimento até o deploy em nuvem com monitoramento de segurança.",
    solution:
      "Site SaaS completo integrado com sistema inteiro, deploy em nuvem escalável e monitoramento de segurança 24/7.",
    results: {
      conversions: "+450% usuários ativos",
      timeToContact: "Uptime de 99.9%",
      revenue: "+R$ 380k MRR",
      other: "Zero incidentes de segurança",
    },
    testimonial: {
      quote:
        "Entregaram um produto completo e profissional. A infraestrutura é sólida e o monitoramento nos dá total tranquilidade.",
      author: "André Silva",
      company: "CloudTech Solutions",
      position: "CTO",
    },
    image: "/templates/clario-website.webp",
    tags: ["saas", "cloud", "segurança", "desenvolvimento"],
    featured: false,
  },
];
