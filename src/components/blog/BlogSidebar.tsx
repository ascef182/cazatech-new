"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface Category {
  name: string;
  count: number;
}

interface BlogSidebarProps {
  categories: Category[];
}

export function BlogSidebar({ categories }: BlogSidebarProps) {
  return (
    <div className="space-y-6">
      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="rounded-xl border bg-card p-6"
      >
        <h3 className="font-bold mb-4">Categorias</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="flex items-center justify-between py-2 hover:bg-accent rounded-md px-2 transition-colors cursor-pointer"
            >
              <span className="text-sm">{cat.name}</span>
              <span className="text-xs bg-muted px-2 py-1 rounded">
                {cat.count}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="rounded-xl border bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 p-6"
      >
        <h3 className="font-bold mb-2">Pronto para Automatizar?</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Implemente automação WhatsApp que realmente converte.
        </p>
        <Link
          href="https://wa.me/5511936205799?text=Olá! Vi o blog e quero automatizar meu WhatsApp"
          target="_blank"
          className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm font-medium"
        >
          Falar no WhatsApp
        </Link>
      </motion.div>
    </div>
  );
}
