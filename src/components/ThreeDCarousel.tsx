"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export type CarouselItem = {
  id: string;
  title: string;
  brand: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
};

export default function ThreeDCarousel({ items }: { items: CarouselItem[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Auto-rotate via CSS animation is simpler and performant
  }, []);

  return (
    <div className="relative w-full py-10 select-none">
      <div
        ref={containerRef}
        className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 perspective-[1200px]"
      >
        {items.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="group relative block rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-lg"
          >
            <div className="relative overflow-hidden h-56">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                {item.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs rounded-full px-2 py-0.5 bg-white/10 text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-white/60 mb-2">{item.brand}</p>
              <p className="text-sm text-white/80 line-clamp-2">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

