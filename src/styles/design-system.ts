/**
 * 🎨 CazaTech Design System
 * =========================
 * Sistema de design premium com foco em conversão e SEO
 * 
 * @version 2.0
 * @author Frontend Team
 */

// ============================================
// 🎨 PALETA DE CORES
// ============================================

export const colors = {
  // Cores Primárias - Gradiente Principal
  primary: {
    purple: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8350e8', // Principal - Usado em sparkles e gradientes
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
      950: '#2e1065',
    },
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8', // Usado em CTAs
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
    },
  },

  // Cores de Acento
  accent: {
    cyan: '#06b6d4',
    teal: '#14b8a6',
    emerald: '#10b981',
    pink: '#ec4899',
    rose: '#f43f5e',
    amber: '#f59e0b',
  },

  // Cores Neutras (Dark Mode)
  neutral: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
    950: '#09090b', // Background principal dark
  },

  // Cores Semânticas
  semantic: {
    success: '#22c55e',
    warning: '#eab308',
    error: '#ef4444',
    info: '#3b82f6',
  },

  // Gradientes
  gradients: {
    primary: 'linear-gradient(135deg, #8350e8 0%, #3b82f6 100%)',
    primaryReverse: 'linear-gradient(135deg, #3b82f6 0%, #8350e8 100%)',
    hero: 'linear-gradient(to bottom right, #581c87, #1e3a8a, #000000)',
    card: 'linear-gradient(180deg, rgba(131, 80, 232, 0.1) 0%, transparent 100%)',
    cta: 'linear-gradient(to top, #3b82f6, #60a5fa)',
    dark: 'linear-gradient(180deg, #18181b 0%, #09090b 100%)',
    glow: 'radial-gradient(circle at center, rgba(131, 80, 232, 0.4) 0%, transparent 70%)',
  },
} as const;

// ============================================
// 📝 TIPOGRAFIA
// ============================================

export const typography = {
  // Famílias de Fonte
  fontFamily: {
    display: '"Zero Hour", "Plus Jakarta Sans", sans-serif',
    heading: '"Satoshi", "Plus Jakarta Sans", sans-serif',
    body: '"Plus Jakarta Sans", ui-sans-serif, system-ui, -apple-system, sans-serif',
    mono: '"JetBrains Mono", "Fira Code", Consolas, monospace',
  },

  // Escalas de Tamanho
  fontSize: {
    // Display - Para Headlines Hero
    'display-2xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }],
    'display-xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }],
    'display-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
    'display-md': ['2.25rem', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '700' }],
    'display-sm': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
    
    // Headings - Para Títulos de Seção
    'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
    'h2': ['2rem', { lineHeight: '1.25', fontWeight: '600' }],
    'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
    'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
    'h5': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
    'h6': ['1rem', { lineHeight: '1.5', fontWeight: '600' }],
    
    // Body Text
    'body-xl': ['1.25rem', { lineHeight: '1.75' }],
    'body-lg': ['1.125rem', { lineHeight: '1.75' }],
    'body-md': ['1rem', { lineHeight: '1.75' }],
    'body-sm': ['0.875rem', { lineHeight: '1.5' }],
    'body-xs': ['0.75rem', { lineHeight: '1.5' }],
    
    // Labels e Badges
    'label-lg': ['0.875rem', { lineHeight: '1.25', fontWeight: '500', letterSpacing: '0.025em' }],
    'label-md': ['0.75rem', { lineHeight: '1.25', fontWeight: '500', letterSpacing: '0.05em' }],
    'label-sm': ['0.625rem', { lineHeight: '1', fontWeight: '600', letterSpacing: '0.1em' }],
  },
} as const;

// ============================================
// 📐 ESPAÇAMENTO
// ============================================

export const spacing = {
  // Base spacing scale (em rem)
  px: '1px',
  0: '0',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',

  // Seção padding padrão
  section: {
    sm: '3rem',      // py-12
    md: '6rem',      // py-24
    lg: '8rem',      // py-32
  },

  // Container padding
  container: {
    sm: '1rem',      // px-4
    md: '1.5rem',    // px-6
    lg: '2rem',      // px-8
  },
} as const;

// ============================================
// 🔲 BORDAS E SOMBRAS
// ============================================

export const borders = {
  radius: {
    none: '0',
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },

  width: {
    DEFAULT: '1px',
    0: '0',
    2: '2px',
    4: '4px',
    8: '8px',
  },
} as const;

export const shadows = {
  // Sombras para cards em dark mode
  card: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
  cardHover: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
  
  // Sombras com glow colorido
  glow: {
    purple: '0 0 40px rgba(131, 80, 232, 0.4)',
    blue: '0 0 40px rgba(59, 130, 246, 0.4)',
    mixed: '0 0 60px rgba(131, 80, 232, 0.3), 0 0 40px rgba(59, 130, 246, 0.2)',
  },

  // Sombras para inputs
  input: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  inputFocus: '0 0 0 3px rgba(131, 80, 232, 0.3)',

  // Sombras para botões
  button: '0 4px 14px 0 rgba(131, 80, 232, 0.3)',
  buttonHover: '0 6px 20px rgba(131, 80, 232, 0.4)',
} as const;

// ============================================
// ✨ ANIMAÇÕES
// ============================================

export const animations = {
  // Durações
  duration: {
    instant: '50ms',
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '700ms',
    slowest: '1000ms',
  },

  // Easings
  easing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },

  // Keyframes personalizados
  keyframes: {
    fadeInUp: {
      from: { opacity: 0, transform: 'translateY(30px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
    },
    fadeInDown: {
      from: { opacity: 0, transform: 'translateY(-30px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
    },
    scaleIn: {
      from: { opacity: 0, transform: 'scale(0.95)' },
      to: { opacity: 1, transform: 'scale(1)' },
    },
    shimmer: {
      '0%': { transform: 'translateX(-100%)' },
      '100%': { transform: 'translateX(100%)' },
    },
    pulse: {
      '0%, 100%': { opacity: 1 },
      '50%': { opacity: 0.5 },
    },
    float: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
    },
    glow: {
      '0%, 100%': { boxShadow: '0 0 20px rgba(131, 80, 232, 0.4)' },
      '50%': { boxShadow: '0 0 40px rgba(131, 80, 232, 0.6)' },
    },
  },
} as const;

// ============================================
// 📱 BREAKPOINTS
// ============================================

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1400px',
} as const;

// ============================================
// 🧩 COMPONENTES - Estilos Base
// ============================================

export const components = {
  // Botão Primário (CTA)
  buttonPrimary: {
    base: `
      inline-flex items-center justify-center
      px-6 py-3
      text-sm font-semibold text-white
      bg-gradient-to-r from-purple-600 to-blue-600
      rounded-full
      transition-all duration-300
      hover:shadow-lg hover:shadow-purple-500/30
      hover:scale-[1.02]
      focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
      disabled:opacity-50 disabled:pointer-events-none
    `,
    sizes: {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
    },
  },

  // Botão Secundário (Ghost)
  buttonSecondary: {
    base: `
      inline-flex items-center justify-center
      px-6 py-3
      text-sm font-medium
      bg-white/10 backdrop-blur-sm
      border border-white/20
      text-white
      rounded-full
      transition-all duration-300
      hover:bg-white/20 hover:border-white/30
      focus:outline-none focus:ring-2 focus:ring-white/30
    `,
  },

  // Card Premium
  cardPremium: {
    base: `
      relative
      p-6
      bg-neutral-900/80
      backdrop-blur-xl
      border border-white/10
      rounded-2xl
      transition-all duration-300
      hover:border-purple-500/30
      hover:shadow-lg hover:shadow-purple-500/10
    `,
    gradient: `
      before:absolute before:inset-0
      before:bg-gradient-to-b before:from-purple-500/10 before:to-transparent
      before:rounded-2xl before:pointer-events-none
    `,
  },

  // Input Premium
  inputPremium: {
    base: `
      w-full px-4 py-3
      bg-neutral-800/50
      border border-neutral-700
      rounded-xl
      text-white placeholder:text-neutral-500
      transition-all duration-200
      focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20
    `,
  },

  // Badge/Tag
  badge: {
    base: `
      inline-flex items-center
      px-3 py-1
      text-xs font-medium uppercase tracking-wider
      rounded-full
    `,
    variants: {
      primary: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
      secondary: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
      success: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
      warning: 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
    },
  },

  // Seção Container
  section: {
    base: `relative w-full overflow-hidden`,
    padding: {
      sm: 'py-12 md:py-16',
      md: 'py-16 md:py-24',
      lg: 'py-24 md:py-32',
    },
    backgrounds: {
      dark: 'bg-neutral-950',
      light: 'bg-white',
      gradient: 'bg-gradient-to-b from-neutral-950 to-neutral-900',
    },
  },

  // Container
  container: {
    base: 'mx-auto px-4 md:px-6',
    maxWidth: {
      sm: 'max-w-3xl',
      md: 'max-w-5xl',
      lg: 'max-w-6xl',
      xl: 'max-w-7xl',
      full: 'max-w-full',
    },
  },
} as const;

// ============================================
// 🔤 TOKENS DE SEO
// ============================================

export const seoTokens = {
  // Meta tags padrão
  defaultMeta: {
    siteName: 'CazaTech',
    locale: 'pt_BR',
    type: 'website',
  },

  // Schema.org types
  schemaTypes: {
    organization: 'Organization',
    localBusiness: 'LocalBusiness',
    service: 'Service',
    faqPage: 'FAQPage',
    breadcrumb: 'BreadcrumbList',
    product: 'Product',
    review: 'Review',
  },

  // Palavras-chave por página
  keywords: {
    home: ['automação whatsapp', 'desenvolvimento saas', 'agência tecnologia', 'n8n automação'],
    automacoes: ['secretária virtual whatsapp', 'atendimento 24/7', 'automação clínicas', 'chatbot ia'],
    saas: ['desenvolvimento saas', 'criar software', 'mvp startup', 'plataforma personalizada'],
    marketing: ['marketing digital', 'tráfego pago', 'seo', 'branding'],
    works: ['portfólio desenvolvimento', 'cases sucesso', 'projetos digitais'],
  },
} as const;

// ============================================
// 📦 EXPORT DEFAULT
// ============================================

export const designSystem = {
  colors,
  typography,
  spacing,
  borders,
  shadows,
  animations,
  breakpoints,
  components,
  seoTokens,
} as const;

export default designSystem;


