"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/app/ClientBody";
import { Button } from "@/components/ui/button";

type Plan = {
  id: string;
  name: string;
  highlight?: boolean;
  bullets: string[];
  cta: string;
};

export default function PricingPlans() {
  const { t } = useI18n();

  const plans: Plan[] = [
    {
      id: "starter",
      name: t("plan_starter_name"),
      bullets: [
        t("plan_starter_b1"),
        t("plan_starter_b2"),
        t("plan_starter_b3"),
      ],
      cta: t("plan_cta"),
    },
    {
      id: "basic",
      name: t("plan_basic_name"),
      bullets: [t("plan_basic_b1"), t("plan_basic_b2"), t("plan_basic_b3")],
      cta: t("plan_cta"),
    },
    {
      id: "premium",
      name: t("plan_premium_name"),
      highlight: true,
      bullets: [
        t("plan_premium_b1"),
        t("plan_premium_b2"),
        t("plan_premium_b3"),
      ],
      cta: t("plan_cta"),
    },
    {
      id: "custom",
      name: t("plan_custom_name"),
      bullets: [t("plan_custom_b1"), t("plan_custom_b2"), t("plan_custom_b3")],
      cta: t("plan_custom_cta"),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t("plan_title")}
          </h2>
          <p className="text-gray-600">{t("plan_subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-2xl border p-6 flex flex-col gap-4 ${
                plan.highlight
                  ? "border-purple-600 shadow-[0_10px_40px_-10px_rgba(147,51,234,0.35)]"
                  : "border-gray-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                {plan.highlight && (
                  <span className="text-xs font-semibold text-purple-700 bg-purple-100 px-2 py-1 rounded-full">
                    {t("plan_popular")}
                  </span>
                )}
              </div>

              <ul className="space-y-2 text-sm text-gray-700">
                {plan.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-purple-600 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0zm14.28-2.28a.75.75 0 10-1.06-1.06l-4.72 4.72-1.97-1.97a.75.75 0 10-1.06 1.06l2.5 2.5c.29.3.77.3 1.06 0l5.25-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button
                  asChild
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  <a
                    href="https://cal.com/caza-tech-solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {plan.cta}
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

