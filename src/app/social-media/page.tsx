"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaTiktok, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FiInstagram, FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SocialMediaPage() {
  const portfolioExamples = [
    {
      platform: "Instagram",
      icon: <FiInstagram className="h-5 w-5 text-pink-600" />,
      example: "Cafeteria: 500 → 12k seguidores em 3 meses com Reels diários",
      result: "+87% engajamento",
    },
    {
      platform: "TikTok",
      icon: <FaTiktok className="h-5 w-5 text-black" />,
      example: "Clínica Estética: Viralizou com 'Um dia na clínica'",
      result: "2,3M views → 87 agendamentos",
    },
    {
      platform: "LinkedIn",
      icon: <FaLinkedin className="h-5 w-5 text-blue-700" />,
      example: "Consultor Financeiro: Posts educativos semanais",
      result: "+300% conexões",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container py-12 md:py-20 relative">
      {/* Botão de Voltar */}
      <div className="absolute right-4 top-[var(--header-height)] z-50 md:right-8">
        <Link
          href="/"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          aria-label="Voltar para a página inicial"
        >
          <FiArrowLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        </Link>
      </div>

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Estratégias de Social Media
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Transformamos suas redes sociais em máquinas de gerar negócios
        </p>
      </motion.div>

      {/* Platform Cards - Altura fixa */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {[
          {
            icon: <FiInstagram className="h-6 w-6 text-pink-600" />,
            title: "Instagram Estratégico",
            bg: "bg-pink-100",
            items: [
              {
                icon: <FiInstagram className="h-4 w-4 text-pink-600" />,
                title: "Feed Profissional",
                description:
                  "Planejamento visual que conta sua história de marca",
              },
              {
                icon: <FiInstagram className="h-4 w-4 text-pink-600" />,
                title: "Reels que Convertem",
                description: "Estratégias para aumentar alcance orgânico",
              },
            ],
          },
          {
            icon: <FaTiktok className="h-6 w-6 text-black" />,
            title: "TikTok para Negócios",
            bg: "bg-gray-100",
            items: [
              {
                icon: <FaTiktok className="h-4 w-4 text-black" />,
                title: "Conteúdo Viralizável",
                description: "Estratégias específicas para o algoritmo",
              },
              {
                icon: <FaTiktok className="h-4 w-4 text-black" />,
                title: "Desafios de Marca",
                description: "Engajamento com hashtag exclusiva",
              },
            ],
          },
        ].map((platform, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full min-h-[350px] border-border hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-full ${platform.bg}`}>
                    {platform.icon}
                  </div>
                  <CardTitle className="text-lg md:text-xl">
                    {platform.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {platform.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className={`p-1 ${platform.bg}/50 rounded-full mt-0.5`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <strong className="text-foreground">
                          {item.title}:
                        </strong>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Success Cases - Cards com altura uniforme */}
      <motion.div variants={fadeIn} className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Cases de Sucesso
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {portfolioExamples.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
              className="border rounded-lg p-6 hover:bg-accent/10 transition cursor-pointer group h-full min-h-[200px]"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <h3 className="font-semibold text-lg">{item.platform}</h3>
              </div>
              <p className="text-muted-foreground mb-2">{item.example}</p>
              <div className="text-primary font-medium">{item.result}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Additional Platforms - Altura fixa */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {[
          {
            icon: <FaYoutube className="h-6 w-6 text-red-600" />,
            title: "YouTube Integrado",
            bg: "bg-red-100",
            description:
              "Transforme seu conteúdo em vídeos curtos para múltiplas plataformas:",
            items: [
              {
                icon: <FaYoutube className="h-4 w-4 text-red-600" />,
                text: "YouTube Shorts",
              },
              {
                icon: <FiInstagram className="h-4 w-4 text-pink-600" />,
                text: "Instagram Reels",
              },
              {
                icon: <FaTiktok className="h-4 w-4 text-black" />,
                text: "TikTok",
              },
            ],
          },
          {
            icon: <FaLinkedin className="h-6 w-6 text-blue-700" />,
            title: "LinkedIn Corporativo",
            bg: "bg-blue-100",
            description: "Estratégias avançadas para B2B:",
            items: [
              {
                icon: <FaLinkedin className="h-4 w-4 text-blue-700" />,
                text: "Artigos técnicos",
              },
              {
                icon: <FaLinkedin className="h-4 w-4 text-blue-700" />,
                text: "Networking estratégico",
              },
              {
                icon: <FaLinkedin className="h-4 w-4 text-blue-700" />,
                text: "Recrutamento de talentos",
              },
            ],
          },
        ].map((platform, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full min-h-[350px] border-border hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-full ${platform.bg}`}>
                    {platform.icon}
                  </div>
                  <CardTitle className="text-lg md:text-xl">
                    {platform.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {platform.description}
                </p>
                <ul className="space-y-3">
                  {platform.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        variants={fadeIn}
        className="relative overflow-hidden group rounded-xl bg-gradient-to-r from-primary to-purple-600 p-0.5"
      >
        <div className="bg-background rounded-[10px] p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Sua marca merece destaque nas redes sociais
          </h2>
          <p className="mb-6 max-w-2xl mx-auto text-muted-foreground">
            Desenvolvemos estratégias personalizadas para cada plataforma com
            métricas mensuráveis
          </p>
          <motion.button
            className="bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3 rounded-md font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send/?phone=551151998147&text&type=phone_number&app_absent=0",
                "_blank"
              )
            }
          >
            Quero potencializar minhas redes
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
