"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1
              className="text-4xl font-semibold text-black dark:text-white"
              style={{
                fontFamily: "Zero Hour, 'Plus Jakarta Sans', sans-serif",
              }}
            >
              Desperte o poder do seu <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-2 leading-none">
                Negócio
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="/images/linear.webp"
          alt="hero"
          height={720}
          width={1400}
          priority={false}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
