import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { getUserLocale } from "@/i18n/locale";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { ArrowBigLeftDash } from "lucide-react";

export default async function LoginPage() {
  const locale = await getUserLocale();
  const t = await getTranslations("login");

  const imageSrc =
    locale === "en" ? "/assets/login-en.webp" : "/assets/login.webp";

  return (
    <main className="min-h-screen bg-background p-4 md:p-6 lg:p-8 flex relative">
      <div className="w-full mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Side: Image */}
        <div className="hidden lg:block relative w-full h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] rounded-[32px] overflow-hidden">
          <Image
            src={imageSrc}
            alt="Login Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Right Side: Form */}
        <div className="flex flex-col justify-between w-full max-w-[400px] mx-auto h-full px-4 lg:px-0">
          <div className="flex items-center justify-between">
            <Link href="/">
              <ArrowBigLeftDash size={36} />
            </Link>
            <LanguageSwitcher currentLocale={locale} />
          </div>
          <div className="flex flex-col h-full justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-zinc-950 mb-2">
              {t("login_title")}
            </h1>
            <p className="text-sm text-zinc-600 mb-8 leading-relaxed">
              {t("login_description")}
            </p>

            <button className="w-full flex items-center justify-center gap-3 bg-white border border-zinc-200 text-sm text-zinc-700 font-semibold py-2.5 rounded-full hover:bg-zinc-50 transition-colors shadow-sm">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Sign in with Google
            </button>

            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-zinc-200"></div>
              <span className="px-4 text-xs text-zinc-400 font-medium">
                {t("or")}
              </span>
              <div className="flex-1 h-px bg-zinc-200"></div>
            </div>

            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-zinc-950">
                  {t("email")}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 rounded-lg border border-primary bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-zinc-950">
                  {t("password")}
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2.5 rounded-lg border border-primary bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                />
                <div className="flex justify-end mt-1">
                  <Link
                    href="#"
                    className="text-xs text-zinc-600 hover:text-zinc-900 transition-colors"
                  >
                    {t("forgot_password")}
                  </Link>
                </div>
              </div>

              <button
                type="button"
                className="w-full mt-2 bg-tertiary text-primary hover:bg-[#b5e606] transition-colors py-3 rounded-full font-bold shadow-sm text-sm"
              >
                {t("login")}
              </button>
            </form>

            <p className="text-sm text-zinc-600 mt-6">
              {t.rich("dont_have_account", {
                green: (chunks) => (
                  <Link
                    href="/signup"
                    className="font-bold text-secondary hover:text-secondary/80 transition-colors"
                  >
                    {chunks}
                  </Link>
                ),
              })}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
