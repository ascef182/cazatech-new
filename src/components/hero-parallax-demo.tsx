"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return (
    <div className="-mt-16 md:-mt-20">
      <HeroParallax products={products} />
    </div>
  );
}

export const products = [
  {
    title: "Instituto Seu Olhar",
    link: "https://institutoseuolhar.com",
    thumbnail: "./templates/instituto-website.png",
  },
  {
    title: "Hype",
    link: "https://hype.com",
    thumbnail: "./templates/hype-website.webp",
  },
  {
    title: "Haven",
    link: "https://haven.com",
    thumbnail: "./templates/vistahaven-oC7rQ4lLJAZdkUAZLNTNnmByO4qAwV.jpg",
  },
  {
    title: "Gym",
    link: "https://gym.com",
    thumbnail: "./templates/website-gym.webp",
  },
  {
    title: "Garm",
    link: "https://garm.com",
    thumbnail: "./templates/garm-website.webp",
  },
  {
    title: "Altech",
    link: "https://altech.com",
    thumbnail: "./templates/altech-website.webp",
  },
  {
    title: "Clario",
    link: "https://clario.com",
    thumbnail: "./templates/clario-website.webp",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
