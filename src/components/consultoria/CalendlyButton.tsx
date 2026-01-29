"use client";

import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";
import { Calendar } from "lucide-react";
import { useI18n } from "@/app/ClientBody";

interface CalendlyButtonProps {
  text?: string;
  className?: string;
  url?: string;
}

export default function CalendlyButton({
  text,
  className = "",
  url = "https://calendly.com/consultoria-cazatech"
}: CalendlyButtonProps) {
  const { t } = useI18n();
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Set root element after component mounts (client-side only)
    setRootElement(document.body);
  }, []);

  const buttonText = text || t("consulting.calendly.button");

  // Don't render until we have a root element (client-side)
  if (!rootElement) {
    return (
      <button
        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-xl shadow-lg shadow-purple-500/20 ${className}`}
        disabled
      >
        <Calendar className="w-5 h-5" />
        {buttonText}
      </button>
    );
  }

  return (
    <PopupButton
      url={url}
      rootElement={rootElement}
      text={`📅 ${buttonText}`}
      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium rounded-xl shadow-lg shadow-purple-500/20 transition-all hover:scale-[1.02] cursor-pointer ${className}`}
    />
  );
}
