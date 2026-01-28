"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackWhatsAppClick } from "@/components/analytics/GoogleAnalytics";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MasterLeadForm } from "@/components/forms/MasterLeadForm";
import { useI18n } from "@/app/ClientBody";

export function FinalCTA() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { t } = useI18n();

  return (
    <section className="relative py-20 md:py-24 bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            {t("sections.cta.title")}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base text-neutral-400 max-w-xl mx-auto mb-8"
          >
            {t("sections.cta.description")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            {/* Primary CTA */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 px-8"
                >
                  {t("sections.cta.buttons.start")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-neutral-900 border-neutral-800">
                <DialogHeader>
                  <DialogTitle className="sr-only">
                    {t("sections.cta.form.title")}
                  </DialogTitle>
                </DialogHeader>
                <MasterLeadForm
                  variant="minimal"
                  source="home-final-cta"
                  title={t("sections.cta.form.heading")}
                  description={t("sections.cta.form.description")}
                  buttonText={t("sections.cta.form.button")}
                  onSuccess={() => setIsDialogOpen(false)}
                />
              </DialogContent>
            </Dialog>

            {/* Secondary CTA - WhatsApp */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-black text-white border-black hover:bg-neutral-900 px-8"
            >
              <Link
                href={`https://wa.me/5511936205799?text=${encodeURIComponent(t("sections.cta.whatsappMessage"))}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackWhatsAppClick(
                    "home-final-cta",
                    t("sections.cta.whatsappMessage")
                  )
                }
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                {t("sections.cta.buttons.whatsapp")}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;