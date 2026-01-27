"use client";
import { Activity, DraftingCompass, Mail, Zap } from "lucide-react";
import Image from "next/image";
import { useI18n } from "@/app/ClientBody";

export function Features() {
  const { t } = useI18n();

  const featureIcons = [Mail, Zap, Activity, DraftingCompass];

  return (
    <section className="py-16 md:py-32 bg-black">
      <div className="mx-auto max-w-xl md:max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <h2 className="text-3xl font-medium lg:text-4xl text-white tracking-tight">
                {t("works.features.title")}
              </h2>
              <p className="mt-5 text-neutral-400 font-normal leading-relaxed">
                {t("works.features.subtitle")}
              </p>
            </div>
            <ul className="mt-8 divide-y divide-white/10 border-y border-white/10 text-neutral-300">
              {[0, 1, 2, 3].map((index) => {
                const Icon = featureIcons[index];
                return (
                  <li key={index} className="flex items-center gap-3 py-4">
                    <div className="p-2 rounded-lg bg-[#5A40BC]/10 border border-[#5A40BC]/20">
                      <Icon className="size-4 text-[#5A40BC]" />
                    </div>
                    <span className="text-sm font-normal">
                      {t(`works.features.items.${index}`)}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="relative rounded-2xl border border-white/10 p-3 lg:col-span-3 bg-neutral-900/50">
            <div className="aspect-[76/59] relative rounded-xl overflow-hidden">
              <Image
                src="/images/setup.png"
                alt="CazaTech Dashboard"
                fill
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
