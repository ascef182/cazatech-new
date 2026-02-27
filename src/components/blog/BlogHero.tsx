"use client";
import { motion } from "framer-motion";

interface BlogHeroProps {
  children: React.ReactNode;
}

export function BlogHero({ children }: BlogHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative bg-black text-white py-16 md:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      </div>
      {children}
    </motion.section>
  );
}

export function BlogHeroContent() {
  return (
    <div className="container text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-extrabold text-white"
      >
        Blog CazaTech
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-3 text-white/70 max-w-2xl mx-auto"
      >
        Estratégias práticas de automação WhatsApp, cases reais e insights
        para multiplicar seus resultados.
      </motion.p>
    </div>
  );
}
