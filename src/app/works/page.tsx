"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { motion } from "motion/react";
import HeroParallaxDemo from "@/components/hero-parallax-demo";
import VortexDemo from "@/components/vortex-demo";

export default function WorksPage() {
  return (
    <div className="relative">
      {/* Parallax showcase */}
      <div className="bg-black">
        <HeroParallaxDemo />
      </div>
      <div className="bg-black">
        <VortexDemo />
      </div>

      {/* Floating WhatsApp removido (uso global via CTAFloaters) */}
    </div>
  );
}

function PortfolioCard({
  image,
  title,
  description,
  href,
  category,
}: {
  image: string;
  title: string;
  description: string;
  href: string;
  category: string;
}) {
  return (
    <Link href={href} className="group block h-full">
      <div className="relative h-full overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm transition-all hover:shadow-lg">
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
          aria-hidden
        >
          <div className="absolute -inset-40 bg-gradient-to-tr from-pink-500/10 via-purple-500/10 to-blue-500/10 blur-2xl" />
        </div>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70" />
          <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur px-3 py-1 text-xs font-medium text-gray-900">
            {category}
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-semibold text-lg md:text-xl">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-3">
            {description}
          </p>
          <div className="mt-4 inline-flex items-center text-sm font-medium text-pink-600 group-hover:text-pink-500">
            Ver projeto
            <svg
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
