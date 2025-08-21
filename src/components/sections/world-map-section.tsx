"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

type Connection = {
  start: { lat: number; lng: number; label?: string };
  end: { lat: number; lng: number; label?: string };
};

const connections: Connection[] = [
  {
    start: { lat: -15.7975, lng: -47.8919, label: "Brasília" },
    end: { lat: 38.7223, lng: -9.1393, label: "Lisboa" },
  },
  {
    start: { lat: -15.7975, lng: -47.8919, label: "Brasília" },
    end: { lat: 40.7128, lng: -74.006, label: "Nova York" },
  },
  {
    start: { lat: -15.7975, lng: -47.8919, label: "Brasília" },
    end: { lat: 51.5074, lng: -0.1278, label: "Londres" },
  },
  {
    start: { lat: -15.7975, lng: -47.8919, label: "Brasília" },
    end: { lat: 28.6139, lng: 77.209, label: "Nova Délhi" },
  },
  {
    start: { lat: -15.7975, lng: -47.8919, label: "Brasília" },
    end: { lat: -1.2921, lng: 36.8219, label: "Nairóbi" },
  },
  {
    start: { lat: -15.7975, lng: -47.8919, label: "Brasília" },
    end: { lat: 35.6762, lng: 139.6503, label: "Tóquio" },
  },
];

export default function WorldMapSection() {
  return (
    <section className="w-full bg-black py-16 md:py-24">
      <div className="container">
        <motion.h2
          style={{ fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif" }}
          className="mb-2 text-center text-3xl md:text-4xl font-bold text-white"
        >
          {"Conexões ".split("").map((char, idx) => (
            <motion.span
              key={idx}
              className="inline-block"
              initial={{ y: 6, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.35, delay: idx * 0.02 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>
        <p className="text-center text-neutral-400 mb-8">
          Conectando clientes e parceiros pelo mundo.
        </p>
        <WorldMap dots={connections} lineColor="#0ea5e9" />
      </div>
    </section>
  );
}
