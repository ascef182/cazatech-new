"use client";
import { Activity, DraftingCompass, Mail, Zap } from "lucide-react";

export function Features() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-xl md:max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <h2
                className="text-3xl font-semibold lg:text-4xl text-white"
                style={{
                  fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif",
                }}
              >
                Projetos escaláveis
              </h2>
              <p className="mt-5 text-muted-foreground text-neutral-200">
                Estrutura moderna, SEO técnico e performance. Construímos com
                foco em conversão e escala.
              </p>
            </div>
            <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3 text-neutral-200">
              <li>
                <Mail className="size-5" /> Suporte por e-mail e web
              </li>
              <li>
                <Zap className="size-5" /> Resposta rápida
              </li>
              <li>
                <Activity className="size-5" /> Monitoramento e analytics
              </li>
              <li>
                <DraftingCompass className="size-5" /> Revisão de arquitetura
              </li>
            </ul>
          </div>
          <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
            <div className="bg-gradient-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <img
                src="./images/setup.png"
                className="hidden rounded-[15px] dark:block"
                alt="dashboard dark"
                width={1207}
                height={929}
              />
              <img
                src="./images/setup.png"
                className="rounded-[15px] shadow dark:hidden"
                alt="dashboard light"
                width={1207}
                height={929}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
