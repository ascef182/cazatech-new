"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode, ElementType } from "react";

interface TimelineContentProps {
  children: ReactNode;
  as?: ElementType;
  animationNum: number;
  timelineRef: React.RefObject<HTMLElement>;
  customVariants?: Variants;
  className?: string;
  [key: string]: unknown;
}

export function TimelineContent({
  children,
  as: Component = "div",
  animationNum,
  timelineRef,
  customVariants,
  className = "",
  ...props
}: TimelineContentProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const defaultVariants: Variants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const variants = customVariants || defaultVariants;

  return (
    <motion.div
      ref={ref}
      custom={animationNum}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      {...props}
    >
      <Component>{children}</Component>
    </motion.div>
  );
}
