"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaWhatsapp, FaRobot } from "react-icons/fa";
import { FiInstagram, FiCalendar, FiUsers, FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AutomacoesPage() {
  const automationExamples = [
    {
      platform: "WhatsApp",
      icon: <FaWhatsapp className="h-5 w-5 text-green-500" />,
      example: "Clínica médica reduziu 70% do tempo de agendamentos",
      result: "+120 agendamentos/mês",
    },
    {
      platform: "Instagram",
      icon: <FiInstagram className="h-5 w-5 text-pink-600" />,
      example: "Loja de roupas automatizou respostas a stories",
      result: "+40% conversão em vendas",
    },
    {
      platform: "Atendimento",
      icon: <FaRobot className="h-5 w-5 text-blue-500" />,
      example: "Consultoria qualificou leads automaticamente",
      result: "85% menos tempo perdido",
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
          Automações Inteligentes
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Potencialize seu negócio com soluções automatizadas que economizam
          tempo e aumentam resultados
        </p>
      </motion.div>

      {/* Automation Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* WhatsApp Automation */}
        <motion.div variants={fadeIn}>
          <Card className="h-full border-border hover:border-primary transition-colors">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-green-100">
                  <FaWhatsapp className="h-6 w-6 text-green-500" />
                </div>
                <CardTitle className="text-lg md:text-xl">
                  Automação WhatsApp
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-green-100/50 rounded-full mt-0.5">
                    <FaWhatsapp className="h-4 w-4 text-green-500" />
                  </div>
                  <div>
                    <strong className="text-foreground">
                      Prospecção de Clientes:
                    </strong>
                    <p className="text-muted-foreground">
                      Envio automático de mensagens personalizadas para leads
                      qualificados
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-green-100/50 rounded-full mt-0.5">
                    <FaWhatsapp className="h-4 w-4 text-green-500" />
                  </div>
                  <div>
                    <strong className="text-foreground">
                      Atendimento Humanizado:
                    </strong>
                    <p className="text-muted-foreground">
                      Respostas automáticas com toque pessoal + transferência
                      para equipe
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Instagram Automation */}
        <motion.div variants={fadeIn} transition={{ delay: 0.1 }}>
          <Card className="h-full border-border hover:border-primary transition-colors">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-pink-100">
                  <FiInstagram className="h-6 w-6 text-pink-600" />
                </div>
                <CardTitle className="text-lg md:text-xl">
                  Automação Instagram
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
                      Engajamento Automatizado:
                    </strong>
                    <p className="text-muted-foreground">
                      Comentários em publicações de potenciais clientes
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-pink-100/50 rounded-full mt-0.5">
                    <FiInstagram className="h-4 w-4 text-pink-600" />
                  </div>
                  <div>
                    <strong className="text-foreground">
                      Respostas a Stories:
                    </strong>
                    <p className="text-muted-foreground">
                      Interação automática com quem menciona sua marca
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Scheduling Automation */}
        <motion.div variants={fadeIn} transition={{ delay: 0.2 }}>
          <Card className="h-full border-border hover:border-primary transition-colors">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-blue-100">
                  <FiCalendar className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle className="text-lg md:text-xl">
                  Automação de Agendamentos
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-blue-100/50 rounded-full mt-0.5">
                    <FiCalendar className="h-4 w-4 text-blue-500" />
                  </div>
                  <div>
                    <strong className="text-foreground">
                      Sistema Integrado:
                    </strong>
                    <p className="text-muted-foreground">
                      Cliente escolhe horário direto no WhatsApp/Instagram
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-blue-100/50 rounded-full mt-0.5">
                    <FiCalendar className="h-4 w-4 text-blue-500" />
                  </div>
                  <div>
                    <strong className="text-foreground">
                      Lembretes Automáticos:
                    </strong>
                    <p className="text-muted-foreground">
                      Confirmação e alertas para reduzir faltas
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Customer Service Automation */}
        <motion.div variants={fadeIn} transition={{ delay: 0.3 }}>
          <Card className="h-full border-border hover:border-primary transition-colors">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-purple-100">
                  <FiUsers className="h-6 w-6 text-purple-500" />
                </div>
                <CardTitle className="text-lg md:text-xl">
                  Atendimento Inteligente
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-purple-100/50 rounded-full mt-0.5">
                    <FiUsers className="h-4 w-4 text-purple-500" />
                  </div>
                  <div>
                    <strong className="text-foreground">
                      Fluxo Inteligente:
                    </strong>
                    <p className="text-muted-foreground">
                      Perguntas-chave identificam necessidade do cliente
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-purple-100/50 rounded-full mt-0.5">
                    <FiUsers className="h-4 w-4 text-purple-500" />
                  </div>
                  <div>
                    <strong className="text-foreground">
                      Triagem Automatizada:
                    </strong>
                    <p className="text-muted-foreground">
                      Encaminha para o setor correto sem intervenção humana
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
          Resultados Reais
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {automationExamples.map((item, index) => (
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

      {/* CTA Section */}
      <motion.div
        variants={fadeIn}
        className="relative overflow-hidden group rounded-xl bg-gradient-to-r from-primary to-purple-600 p-0.5"
      >
        <div className="bg-background rounded-[10px] p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Pronto para transformar seu negócio?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto text-muted-foreground">
            Nossas automações reduzem até 80% do tempo em tarefas repetitivas
            enquanto melhoram a experiência do cliente
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
            Quero automatizar meu negócio
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
