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
      <div className="flex items-center w-full max-w-[1200px] py-6 mx-auto px-6 lg:px-0">
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="Karja Logo"
            width={100}
            height={40}
            className="object-contain"
            priority
          />
        </Link>
        <div className="flex-1 flex justify-end items-center gap-6">
          <Link href="/" className="text-lg font-semibold text-primary">
            {translations.explore}
          </Link>
          <Button variant="secondary" onClick={() => router.push("/login")}>
            {translations.login}
          </Button>
          <Button>{translations.start_selling}</Button>
          <LanguageSwitcher currentLocale={currentLocale} />
        </div>
      </div>
    </nav>
  );
}
