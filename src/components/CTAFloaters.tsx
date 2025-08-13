"use client";

import Link from "next/link";
import { useI18n } from "@/app/ClientBody";

export default function CTAFloaters() {
  const { t } = useI18n();
  return (
    <>
      <Link
        href="https://api.whatsapp.com/send/?phone=551151998147&text=Olá!%20Quero%20uma%20avaliação%20gratuita&type=phone_number&app_absent=0"
        target="_blank"
        className="fixed bottom-6 right-6 z-[60] bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition flex items-center gap-2"
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
        <span className="font-semibold text-sm">{t("cta_whatsapp")}</span>
      </Link>

      <div className="fixed bottom-0 left-0 right-0 z-[50]">
        <div className="mx-auto max-w-5xl m-3 rounded-2xl bg-gray-900 text-white px-6 py-3 shadow-2xl flex items-center justify-between gap-4">
          <span className="hidden sm:block text-sm">{t("cta_bar_text")}</span>
          <a
            href="https://cal.com/caza-tech-solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
          >
            {t("cta_bar_btn")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L18.5 17.44v-6.69a.75.75 0 011.5 0v9a.75.75 0 01-.75.75h-9a.75.75 0 010-1.5h6.69L5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

