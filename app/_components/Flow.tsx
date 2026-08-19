import { getTranslations } from "next-intl/server";
import ScrollReveal from "@/components/ScrollReveal";

export default async function Flow() {
  const t = await getTranslations("home.process");
  return (
    <section className="py-12 lg:py-24 px-6 max-w-[1320px] mx-auto">
      <ScrollReveal direction="up">
        <p className="text-center text-black text-[32px] md:text-[40px] font-bold mb-4">
          {t("title")}
        </p>
      </ScrollReveal>

      {/* Desktop view (matches exact dimensions requested) */}
      <ScrollReveal delay={0.2} direction="up" className="hidden lg:block relative w-full max-w-[1256px] h-[387px] bg-secondary rounded-[193px] mx-auto mt-28 mb-20">
        {/* The White Line Loop */}
        <div className="absolute inset-x-[80px] inset-y-[85px] border-[3px] border-white/80 rounded-full pointer-events-none"></div>

        {/* Character */}
        <img
          src="/assets/karyo-loop.gif"
          alt="Karyo"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-[466px] z-20 pointer-events-none"
        />

        {/* Top Left */}
        <div className="absolute left-[16%] top-[86.5px] -translate-y-1/2 bg-secondary pr-6 pl-0 flex items-center z-10">
          <svg
            className="w-6 h-6 text-white ml-[-11px]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <div className="relative ml-4">
            <p className="text-white font-semibold text-[26px] leading-none">
              {t("card.buy")}
            </p>
            <p className="absolute top-full left-0 text-tertiary text-[16px] whitespace-nowrap mt-2">
              {t("card.buy_sub")}
            </p>
          </div>
        </div>

        {/* Top Right */}
        <div className="absolute left-[62%] top-[86.5px] -translate-y-1/2 bg-secondary pr-6 pl-0 flex items-center z-10">
          <svg
            className="w-6 h-6 text-white ml-[-11px]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <div className="relative ml-4">
            <p className="text-white font-semibold text-[26px] leading-none">
              {t("card.make")}
            </p>
            <p className="absolute top-full left-0 text-tertiary text-[16px] whitespace-nowrap mt-2">
              {t("card.make_sub")}
            </p>
          </div>
        </div>

        {/* Bottom Left */}
        <div className="absolute left-[16%] bottom-[86.5px] translate-y-1/2 bg-secondary pl-6 pr-0 flex items-center z-10">
          <div className="relative mr-4">
            <p className="absolute bottom-full left-0 text-tertiary text-[16px] whitespace-nowrap mb-2">
              {t("card.share_sub")}
            </p>
            <p className="text-white font-semibold text-[26px] leading-none">
              {t("card.share")}
            </p>
          </div>
          <svg
            className="w-6 h-6 text-white mr-[-11px]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </div>

        {/* Bottom Right */}
        <div className="absolute left-[62%] bottom-[86.5px] translate-y-1/2 bg-secondary pl-6 pr-0 flex items-center z-10">
          <div className="relative mr-4">
            <p className="absolute bottom-full left-0 text-tertiary text-[16px] whitespace-nowrap mb-2">
              {t("card.upload_sub")}
            </p>
            <p className="text-white font-semibold text-[26px] leading-none">
              {t("card.upload")}
            </p>
          </div>
          <svg
            className="w-6 h-6 text-white mr-[-11px]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </div>
      </ScrollReveal>

      {/* Mobile/Tablet view */}
      <ScrollReveal delay={0.2} direction="up" className="block lg:hidden relative bg-secondary rounded-[3rem] p-8 mt-12 overflow-hidden">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 relative z-10">
          {/* Left column (top + bottom) */}
          <div className="flex flex-col justify-between gap-16 md:gap-32">
            <div className="text-center md:text-left">
              <p className="text-white font-semibold text-xl md:text-h3">
                {t("card.buy")}
              </p>
              <p className="text-tertiary text-base md:text-t1 font-medium">
                {t("card.buy_sub")}
              </p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-tertiary text-base md:text-t1 font-medium">
                {t("card.share_sub")}
              </p>
              <p className="text-white font-semibold text-xl md:text-h3">
                {t("card.share")}
              </p>
            </div>
          </div>

          {/* Center - character */}
          <div className="flex justify-center items-center py-8">
            <img
              src="/assets/karyo-loop.gif"
              alt="Karyo"
              className="w-48 md:w-64 object-contain"
            />
          </div>

          {/* Right column (top + bottom) */}
          <div className="flex flex-col justify-between gap-16 md:gap-32">
            <div className="text-center md:text-right">
              <p className="text-white font-semibold text-xl md:text-h3">
                {t("card.make")}
              </p>
              <p className="text-tertiary text-base md:text-t1 font-medium">
                {t("card.make_sub")}
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-tertiary text-base md:text-t1 font-medium">
                {t("card.upload_sub")}
              </p>
              <p className="text-white font-semibold text-xl md:text-h3">
                {t("card.upload")}
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Bottom text */}
      <ScrollReveal delay={0.3} direction="up" className="text-center mt-12 lg:mt-20">
        <p className="font-bold text-4xl md:text-[56px] leading-tight">
          {t("footer_heading1")}
        </p>
        <p className="text-h3 md:text-[40px] font-semibold mt-2">
          {t.rich("footer_heading2", {
            green: (chunks) => <span className="text-secondary">{chunks}</span>
          })}
        </p>
        <p className="text-t1 md:text-[24px] font-normal mt-6">
          {t.rich("footer_description", {
            green: (chunks) => <span className="font-bold text-secondary">{chunks}</span>
          })}
        </p>
      </ScrollReveal>
    </section>
  );
}
