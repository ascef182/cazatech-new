"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Rocket, Users, Terminal } from "lucide-react";
import { useI18n } from "@/app/ClientBody";
import CalendlyButton from "./CalendlyButton";

export default function LeadershipSection() {
  const { t } = useI18n();
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
                src="/images/pam-cazarini.webp"
                alt={t("consulting.hero.alt")}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white">Pâm Ascef</h3>
                <p className="text-purple-400 font-medium">
                  {t("consulting.hero.badge")}
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
              {t("consulting.hero.badge")}
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              {t("consulting.hero.titleLine1")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                {t("consulting.hero.titleLine2")}
              </span>
            </h2>

            <div className="space-y-6 text-neutral-300 leading-relaxed">
              <p>
                {t("consulting.hero.p1")}
              </p>
              <p>
                {t("consulting.hero.p2")}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="space-y-2">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-purple-500" />
                  {t("consulting.hero.featureInnovationTitle")}
                </h4>
                <p className="text-sm text-neutral-400">
                  {t("consulting.hero.featureInnovationDesc")}
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-500" />
                  {t("consulting.hero.featureMentoringTitle")}
                </h4>
                <p className="text-sm text-neutral-400">
                  {t("consulting.hero.featureMentoringDesc")}
                </p>
              </div>
            </div>

            {/* CTA Calendly */}
            <div className="mt-10">
              <CalendlyButton text={t("consulting.calendly.buttonFree")} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
