import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("home.footer");

  return (
    <footer className="bg-background">
      <div className="w-full max-w-[1200px] mx-auto rounded-t-[40px] md:rounded-t-[80px] py-10 md:py-12 px-6">
        <div className="max-w-[1320px] mx-auto flex flex-col xl:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <Image
              src="/assets/logo.svg"
              alt="Karja Logo"
              width={100}
              height={40}
              className="h-8 md:h-10 w-auto object-contain"
              priority
            />
            <p className="font-bold text-h4 md:text-h3 text-black">
              {t.rich("title", {
                green: (chunks) => <span className="text-secondary">{chunks}</span>
              })}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
            <div className="flex items-center gap-6 md:gap-8">
              <a
                href="#"
                className="text-secondary font-bold text-[15px] hover:opacity-80 transition-opacity"
              >
                {t("privacy")}
              </a>
              <a
                href="#"
                className="text-secondary font-bold text-[15px] hover:opacity-80 transition-opacity"
              >
                {t("terms_condition")}
              </a>
              <a
                href="#"
                className="text-secondary font-bold text-[15px] hover:opacity-80 transition-opacity"
              >
                {t("faq")}
              </a>
            </div>

            <div className="flex items-center gap-5">
              <a href="#" aria-label="Instagram">
                <img
                  src="/assets/icons/ic-instagram.svg"
                  alt="Instagram"
                  className="w-6 h-6 hover:opacity-80 transition-opacity"
                />
              </a>
              <a href="#" aria-label="X">
                <img
                  src="/assets/icons/ic-x.svg"
                  alt="X"
                  className="w-6 h-6 hover:opacity-80 transition-opacity"
                />
              </a>
              <a href="#" aria-label="TikTok">
                <img
                  src="/assets/icons/ic-tiktok.svg"
                  alt="TikTok"
                  className="w-6 h-6 hover:opacity-80 transition-opacity"
                />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img
                  src="/assets/icons/ic-linkedin.svg"
                  alt="LinkedIn"
                  className="w-6 h-6 hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
