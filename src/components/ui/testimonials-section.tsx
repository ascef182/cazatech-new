"use client";

import React from "react";
import { testimonials } from "@/content/testimonials";

export function TestimonialsSection() {
  return (
    <section className="relative w-full py-16 px-4 bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Resultados Reais, Clientes Satisfeitos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja como empresas estão crescendo com nossa automação WhatsApp —
            histórias reais, resultados comprovados, crescimento sustentável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, company, quote, image }, index) => (
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
                  src={image}
                  alt={name}
                  className="w-12 h-12 rounded-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "/images/avatar-fallback.jpg";
                  }}
                />
                <div>
                  <h3 className="font-semibold text-foreground">{name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {role} na {company}
                  </p>
                </div>
              </div>
              <blockquote className="text-sm text-foreground leading-relaxed">
                "{quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
