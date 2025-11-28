"use client";

import dynamic from "next/dynamic";

// Componentes que precisam de ssr: false (Three.js, GSAP, etc.)
export const NeuralNetworkHero = dynamic(
  () => import("@/components/ui/neural-network-hero"),
  { 
    ssr: false,
    loading: () => <div className="h-screen bg-black" /> 
  }
);

export const StaggerTestimonials = dynamic(
  () => import("@/components/ui/stagger-testimonials"),
  { 
    ssr: false,
    loading: () => <div className="h-[500px] bg-black" /> 
  }
);

export const RadialOrbitalTimeline = dynamic(
  () => import("@/components/ui/radial-orbital-timeline"),
  { 
    ssr: false,
    loading: () => <div className="h-[600px] bg-black" /> 
  }
);


