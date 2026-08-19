import { getTranslations } from "next-intl/server";
import { getUserLocale } from "@/i18n/locale";
import NavbarClient from "./NavbarClient";

export default async function Navbar() {
  const currentLocale = await getUserLocale();
  const t = await getTranslations("home");

  const navbarTranslations = {
    explore: t("navbar.explore"),
    login: t("navbar.login"),
    start_selling: t("navbar.start_selling"),
  };

  return (
    <NavbarClient currentLocale={currentLocale} translations={navbarTranslations} />
  );
}
