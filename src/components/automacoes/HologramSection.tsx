"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Instagram,
  Facebook,
  Send,
  Check,
  CheckCheck,
  Bot,
  Mic,
  Play,
  Pause,
  Volume2,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* TYPES */
/* ------------------------------------------------------------------ */

type Channel = "whatsapp" | "instagram" | "facebook" | "telegram";
type MessageType = "incoming" | "outgoing";

interface ChatMessage {
  id: number;
  channel: Channel;
  text: string;
  type: MessageType;
  timestamp: string;
  isTyping?: boolean;
  isRead?: boolean;
  isAudio?: boolean;
  audioDuration?: string;
  isTranscribing?: boolean;
  transcription?: string;
  isRecording?: boolean;
}

/* ------------------------------------------------------------------ */
/* CONFIG */
/* ------------------------------------------------------------------ */

const channelConfig = {
  whatsapp: {
    icon: MessageSquare,
    name: "WhatsApp",
    incomingBg: "bg-[#202c33]",
    outgoingBg: "bg-[#005c4b]",
    accent: "#25D366",
    headerBg: "bg-[#202c33]",
  },
  instagram: {
    icon: Instagram,
    name: "Instagram",
    incomingBg: "bg-[#262626]",
    outgoingBg: "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]",
    accent: "#E1306C",
    headerBg: "bg-[#262626]",
  },
  facebook: {
    icon: Facebook,
    name: "Messenger",
    incomingBg: "bg-[#303030]",
    outgoingBg: "bg-[#0084ff]",
    accent: "#1877F2",
    headerBg: "bg-[#303030]",
  },
  telegram: {
    icon: Send,
    name: "Telegram",
    incomingBg: "bg-[#182533]",
    outgoingBg: "bg-[#2b5278]",
    accent: "#0088cc",
    headerBg: "bg-[#17212b]",
  },
};

/* ------------------------------------------------------------------ */
/* CONVERSATION DATA */
/* ------------------------------------------------------------------ */

const conversations: {
  channel: Channel;
  messages: Omit<ChatMessage, "id">[];
}[] = [
  {
    channel: "whatsapp",
    messages: [
      {
        channel: "whatsapp",
        text: "",
        type: "incoming",
        timestamp: "10:30",
        isAudio: true,
        audioDuration: "0:08",
        transcription:
          "Oi, gostaria de saber se tem horário disponível pra amanhã de tarde",
      },
      {
        channel: "whatsapp",
        text: "Olá! Temos horários às 14h, 15h e 16h amanhã. Qual prefere?",
        type: "outgoing",
        timestamp: "10:30",
        isRead: true,
      },
      {
        channel: "whatsapp",
        text: "",
        type: "incoming",
        timestamp: "10:31",
        isAudio: true,
        audioDuration: "0:03",
        transcription: "Quatorze horas seria perfeito",
      },
      {
        channel: "whatsapp",
        text: "",
        type: "outgoing",
        timestamp: "10:31",
        isRead: true,
        isAudio: true,
        audioDuration: "0:05",
        transcription:
          "Perfeito! Agendado para amanhã às 14h. Enviei a confirmação por email.",
      },
    ],
  },
  {
    channel: "instagram",
    messages: [
      {
        channel: "instagram",
        text: "Quanto custa a consulta?",
        type: "incoming",
        timestamp: "11:45",
      },
      {
        channel: "instagram",
        text: "A consulta inicial é R$ 150,00. Aceitamos PIX, cartão e dinheiro.",
        type: "outgoing",
        timestamp: "11:45",
        isRead: true,
      },
      {
        channel: "instagram",
        text: "",
        type: "incoming",
        timestamp: "11:46",
        isAudio: true,
        audioDuration: "0:04",
        transcription: "Vocês parcelam no cartão?",
      },
      {
        channel: "instagram",
        text: "Sim! Parcelamos em até 3x sem juros no cartão.",
        type: "outgoing",
        timestamp: "11:46",
        isRead: true,
      },
    ],
  },
  {
    channel: "telegram",
    messages: [
      {
        channel: "telegram",
        text: "",
        type: "incoming",
        timestamp: "14:20",
        isAudio: true,
        audioDuration: "0:06",
        transcription: "Oi, preciso remarcar minha consulta de quinta",
      },
      {
        channel: "telegram",
        text: "Sem problemas! Qual seria o novo horário de preferência?",
        type: "outgoing",
        timestamp: "14:20",
        isRead: true,
      },
      {
        channel: "telegram",
        text: "",
        type: "incoming",
        timestamp: "14:21",
        isAudio: true,
        audioDuration: "0:04",
        transcription: "Pode ser sexta às dez da manhã?",
      },
      {
        channel: "telegram",
        text: "",
        type: "outgoing",
        timestamp: "14:21",
        isRead: true,
        isAudio: true,
        audioDuration: "0:06",
        transcription:
          "Consulta remarcada para sexta às 10h. Você receberá uma notificação de lembrete.",
      },
    ],
  },
  {
    channel: "facebook",
    messages: [
      {
        channel: "facebook",
        text: "",
        type: "incoming",
        timestamp: "09:15",
        isAudio: true,
        audioDuration: "0:05",
        transcription: "Bom dia, vocês atendem aos sábados?",
      },
      {
        channel: "facebook",
        text: "Sim! Atendemos sábados das 8h às 12h. Deseja agendar?",
        type: "outgoing",
        timestamp: "09:15",
        isRead: true,
      },
      {
        channel: "facebook",
        text: "Sim, pode ser 9h?",
        type: "incoming",
        timestamp: "09:16",
      },
      {
        channel: "facebook",
        text: "Pronto! Consulta agendada para sábado às 9h. Enviamos confirmação.",
        type: "outgoing",
        timestamp: "09:16",
        isRead: true,
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* AUDIO WAVEFORM */
/* ------------------------------------------------------------------ */

function AudioWaveform({
  isPlaying,
  isOutgoing,
}: {
  isPlaying: boolean;
  isOutgoing: boolean;
}) {
  const bars = 12;

  return (
    <div className="flex items-center gap-0.5 h-6">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className={`w-1 rounded-full ${isOutgoing ? "bg-white/70" : "bg-white/60"}`}
          animate={
            isPlaying
              ? {
                  height: [
                    8,
                    16 + Math.random() * 8,
                    8,
                    20 + Math.random() * 4,
                    8,
                  ],
                }
              : {
                  height: [6, 10, 14, 10, 18, 14, 10, 6, 12, 16, 10, 8][i],
                }
          }
          transition={
            isPlaying
              ? {
                  duration: 0.5,
                  repeat: Infinity,
                  delay: i * 0.05,
                }
              : {
                  duration: 0,
                }
          }
          style={{
            height: isPlaying
              ? 8
              : [6, 10, 14, 10, 18, 14, 10, 6, 12, 16, 10, 8][i],
          }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* AUDIO BUBBLE */
/* ------------------------------------------------------------------ */

function AudioBubble({
  message,
  config,
  isOutgoing,
}: {
  message: ChatMessage;
  config: typeof channelConfig.whatsapp;
  isOutgoing: boolean;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscription, setShowTranscription] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);

  // Auto-play animation and show transcription
  useEffect(() => {
    if (message.isAudio && message.transcription) {
      const playTimer = setTimeout(() => {
        setIsPlaying(true);
      }, 300);

      const transcribeTimer = setTimeout(() => {
        setIsPlaying(false);
        setIsTranscribing(true);
      }, 2000);

      const showTimer = setTimeout(() => {
        setIsTranscribing(false);
        setShowTranscription(true);
      }, 3000);

      return () => {
        clearTimeout(playTimer);
        clearTimeout(transcribeTimer);
        clearTimeout(showTimer);
      };
    }
  }, [message.isAudio, message.transcription]);

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {/* Audio player */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`
            w-8 h-8 rounded-full flex items-center justify-center shrink-0
            ${isOutgoing ? "bg-white/20" : "bg-white/10"}
            hover:bg-white/30 transition-colors
          `}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-white" />
          ) : (
            <Play className="w-4 h-4 text-white ml-0.5" />
          )}
        </button>

        <AudioWaveform isPlaying={isPlaying} isOutgoing={isOutgoing} />

        <span className="text-xs text-white/60 ml-1 shrink-0">
          {message.audioDuration}
        </span>

        {isOutgoing && (
          <Mic className="w-3.5 h-3.5 text-emerald-400 ml-auto shrink-0" />
        )}
      </div>

      {/* Transcription area */}
      <AnimatePresence mode="wait">
        {isTranscribing && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-2 pt-1.5 border-t border-white/10"
          >
            <Volume2 className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
            <span className="text-xs text-sky-400">Transcrevendo áudio...</span>
            <motion.div className="flex gap-0.5">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1 h-1 rounded-full bg-sky-400"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}

        {showTranscription && message.transcription && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="pt-1.5 border-t border-white/10"
          >
            <div className="flex items-start gap-1.5">
              <Volume2 className="w-3 h-3 text-emerald-400 mt-0.5 shrink-0" />
              <p className="text-xs text-white/70 italic leading-relaxed">
                "{message.transcription}"
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* MESSAGE BUBBLE */
/* ------------------------------------------------------------------ */

function MessageBubble({
  message,
  showChannel = false,
}: {
  message: ChatMessage;
  showChannel?: boolean;
}) {
  const config = channelConfig[message.channel];
  const Icon = config.icon;
  const isOutgoing = message.type === "outgoing";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`flex ${isOutgoing ? "justify-end" : "justify-start"} w-full`}
    >
      <div
        className={`
          relative max-w-[85%] px-3 py-2 rounded-2xl
          ${isOutgoing ? config.outgoingBg : config.incomingBg}
          ${isOutgoing ? "rounded-br-md" : "rounded-bl-md"}
          shadow-sm
        `}
      >
        {showChannel && !isOutgoing && (
          <div className="flex items-center gap-1.5 mb-1">
            <Icon className="w-3 h-3" style={{ color: config.accent }} />
            <span
              className="text-[10px] font-medium"
              style={{ color: config.accent }}
            >
              {config.name}
            </span>
          </div>
        )}

        {isOutgoing && (
          <div className="flex items-center gap-1.5 mb-1">
            <Bot className="w-3 h-3 text-emerald-400" />
            <span className="text-[10px] font-medium text-emerald-400">
              PrimeOps IA
            </span>
          </div>
        )}

        {message.isTyping ? (
          <div className="flex items-center gap-1 py-1">
            <motion.span
              className="w-2 h-2 rounded-full bg-white/60"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
            />
            <motion.span
              className="w-2 h-2 rounded-full bg-white/60"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
            />
            <motion.span
              className="w-2 h-2 rounded-full bg-white/60"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
            />
          </div>
        ) : message.isRecording ? (
          <div className="flex items-center gap-2 py-1">
            <motion.div
              className="w-3 h-3 rounded-full bg-red-500"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span className="text-xs text-white/70">Gravando...</span>
            <motion.div className="flex gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.span
                  key={i}
                  className="w-1 rounded-full bg-red-400"
                  animate={{ height: [4, 12 + Math.random() * 8, 4] }}
                  transition={{
                    duration: 0.4,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </motion.div>
          </div>
        ) : message.isAudio ? (
          <AudioBubble
            message={message}
            config={config}
            isOutgoing={isOutgoing}
          />
        ) : (
          <p className="text-sm text-white/95 leading-relaxed">
            {message.text}
          </p>
        )}

        <div
          className={`flex items-center gap-1 mt-1 ${isOutgoing ? "justify-end" : "justify-start"}`}
        >
          <span className="text-[10px] text-white/50">{message.timestamp}</span>
          {isOutgoing &&
            (message.isRead ? (
              <CheckCheck className="w-3.5 h-3.5 text-sky-400" />
            ) : (
              <Check className="w-3.5 h-3.5 text-white/50" />
            ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* CHAT WINDOW */
/* ------------------------------------------------------------------ */

function ChatWindow({
  channel,
  messages,
  isActive,
}: {
  channel: Channel;
  messages: ChatMessage[];
  isActive: boolean;
}) {
  const config = channelConfig[channel];
  const Icon = config.icon;
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <motion.div
      layout
      className={`
        w-full rounded-2xl overflow-hidden shadow-2xl
        border border-white/10 backdrop-blur-sm
        ${isActive ? "ring-2 ring-emerald-500/50" : ""}
      `}
      style={{ background: "rgba(17, 24, 39, 0.95)" }}
    >
      {/* Header */}
      <div
        className={`${config.headerBg} px-4 py-3 flex items-center gap-3 border-b border-white/10`}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: `${config.accent}20`,
            border: `1.5px solid ${config.accent}50`,
          }}
        >
          <Icon className="w-5 h-5" style={{ color: config.accent }} />
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-white">{config.name}</h4>
          <p className="text-xs text-white/50">
            {isActive ? (
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                IA respondendo...
              </span>
            ) : (
              "Online"
            )}
          </p>
        </div>
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="px-2 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30"
          >
            <span className="text-[10px] font-medium text-emerald-400">
              ATIVO
            </span>
          </motion.div>
        )}
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="h-[180px] sm:h-[200px] overflow-y-auto p-3 flex flex-col gap-2 scrollbar-thin scrollbar-thumb-white/10"
        style={{ background: "rgba(0, 0, 0, 0.3)" }}
      >
        <AnimatePresence mode="popLayout">
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} showChannel={false} />
          ))}
        </AnimatePresence>
      </div>

      {/* Input */}
      <div
        className="px-3 py-2 border-t border-white/10 flex items-center gap-2"
        style={{ background: "rgba(17, 24, 39, 0.95)" }}
      >
        <div className="flex-1 bg-white/5 rounded-full px-4 py-2 flex items-center gap-2">
          <span className="text-xs text-white/30 flex-1">
            Mensagem automática via PrimeOps
          </span>
          <div className="flex items-center gap-1 text-white/40">
            <Mic className="w-3.5 h-3.5" />
            <Volume2 className="w-3.5 h-3.5" />
          </div>
        </div>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{ backgroundColor: config.accent }}
        >
          <Send className="w-4 h-4 text-white" />
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* STATS DISPLAY */
/* ------------------------------------------------------------------ */

function StatsDisplay() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="grid grid-cols-3 gap-2 sm:gap-4 w-full"
    >
      {[
        { icon: "🎙️", label: "Áudios", value: "Transcritos" },
        { icon: "📅", label: "Agendamentos", value: "24/7" },
        { icon: "💳", label: "Pagamentos", value: "Integrado" },
      ].map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + idx * 0.1 }}
          className="flex flex-col items-center gap-1 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <span className="text-xl sm:text-2xl">{stat.icon}</span>
          <span className="text-[10px] sm:text-xs text-white/50">
            {stat.label}
          </span>
          <span className="text-xs sm:text-sm font-semibold text-emerald-400">
            {stat.value}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* CHANNEL TABS */
/* ------------------------------------------------------------------ */

function ChannelTabs({
  activeChannel,
  onSelect,
}: {
  activeChannel: Channel;
  onSelect: (channel: Channel) => void;
}) {
  const channels: Channel[] = ["whatsapp", "instagram", "telegram", "facebook"];

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      {channels.map((channel) => {
        const config = channelConfig[channel];
        const Icon = config.icon;
        const isActive = activeChannel === channel;

        return (
          <motion.button
            key={channel}
            onClick={() => onSelect(channel)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative p-2.5 sm:p-3 rounded-xl transition-all duration-300
              ${
                isActive
                  ? "bg-white/10 border border-white/20 shadow-lg"
                  : "bg-white/5 border border-white/5 hover:bg-white/10"
              }
            `}
          >
            <Icon
              className="w-5 h-5 sm:w-6 sm:h-6 transition-colors"
              style={{
                color: isActive ? config.accent : "rgba(255,255,255,0.5)",
              }}
            />
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                style={{ backgroundColor: config.accent }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* MAIN */
/* ------------------------------------------------------------------ */

export default function HologramSection() {
  const [activeChannel, setActiveChannel] = useState<Channel>("whatsapp");
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const messageIndexRef = useRef(0);
  const cycleRef = useRef<NodeJS.Timeout | null>(null);

  // Get current conversation
  const currentConversation = conversations.find(
    (c) => c.channel === activeChannel,
  );

  // Animate messages appearing one by one
  useEffect(() => {
    setVisibleMessages([]);
    messageIndexRef.current = 0;
    setIsAnimating(true);

    if (cycleRef.current) {
      clearTimeout(cycleRef.current);
    }

    const animateMessages = () => {
      if (!currentConversation) return;

      const messages = currentConversation.messages;

      if (messageIndexRef.current < messages.length) {
        const currentMsg = messages[messageIndexRef.current];

        // Show typing indicator for outgoing messages
        if (currentMsg.type === "outgoing" && messageIndexRef.current > 0) {
          const typingMsg: ChatMessage = {
            ...currentMsg,
            id: Date.now(),
            isTyping: true,
          };
          setVisibleMessages((prev) => [...prev, typingMsg]);

          // Replace typing with actual message
          cycleRef.current = setTimeout(() => {
            setVisibleMessages((prev) =>
              prev.map((msg) =>
                msg.isTyping
                  ? { ...currentMsg, id: msg.id, isTyping: false }
                  : msg,
              ),
            );
            messageIndexRef.current++;
            cycleRef.current = setTimeout(animateMessages, 800);
          }, 1200);
        } else {
          setVisibleMessages((prev) => [
            ...prev,
            { ...currentMsg, id: Date.now() },
          ]);
          messageIndexRef.current++;
          cycleRef.current = setTimeout(animateMessages, 600);
        }
      } else {
        setIsAnimating(false);
        // Restart cycle after delay
        cycleRef.current = setTimeout(() => {
          const channels: Channel[] = [
            "whatsapp",
            "instagram",
            "telegram",
            "facebook",
          ];
          const currentIndex = channels.indexOf(activeChannel);
          const nextChannel = channels[(currentIndex + 1) % channels.length];
          setActiveChannel(nextChannel);
        }, 4000);
      }
    };

    cycleRef.current = setTimeout(animateMessages, 500);

    return () => {
      if (cycleRef.current) {
        clearTimeout(cycleRef.current);
      }
    };
  }, [activeChannel, currentConversation]);

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      {/* Outer Container Card */}
      <div
        className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(17, 24, 39, 0.98) 0%, rgba(10, 15, 25, 0.98) 100%)",
        }}
      >
        {/* Subtle gradient overlay */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 p-4 sm:p-6 flex flex-col gap-4 sm:gap-6">
          {/* Header */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-3"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-emerald-400">
                IA Ativa
              </span>
            </motion.div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
              Atendimento Automático
            </h3>
            <p className="text-xs sm:text-sm text-white/50">
              Respostas instantâneas em todos os canais
            </p>
          </div>

          {/* Channel Tabs */}
          <ChannelTabs
            activeChannel={activeChannel}
            onSelect={setActiveChannel}
          />

          {/* Chat Window */}
          <ChatWindow
            channel={activeChannel}
            messages={visibleMessages}
            isActive={isAnimating}
          />

          {/* Stats */}
          <StatsDisplay />
        </div>
      </div>
    </div>
  );
}
