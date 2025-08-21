"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineSection() {
  const data = [
    {
      title: (
        <h3
          className="text-xl leading-tight"
          style={{ fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif" }}
        >
          Planejamento
        </h3>
      ),
      content: (
        <div className="max-w-3xl">
          <p className="text-neutral-700 dark:text-neutral-100">
            Definição de metas, análise de requisitos e escopo do projeto.
          </p>
        </div>
      ),
    },
    {
      title: (
        <h3
          className="text-xl leading-tight"
          style={{ fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif" }}
        >
          Design
        </h3>
      ),
      content: (
        <div className="max-w-3xl">
          <p className="text-neutral-700 dark:text-neutral-300">
            Criação de wireframes, UI e experiência do usuário com foco em
            conversão.
          </p>
        </div>
      ),
    },
    {
      title: (
        <h3
          className="text-xl leading-tight"
          style={{ fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif" }}
        >
          Desenvolvimento
        </h3>
      ),
      content: (
        <div className="max-w-3xl">
          <p className="text-neutral-700 dark:text-neutral-300">
            Implementação com Next.js 15, TypeScript, Tailwind e shadcn/ui.
          </p>
        </div>
      ),
    },
    {
      title: (
        <h3
          className="text-xl leading-tight"
          style={{ fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif" }}
        >
          Lançamento
        </h3>
      ),
      content: (
        <div className="max-w-3xl">
          <p className="text-neutral-700 dark:text-neutral-300">
            Deploy, monitoramento e otimizações contínuas.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section>
      <Timeline data={data} />
    </section>
  );
}
export default TimelineSection;
