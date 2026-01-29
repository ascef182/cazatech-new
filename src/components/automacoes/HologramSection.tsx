"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/app/ClientBody";
import { MessageSquare, Instagram, Facebook, Send, ArrowDownRight } from "lucide-react";

// Message bubble types
interface MessageBubble {
  id: number;
  channel: "whatsapp" | "instagram" | "facebook" | "telegram";
  text: string;
  position: { x: number; y: number };
  delay: number;
}

// Channel configurations
const channelConfig = {
  whatsapp: {
    icon: MessageSquare,
    color: "rgb(37, 211, 102)",
    bgColor: "rgba(37, 211, 102, 0.1)",
    borderColor: "rgba(37, 211, 102, 0.3)",
  },
  instagram: {
    icon: Instagram,
    color: "rgb(225, 48, 108)",
    bgColor: "rgba(225, 48, 108, 0.1)",
    borderColor: "rgba(225, 48, 108, 0.3)",
  },
  facebook: {
    icon: Facebook,
    color: "rgb(24, 119, 242)",
    bgColor: "rgba(24, 119, 242, 0.1)",
    borderColor: "rgba(24, 119, 242, 0.3)",
  },
  telegram: {
    icon: Send,
    color: "rgb(0, 136, 204)",
    bgColor: "rgba(0, 136, 204, 0.1)",
    borderColor: "rgba(0, 136, 204, 0.3)",
  },
};

// Initial messages that will float
const initialMessages: Omit<MessageBubble, "id">[] = [
  { channel: "whatsapp", text: "Oi, qual o horário disponível?", position: { x: 15, y: 15 }, delay: 0 },
  { channel: "instagram", text: "Vocês atendem aos sábados?", position: { x: 68, y: 18 }, delay: 0.3 },
  { channel: "facebook", text: "Quanto custa a consulta?", position: { x: 22, y: 50 }, delay: 0.6 },
  { channel: "whatsapp", text: "Preciso remarcar meu horário", position: { x: 62, y: 55 }, delay: 0.9 },
  { channel: "telegram", text: "Como faço para agendar?", position: { x: 42, y: 32 }, delay: 1.2 },
  { channel: "instagram", text: "Aceita convênio?", position: { x: 70, y: 72 }, delay: 1.5 },
  { channel: "whatsapp", text: "Boa tarde! Gostaria de informações", position: { x: 18, y: 78 }, delay: 1.8 },
];

// Floating Message Component
function FloatingMessage({ message, isConverging }: { message: MessageBubble; isConverging: boolean }) {
  const config = channelConfig[message.channel];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        x: `${message.position.x}%`,
        y: `${message.position.y}%`
      }}
      animate={isConverging ? {
        opacity: [1, 1, 0],
        scale: [1, 1, 0.5],
        x: ["0%", "0%", "0%"],
        y: ["0%", "0%", "0%"],
        left: [`${message.position.x}%`, `${message.position.x}%`, "50%"],
        top: [`${message.position.y}%`, `${message.position.y}%`, "50%"],
      } : {
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={isConverging ? {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
        times: [0, 0.6, 1],
      } : {
        opacity: { duration: 0.5, delay: message.delay },
        scale: { duration: 0.5, delay: message.delay },
        y: {
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: message.delay,
        },
      }}
      style={{
        position: "absolute",
        left: `${message.position.x}%`,
        top: `${message.position.y}%`,
        transform: "translate(-50%, -50%)",
      }}
      className="max-w-[200px] md:max-w-[240px]"
    >
      <div
        className="rounded-xl p-3 backdrop-blur-sm"
        style={{
          background: config.bgColor,
          border: `1px solid ${config.borderColor}`,
        }}
      >
        <div className="flex items-start gap-2">
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: config.bgColor, border: `1px solid ${config.borderColor}` }}
          >
            <Icon className="w-3 h-3" style={{ color: config.color }} />
          </div>
          <p className="text-xs text-white/90 leading-relaxed">{message.text}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Central Hub Component
function CentralHub({ isProcessing }: { isProcessing: boolean }) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.5 }}
    >
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "rgba(0, 53, 102, 0.3)",
          width: "140px",
          height: "140px",
          left: "-30px",
          top: "-30px",
        }}
        animate={isProcessing ? {
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Inner hub */}
      <div className="relative w-20 h-20 rounded-full glass-primeops-card flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl font-bold text-white">P</div>
          <div className="text-[8px] uppercase tracking-widest text-[rgb(176,224,230)]">PRIMEOPS</div>
        </div>

        {/* Processing indicator */}
        <AnimatePresence>
          {isProcessing && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -bottom-2 -right-2"
            >
              <div className="signal-dot w-3 h-3" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// Response Output Component
function ResponseOutput({ isVisible }: { isVisible: boolean }) {
  const { t } = useI18n();

  const responses = [
    { icon: "📅", text: t("primeops.hologram.responses.scheduled") },
    { icon: "✅", text: t("primeops.hologram.responses.confirmed") },
    { icon: "💳", text: t("primeops.hologram.responses.payment") },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <ArrowDownRight className="w-5 h-5 text-[rgb(176,224,230)]/50" />
          <div className="flex flex-wrap justify-center gap-3">
            {responses.map((response, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="glass-primeops-card px-4 py-2 flex items-center gap-2"
              >
                <span>{response.icon}</span>
                <span className="text-xs text-white">{response.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function HologramSection() {
  const { t } = useI18n();
  const [messages, setMessages] = useState<MessageBubble[]>([]);
  const [phase, setPhase] = useState<"floating" | "converging" | "processing" | "output">("floating");
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize messages
  useEffect(() => {
    const messagesWithId = initialMessages.map((msg, index) => ({
      ...msg,
      id: index,
    }));
    setMessages(messagesWithId);
  }, []);

  // Animation cycle
  useEffect(() => {
    const cycle = () => {
      // Phase 1: Floating (5s)
      setPhase("floating");

      // Phase 2: Converging (after 5s)
      setTimeout(() => {
        setPhase("converging");
      }, 5000);

      // Phase 3: Processing (after 6.5s)
      setTimeout(() => {
        setPhase("processing");
      }, 6500);

      // Phase 4: Output (after 8s)
      setTimeout(() => {
        setPhase("output");
      }, 8000);

      // Restart cycle (after 12s)
      setTimeout(() => {
        setMessages(initialMessages.map((msg, index) => ({
          ...msg,
          id: index + Date.now(),
        })));
        cycle();
      }, 12000);
    };

    cycle();
  }, []);

  return (
    <section
      className="relative w-full py-20 md:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgb(12, 24, 42) 0%, rgb(0, 33, 71) 50%, rgb(12, 24, 42) 100%)'
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgb(176,224,230)]/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgb(176,224,230)]/10 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="badge-primeops inline-flex mb-6">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t("primeops.hologram.badge")}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight mb-6">
            {t("primeops.hologram.title")}
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            {t("primeops.hologram.description")}
          </p>
        </motion.div>

        {/* Hologram Container */}
        <div
          ref={containerRef}
          className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden glass-primeops"
        >
          {/* Messages wrapper with safe padding */}
          <div className="absolute inset-4 md:inset-8">
            {/* Floating Messages */}
            {messages.map((message) => (
            <FloatingMessage
              key={message.id}
              message={message}
              isConverging={phase === "converging"}
            />
          ))}
          </div>

          {/* Central Hub */}
          <CentralHub isProcessing={phase === "processing" || phase === "output"} />

          {/* Response Output */}
          <ResponseOutput isVisible={phase === "output"} />

          {/* Decorative grid */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgb(176 224 230) 1px, transparent 1px),
                linear-gradient(to bottom, rgb(176 224 230) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        {/* Bottom Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-slate-400 mt-6"
        >
          {t("primeops.hologram.caption")}
        </motion.p>
      </div>
    </section>
  );
}
