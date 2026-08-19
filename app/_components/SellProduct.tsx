import { getTranslations } from "next-intl/server";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default async function SellProduct() {
  const t = await getTranslations("home");

  const featuresTranslations = {
    create_sell_title: t("features.create_sell_title"),
    work_terms_title: t("features.work_terms_title"),
    flexibility: t("features.flexibility"),
    extra_income: t("features.extra_income"),
    work_help: t("features.work_help"),
    product_types: t("features.product_types"),
    description: t("features.description"),
  };

  return (
    <section className="w-full max-w-[1200px] mx-auto mt-20 px-6 lg:px-0 py-12 md:py-20 select-none">
      {/* Desktop Version: Interlocking Custom SVG Border Grid Layout */}
      <div className="hidden lg:relative lg:block lg:w-full lg:h-[620px]">
        {/* Background Interlocking SVGs */}
        <ScrollReveal duration={0.8} delay={0.2} direction="none" className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
          >
            {/* Left Puzzle Card Path */}
            <path
              d="M 40,20 H 570 Q 590,20 590,40 V 310 Q 590,330 570,330 H 490 Q 470,330 470,350 V 460 Q 470,480 450,480 H 40 Q 20,480 20,460 V 40 Q 20,20 40,20 Z"
              fill="white"
              stroke="#03836B"
              strokeWidth="2.5"
              vectorEffect="non-scaling-stroke"
            />
            {/* Right Puzzle Card Path */}
            <path
              d="M 650,20 H 960 Q 980,20 980,40 V 460 Q 980,480 960,480 H 530 Q 510,480 510,460 V 390 Q 510,370 530,370 H 610 Q 630,370 630,350 V 40 Q 630,20 650,20 Z"
              fill="white"
              stroke="#03836B"
              strokeWidth="2.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </ScrollReveal>

        {/* Top Mascot: Mascot jumping with money */}
        <div className="absolute left-[50%] top-[-25%] -translate-x-1/2 z-20 pointer-events-none select-none">
          <ScrollReveal delay={0.3} direction="up" width="w-auto">
            <Image
              src="/assets/section-1-logo.webp"
              alt="Happy mascot jumping with money"
              width={381}
              height={477}
              className="object-contain"
              priority
            />
          </ScrollReveal>
        </div>

        {/* Bottom Mascot: Mascot lying down looking at phone */}
        <div className="absolute left-[63%] bottom-0 -translate-x-1/2 z-20 pointer-events-none select-none">
          <ScrollReveal delay={0.5} direction="left" width="w-auto">
            <Image
              src="/assets/section-1-logo-2.webp"
              alt="Mascot lying down looking at phone"
              width={386}
              height={264}
              className="object-contain"
              priority
            />
          </ScrollReveal>
        </div>

        {/* Content Layout Grid */}
        <div className="relative z-10 w-full h-full grid grid-cols-[2%_45%_12%_4%_35%_2%] grid-rows-[4%_62%_8%_22%_4%]">
          {/* Left Card Top (Title & Browser Mockup) */}
          <div className="col-start-2 col-end-4 row-start-2 flex flex-col justify-between p-9 pr-10">
            <ScrollReveal delay={0.4} direction="up">
              <h2 className="text-h3 font-semibold text-quaternary">
                {featuresTranslations.create_sell_title}
              </h2>
            </ScrollReveal>

            {/* Browser Mockup */}
            <div className="relative w-full max-w-[444px] h-[277px] mt-10 hover:scale-[1.01] transition-transform duration-300">
              <ScrollReveal delay={0.5} direction="up" width="w-full" className="h-full">
                <Image
                  src="/assets/section-1-card.webp"
                  alt="Karja digital product details mockup"
                  width={444}
                  height={277}
                  className="object-cover h-full"
                  priority
                />
              </ScrollReveal>
            </div>
          </div>

          {/* Left Card Bottom (Text Description) */}
          <div className="col-start-2 col-end-3 row-start-4 flex flex-col justify-center pl-6">
            <ScrollReveal delay={0.6} direction="up">
              <h3 className="text-lg font-bold text-quaternary leading-snug">
                {featuresTranslations.product_types}
              </h3>
              <p className="text-lg font-light text-black mt-2 leading-relaxed">
                {featuresTranslations.description}
              </p>
            </ScrollReveal>
          </div>

          {/* Right Card Top (Title & Bullets) */}
          <div className="col-start-5 col-end-6 row-start-2 flex flex-col justify-start py-8 px-5">
            <ScrollReveal delay={0.5} direction="up">
              <h2 className="text-h3 font-semibold text-quaternary">
                {featuresTranslations.work_terms_title}
              </h2>
              <div className="mt-6 flex flex-col gap-2">
                <p className="text-lg font-light text-zinc-700">
                  {featuresTranslations.flexibility}
                </p>
                <p className="text-lg font-light text-zinc-700">
                  {featuresTranslations.extra_income}
                </p>
                <p className="text-lg font-light text-zinc-700">
                  {featuresTranslations.work_help}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Card Bottom (Dashboard Mockup) */}
          <div className="col-start-3 col-end-6 row-start-4 flex items-end justify-end pb-8">
            <div className="relative hover:scale-[1.01] transition-transform duration-300 mr-[22px]">
              <ScrollReveal delay={0.7} direction="up" width="w-auto">
                <Image
                  src="/assets/section-1-card-2.webp"
                  alt="Karja sales revenue dashboard mockup"
                  width={273}
                  height={320}
                  className="object-contain"
                  priority
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Version: Simple Stacked Cards */}
      <div className="flex flex-col gap-10 lg:hidden">
        {/* Card 1: Bikin dan jual */}
        <ScrollReveal direction="up" className="w-full bg-white border border-primary rounded-[32px] p-6 flex flex-col gap-6 shadow-md">
          <div>
            <h2 className="text-2xl font-extrabold text-quaternary">
              {featuresTranslations.create_sell_title}
            </h2>
          </div>

          <div className="relative w-full aspect-[1.58]">
            <Image
              src="/assets/section-1-card.webp"
              alt="Karja digital product details mockup"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-contain"
              priority
            />
          </div>

          <div>
            <h3 className="text-lg font-bold text-quaternary leading-snug">
              {featuresTranslations.product_types}
            </h3>
            <p className="text-sm font-medium text-zinc-500 mt-2 leading-relaxed">
              {featuresTranslations.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Card 2: Kerja sesukamu */}
        <ScrollReveal direction="up" delay={0.2} className="w-full bg-white border border-primary rounded-[32px] p-6 flex flex-col gap-6 shadow-md">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold text-quaternary">
              {featuresTranslations.work_terms_title}
            </h2>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold text-zinc-700">
                • {featuresTranslations.flexibility}
              </p>
              <p className="text-sm font-semibold text-zinc-700">
                • {featuresTranslations.extra_income}
              </p>
              <p className="text-sm font-semibold text-zinc-700">
                • {featuresTranslations.work_help}
              </p>
            </div>
          </div>

          <div className="relative w-full aspect-[1.22] rounded-xl border border-zinc-100 shadow-sm overflow-hidden bg-white">
            <Image
              src="/assets/section-1-card-2.webp"
              alt="Karja sales revenue dashboard mockup"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-contain"
              priority
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
