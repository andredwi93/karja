import { getTranslations } from "next-intl/server";
import ScrollReveal from "@/components/ScrollReveal";

export default async function Flow() {
  const t = await getTranslations("home.process");
  return (
    <section className="py-10 sm:py-14 lg:py-24 px-4 sm:px-6 max-w-[1320px] mx-auto">
      <ScrollReveal direction="up">
        <p className="text-center text-black text-[30px] sm:text-[36px] md:text-[40px] font-bold leading-tight mb-4">
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
      <ScrollReveal delay={0.2} direction="up" className="block lg:hidden mt-8 sm:mt-12">
        {/* Mobile: vertical loop so the cycle still reads clearly on narrow screens */}
        <div className="relative mx-auto h-[540px] w-full max-w-[390px] overflow-hidden rounded-[2rem] bg-secondary px-5 py-8 sm:h-[580px] sm:max-w-[460px] sm:rounded-[3rem] md:hidden">
          <svg
            className="absolute inset-5 h-[calc(100%-2.5rem)] w-[calc(100%-2.5rem)]"
            viewBox="0 0 320 500"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M160 24H246C286 24 300 60 300 96V404C300 440 286 476 246 476H74C34 476 20 440 20 404V96C20 60 34 24 74 24H160"
              fill="none"
              stroke="white"
              strokeOpacity="0.82"
              strokeWidth="4"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="absolute left-1/2 top-8 z-10 w-[220px] -translate-x-1/2 bg-secondary px-3 text-center">
            <p className="text-white text-[22px] font-semibold leading-tight sm:text-2xl">
              {t("card.make")}
            </p>
            <p className="mt-1 text-sm font-medium text-tertiary sm:text-base">
              {t("card.make_sub")}
            </p>
          </div>

          <div className="absolute right-4 top-[34%] z-10 w-[142px] bg-secondary px-2 text-right sm:right-7 sm:w-[164px]">
            <p className="mb-1 text-sm font-medium text-tertiary sm:text-base">
              {t("card.upload_sub")}
            </p>
            <p className="text-white text-[20px] font-semibold leading-tight sm:text-2xl">
              {t("card.upload")}
            </p>
          </div>

          <div className="absolute left-1/2 bottom-8 z-10 w-[220px] -translate-x-1/2 bg-secondary px-3 text-center">
            <p className="mb-1 text-sm font-medium text-tertiary sm:text-base">
              {t("card.share_sub")}
            </p>
            <p className="text-white text-[22px] font-semibold leading-tight sm:text-2xl">
              {t("card.share")}
            </p>
          </div>

          <div className="absolute left-4 top-[56%] z-10 w-[142px] bg-secondary px-2 text-left sm:left-7 sm:w-[164px]">
            <p className="text-white text-[20px] font-semibold leading-tight sm:text-2xl">
              {t("card.buy")}
            </p>
            <p className="mt-1 text-sm font-medium text-tertiary sm:text-base">
              {t("card.buy_sub")}
            </p>
          </div>
        </div>

        {/* Tablet: keep the same left-right loop language as desktop */}
        <div className="relative mx-auto hidden h-[360px] w-full max-w-[760px] rounded-[180px] bg-secondary md:block lg:hidden">
          <div className="absolute inset-x-10 inset-y-[72px] rounded-full border-[3px] border-white/80 pointer-events-none"></div>

          <div className="absolute left-[10%] top-[72px] z-10 -translate-y-1/2 bg-secondary px-4">
            <div>
              <p className="text-white text-[22px] font-semibold leading-none">
                {t("card.buy")}
              </p>
              <p className="mt-2 max-w-[190px] text-sm font-medium text-tertiary">
                {t("card.buy_sub")}
              </p>
            </div>
          </div>

          <div className="absolute left-[61%] top-[72px] z-10 -translate-y-1/2 bg-secondary px-4">
            <div>
              <p className="text-white text-[22px] font-semibold leading-none">
                {t("card.make")}
              </p>
              <p className="mt-2 max-w-[190px] text-sm font-medium text-tertiary">
                {t("card.make_sub")}
              </p>
            </div>
          </div>

          <div className="absolute left-[10%] bottom-[72px] z-10 translate-y-1/2 bg-secondary px-4">
            <div className="text-right">
              <p className="mb-2 max-w-[190px] text-sm font-medium text-tertiary">
                {t("card.share_sub")}
              </p>
              <p className="text-white text-[22px] font-semibold leading-none">
                {t("card.share")}
              </p>
            </div>
          </div>

          <div className="absolute left-[61%] bottom-[72px] z-10 translate-y-1/2 bg-secondary px-4">
            <div className="text-right">
              <p className="mb-2 max-w-[190px] text-sm font-medium text-tertiary">
                {t("card.upload_sub")}
              </p>
              <p className="text-white text-[22px] font-semibold leading-none">
                {t("card.upload")}
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Bottom text */}
      <ScrollReveal delay={0.3} direction="up" className="text-center mt-10 sm:mt-12 lg:mt-20">
        <p className="font-bold text-[34px] sm:text-[44px] md:text-[56px] leading-tight">
          {t("footer_heading1")}
        </p>
        <p className="text-[24px] sm:text-[32px] md:text-[40px] font-semibold mt-2 leading-tight">
          {t.rich("footer_heading2", {
            green: (chunks) => <span className="text-secondary">{chunks}</span>
          })}
        </p>
        <p className="text-base sm:text-t1 md:text-[24px] font-normal mt-5 sm:mt-6">
          {t.rich("footer_description", {
            green: (chunks) => <span className="font-bold text-secondary">{chunks}</span>
          })}
        </p>
      </ScrollReveal>
    </section>
  );
}
