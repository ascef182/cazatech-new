"use client";

export type SupportedLang = "pt" | "en" | "es";

import ptJson from "@/lib/translations/pt.json";
import enJson from "@/lib/translations/en.json";
import esJson from "@/lib/translations/es.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const translations: Record<SupportedLang, Record<string, any>> = {
  pt: { ...ptJson, ...getLegacyTranslations("pt") },
  en: { ...enJson, ...getLegacyTranslations("en") },
  es: { ...esJson, ...getLegacyTranslations("es") },
};

function getLegacyTranslations(lang: SupportedLang) {
  const legacy = {
    pt: {
      // Navbar
      nav_home: "Home",
      nav_automation: "Automação",
      nav_sites: "Works",
      nav_blog: "Blog",
      nav_contact: "Contato",
  
      // Hero
      hero_tag: "NÓS SOMOS A CAZATECH",
      hero_title_a: "Eleve sua presença com",
      hero_title_b: "soluções criativas",
      hero_sub_a: "DA IMAGINAÇÃO À INOVAÇÃO",
      hero_sub_b: "ESTRATÉGIAS QUE GERAM RESULTADOS",
      hero_cta_email: "support@caza-tech.com",
  
      // Features
      features_headline_a:
        "Impulsione sua marca no digital com exclusividade e criatividade.",
      features_headline_b:
        "Imaginação sem limites para tornar sua visão extraordinária!",
      features_stat_years: "Anos de experiência",
      features_stat_clients: "Clientes Satisfeitos",
      features_stat_projects: "Projetos",
      features_card_1_title:
        "Transforme a identidade do seu negócio com estratégias de branding",
      features_card_1_desc:
        "Eleve a presença da sua marca com soluções personalizadas que refletem sua essência.",
      features_card_2_title: "Soluções web inovadoras com tecnologia de ponta",
      features_card_2_desc:
        "Experiências digitais fluidas para impulsionar resultados e crescimento.",
      features_card_3_title: "Design intuitivo para experiências excepcionais",
      features_card_3_desc:
        "Interfaces centradas no usuário para aumentar engajamento e usabilidade.",
  
      // CTAs
      cta_whatsapp: "Fale pelo WhatsApp",
      cta_bar_text: "Pronto para transformar seu negócio?",
      cta_bar_btn: "Agendar avaliação gratuita",
  
      // Plans
      plan_title: "Planos pensados para o seu momento",
      plan_subtitle:
        "Sem exibir preços: focamos no valor. Escolha um plano e receba uma proposta sob medida.",
      plan_popular: "Mais procurado",
      plan_cta: "Quero este plano",
      plan_starter_name: "Starter",
      plan_starter_b1: "Landing page de alta conversão",
      plan_starter_b2: "Copy e SEO essenciais",
      plan_starter_b3: "Integração WhatsApp e formulário",
      plan_basic_name: "Basic",
      plan_basic_b1: "Site institucional moderno (até 5 páginas)",
      plan_basic_b2: "Blog + Otimização de performance",
      plan_basic_b3: "Componentes shadcn/ui + Tailwind",
      plan_premium_name: "Premium",
      plan_premium_b1: "Experiência premium com animações/3D",
      plan_premium_b2: "Automação de atendimento (chatbot WhatsApp)",
      plan_premium_b3: "Setup avançado de SEO e métricas",
      plan_custom_name: "Personalizado",
      plan_custom_b1: "Funcionalidades sob demanda",
      plan_custom_b2: "Integrações específicas do seu negócio",
      plan_custom_b3: "Roadmap e acompanhamento dedicado",
      plan_custom_cta: "Quero um plano sob medida",
      // Generic
      cta_consultant: "Fale com Consultor",
    },
    en: {
      // Navbar
      nav_home: "Home",
      nav_automation: "Automation",
      nav_sites: "Works",
      nav_blog: "Blog",
      nav_contact: "Contact",
  
      // Hero
      hero_tag: "WE ARE CAZATECH",
      hero_title_a: "Elevate your presence with",
      hero_title_b: "creative solutions",
      hero_sub_a: "FROM IMAGINATION TO INNOVATION",
      hero_sub_b: "STRATEGIES THAT DRIVE RESULTS",
      hero_cta_email: "support@caza-tech.com",
  
      // Features
      features_headline_a:
        "Boost your brand online with exclusivity and creativity.",
      features_headline_b:
        "Limitless imagination to make your vision extraordinary!",
      features_stat_years: "Years of experience",
      features_stat_clients: "Satisfied Clients",
      features_stat_projects: "Projects",
      features_card_1_title:
        "Transform your brand identity with strategic branding",
      features_card_1_desc:
        "Elevate your brand presence with tailored solutions that reflect its essence.",
      features_card_2_title: "Innovative web solutions with cutting‑edge tech",
      features_card_2_desc:
        "Seamless digital experiences that drive results and growth.",
      features_card_3_title: "Intuitive design for exceptional experiences",
      features_card_3_desc:
        "User‑centered interfaces to increase engagement and usability.",
  
      // CTAs
      cta_whatsapp: "Talk on WhatsApp",
      cta_bar_text: "Ready to transform your business?",
      cta_bar_btn: "Book a free assessment",
  
      // Plans
      plan_title: "Plans designed for your stage",
      plan_subtitle:
        "We don’t display prices: we focus on value. Pick a plan and get a tailored proposal.",
      plan_popular: "Most popular",
      plan_cta: "I want this plan",
      plan_starter_name: "Starter",
      plan_starter_b1: "High‑converting landing page",
      plan_starter_b2: "Essential copy & SEO",
      plan_starter_b3: "WhatsApp integration & contact form",
      plan_basic_name: "Basic",
      plan_basic_b1: "Modern company website (up to 5 pages)",
      plan_basic_b2: "Blog + Performance optimization",
      plan_basic_b3: "shadcn/ui + Tailwind components",
      plan_premium_name: "Premium",
      plan_premium_b1: "Premium experience with animations/3D",
      plan_premium_b2: "WhatsApp chatbot automation",
      plan_premium_b3: "Advanced SEO & analytics setup",
      plan_custom_name: "Custom",
      plan_custom_b1: "Features on demand",
      plan_custom_b2: "Business‑specific integrations",
      plan_custom_b3: "Roadmap and dedicated follow‑up",
      plan_custom_cta: "I want a tailored plan",
      // Generic
      cta_consultant: "Talk to Consultant",
    },
    es: {
      // Navbar
      nav_home: "Inicio",
      nav_automation: "Automatización",
      nav_sites: "Works",
      nav_blog: "Blog",
      nav_contact: "Contacto",
  
      // Hero
      hero_tag: "SOMOS CAZATECH",
      hero_title_a: "Eleva tu presencia con",
      hero_title_b: "soluciones creativas",
      hero_sub_a: "DE LA IMAGINACIÓN A LA INNOVACIÓN",
      hero_sub_b: "ESTRATEGIAS QUE GENERAN RESULTADOS",
      hero_cta_email: "support@caza-tech.com",
  
      // Features
      features_headline_a:
        "Impulsa tu marca online con exclusividad y creatividad.",
      features_headline_b:
        "¡Imaginación sin límites para hacer tu visión extraordinaria!",
      features_stat_years: "Años de experiencia",
      features_stat_clients: "Clientes satisfechos",
      features_stat_projects: "Proyectos",
      features_card_1_title:
        "Transforma la identidad de tu marca con estrategias de branding",
      features_card_1_desc:
        "Eleva la presencia de tu marca con soluciones personalizadas que reflejen su esencia.",
      features_card_2_title: "Soluciones web innovadoras con tecnología de punta",
      features_card_2_desc:
        "Experiencias digitales fluidas que impulsan resultados y crecimiento.",
      features_card_3_title: "Diseño intuitivo para experiencias excepcionales",
      features_card_3_desc:
        "Interfaces centradas en el usuario para aumentar el compromiso y la usabilidad.",
  
      // CTAs
      cta_whatsapp: "Hablar por WhatsApp",
      cta_bar_text: "¿Listo para transformar tu negocio?",
      cta_bar_btn: "Agendar evaluación gratuita",
  
      // Plans
      plan_title: "Planes diseñados para tu etapa",
      plan_subtitle:
        "No mostramos precios: nos enfocamos en el valor. Elige un plan y recibe una propuesta a medida.",
      plan_popular: "Más popular",
      plan_cta: "Quiero este plan",
      plan_starter_name: "Starter",
      plan_starter_b1: "Landing page de alta conversión",
      plan_starter_b2: "Copy y SEO esenciales",
      plan_starter_b3: "Integración de WhatsApp y formulario",
      plan_basic_name: "Basic",
      plan_basic_b1: "Sitio institucional moderno (hasta 5 páginas)",
      plan_basic_b2: "Blog + Optimización de rendimiento",
      plan_basic_b3: "Componentes shadcn/ui + Tailwind",
      plan_premium_name: "Premium",
      plan_premium_b1: "Experiencia premium con animaciones/3D",
      plan_premium_b2: "Automatización de atención (chatbot WhatsApp)",
      plan_premium_b3: "Configuración avanzada de SEO y métricas",
      plan_custom_name: "Personalizado",
      plan_custom_b1: "Funcionalidades bajo demanda",
      plan_custom_b2: "Integraciones específicas para tu negocio",
      plan_custom_b3: "Roadmap y acompañamiento dedicado",
      plan_custom_cta: "Quiero un plan a medida",
  
      // Generic
      cta_consultant: "Hablar con Consultor",
    },
  };
  return legacy[lang];
}

export function getBrowserLang(): SupportedLang {
  if (typeof navigator === "undefined") return "pt";
  const lang = navigator.language?.toLowerCase();
  if (lang.startsWith("en")) return "en";
  if (lang.startsWith("es")) return "es";
  return "pt";
}
