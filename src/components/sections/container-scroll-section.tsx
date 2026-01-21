"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useI18n } from "@/app/ClientBody";

export function HeroScrollDemo() {
  const { t } = useI18n();

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
              {t("scrollSection.title.line1")} <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-2 leading-none">
                {t("scrollSection.title.line2")}
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="/images/linear.webp"
          alt={t("scrollSection.imageAlt")}
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
