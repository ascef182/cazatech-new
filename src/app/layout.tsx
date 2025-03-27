import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: {
    default: "CazaTech | Soluções Digitais para Empresas",
    template: "%s | CazaTech",
  },
  description:
    "Sites profissionais, automações e marketing digital em São Paulo. Transformamos ideias em resultados mensuráveis para seu negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Favicon básico */}
        <link rel="icon" href="/images/favicon/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/images/favicon/favicon.svg"
          type="image/svg+xml"
        />
        <link
          rel="icon"
          href="/images/favicon/favicon-96x96.png"
          type="image/png"
          sizes="96x96"
        />

        {/* Apple Touch Icon - Solução definitiva */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/images/favicon/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/images/favicon/apple-touch-icon-167x167.png"
        />

        {/* Web Manifest com ícones */}
        <link rel="manifest" href="/images/favicon/site.webmanifest" />

        {/* Ícones para PWA */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/favicon/web-app-manifest-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/images/favicon/web-app-manifest-512x512.png"
        />

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
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
