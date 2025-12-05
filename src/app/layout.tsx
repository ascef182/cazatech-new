import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/700.css";
import ClientBody from "./ClientBody";
import { OrganizationSchema, WebsiteSchema } from "@/components/seo/JsonLd";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const baseMetadata: Metadata = {
  title: {
    default: "CazaTech | Automação WhatsApp que Vende 3x Mais",
    template: "%s | CazaTech - Automação e Marketing Digital",
  },
  description:
    "Automatize seu WhatsApp, crie sites de alta conversão e aumente suas vendas em 300%. +50 empresas já confiam na CazaTech. Diagnóstico gratuito.",
  keywords: [
    "automação whatsapp",
    "chatbot whatsapp",
    "sites conversão",
    "marketing digital são paulo",
    "atendimento automatizado",
    "vendas whatsapp",
  ],
  authors: [{ name: "CazaTech" }],
  creator: "CazaTech",
  publisher: "CazaTech",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://caza-tech.com",
    siteName: "CazaTech",
    title: "CazaTech - Automação WhatsApp que Vende 3x Mais",
    description:
      "Pare de perder clientes por demora no atendimento. Automatize e venda mais.",
    images: [
      {
        url: "/og-cazatech.jpg",
        width: 1200,
        height: 630,
        alt: "CazaTech - Automação WhatsApp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CazaTech - Automação WhatsApp que Vende 3x Mais",
    description:
      "Pare de perder clientes por demora no atendimento. Automatize e venda mais.",
    images: ["/og-cazatech.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/favicon/favicon.ico" },
      { url: "/images/favicon/favicon.svg", type: "image/svg+xml" },
      {
        url: "/images/favicon/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
      {
        url: "/images/favicon/web-app-manifest-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/images/favicon/web-app-manifest-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      { url: "/images/favicon/apple-touch-icon.png", sizes: "180x180" },
      { url: "/images/favicon/apple-touch-icon-152x152.png", sizes: "152x152" },
      { url: "/images/favicon/apple-touch-icon-167x167.png", sizes: "167x167" },
    ],
  },
  manifest: "/images/favicon/site.webmanifest",
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://www.caza-tech.com"),
    ...baseMetadata,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="pt-BR">
      <head>
        {/* Ícones e manifest gerenciados via Next Metadata API */}

        {/* Meta tags para tema - Solução cross-browser */}
        <meta name="msapplication-TileColor" content="#ffffff" />

        {/* Theme-color com fallback universal */}
        <meta name="theme-color" content="#ffffff" />

        {/* Fallback específico para Safari */}
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Fallback para Firefox e Opera */}
        <meta name="msapplication-navbutton-color" content="#ffffff" />
        <meta name="application-name" content="CazaTech" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/zero-hour/ZeroHour.otf"
          as="font"
          type="font/otf"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Satoshi-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </head>
      <ClientBody>
        {GA_ID && <GoogleAnalytics measurementId={GA_ID} />}
        <OrganizationSchema />
        <WebsiteSchema />
        {children}
      </ClientBody>
    </html>
  );
}
