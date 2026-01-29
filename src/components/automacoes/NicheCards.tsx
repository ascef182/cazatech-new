"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Stethoscope, Building2, Scale, ShoppingBag, Briefcase, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/app/ClientBody";

const baseNiches = [
  { icon: Stethoscope, gradient: "from-blue-500 to-cyan-500", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },
  { icon: Building2, gradient: "from-purple-500 to-pink-500", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop" },
  { icon: Scale, gradient: "from-[#5A40BC] to-[#780DA7]", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop" },
  { icon: ShoppingBag, gradient: "from-orange-500 to-red-500", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop" },
  { icon: Briefcase, gradient: "from-indigo-500 to-purple-500", image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop" },
  { icon: Users, gradient: "from-pink-500 to-rose-500", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" },
] as const;

export function NicheCards() {
  const { t } = useI18n();
  const niches = baseNiches.map((n, idx) => ({
    ...n,
    title: t(`automations.niches.cards.${idx}.title`),
    description: t(`automations.niches.cards.${idx}.description`),
    benefits: [
      t(`automations.niches.cards.${idx}.benefits.0`),
      t(`automations.niches.cards.${idx}.benefits.1`),
      t(`automations.niches.cards.${idx}.benefits.2`),
    ],
  }));
  return (
    <section className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm mb-6">
            <span className="text-[10px] font-light uppercase tracking-[0.08em] text-white/70">
              {t("automations.niches.badgeLeft")}
            </span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span className="text-xs font-light tracking-tight text-white/80">
              {t("automations.niches.badgeRight")}
            </span>
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            {t("automations.niches.title")}
          </h2>

          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
            {t("automations.niches.description")}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {niches.map((niche, index) => (
            <motion.div
              key={niche.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={cn(
                  "group relative h-full min-h-[400px] rounded-2xl overflow-hidden",
                  "border border-white/10",
                  "transition-all duration-500",
                  "hover:border-purple-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
                )}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={niche.image}
                    alt={niche.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
                  {/* Gradient Overlay on Hover */}
                  <div
                    className={cn(
                      "absolute inset-0 opacity-0 transition-opacity duration-500",
                      "group-hover:opacity-100 bg-gradient-to-br",
                      niche.gradient,
                      "mix-blend-overlay"
                    )}
                  />
                </div>

                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-end">
                  {/* Icon */}
                  <div
                    className={cn(
                      "absolute top-6 right-6 w-12 h-12 rounded-xl flex items-center justify-center",
                      "bg-gradient-to-br",
                      niche.gradient,
                      "shadow-lg group-hover:scale-110 transition-transform duration-300"
                    )}
                  >
                    <niche.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                    {niche.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-6 text-sm">
                    {niche.description}
                  </p>

                  {/* Benefits List */}
                  <ul className="space-y-2">
                    {niche.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-white/90 font-medium">
                        <svg
                          className="w-4 h-4 text-[#5A40BC] mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NicheCards;
