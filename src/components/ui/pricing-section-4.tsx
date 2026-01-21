"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkles as SparklesComp } from "@/components/ui/sparkles";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    description: "Ideal para profissionais autônomos e pequenos negócios",
    price: 299,
    setupPrice: 1990,
    buttonText: "Contratar Starter",
    buttonVariant: "outline" as const,
    whatsappText: "Olá! Quero contratar o plano Starter de automação WhatsApp",
    includes: [
      "Inclui:",
      "Atendimento automatizado 24/7",
      "Respostas inteligentes personalizadas",
      "Até 1 número WhatsApp",
      "Integração básica com planilhas",
    ],
  },
  {
    name: "Growth",
    description:
      "Perfeito para empresas em crescimento que precisam de mais recursos",
    price: 499,
    setupPrice: 2990,
    buttonText: "Contratar Growth",
    buttonVariant: "default" as const,
    popular: true,
    whatsappText: "Olá! Quero contratar o plano Growth de automação WhatsApp",
    includes: [
      "Tudo do Starter, mais:",
      "Qualificação automática de leads",
      "Até 5 números WhatsApp",
      "Integrações avançadas (CRM, pagamentos)",
      "Agendamentos automáticos",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Solução completa para grandes empresas com recursos ilimitados",
    price: 0,
    setupPrice: 0,
    setupText: "Sob consulta",
    monthlyText: "Personalizado",
    buttonText: "Falar com Consultor",
    buttonVariant: "outline" as const,
    whatsappText:
      "Olá! Quero uma proposta personalizada para o plano Enterprise",
    includes: [
      "Tudo do Growth, mais:",
      "Números WhatsApp ilimitados",
      "Integrações customizadas",
      "SLA garantido",
      "Suporte prioritário 24/7",
    ],
  },
];

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-neutral-900 border border-gray-700 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "0" ? "text-white" : "text-gray-200"
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 to-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Setup + Mensal</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "1" ? "text-white" : "text-gray-200"
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 to-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Apenas Mensal
          </span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection4() {
  const [showSetup, setShowSetup] = useState(true);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setShowSetup(Number.parseInt(value) === 0);

  return (
    <div
      className=" min-h-screen mx-auto relative bg-black overflow-x-hidden"
      ref={pricingRef}
      style={{ zIndex: 10 }}
    >
      <TimelineContent
        animationNum={4}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute top-0  h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] "
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px] "></div>
        <SparklesComp
          density={1800}
          direction="bottom"
          speed={1}
          color="#FFFFFF"
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </TimelineContent>
      <TimelineContent
        animationNum={5}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute left-0 top-[-114px] w-full h-[113.625vh] flex flex-col items-start justify-start content-start flex-none flex-nowrap gap-2.5 overflow-hidden p-0 z-0"
      >
        <div className="framer-1i5axl2">
          <div
            className="absolute left-[-568px] right-[-568px] top-0 h-[2053px] flex-none rounded-full"
            style={{
              border: "200px solid #3131f5",
              filter: "blur(92px)",
              WebkitFilter: "blur(92px)",
            }}
            data-border="true"
            data-framer-name="Ellipse 1"
          ></div>
          <div
            className="absolute left-[-568px] right-[-568px] top-0 h-[2053px] flex-none rounded-full"
            style={{
              border: "200px solid #3131f5",
              filter: "blur(92px)",
              WebkitFilter: "blur(92px)",
            }}
            data-border="true"
            data-framer-name="Ellipse 2"
          ></div>
        </div>
      </TimelineContent>

      <article className="text-center mb-6 pt-32 max-w-3xl mx-auto space-y-2 relative z-50">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          style={{ fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif" }}
        >
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center "
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0, // First element
            }}
          >
            Planos que Cabem no Seu Bolso
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="text-gray-300"
        >
          Implementação rápida, sem fidelidade e com garantia de resultados.
          Escolha o plano ideal para o tamanho do seu negócio.
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <PricingSwitch onSwitch={togglePricingPeriod} />
        </TimelineContent>
      </article>

      <div
        className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle at center, #206ce8 0%, transparent 70%)
      `,
          opacity: 0.6,
          mixBlendMode: "multiply",
        }}
      />

      <div className="grid md:grid-cols-3 max-w-5xl gap-4 py-6 mx-auto px-4">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={`relative text-white border-neutral-800 ${
                plan.popular
                  ? "bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 shadow-[0px_-13px_300px_0px_#0900ff] z-20"
                  : "bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 z-10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-left ">
                <div className="flex justify-between">
                  <h3 className="text-3xl mb-2">{plan.name}</h3>
                </div>

                {showSetup && plan.setupPrice > 0 && (
                  <div className="flex items-baseline mb-2">
                    <span className="text-2xl font-semibold ">
                      R${" "}
                      <NumberFlow
                        value={plan.setupPrice}
                        className="text-2xl font-semibold"
                      />
                    </span>
                    <span className="text-gray-300 ml-1 text-sm">
                      setup único
                    </span>
                  </div>
                )}

                <div className="flex items-baseline">
                  <span className="text-4xl font-semibold ">
                    {plan.monthlyText ? (
                      plan.monthlyText
                    ) : (
                      <>
                        R${" "}
                        <NumberFlow
                          value={plan.price}
                          className="text-4xl font-semibold"
                        />
                      </>
                    )}
                  </span>
                  {!plan.monthlyText && (
                    <span className="text-gray-300 ml-1">/mês</span>
                  )}
                </div>

                {showSetup && plan.setupText && (
                  <div className="text-2xl font-semibold text-gray-300">
                    {plan.setupText}
                  </div>
                )}

                <p className="text-sm text-gray-300 mb-4">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <Link
                  href={`https://wa.me/5535998026821?text=${encodeURIComponent(
                    plan.whatsappText
                  )}`}
                  target="_blank"
                  className={`block w-full mb-6 p-4 text-xl rounded-xl text-center transition-all ${
                    plan.popular
                      ? "bg-gradient-to-t from-blue-500 to-blue-600  shadow-lg shadow-blue-800 border border-blue-500 text-white hover:from-blue-600 hover:to-blue-700"
                      : plan.buttonVariant === "outline"
                      ? "bg-gradient-to-t from-neutral-950 to-neutral-600  shadow-lg shadow-neutral-900 border border-neutral-800 text-white hover:from-neutral-900 hover:to-neutral-500"
                      : ""
                  }`}
                >
                  {plan.buttonText}
                </Link>

                <div className="space-y-3 pt-4 border-t border-neutral-700">
                  <h4 className="font-medium text-base mb-3">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-2">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <span className="h-2.5 w-2.5 bg-neutral-500 rounded-full grid place-content-center"></span>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </div>
  );
}
