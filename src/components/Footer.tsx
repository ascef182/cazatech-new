"use client";

import { useI18n } from "@/app/ClientBody";
import Link from "next/link";
import ScopedLink from "@/components/ui/ScopedLink";
import { motion } from "framer-motion";
import {
  FiHome,
  FiZap,
  FiInstagram,
  FiTwitter,
  FiMail,
  FiBook,
  FiGlobe,
  FiShield,
  FiFileText,
  FiInfo,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import { FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "https://api.whatsapp.com/send/?phone=5511936205799&text&type=phone_number&app_absent=0",
      label: "WhatsApp",
    },
    {
      icon: <FaTiktok className="w-5 h-5" />,
      href: "https://www.tiktok.com/@cazatechnology",
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

  /* 
    Updating keys to match new JSON structure:
    "sections": {
      "navigation": { "title": "...", "home": "...", "automation": "...", "websites": "...", "blog": "...", "contact": "..." },
      "legal": { "title": "...", "privacy": "...", "terms": "...", "faq": "..." },
      "contact": { "title": "...", ... }
    }
  */

  const footerLinks = [
    { icon: <FiHome className="mr-2" />, href: "/", text: t("footer.sections.navigation.home") },
    {
      icon: <FiZap className="mr-2" />,
      href: "/automacoes",
      text: t("footer.sections.navigation.automation"),
    },
    { icon: <FiGlobe className="mr-2" />, href: "/works", text: t("footer.sections.navigation.websites") },
    { icon: <FiBook className="mr-2" />, href: "/blog", text: t("footer.sections.navigation.blog") },
    { icon: <FiMail className="mr-2" />, href: "/contact", text: t("footer.sections.navigation.contact") },
  ];

  const legalLinks = [
    {
      icon: <FiShield className="mr-2" />,
      href: "/informacoes-legais/politica-de-privacidade",
      text: t("footer.sections.legal.privacy"),
    },
    {
      icon: <FiFileText className="mr-2" />,
      href: "/informacoes-legais/termos-de-uso",
      text: t("footer.sections.legal.terms"),
    },
    {
      icon: <FiInfo className="mr-2" />,
      href: "/informacoes-legais/faq",
      text: t("footer.sections.legal.faq"),
    },
  ];

  const contactInfo = [
    {
      icon: <FiPhone className="mr-2" />,
      text: "+55 11 93620-5799",
      href: "tel:+5511936205799",
    },
    {
      icon: <FiMail className="mr-2" />,
      text: "support@caza-tech.com",
      href: "mailto:support@caza-tech.com",
    },
    {
      icon: <FiMapPin className="mr-2" />,
      text: "São Paulo, Brasil",
      href: "https://maps.google.com/?q=São+Paulo,Brasil",
    },
  ];

  return (
    <footer className="bg-[#080808] text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-4 gap-8 mb-12"
        >
          {/* Seção: Sobre */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">CazaTech</h3>
            <p className="text-sm mb-4">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Seção: Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{t("footer.sections.navigation.title")}</h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ScopedLink
                    href={link.href}
                    className="hover:text-white transition-colors text-sm flex items-center"
                  >
                    {link.icon} {link.text}
                  </ScopedLink>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Seção: Informações Legais */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              {t("footer.sections.legal.title")}
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ScopedLink
                    href={link.href}
                    className="hover:text-white transition-colors text-sm flex items-center"
                  >
                    {link.icon} {link.text}
                  </ScopedLink>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Seção: Contato */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{t("footer.sections.contact.title")}</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-sm"
                >
                  <a
                    href={info.href}
                    className="hover:text-white transition-colors flex items-center"
                  >
                    {info.icon} {info.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Seção de Redes Sociais */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center md:justify-start mb-8"
        >
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
        </motion.div>

        {/* Linha divisória e direitos autorais */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="border-t border-gray-700 pt-6 text-center text-sm"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} CazaTech. {t("footer.rights")}</p>
            <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-4">
              <ScopedLink
                href="/informacoes-legais/politica-de-privacidade"
                className="hover:text-white"
              >
                {t("footer.sections.legal.privacy")}
              </ScopedLink>
              <ScopedLink
                href="/informacoes-legais/termos-de-uso"
                className="hover:text-white"
              >
                {t("footer.sections.legal.terms")}
              </ScopedLink>
              <ScopedLink href="/informacoes-legais/faq" className="hover:text-white">
                {t("footer.sections.legal.faq")}
              </ScopedLink>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
