"use client";

import Link from "next/link";
import { useI18n } from "@/app/ClientBody";

export default function CTAFloaters() {
  const { t } = useI18n();
  return (
    <>
      <div className="fixed bottom-6 left-6 z-[60] flex items-center gap-2">
        <Link
          href="https://api.whatsapp.com/send/?phone=5535998026821&text=Olá!%20Quero%20uma%20avaliação%20gratuita&type=phone_number&app_absent=0"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition flex items-center gap-2 max-sm:w-14 max-sm:h-14 max-sm:rounded-full max-sm:p-0 max-sm:justify-center"
          aria-label="WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M.057 24l1.687-6.163A11.867 11.867 0 0111.93 0C18.6 0 24 5.373 24 12.04c0 6.667-5.4 12.04-12.07 12.04-2.056 0-4.004-.498-5.73-1.378L.057 24zM6.5 20.13c1.618.964 3.5 1.523 5.53 1.523 5.448 0 9.88-4.43 9.88-9.869 0-5.44-4.432-9.87-9.88-9.87-5.448 0-9.88 4.43-9.88 9.87 0 2.19.715 4.21 1.922 5.84l-.61 2.23 2.038-.73z" />
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.15-.198.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.672-1.611-.922-2.206-.242-.581-.487-.502-.672-.512l-.573-.01c-.198 0-.521.074-.793.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.41.248-.694.248-1.289.173-1.414-.074-.124-.272-.198-.57-.347z" />
          </svg>
          <span className="font-semibold text-sm max-sm:hidden">
            {t("cta_whatsapp")}
          </span>
        </Link>
        <a
          href="https://cal.com/caza-tech-solutions"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg text-sm font-medium max-sm:text-xs"
        >
          {t("cta_bar_btn")}
        </a>
      </div>
    </>
  );
}
