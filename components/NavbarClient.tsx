"use client";

import { useState, useEffect } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";

interface NavbarClientProps {
  currentLocale: string;
  translations: {
    explore: string;
    login: string;
    start_selling: string;
  };
}

export default function NavbarClient({
  currentLocale,
  translations,
}: NavbarClientProps) {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.08)]" : ""
      }`}
    >
      <div className="flex items-center w-full max-w-[1200px] py-4 sm:py-5 lg:py-6 mx-auto px-4 sm:px-6 xl:px-0">
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/logo.svg"
            alt="Karja Logo"
            width={100}
            height={40}
            className="h-8 w-auto object-contain sm:h-10"
            priority
          />
        </Link>
        <div className="flex-1 flex justify-end items-center gap-2 sm:gap-3 lg:gap-6 min-w-0">
          <Link href="/" className="hidden md:inline text-base lg:text-lg font-semibold text-primary whitespace-nowrap">
            {translations.explore}
          </Link>
          <Button
            variant="secondary"
            className="px-4 py-2 text-sm sm:px-6 lg:px-10 lg:text-lg"
            onClick={() => router.push("/login")}
          >
            {translations.login}
          </Button>
          <Button className="hidden sm:inline-flex px-5 py-2 text-sm lg:px-10 lg:text-lg">
            {translations.start_selling}
          </Button>
          <LanguageSwitcher currentLocale={currentLocale} />
        </div>
      </div>
    </nav>
  );
}
