"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function FeaturesSection() {
  // Variantes de animação
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const statsItem = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Componente Counter com animação de 0 → número final
  const Counter = ({ value }: { value: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
      if (isInView) {
        let start = 0;
        const end = value;
        const duration = 2000; // Duração em milissegundos
        const incrementTime = 20; // Intervalo de atualização em ms

        const increment = end / (duration / incrementTime);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.ceil(start));
          }
        }, incrementTime);

        return () => clearInterval(timer);
      }
    }, [isInView, value]);

    return (
      <motion.span
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-block"
      >
        {count}+
      </motion.span>
    );
  };

  return (
    <section className="py-14 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        {/* Título */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto mb-16"
        >
          <motion.h2
            variants={item}
            className="text-xl md:text-2xl font-medium mb-6 text-center bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent"
          >
            Impulsione sua marca no digital com exclusividade e criatividade.
            <br />
            <motion.span
              className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              Imaginação sem limites para tornar sua visão extraordinária!
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Estatísticas */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8 mb-24 text-center"
        >
          {[
            { value: 3, label: "Anos de experiência" },
            { value: 40, label: "Clientes Satisfeitos" },
            { value: 100, label: "Projetos" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={statsItem}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <div className="text-3xl md:text-4xl font-medium mb-1 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                <Counter value={stat.value} />
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Cards de Features */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title:
                "Transforme a identidade do seu negócio com estratégias de branding especializadas",
              description:
                "Eleve a presença da sua marca com soluções personalizadas que refletem sua essência.",
              number: "01",
            },
            {
              title:
                "Desbloqueie soluções web inovadoras com tecnologia de ponta",
              description:
                "Nossa equipe cria experiências digitais fluidas para impulsionar resultados e o crescimento do seu negócio.",
              number: "02",
            },
            {
              title: "Design intuitivo para experiências excepcionais",
              description:
                "Desenvolvemos interfaces centradas no usuário para aumentar o engajamento e a usabilidade.",
              number: "03",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm h-full flex flex-col border border-gray-100 dark:border-gray-700 transition-all"
            >
              <h3 className="text-base md:text-lg font-medium mb-3 text-gray-800 dark:text-gray-100">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-8">
                {feature.description}
              </p>
              <div className="text-[100px] md:text-[120px] font-light text-gray-100 dark:text-gray-700/50 mt-auto">
                {feature.number}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
