"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Pedro Costa",
    role: "Cliente",
    quote:
      "A CazaTech transformou nossa ideia em realidade com criatividade e estratégia.",
    image: "/images/testimonial.jpeg",
    rating: 5,
  },
  {
    id: 2,
    name: "Ana Beatriz",
    role: "Diretora de Marketing",
    quote: "O site que desenvolveram aumentou nossas conversões em 40%.",
    image:
      "https://www.hubspot.com/hs-fs/hubfs/media/fotodeperfil.jpeg?width=595&name=fotodeperfil.jpeg",
    rating: 5,
  },
  {
    id: 3,
    name: "Carlos Eduardo",
    role: "CEO",
    quote: "A solução que criaram superou todas nossas expectativas.",
    image:
      "https://media.istockphoto.com/id/1767107697/photo/close-up-shot-of-bearded-young-man-wearing-glasses-on-a-black-background.jpg?b=1&s=170667a&w=0&k=20&c=eF-LeA2oAAfs120BB_1jezUA4DUU2RpCwVYblmdZdwc=",
    rating: 5,
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const nextTestimonial = () => {
    setDirection("right");
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setDirection("left");
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const variants = {
    enter: (direction: string) => ({
      x: direction === "right" ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: string) => ({
      x: direction === "right" ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Depoimentos de Clientes
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Construímos parcerias duradouras e entregamos soluções que superam
            expectativas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white p-8 rounded-xl shadow-lg min-h-[300px] flex items-center relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={testimonials[currentIndex].id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row gap-8 items-center w-full"
              >
                <div className="relative w-28 h-28 md:w-32 md:h-32 shrink-0">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover rounded-full border-4 border-purple-100"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {Array(testimonials[currentIndex].rating)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          width="20"
                          height="20"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-yellow-400 w-5 h-5 mr-1"
                        >
                          <path
                            d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                            fill="currentColor"
                          />
                        </svg>
                      ))}
                  </div>
                  <blockquote className="text-lg italic mb-6 text-gray-700">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="font-bold text-gray-900">
                      {testimonials[currentIndex].name}
                    </span>
                    <span className="hidden md:inline-block text-gray-400">
                      •
                    </span>
                    <span className="text-purple-600 text-sm font-medium">
                      {testimonials[currentIndex].role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-purple-600"
              >
                <path
                  fillRule="evenodd"
                  d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-purple-600"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? "right" : "left");
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-purple-600" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="https://cal.com/caza-tech-solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white py-3 px-8 rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-md hover:shadow-lg"
          >
            Agendar avaliação gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
