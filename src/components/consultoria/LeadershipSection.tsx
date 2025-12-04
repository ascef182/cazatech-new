"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Code2, Rocket, Users, Terminal } from "lucide-react";

export default function LeadershipSection() {
  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-purple-900/20 to-transparent opacity-30 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-blue-900/20 to-transparent opacity-30 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Profile Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/10">
              {/* Placeholder image - Replace with Pam's photo */}
              <Image
                src="/images/pam-cazarini.png"
                alt="Pâm Ascef - Liderança Técnica"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white">Pâm Ascef</h3>
                <p className="text-purple-400 font-medium">
                  Líder Técnica & Full Stack Developer
                </p>
              </div>
            </div>

            {/* Tech Stack Floating Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -right-4 top-10 bg-neutral-900/90 backdrop-blur border border-white/10 p-3 rounded-xl shadow-xl hidden md:block"
            >
              <Code2 className="w-6 h-6 text-blue-400" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -left-4 bottom-20 bg-neutral-900/90 backdrop-blur border border-white/10 p-3 rounded-xl shadow-xl hidden md:block"
            >
              <Terminal className="w-6 h-6 text-purple-400" />
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium mb-6">
              <Users className="w-3 h-3" />
              Liderança CazaTech
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Expertise técnica que <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                transforma negócios
              </span>
            </h2>

            <div className="space-y-6 text-neutral-300 leading-relaxed">
              <p>
                À frente da tecnologia na CazaTech, <strong>Pâm Ascef</strong>{" "}
                traz uma visão única que une excelência técnica com estratégia
                de negócios. Como desenvolvedora Full Stack sênior, ela garante
                que cada linha de código contribua para o crescimento da sua
                empresa.
              </p>
              <p>
                Nossa metodologia não é apenas sobre entregar software, mas
                sobre construir soluções escaláveis, seguras e de alta
                performance que se adaptam ao ritmo do seu mercado.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="space-y-2">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-purple-500" />
                  Inovação
                </h4>
                <p className="text-sm text-neutral-400">
                  Uso das stacks mais modernas (Next.js, React, Node) para
                  garantir longevidade.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-500" />
                  Mentoria
                </h4>
                <p className="text-sm text-neutral-400">
                  Acompanhamento próximo para alinhar tecnologia e objetivos
                  comerciais.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
