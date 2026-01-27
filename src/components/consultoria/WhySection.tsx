"use client";

import { useI18n } from "@/app/ClientBody";

export default function WhySection() {
  const { t } = useI18n();
  const items = [
    {
      title: t("consulting.why.items.0.title"),
      desc: t("consulting.why.items.0.desc"),
    },
    {
      title: t("consulting.why.items.1.title"),
      desc: t("consulting.why.items.1.desc"),
    },
    {
      title: t("consulting.why.items.2.title"),
      desc: t("consulting.why.items.2.desc"),
    },
  ];

  return (
    <div className="lg:col-span-5 space-y-8">
      <h3 className="text-3xl font-bold leading-tight">
        {t("consulting.why.title")}
      </h3>
      <ul className="space-y-6">
        {items.map((item, i) => (
          <li key={i} className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-sm">
              {i + 1}
            </span>
            <div>
              <h4 className="font-semibold text-white mb-1">{item.title}</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
