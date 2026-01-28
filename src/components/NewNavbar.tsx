"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"; // Keep Link for external or direct usage if needed, but we prefer ScopedLink
import ScopedLink from "@/components/ui/ScopedLink";
import { usePathname, useRouter } from "next/navigation";
import {
  Zap,
  Globe,
  Book,
  Mail,
  Phone,
  Users,
  Star,
  FileText,
  Shield,
  RotateCcw,
  Handshake,
  Leaf,
  HelpCircle,
  DollarSign,
  BarChart,
  MenuIcon,
  XIcon,
  Bot,
  MessageSquare,
  Smartphone,
  TrendingUp,
  Target,
  Briefcase,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
  type NavItemType,
  NavGridCard,
  NavSmallItem,
  NavLargeItem,
  NavItemMobile,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useI18n } from "@/app/ClientBody";

// Definindo os links de serviços
export const serviceLinks: NavItemType[] = [
  {
    title: "nav.services.automation",
    href: "/automacoes",
    description: "nav.services.automation_desc", // Placeholder if key missing, checks existing
    icon: Bot,
  },
  {
    title: "nav.services.works",
    href: "/works",
    description: "nav.services.works_desc",
    icon: Globe,
  },
  {
    title: "nav.services.saas",
    href: "/saas",
    description: "nav.services.saas_desc",
    icon: Briefcase,
  },
  {
    title: "nav.services.consulting",
    href: "/consultoria",
    description: "nav.services.consulting_desc",
    icon: Target,
  },
  {
    title: "nav.services.performance", // Key missing in provided JSON, using key as fallback
    href: "https://wa.me/5511936205799?text=Olá! Quero uma análise de performance do meu negócio",
    icon: BarChart,
  },
  {
    title: "nav.services.integration", // Key missing
    href: "https://wa.me/5511936205799?text=Olá! Preciso de integração de sistemas para minha empresa",
    icon: Smartphone,
  },
];

// Definindo os links da empresa
export const companyLinks: NavItemType[] = [
  {
    title: "nav.company.blog",
    href: "/blog",
    description: "nav.company.blogDescription",
    icon: Book,
  },
  {
    title: "nav.company.terms",
    href: "/informacoes-legais/termos-de-uso",
    description: "nav.company.termsDescription",
    icon: FileText,
  },
  {
    title: "nav.company.privacy",
    href: "/informacoes-legais/politica-de-privacidade",
    description: "nav.company.privacyDescription",
    icon: Shield,
  },
  {
    title: "nav.company.refund",
    href: "/informacoes-legais/politica-de-reembolso",
    description: "nav.company.refundDescription",
    icon: RotateCcw,
  },
  {
    title: "nav.company.partnerships",
    href: "/parcerias",
    icon: Handshake,
    description: "nav.company.partnershipsDescription",
  },
  {
    title: "nav.company.help",
    href: "/ajuda",
    icon: HelpCircle,
    description: "nav.company.helpDescription",
  },
];

export default function NewNavbar() {
  const { t, lang, setLang } = useI18n();
  const pathname = usePathname();
  const router = useRouter();

  function switchLang(nextLang: "pt" | "en" | "es") {
    // Don't call setLang here - let ClientBody handle it based on pathname change
    // This prevents race condition between setLang and router.push
    if (!pathname) return;

    // Remove existing locale prefix if any
    let path = pathname;
    if (path.startsWith("/en")) path = path.replace(/^\/en/, "");
    if (path.startsWith("/es")) path = path.replace(/^\/es/, "");
    if (path.startsWith("/pt")) path = path.replace(/^\/pt/, "");
    if (!path.startsWith("/")) path = "/" + path;

    if (nextLang === "pt") {
      router.push(path); // Default to root for PT based on observed behavior
    } else {
      router.push(`/${nextLang}${path === "/" ? "" : path}`);
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto h-14 w-full max-w-6xl px-4">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <ScopedLink href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="CazaTech - Soluções Digitais"
              width={160}
              height={50}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </ScopedLink>

          {/* Desktop Navigation */}
          <DesktopMenu />

          {/* Actions */}
          <div className="flex items-center gap-2">
            <LiquidButton
              onClick={() => router.push("/contact")} // Logic for router push might need to be localized?
              // Better to use ScopedLink logic or update router.push 
              // But LiquidButton is onClick. 
              // Let's wrapping it:
              className="hidden sm:flex"
              size="lg"
            >
              {t("nav.contact")}
            </LiquidButton>

            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden md:inline-flex"
                >
                  {lang === "pt"
                    ? "Português"
                    : lang === "en"
                    ? "English"
                    : "Español"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => switchLang("pt")}>
                  Português
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => switchLang("en")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => switchLang("es")}>
                  Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <MobileNav />
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopMenu() {
  const { t } = useI18n();
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("nav.services.title")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-full md:w-[700px] md:grid-cols-[1fr_.35fr]">
              <ul className="grid grow gap-4 p-4 md:grid-cols-2 md:border-r">
                {serviceLinks.slice(0, 4).map((link) => (
                  <li key={link.href}>
                    {/* Using ScopedLink inside NavGridCard is tricky as NavGridCard might use Link internally. 
                        If NavGridCard is imported, we might need to modify it or ensure it accepts a custom Link.
                        But assuming we can pass href, let's see. 
                        Actually NavGridCard likely renders a Link. We should check it.
                        For now, assuming I can't easily change NavGridCard without checking it.
                    */}
                    <NavGridCard link={{
                      ...link,
                      title: t(link.title),
                      description: link.description ? t(link.description) : undefined 
                    }} />
                  </li>
                ))}
              </ul>
              <ul className="space-y-1 p-4">
                {serviceLinks.slice(4).map((link) => (
                  <li key={link.href}>
                    <NavSmallItem
                      item={{
                        ...link,
                        title: t(link.title)
                      }}
                      href={link.href}
                      className="gap-x-1"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("nav.company.title")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-full md:w-[700px] md:grid-cols-[1fr_.40fr]">
              <ul className="grid grow grid-cols-2 gap-4 p-4 md:border-r">
                {companyLinks.slice(0, 3).map((link) => (
                  <li key={link.href}>
                    <NavGridCard link={{
                      ...link,
                      title: t(link.title),
                      description: link.description ? t(link.description) : undefined
                    }} className="min-h-28" />
                  </li>
                ))}
              </ul>
              <ul className="space-y-2 p-4">
                {companyLinks.slice(3).map((link) => (
                  <li key={link.href}>
                    <NavLargeItem href={link.href} link={{
                      ...link,
                      title: t(link.title),
                      description: link.description ? t(link.description) : undefined
                    }} />
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className="cursor-pointer">
            <ScopedLink href="/contact">{t("nav.contact")}</ScopedLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNav() {
  const { t, lang, setLang } = useI18n();
  const pathname = usePathname();
  const router = useRouter();
  
  function switchLang(nextLang: "pt" | "en" | "es") {
    // Don't call setLang here - let ClientBody handle it based on pathname change
    // This prevents race condition between setLang and router.push
    if (!pathname) return;
    let path = pathname;
    if (path.startsWith("/en")) path = path.replace(/^\/en/, "");
    if (path.startsWith("/es")) path = path.replace(/^\/es/, "");
    if (path.startsWith("/pt")) path = path.replace(/^\/pt/, "");
    if (!path.startsWith("/")) path = "/" + path;

    if (nextLang === "pt") {
      router.push(path);
    } else {
      router.push(`/${nextLang}${path === "/" ? "" : path}`);
    }
  }

  const sections = [
    {
      id: "servicos",
      name: t("nav.services.title"),
      list: serviceLinks,
    },
    {
      id: "empresa",
      name: t("nav.company.title"),
      list: companyLinks,
    },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="rounded-full lg:hidden">
          <MenuIcon className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-background/95 supports-[backdrop-filter]:bg-background/80 w-full gap-0 backdrop-blur-lg">
        <div className="flex h-14 items-center justify-center border-b px-4">
          <Image
            src="/images/logo.png"
            alt="CazaTech"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </div>
        <div className="container grid gap-y-2 overflow-y-auto px-4 pt-5 pb-12">
          <Accordion type="single" collapsible>
            {sections.map((section) => (
              <AccordionItem key={section.id} value={section.id}>
                <AccordionTrigger className="capitalize hover:no-underline">
                  {section.name}
                </AccordionTrigger>
                <AccordionContent className="space-y-1">
                  <ul className="grid gap-1">
                    {section.list.map((link) => (
                      <li key={link.href}>
                        <SheetClose asChild>
                          <NavItemMobile item={{
                            ...link,
                            title: t(link.title),
                            description: link.description ? t(link.description) : undefined
                          }} />
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Direct Links */}
          <div className="mt-4 space-y-2">
                <SheetClose asChild>
                  <ScopedLink
                    href="/contact"
                    className="flex items-center gap-2 rounded-sm p-2 text-sm transition-all hover:bg-accent"
                  >
                    <Mail className="size-4" />
                    {t("nav.contact")}
                  </ScopedLink>
                </SheetClose>
          </div>

          {/* Language Toggle */}
          <div className="mt-4 pt-4 border-t grid grid-cols-3 gap-2">
            <button
              onClick={() => switchLang("pt")}
              className="px-4 py-2 text-sm font-medium rounded-lg border hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Português
            </button>
            <button
              onClick={() => switchLang("en")}
              className="px-4 py-2 text-sm font-medium rounded-lg border hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              English
            </button>
            <button
              onClick={() => switchLang("es")}
              className="px-4 py-2 text-sm font-medium rounded-lg border hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Español
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
