"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { setUserLocale } from "@/i18n/locale";

interface LanguageSwitcherProps {
  currentLocale: string;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (locale: string) => {
    if (locale === currentLocale) return;
    startTransition(async () => {
      await setUserLocale(locale);
      router.refresh();
    });
  };

  return (
    <div className="flex items-center gap-1.5 rounded-full bg-zinc-100 p-1 text-sm font-semibold text-zinc-600">
      <button
        onClick={() => handleLocaleChange("id")}
        disabled={isPending}
        className={`px-3 py-1 rounded-full transition-all duration-200 cursor-pointer ${
          currentLocale === "id"
            ? "bg-white text-zinc-950 shadow-xs"
            : "hover:text-zinc-900"
        } ${isPending ? "opacity-50 pointer-events-none" : ""}`}
      >
        ID
      </button>
      <button
        onClick={() => handleLocaleChange("en")}
        disabled={isPending}
        className={`px-3 py-1 rounded-full transition-all duration-200 cursor-pointer ${
          currentLocale === "en"
            ? "bg-white text-zinc-950 shadow-xs"
            : "hover:text-zinc-900"
        } ${isPending ? "opacity-50 pointer-events-none" : ""}`}
      >
        EN
      </button>
    </div>
  );
}
