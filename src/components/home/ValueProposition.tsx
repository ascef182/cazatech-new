"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/app/ClientBody";
import { Zap, Code2, Headphones, TrendingUp } from "lucide-react";

const items = [
  { key: "speed", icon: Zap, color: "text-amber-400", bg: "bg-amber-500/10" },
  { key: "ownership", icon: Code2, color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { key: "support", icon: Headphones, color: "text-sky-400", bg: "bg-sky-500/10" },
  { key: "roi", icon: TrendingUp, color: "text-violet-400", bg: "bg-violet-500/10" },
];

export function ValueProposition() {
  const { t } = useI18n();

  return (
    <section className="py-16 sm:py-20 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(90,64,188,0.06),transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 mb-4">
            <span className="text-xs font-medium tracking-wide text-emerald-400">
              {t("home.valueProposition.badge")}
            </span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white">
            {t("home.valueProposition.title")}
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all"
              >
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${item.color}`} />
                </div>

                {/* Text */}
                <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5">
                  {t(`home.valueProposition.items.${item.key}.title`)}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                  {t(`home.valueProposition.items.${item.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ValueProposition;
