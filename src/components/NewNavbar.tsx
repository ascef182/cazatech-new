"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
    title: "Automação WhatsApp",
    href: "/automacoes",
    description: "Chatbots inteligentes para atendimento 24/7",
    icon: Bot,
  },
  {
    title: "Sites de Alta Conversão",
    href: "/works",
    description: "Landing pages que convertem visitantes em clientes",
    icon: Globe,
  },
  {
    title: "Marketing Digital",
    href: "/marketing",
    description: "Estratégias para aumentar suas vendas online",
    icon: TrendingUp,
  },
  {
    title: "Crie seu SAAS hoje",
    href: "/saas",
    description: "Desenvolvimento de software como serviço personalizado",
    icon: Briefcase,
  },
  {
    title: "Consultoria",
    href: "https://wa.me/5535998026821?text=Olá! Quero uma consultoria especializada para meu negócio",
    icon: Target,
  },
  {
    title: "Análise de Performance",
    href: "https://wa.me/5535998026821?text=Olá! Quero uma análise de performance do meu negócio",
    icon: BarChart,
  },
  {
    title: "Integração de Sistemas",
    href: "https://wa.me/5535998026821?text=Olá! Preciso de integração de sistemas para minha empresa",
    icon: Smartphone,
  },
];

// Definindo os links da empresa
export const companyLinks: NavItemType[] = [
  /*{
    title: "Sobre Nós",
    href: "/sobre",
    description: "Conheça nossa história e equipe especializada",
    icon: Users,
  },*/ /*
  {
    title: "Cases de Sucesso",
    href: "/cases",
    description: "Veja como ajudamos nossos clientes a vender mais",
    icon: Star,
  },*/
  {
    title: "Blog",
    href: "/blog",
    description: "Dicas e insights sobre automação e marketing",
    icon: Book,
  },
  {
    title: "Termos de Uso",
    href: "/informacoes-legais/termos-de-uso",
    description: "Nossos termos e condições de uso",
    icon: FileText,
  },
  {
    title: "Política de Privacidade",
    href: "/informacoes-legais/politica-de-privacidade",
    description: "Como protegemos suas informações",
    icon: Shield,
  },
  {
    title: "Política de Reembolso",
    href: "/informacoes-legais/politica-de-reembolso",
    description: "Detalhes sobre reembolsos e cancelamentos",
    icon: RotateCcw,
  },
  {
    title: "Parcerias",
    href: "/parcerias",
    icon: Handshake,
    description: "Colabore conosco para crescimento mútuo",
  },
  {
    title: "Central de Ajuda",
    href: "/ajuda",
    icon: HelpCircle,
    description: "Encontre respostas para suas dúvidas",
  },
];

export default function NewNavbar() {
  const { t, lang, setLang } = useI18n();
  const pathname = usePathname();
  const router = useRouter();

  function switchLang(nextLang: "pt" | "en" | "es") {
    setLang(nextLang);
    if (!pathname) return;
    const isEn = pathname.startsWith("/en");
    if (nextLang === "en" && !isEn) {
      const next = pathname === "/" ? "/en" : `/en${pathname}`;
      router.push(next);
    } else if (nextLang !== "en" && isEn) {
      const next = pathname === "/en" ? "/" : pathname.replace(/^\/en/, "");
      router.push(next || "/");
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto h-14 w-full max-w-6xl px-4">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="CazaTech - Soluções Digitais"
              width={160}
              height={50}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <DesktopMenu />

          {/* Actions */}
          <div className="flex items-center gap-2">
            <LiquidButton
              onClick={() => router.push("/contact")}
              className="hidden sm:flex"
            >
              Fale com um consultor
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
          <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-full md:w-[700px] md:grid-cols-[1fr_.35fr]">
              <ul className="grid grow gap-4 p-4 md:grid-cols-2 md:border-r">
                {serviceLinks.slice(0, 4).map((link) => (
                  <li key={link.href}>
                    <NavGridCard link={link} />
                  </li>
                ))}
              </ul>
              <ul className="space-y-1 p-4">
                {serviceLinks.slice(4).map((link) => (
                  <li key={link.href}>
                    <NavSmallItem
                      item={link}
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
          <NavigationMenuTrigger>Empresa</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-full md:w-[700px] md:grid-cols-[1fr_.40fr]">
              <ul className="grid grow grid-cols-2 gap-4 p-4 md:border-r">
                {companyLinks.slice(0, 3).map((link) => (
                  <li key={link.href}>
                    <NavGridCard link={link} className="min-h-28" />
                  </li>
                ))}
              </ul>
              <ul className="space-y-2 p-4">
                {companyLinks.slice(3).map((link) => (
                  <li key={link.href}>
                    <NavLargeItem href={link.href} link={link} />
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className="cursor-pointer">
            <Link href="/contact">{t("nav_contact")}</Link>
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
    setLang(nextLang);
    if (!pathname) return;
    const isEn = pathname.startsWith("/en");
    if (nextLang === "en" && !isEn) {
      const next = pathname === "/" ? "/en" : `/en${pathname}`;
      router.push(next);
    } else if (nextLang !== "en" && isEn) {
      const next = pathname === "/en" ? "/" : pathname.replace(/^\/en/, "");
      router.push(next || "/");
    }
  }
  const sections = [
    {
      id: "servicos",
      name: "Serviços",
      list: serviceLinks,
    },
    {
      id: "empresa",
      name: "Empresa",
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
        <div className="flex h-14 items-center justify-between border-b px-4">
          <Image
            src="/images/logo.png"
            alt="CazaTech"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
          <SheetClose asChild>
            <Button size="icon" variant="ghost" className="rounded-full">
              <XIcon className="size-5" />
              <span className="sr-only">Fechar</span>
            </Button>
          </SheetClose>
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
                          <NavItemMobile item={link} />
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
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-sm p-2 text-sm transition-all hover:bg-accent"
              >
                <Mail className="size-4" />
                Contato
              </Link>
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
