"use client";

import { useEffect } from "react";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <body
      className="antialiased font-satoshi text-foreground bg-background"
      suppressHydrationWarning
    >
      <Navbar />
      <main className="pt-16 md:pt-20 min-h-screen">{children}</main>
      <Footer />
      <Toaster position="top-right" />
    </body>
  );
}
