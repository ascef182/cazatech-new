"use client";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";

export function BlogBackButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-8"
    >
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border hover:bg-accent transition-all duration-200 shadow-sm"
        aria-label="Voltar para a página inicial"
      >
        <FiArrowLeft className="h-4 w-4" />
        <span className="text-sm font-medium">Voltar ao início</span>
      </Link>
    </motion.div>
  );
}
