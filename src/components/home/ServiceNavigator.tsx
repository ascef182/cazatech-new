"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/app/ClientBody";
import { ArrowRight, Bot, Globe, Users, Rocket, Star } from "lucide-react";

interface ServiceCard {
  key: string;
  href: string;
  icon: typeof Bot;
  gradient: string;
  badge?: string;
  badgeColor?: string;
}

const services: ServiceCard[] = [
  {
    key: "automations",
    href: "/automacoes",
    icon: Bot,
    gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    badge: "bestSeller",
    badgeColor: "bg-emerald-500",
  },
  {
    key: "websites",
    href: "/works",
    icon: Globe,
    gradient: "from-violet-500/20 via-violet-500/5 to-transparent",
  },
  {
    key: "consulting",
    href: "/consultoria",
    icon: Users,
    gradient: "from-sky-500/20 via-sky-500/5 to-transparent",
    badge: "free",
    badgeColor: "bg-sky-500",
  },
  {
    key: "saas",
    href: "/saas",
    icon: Rocket,
    gradient: "from-purple-500/20 via-purple-500/5 to-transparent",
    badge: "enterprise",
    badgeColor: "bg-purple-500",
  },
];

export function ServiceNavigator() {
  const { t } = useI18n();

  return (
    <section className="py-16 sm:py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(90,64,188,0.08),transparent_70%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#5A40BC]/30 bg-[#5A40BC]/10 px-4 py-1.5 mb-6">
            <Star className="w-3.5 h-3.5 text-[#5A40BC]" />
            <span className="text-xs font-medium tracking-wide text-[#5A40BC]">
              {t("home.serviceNavigator.badge")}
            </span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
            {t("home.serviceNavigator.title")}
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto font-normal text-sm sm:text-base leading-relaxed">
            {t("home.serviceNavigator.description")}
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="group relative flex flex-col h-full min-h-[200px] sm:min-h-[240px] p-5 sm:p-6 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-sm hover:border-white/20 transition-all duration-500 overflow-hidden"
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />

                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold text-white ${service.badgeColor}`}>
                        {t(`home.serviceNavigator.badges.${service.badge}`)}
                      </span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white/80" />
                    </div>

                    {/* Text */}
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-[#5A40BC] transition-colors">
                      {t(`home.serviceNavigator.services.${service.key}.title`)}
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-4 flex-grow">
                      {t(`home.serviceNavigator.services.${service.key}.description`)}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                      <span className="text-xs sm:text-sm text-neutral-500">
                        {t(`home.serviceNavigator.services.${service.key}.cta`)}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-[#5A40BC] font-medium group-hover:gap-3 transition-all">
                        <span className="hidden sm:inline">{t("home.serviceNavigator.viewMore")}</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5A40BC]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceNavigator;
