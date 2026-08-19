"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "motion/react";

interface HeroProps {
  heroTranslations: {
    title: string;
    subtitle1: string;
    subtitle2: string;
    search_placeholder: string;
    start_selling: string;
  };
}

export default function Hero({ heroTranslations }: HeroProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    // Perform search redirect or action
    alert(`Searching for: ${searchQuery}`);
  };

  // Helper to parse <green> tags from translations
  const parseGreenText = (text: string) => {
    const parts = text.split(/(<green>.*?<\/green>)/g);
    return parts.map((part, index) => {
      if (part.startsWith("<green>") && part.endsWith("</green>")) {
        const content = part.slice(7, -8);
        return (
          <span key={index} className="text-secondary font-bold">
            {content}
          </span>
        );
      }
      return part;
    });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="w-full max-w-[1300px] mx-auto relative bg-background px-4 pt-12 pb-16 sm:px-6 sm:pt-18 sm:pb-24 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32">
      {/* Self-contained styling for float animations */}
      <style jsx global>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(15px);
          }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6.5s ease-in-out infinite;
        }
      `}</style>

      {/* Floating 3D Decoration Assets */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden md:block absolute left-[-32px] top-[20%] z-10 w-[190px] opacity-80 lg:left-[1%] lg:w-[250px] xl:w-[300px] pointer-events-none select-none animate-float-slow"
      >
        <Image
          src="/assets/decoration-left.webp"
          alt="3D Laptop and gold coins decoration"
          width={320}
          height={640}
          className="w-full object-contain"
          style={{ height: "auto" }}
          priority
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="hidden md:block absolute right-[-32px] top-[20%] z-10 w-[190px] opacity-80 lg:right-[1%] lg:w-[250px] xl:w-[300px] pointer-events-none select-none animate-float-delayed"
      >
        <Image
          src="/assets/decoration-right.webp"
          alt="3D Monitor and gold coins decoration"
          width={320}
          height={640}
          className="w-full object-contain"
          style={{ height: "auto" }}
          priority
        />
      </motion.div>

      {/* Hero Content Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        {/* Main Title */}
        <motion.h1 variants={itemVariants} className="max-w-[760px] text-[38px] font-bold leading-[1.08] tracking-normal text-quaternary sm:text-[48px] md:text-[56px] lg:text-[64px]">
          {heroTranslations.title}
        </motion.h1>

        {/* Subtitles */}
        <motion.div variants={itemVariants} className="mt-5 flex max-w-[620px] flex-col gap-1 text-base font-medium leading-relaxed text-quaternary sm:mt-6 sm:text-lg md:text-xl">
          <p>{parseGreenText(heroTranslations.subtitle1)}</p>
          <p>{parseGreenText(heroTranslations.subtitle2)}</p>
        </motion.div>

        {/* Interactive Search Bar */}
        <motion.form
          variants={itemVariants}
          onSubmit={handleSearchSubmit}
          className="group relative mt-8 flex w-full max-w-[560px] flex-col gap-3 rounded-[28px] border border-zinc-200/80 bg-zinc-50 p-2 shadow-xs transition-all focus-within:border-secondary focus-within:bg-white focus-within:ring-4 focus-within:ring-secondary/10 sm:mt-10 sm:flex-row sm:items-center sm:rounded-full"
        >
          <div className="absolute left-5 top-5 text-zinc-400 transition-colors group-focus-within:text-secondary sm:top-1/2 sm:-translate-y-1/2">
            <Search className="h-5 w-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={heroTranslations.search_placeholder}
            className="min-h-12 w-full rounded-full bg-transparent pl-11 pr-3 text-sm font-medium outline-hidden sm:text-base"
          />
          <button
            type="submit"
            className="min-h-11 rounded-full bg-secondary px-6 text-sm font-semibold text-white transition-colors hover:bg-quaternary cursor-pointer sm:min-h-10"
          >
            Cari
          </button>
        </motion.form>

        {/* Start Selling CTA Button */}
        <motion.div variants={itemVariants} className="mt-7 sm:mt-8">
          <Button className="px-8 text-base sm:px-10 sm:text-lg">{heroTranslations.start_selling}</Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
