import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "CazaTech | Soluções Digitais Criativas",
  description: "Eleve sua presença com soluções criativas. Da imaginação à inovação, estratégias que geram resultados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
