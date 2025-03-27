"use client";

import { motion } from "framer-motion";
import { default as NextImage } from "next/image";

export default function HeroSection() {
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
    hidden: { y: 20, opacity: 0 },
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

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-background pt-8 pb-8 md:pt-16 md:pb-16 min-h-[90vh]">
      {/* Background gradient animado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <NextImage
          src="/images/Abstract Gradient Art.jpeg"
          alt="Background Gradient"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </motion.div>

      <div className="container relative z-10 mt-6 md:mt-12">
        {/* Container principal com animação */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto bg-gradient-to-br from-pink-50/20 to-purple-50/20 backdrop-blur-lg rounded-3xl p-6 md:p-10 border border-white/20 shadow-xl"
        >
          {/* Tag superior */}
          <motion.div variants={item} className="flex justify-center mb-4">
            <motion.p
              className="text-xs font-medium uppercase text-pink-600 tracking-widest"
              whileHover={{ scale: 1.05 }}
            >
              WE ARE CAZATECH
            </motion.p>
          </motion.div>

          {/* Título principal */}
          <motion.h1
            variants={item}
            className="text-center text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-10 leading-tight bg-gradient-to-r from-foreground to-gray-600 bg-clip-text text-transparent"
          >
            Eleve sua presença com
            <br />
            <motion.span
              className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              soluções criativas
            </motion.span>
          </motion.h1>

          {/* Container das imagens sobrepostas */}
          <motion.div
            variants={imageVariants}
            className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] mb-10 md:mb-14"
          >
            {/* Imagem de fundo */}
            <motion.div
              className="absolute inset-0 z-10 overflow-hidden rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.01 }}
            >
              <NextImage
                src="https://html.themexriver.com/Haptic-Html/assets/img/project/pro1.png"
                alt="Imagem Principal"
                fill
                className="object-cover"
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              />
            </motion.div>

            {/* Card 1 (sobrepondo) */}
            <motion.div
              className="absolute -top-5 -left-5 w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] z-20"
              initial={{ x: -50, y: -50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              whileHover={{ scale: 1.05, zIndex: 40 }}
            >
              <div className="relative w-full h-full bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border-2 border-white/20 shadow-lg">
                <NextImage
                  src="https://html.themexriver.com/Haptic-Html/assets/img/project/pro2.png"
                  alt="Card 1"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
            </motion.div>

            {/* Card 2 (sobrepondo) */}
            <motion.div
              className="absolute -bottom-5 -right-5 w-[130px] h-[130px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] z-30"
              initial={{ x: 50, y: 50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              whileHover={{ scale: 1.05, zIndex: 40 }}
            >
              <div className="relative w-full h-full bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border-2 border-white/20 shadow-lg">
                <NextImage
                  src="https://html.themexriver.com/Haptic-Html/assets/img/project/pro7.png"
                  alt="Card 2"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Rodapé */}
          <motion.div
            variants={container}
            className="flex flex-col items-center gap-3 md:gap-4"
          >
            <motion.div variants={item} className="text-center space-y-2">
              <motion.p
                className="uppercase text-xs tracking-widest text-muted-foreground"
                whileHover={{ scale: 1.05 }}
              >
                DA IMAGINAÇÃO À INOVAÇÃO
              </motion.p>
              <motion.p
                className="uppercase text-xs tracking-widest text-muted-foreground"
                whileHover={{ scale: 1.05 }}
              >
                ESTRATÉGIAS QUE GERAM RESULTADOS
              </motion.p>
            </motion.div>

            <motion.a
              variants={item}
              href="mailto:support@caza-tech.com"
              className="text-sm hover:text-primary transition-colors font-medium"
              whileHover={{
                scale: 1.05,
                color: "hsl(263.4, 70%, 50.4%)",
              }}
            >
              support@caza-tech.com
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
