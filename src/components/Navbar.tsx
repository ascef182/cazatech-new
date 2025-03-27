"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Home, Zap, Share2, Globe, Book, Mail } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { href: "/", label: "Home", icon: <Home className="h-5 w-5" /> },
    {
      href: "/automacoes",
      label: "Automação",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      href: "/social-media",
      label: "Social Media",
      icon: <Share2 className="h-5 w-5" />,
    },
    { href: "/works", label: "Sites", icon: <Globe className="h-5 w-5" /> },
    { href: "/blog", label: "Blog", icon: <Book className="h-5 w-5" /> },
    { href: "/contact", label: "Contato", icon: <Mail className="h-5 w-5" /> }, // Corrigido de '/contact' para '/contato'
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-sm"
      aria-label="Navegação principal"
    >
      <div className="container px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo com acessibilidade */}
          <Link href="/" className="relative z-10" aria-label="Página inicial">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-hidden="true"
            >
              <Image
                src="/images/logo.png"
                alt="CazaTech - Soluções Digitais"
                width={180}
                height={60}
                className="h-10 md:h-12 w-auto"
                priority
              />
            </motion.div>
          </Link>

          {/* Navegação Desktop */}
          <div
            className="hidden md:flex items-center space-x-1"
            role="navigation"
            aria-label="Menu principal"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all
                    text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary
                    hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label={`Ir para ${item.label}`}
                >
                  <span className="mr-2" aria-hidden="true">
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <motion.button
                  className="flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Abrir menu de navegação"
                  aria-expanded="false"
                  aria-controls="mobile-navigation"
                >
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </motion.button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-sm"
                id="mobile-navigation"
                aria-label="Menu mobile"
              >
                <div className="relative h-full">
                  {/* Botão de fechar */}
                  <motion.div
                    className="absolute top-4 right-4"
                    whileHover={{ rotate: 90 }}
                  >
                    <SheetTrigger asChild>
                      <button
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                        aria-label="Fechar menu"
                      >
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </SheetTrigger>
                  </motion.div>

                  {/* Conteúdo do menu */}
                  <nav
                    className="flex flex-col space-y-2 pt-16"
                    aria-label="Navegação mobile"
                  >
                    {navItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <SheetTrigger asChild>
                          <Link
                            href={item.href}
                            className="flex items-center px-4 py-3 text-lg font-medium rounded-lg transition-all
                              text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary
                              hover:bg-gray-100 dark:hover:bg-gray-800"
                            aria-label={`Ir para ${item.label}`}
                          >
                            <span className="mr-3" aria-hidden="true">
                              {item.icon}
                            </span>
                            {item.label}
                          </Link>
                        </SheetTrigger>
                      </motion.div>
                    ))}
                  </nav>

                  {/* Rodapé do menu mobile */}
                  <motion.div
                    className="absolute bottom-6 left-0 right-0 px-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: navItems.length * 0.1 + 0.2 }}
                  >
                    <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                      CazaTech © {new Date().getFullYear()}
                    </p>
                  </motion.div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
