"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/app/ClientBody";
import { ReactNode } from "react";

interface ScopedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  [key: string]: any;
}

export default function ScopedLink({ href, children, className, ...props }: ScopedLinkProps) {
  const { lang } = useI18n();
  const pathname = usePathname();

  // Helper to ensure href doesn't already include the locale
  const getLocalizedHref = (path: string) => {
    // If it's an external link, return as is
    if (path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("tel:")) {
      return path;
    }

    // If path starts with /, remove it for cleaner joining later, or keep it. 
    // Let's assume input href starts with / usually.
    const cleanPath = path.startsWith("/") ? path : `/${path}`;

    // If already has locale prefix, return as is (simple check)
    if (cleanPath.startsWith("/en/") || cleanPath === "/en") return cleanPath;
    if (cleanPath.startsWith("/es/") || cleanPath === "/es") return cleanPath;
    if (cleanPath.startsWith("/pt/") || cleanPath === "/pt") return cleanPath;

    // Based on current lang, prepend locale
    // BUT: If lang is 'pt', do we use /pt or /?
    // User report implies /pt exists. 
    // However, usually default locale is at root. 
    // Let's check if the user wants strict /pt. 
    // If current pathname starts with /pt, we preserve it. 
    // If current pathname is root /, we likely stay at root or use /pt if strictly navigating?
    // Let's assume:
    // en -> /en + path
    // es -> /es + path
    // pt -> /pt + path IF the user is currently on /pt, otherwise just path?
    // actually, for simplicity and consistency with the "Fixed /es route" task, 
    // if lang is en, prefix /en.
    // if lang is es, prefix /es.
    // if lang is pt, prefix / (root) OR /pt? 
    // The user said "Quando usuário está em /en/ ... vai para /works (português)". 
    // So for EN/ES it MUST be prefixed. For PT, it's safer to leave as is (root) unless forced.
    
    if (lang === "en") {
      return `/en${cleanPath === "/" ? "" : cleanPath}`;
    }
    if (lang === "es") {
      return `/es${cleanPath === "/" ? "" : cleanPath}`;
    }
    
    // For PT, we typically default to root in Next.js unless configured otherwise.
    // But if the user has a separate /pt route setup, we might need /pt.
    // Given the previous conversation, /pt works, but / also works? 
    // Let's stick to root for PT to avoid double issues, unless we detect we are in /pt.
    // BUT, `useI18n` derives lang from path. 
    // Let's just return cleanPath for PT (root).
    return cleanPath;
  };

  return (
    <Link href={getLocalizedHref(href)} className={className} {...props}>
      {children}
    </Link>
  );
}
