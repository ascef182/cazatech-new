"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function HeroScrollVideo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <h1
            className="text-3xl md:text-5xl font-bold text-black dark:text-white"
            style={{ fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif" }}
          >
            Veja sua automação funcionando
          </h1>
        }
      >
        <video
          src="/videos/demonstração.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/testimonial.jpeg"
          className="mx-auto rounded-2xl object-cover h-full object-center shadow-lg"
        />
      </ContainerScroll>
    </div>
  );
}
