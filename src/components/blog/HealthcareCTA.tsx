"use client";

import CalendlyButton from "@/components/consultoria/CalendlyButton";
import Link from "next/link";

interface HealthcareCTAProps {
  title?: string;
  description?: string;
  calendlyText?: string;
  learnMoreText?: string;
  learnMoreHref?: string;
}

export default function HealthcareCTA({
  title = "Ready to Transform Your Practice?",
  description = "See how CazaTech's AI-powered automation can reduce costs, improve patient satisfaction, and help your clinic scale without adding staff.",
  calendlyText = "Schedule a Demo",
  learnMoreText = "Learn How It Works",
  learnMoreHref = "/en/automacoes",
}: HealthcareCTAProps) {
  return (
    <div className="bg-gradient-to-br from-primary/10 via-purple-500/10 to-blue-500/10 p-8 rounded-2xl border border-primary/20 shadow-lg">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>

      <div className="flex flex-col sm:flex-row gap-4">
        <CalendlyButton
          text={calendlyText}
          url="https://calendly.com/consultoria-cazatech/healthcare-demo"
        />

        <Link
          href={learnMoreHref}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-background hover:bg-accent text-foreground font-medium rounded-xl border border-border transition-all hover:scale-[1.02]"
        >
          {learnMoreText}
        </Link>
      </div>

      <p className="text-xs text-muted-foreground mt-4">
        Setup from ~$5,000 | Monthly from ~$500 | ROI in 60-90 days
      </p>
    </div>
  );
}
