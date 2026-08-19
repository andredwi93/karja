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
    <section className="w-full max-w-[1300px] mx-auto relative bg-background py-20 sm:py-28 md:py-36">
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
        className="absolute left-[-20px] top-[15%] z-10 w-[140px] opacity-25 sm:w-[200px] md:left-[2%] md:opacity-100 lg:w-[260px] xl:w-[320px] pointer-events-none select-none animate-float-slow"
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
        className="absolute right-[-20px] top-[15%] z-10 w-[140px] opacity-25 sm:w-[200px] md:right-[2%] md:opacity-100 lg:w-[260px] xl:w-[320px] pointer-events-none select-none animate-float-delayed"
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
        className="relative z-20 mx-auto max-w-4xl px-6 text-center sm:px-8 flex flex-col items-center"
      >
        {/* Main Title */}
        <motion.h1 variants={itemVariants} className="text-h1 font-bold tracking-tight text-quaternary sm:text-5xl md:text-6xl max-w-2xl leading-[1.1]">
          {heroTranslations.title}
        </motion.h1>

        {/* Subtitles */}
        <motion.div variants={itemVariants} className="mt-6 flex flex-col gap-1 text-lg sm:text-xl font-medium text-quaternary">
          <p>{parseGreenText(heroTranslations.subtitle1)}</p>
          <p>{parseGreenText(heroTranslations.subtitle2)}</p>
        </motion.div>

        {/* Interactive Search Bar */}
        <motion.form
          variants={itemVariants}
          onSubmit={handleSearchSubmit}
          className="mt-10 w-full max-w-lg relative flex items-center group"
        >
          <div className="absolute left-4 text-zinc-400 group-focus-within:text-secondary transition-colors">
            <Search className="h-5 w-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={heroTranslations.search_placeholder}
            className="w-full pl-12 pr-28 py-4 bg-zinc-50 border border-zinc-200/80 rounded-full text-base font-medium outline-hidden focus:bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all shadow-xs"
          />
          <button
            type="submit"
            className="absolute right-2 px-6 py-2 rounded-full bg-secondary text-white text-sm font-semibold hover:bg-quaternary transition-colors cursor-pointer"
          >
            Cari
          </button>
        </motion.form>

        {/* Start Selling CTA Button */}
        <motion.div variants={itemVariants} className="mt-8">
          <Button>{heroTranslations.start_selling}</Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
