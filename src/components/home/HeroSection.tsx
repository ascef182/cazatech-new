"use client";

import Script from "next/script";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { url: string },
        HTMLElement
      >;
    }
  }
}

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] bg-black">
      <Script
        src="https://unpkg.com/@splinetool/viewer@1.10.45/build/spline-viewer.js"
        type="module"
        strategy="afterInteractive"
      />
      <div className="absolute inset-0">
        <spline-viewer url="https://prod.spline.design/h4vIirljpefHPM2v/scene.splinecode" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 md:h-48 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}
