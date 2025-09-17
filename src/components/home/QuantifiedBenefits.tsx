'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Benefit {
  metric: string;
  label: string;
  color: string;
}

const benefits: Benefit[] = [
  { metric: "300%", label: "Aumento médio em conversões", color: "text-blue-400" },
  { metric: "24h", label: "Atendimento automatizado", color: "text-purple-400" },
  { metric: "60%", label: "Redução no tempo de resposta", color: "text-cyan-400" }
];

const AnimatedCounter = ({ target, suffix = "" }: { target: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(target.replace(/\D/g, ''));
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < numericValue) {
        setCount(count + Math.ceil(numericValue / 20));
      }
    }, 50);
    
    return () => clearTimeout(timer);
  }, [count, numericValue]);

  return (
    <span>
      {Math.min(count, numericValue)}{target.includes('%') ? '%' : target.includes('h') ? 'h' : suffix}
    </span>
  );
};

export const QuantifiedBenefits = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Resultados Comprovados
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mais de 50 empresas já transformaram seus resultados com nossa automação
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className={`text-4xl md:text-5xl font-bold ${benefit.color} mb-2`}>
                <AnimatedCounter target={benefit.metric} />
              </div>
              <p className="text-white/80 text-sm md:text-base">
                {benefit.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-emerald-400 text-sm font-medium">
              Garantia de resultados em 30 dias
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
