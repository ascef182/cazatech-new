"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useI18n } from "@/app/ClientBody";

type ConsultorButtonSize = "small" | "default" | "large";

export type ConsultorButtonProps = {
  href?: string;
  size?: ConsultorButtonSize;
  className?: string;
  children?: React.ReactNode;
};

const sizeClasses: Record<ConsultorButtonSize, string> = {
  small: "px-4 py-2 text-sm",
  default: "px-6 py-3 text-base",
  large: "px-8 py-4 text-lg",
};

export default function ConsultorButton({
  href = "/contact",
  size = "default",
  className,
  children,
}: ConsultorButtonProps) {
  const { t } = useI18n();

  const baseClasses =
    "relative overflow-hidden rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center whitespace-nowrap";

  return (
    <Link href={href} className={cn(baseClasses, sizeClasses[size], className)}>
      {children ?? t("cta_consultant")}
    </Link>
  );
}


