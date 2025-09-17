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
    title: "Clínica de Estética Multiplica Agendamentos por 4x",
    client: "Clínica Bella Vita",
    category: "Saúde & Estética",
    challenge: "Perdia 60% dos leads por demora no atendimento. Equipe sobrecarregada com agendamentos manuais e muitas desistências.",
    solution: "Implementamos automação completa: qualificação de leads, agendamento automático integrado à agenda, lembretes por WhatsApp e follow-up pós-consulta.",
    results: {
      conversions: "+400% agendamentos",
      timeToContact: "De 4h para 2min",
      revenue: "+R$ 180k/mês",
      other: "85% redução em no-shows"
    },
    testimonial: {
      quote: "Em 30 dias nossa agenda estava lotada. O WhatsApp virou nossa maior fonte de receita, funcionando 24h sem parar.",
      author: "Dra. Marina Silva",
      company: "Clínica Bella Vita",
      position: "Diretora"
    },
    image: "/images/cases/clinica-estetica.jpg",
    tags: ["automação", "agendamentos", "saúde"],
    featured: true
  },
  {
    id: "ecommerce-moda-feminina",
    title: "E-commerce de Moda Dobra Vendas com Atendimento Inteligente",
    client: "Loja Encanto Fashion",
    category: "E-commerce",
    challenge: "Carrinho abandonado alto (78%), atendimento lento e dificuldade para converter visitantes em compradores.",
    solution: "Criamos fluxo de recuperação de carrinho, consultor virtual para dúvidas sobre produtos, e sistema de cupons automáticos baseado no comportamento.",
    results: {
      conversions: "+250% vendas WhatsApp",
      timeToContact: "Resposta instantânea",
      revenue: "+R$ 95k/mês",
      other: "Carrinho abandonado: 78% → 31%"
    },
    testimonial: {
      quote: "O WhatsApp virou nosso vendedor mais eficiente. Trabalha 24h, nunca perde a paciência e sempre fecha a venda.",
      author: "Carlos Mendes",
      company: "Encanto Fashion",
      position: "CEO"
    },
    image: "/images/cases/ecommerce-moda.jpg",
    tags: ["ecommerce", "vendas", "recuperação"],
    featured: true
  },
  {
    id: "consultoria-financeira",
    title: "Consultoria Financeira Qualifica 10x Mais Leads",
    client: "InvestSmart Consultoria",
    category: "Serviços Financeiros",
    challenge: "Muitos curiosos consumindo tempo da equipe. Dificuldade para identificar clientes com real potencial de investimento.",
    solution: "Desenvolvemos questionário inteligente que qualifica leads por perfil de risco e valor disponível para investir, direcionando apenas prospects qualificados para consultores.",
    results: {
      conversions: "+1000% leads qualificados",
      timeToContact: "Pré-qualificação automática",
      revenue: "+R$ 320k em AUM",
      other: "90% redução em tempo perdido"
    },
    testimonial: {
      quote: "Agora só falo com quem realmente quer investir. Minha produtividade triplicou e o stress diminuiu drasticamente.",
      author: "Roberto Alves",
      company: "InvestSmart",
      position: "Consultor Sênior"
    },
    image: "/images/cases/consultoria-financeira.jpg",
    tags: ["qualificação", "serviços", "B2B"],
    featured: true
  },
  {
    id: "restaurante-delivery",
    title: "Restaurante Aumenta Pedidos em 300% via WhatsApp",
    client: "Sabor & Arte Restaurante",
    category: "Alimentação",
    challenge: "Dependência total do iFood (comissão 30%). Pedidos por telefone geravam confusão e erros.",
    solution: "Criamos cardápio interativo no WhatsApp, sistema de pedidos com confirmação automática e integração com cozinha para status em tempo real.",
    results: {
      conversions: "+300% pedidos diretos",
      timeToContact: "Pedidos instantâneos",
      revenue: "30% economia em comissões",
      other: "Zero erros de pedido"
    },
    testimonial: {
      quote: "Saímos da dependência do iFood. Agora temos nossos próprios clientes e margem muito melhor.",
      author: "Chef Paulo Santos",
      company: "Sabor & Arte",
      position: "Proprietário"
    },
    image: "/images/cases/restaurante-delivery.jpg",
    tags: ["delivery", "alimentação", "automação"],
    featured: false
  },
  {
    id: "imobiliaria-luxo",
    title: "Imobiliária de Luxo Acelera Vendas de Alto Padrão",
    client: "Premium Imóveis",
    category: "Imobiliário",
    challenge: "Leads de imóveis de luxo precisam de atendimento personalizado e rápido. Concorrência acirrada no segmento premium.",
    solution: "Implementamos atendimento VIP com qualificação por faixa de preço, agendamento de visitas premium e follow-up personalizado para cada lead.",
    results: {
      conversions: "+180% visitas agendadas",
      timeToContact: "Atendimento VIP imediato",
      revenue: "+R$ 2.1M em vendas",
      other: "50% mais vendas fechadas"
    },
    testimonial: {
      quote: "Nossos clientes se sentem únicos desde o primeiro contato. O atendimento premium fez toda a diferença nas vendas.",
      author: "Fernanda Costa",
      company: "Premium Imóveis",
      position: "Diretora Comercial"
    },
    image: "/images/cases/imobiliaria-luxo.jpg",
    tags: ["imóveis", "luxo", "B2C"],
    featured: false
  }
];
