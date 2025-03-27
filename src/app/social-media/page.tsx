"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaTiktok, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { motion } from "framer-motion";

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
    <div className="container py-12 md:py-20">
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

      {/* Platform Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div variants={fadeIn}>
          <Card className="h-full border-border hover:border-primary transition-colors">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-pink-100">
                  <FiInstagram className="h-6 w-6 text-pink-600" />
                </div>
                <CardTitle className="text-lg md:text-xl">
                  Instagram Estratégico
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-pink-100/50 rounded-full mt-0.5">
                    <FiInstagram className="h-4 w-4 text-pink-600" />
                  </div>
                  <div>
                    <strong className="text-foreground">
                      Feed Profissional:
                    </strong>
                    <p className="text-muted-foreground">
                      Planejamento visual que conta sua história de marca
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-pink-100/50 rounded-full mt-0.5">
                    <FiInstagram className="h-4 w-4 text-pink-600" />
                  </div>
                  <div>
                    <strong className="text-foreground">
                      Reels que Convertem:
                    </strong>
                    <p className="text-muted-foreground">
                      Estratégias para aumentar alcance orgânico
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn} transition={{ delay: 0.1 }}>
          <Card className="h-full border-border hover:border-primary transition-colors">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-gray-100">
                  <FaTiktok className="h-6 w-6 text-black" />
                </div>
                <CardTitle className="text-lg md:text-xl">
                  TikTok para Negócios
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-gray-100 rounded-full mt-0.5">
                    <FaTiktok className="h-4 w-4 text-black" />
                  </div>
                  <div>
                    <strong className="text-foreground">
                      Conteúdo Viralizável:
                    </strong>
                    <p className="text-muted-foreground">
                      Estratégias específicas para o algoritmo
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-gray-100 rounded-full mt-0.5">
                    <FaTiktok className="h-4 w-4 text-black" />
                  </div>
                  <div>
                    <strong className="text-foreground">
                      Desafios de Marca:
                    </strong>
                    <p className="text-muted-foreground">
                      Engajamento com hashtag exclusiva
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Success Cases */}
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
              className="border rounded-lg p-6 hover:bg-accent/10 transition cursor-pointer group"
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

      {/* Additional Platforms */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div variants={fadeIn}>
          <Card className="border-border hover:border-primary transition-colors">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-red-100">
                  <FaYoutube className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-lg md:text-xl">
                  YouTube Integrado
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Transforme seu conteúdo em vídeos curtos para múltiplas
                plataformas:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <FaYoutube className="h-4 w-4 text-red-600" />
                  <span>YouTube Shorts</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiInstagram className="h-4 w-4 text-pink-600" />
                  <span>Instagram Reels</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaTiktok className="h-4 w-4 text-black" />
                  <span>TikTok</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn} transition={{ delay: 0.1 }}>
          <Card className="border-border hover:border-primary transition-colors">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-blue-100">
                  <FaLinkedin className="h-6 w-6 text-blue-700" />
                </div>
                <CardTitle className="text-lg md:text-xl">
                  LinkedIn Corporativo
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Estratégias avançadas para B2B:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <FaLinkedin className="h-4 w-4 text-blue-700" />
                  <span>Artigos técnicos</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaLinkedin className="h-4 w-4 text-blue-700" />
                  <span>Networking estratégico</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaLinkedin className="h-4 w-4 text-blue-700" />
                  <span>Recrutamento de talentos</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
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
          >
            Quero potencializar minhas redes
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
