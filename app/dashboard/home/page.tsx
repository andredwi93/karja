import { getTranslations } from "next-intl/server";
import DashboardContent from "./DashboardContent";
import { getUserLocale } from "@/i18n/locale";

export default async function DashboardPage() {
  const currentLocale = await getUserLocale();
  const t = await getTranslations("dashboard");

  const translations = {
    greeting: t.raw("header.greeting"),
    question: t("header.question"),
    onboarding: {
      title: t("onboarding.title"),
      progress: t.raw("onboarding.progress"),
      hide: t("onboarding.hide"),
      show: t("onboarding.show"),
      step1: {
        title: t("onboarding.step1.title"),
        desc: t("onboarding.step1.desc"),
      },
      step2: {
        title: t("onboarding.step2.title"),
        desc: t("onboarding.step2.desc"),
      },
      step3: {
        title: t("onboarding.step3.title"),
        desc: t("onboarding.step3.desc"),
      },
    },
    activity: {
      title: t("activity.title"),
      total_product: t("activity.total_product"),
      total_viewed: t("activity.total_viewed"),
      total_sales: t("activity.total_sales"),
      total_income: t("activity.total_income"),
    },
  };

  return (
    <DashboardContent
      translations={translations}
      currentLocale={currentLocale}
    />
  );
}
