"use client";

import { motion } from "motion/react";

const funnelData = [
  { value: 1000, label: "Visitantes", color: "#8b5cf6", percentage: 100 },
  { value: 450, label: "Leads", color: "#7c3aed", percentage: 45 },
  { value: 200, label: "Qualificados", color: "#6d28d9", percentage: 20 },
  { value: 85, label: "Oportunidades", color: "#5b21b6", percentage: 8.5 },
  { value: 32, label: "Clientes", color: "#4c1d95", percentage: 3.2 },
];

export default function FunnelChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto py-12"
    >
      <div className="w-full bg-black border border-purple-500/20 rounded-2xl p-8">
        {/* Custom Funnel Visual */}
        <div className="flex flex-col items-center gap-2 mb-8">
          {funnelData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center w-full"
            >
              <div
                className="relative flex items-center justify-between px-6 py-4 rounded-lg transition-all duration-300 hover:scale-105"
                style={{
                  width: `${item.percentage}%`,
                  minWidth: "30%",
                  backgroundColor: item.color,
                  boxShadow: `0 4px 20px ${item.color}40`,
                }}
              >
                <span className="font-bold text-white text-sm md:text-base">
                  {item.label}
                </span>
                <span className="font-semibold text-white text-sm md:text-base">
                  {item.value}
                </span>
              </div>
              {index < funnelData.length - 1 && (
                <div className="w-px h-4 bg-gradient-to-b from-purple-500/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Legend */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4">
          {funnelData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <div className="text-xs text-white/80">
                <div className="font-semibold">{item.label}</div>
                <div className="text-white/60">{item.percentage}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conversion Rate Indicators */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">45%</div>
          <div className="text-xs text-white/60">Taxa de Conversão</div>
          <div className="text-xs text-white/40">Visitante → Lead</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">44%</div>
          <div className="text-xs text-white/60">Taxa de Qualificação</div>
          <div className="text-xs text-white/40">Lead → Qualificado</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">43%</div>
          <div className="text-xs text-white/60">Taxa de Oportunidade</div>
          <div className="text-xs text-white/40">Qualificado → Oportunidade</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-emerald-400">38%</div>
          <div className="text-xs text-white/60">Taxa de Fechamento</div>
          <div className="text-xs text-white/40">Oportunidade → Cliente</div>
        </div>
      </div>
    </motion.div>
  );
}

