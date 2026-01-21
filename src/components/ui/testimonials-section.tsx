"use client";

import React from "react";
import { testimonials } from "@/content/testimonials";
import { useI18n } from "@/app/ClientBody";

export function TestimonialsSection() {
  const { t } = useI18n();

  return (
    <section className="relative w-full py-16 px-4 bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("testimonials.sectionTitle")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("testimonials.sectionDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            const name = t(`testimonials.${testimonial.id}.name`);
            const role = t(`testimonials.${testimonial.id}.role`);
            const company = t(`testimonials.${testimonial.id}.company`);
            const quote = t(`testimonials.${testimonial.id}.quote`);

            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: "both",
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={name}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "/images/testimonial.jpeg";
                    }}
                  />
                  <div>
                    <h3 className="font-semibold text-foreground">{name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {role} {t("testimonials.at")} {company}
                    </p>
                  </div>
                </div>
                <blockquote className="text-sm text-foreground leading-relaxed">
                  "{quote}"
                </blockquote>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
