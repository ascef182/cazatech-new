"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiHome,
  FiZap,
  FiInstagram,
  FiTwitter,
  FiMail,
  FiBook,
  FiGlobe,
} from "react-icons/fi";
import { FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "https://wa.me/+55 11 5199-8147",
      label: "WhatsApp",
    },
    {
      icon: <FaTiktok className="w-5 h-5" />,
      href: "https://tiktok.com/@cazatech",
      label: "TikTok",
    },
    {
      icon: <FiInstagram className="w-5 h-5" />,
      href: "https://instagram.com/cazatech.solutions",
      label: "Instagram",
    },
    {
      icon: <FiTwitter className="w-5 h-5" />,
      href: "https://x.com/Cazatech_",
      label: "Twitter/X",
    },
  ];

  const footerLinks = [
    { icon: <FiHome className="mr-2" />, href: "/", text: "Home" },
    {
      icon: <FiZap className="mr-2" />,
      href: "/automacoes",
      text: "Automação",
    },
    {
      icon: <FiInstagram className="mr-2" />,
      href: "/social-media",
      text: "Social Media",
    },
    { icon: <FiGlobe className="mr-2" />, href: "/works", text: "Sites" },
    { icon: <FiBook className="mr-2" />, href: "/blog", text: "Blog" },
    { icon: <FiMail className="mr-2" />, href: "/contato", text: "Contato" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {/* Seção: Sobre */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">CazaTech</h3>
            <p className="text-sm">
              Soluções digitais para impulsionar negócios com sites, automação e
              marketing.
            </p>
          </div>

          {/* Seção: Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors text-sm flex items-center"
                  >
                    {link.icon} {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Seção: Redes Sociais */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Nos siga</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
                  whileHover={{
                    y: -3,
                    scale: 1.1,
                    backgroundColor: "rgba(59, 130, 246, 0.5)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Linha divisória e direitos autorais */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="border-t border-gray-700 pt-6 text-center text-sm"
        >
          <p>© {currentYear} CazaTech. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}
