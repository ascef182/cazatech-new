import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.caza-tech.com';

// Define all static routes for each language
const staticRoutes = {
  pt: [
    '',
    '/automacoes',
    '/consultoria',
    '/marketing',
    '/saas',
    '/works',
    '/contact',
    '/blog',
    '/informacoes-legais',
    '/informacoes-legais/politica-de-privacidade',
    '/informacoes-legais/termos-de-uso',
    '/informacoes-legais/politica-de-reembolso',
    '/informacoes-legais/parcerias',
    '/informacoes-legais/faq',
    '/informacoes-legais/central-de-ajuda',
  ],
  en: [
    '/en',
    '/en/automacoes',
    '/en/consultoria',
    '/en/marketing',
    '/en/saas',
    '/en/works',
    '/en/contact',
    '/en/blog',
    '/en/informacoes-legais',
    '/en/informacoes-legais/politica-de-privacidade',
    '/en/informacoes-legais/termos-de-uso',
    '/en/informacoes-legais/politica-de-reembolso',
    '/en/informacoes-legais/parcerias',
    '/en/informacoes-legais/faq',
    '/en/informacoes-legais/central-de-ajuda',
  ],
  es: [
    '/es',
    '/es/automacoes',
    '/es/consultoria',
    '/es/marketing',
    '/es/saas',
    '/es/works',
    '/es/contact',
    '/es/blog',
    '/es/informacoes-legais',
    '/es/informacoes-legais/politica-de-privacidade',
    '/es/informacoes-legais/termos-de-uso',
    '/es/informacoes-legais/politica-de-reembolso',
    '/es/informacoes-legais/parcerias',
    '/es/informacoes-legais/faq',
    '/es/informacoes-legais/central-de-ajuda',
  ],
};

// Blog posts (PT)
const blogPostsPt = [
  '/blog/agentes-de-ia-para-empresas',
  '/blog/atendimento-automatizado-whatsapp',
  '/blog/automacao-processos-empresariais',
  '/blog/case-vendas-alimenticio',
  '/blog/conteudo-educativo-linkedin',
  '/blog/desenvolvimento-de-aplicativos-para-empresas',
  '/blog/desenvolvimento-sites-profissional',
  '/blog/ferramentas-marketing-2024',
  '/blog/landing-pages-que-convertem',
  '/blog/seo-tecnico-para-nextjs',
  '/blog/site-para-advogado-escritorio-advocacia',
  '/blog/site-para-clinica-medica',
  '/blog/site-para-dentista-consultorio-odontologico',
  '/blog/solucoes-saas-personalizadas',
];

// Blog posts (EN)
const blogPostsEn = [
  '/en/blog/automating-patient-communication-clinics-2026',
  '/en/blog/ai-patient-support-time-money-savings',
  '/en/blog/front-desk-failing-modern-clinics',
  '/en/blog/cost-not-automating-patient-communication',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Generate sitemap entries for static routes
  const staticEntries: MetadataRoute.Sitemap = [
    ...staticRoutes.pt,
    ...staticRoutes.en,
    ...staticRoutes.es,
  ].map((route) => {
    // Determine priority based on route type
    let priority = 0.7;
    let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly';

    // Home pages get highest priority
    if (route === '' || route === '/en' || route === '/es') {
      priority = 1.0;
      changeFrequency = 'daily';
    }
    // Main service pages
    else if (
      route.match(/^\/(en\/|es\/)?(automacoes|consultoria|marketing|saas|works|contact)$/)
    ) {
      priority = 0.9;
      changeFrequency = 'weekly';
    }
    // Blog index
    else if (route.match(/^\/(en\/|es\/)?blog$/)) {
      priority = 0.8;
      changeFrequency = 'daily';
    }
    // Legal pages
    else if (route.includes('informacoes-legais')) {
      priority = 0.3;
      changeFrequency = 'monthly';
    }

    return {
      url: `${BASE_URL}${route}`,
      lastModified: currentDate,
      changeFrequency,
      priority,
    };
  });

  // Generate sitemap entries for blog posts
  const blogEntries: MetadataRoute.Sitemap = [...blogPostsPt, ...blogPostsEn].map(
    (route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })
  );

  return [...staticEntries, ...blogEntries];
}
