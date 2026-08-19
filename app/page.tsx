import { getTranslations } from "next-intl/server";

// Components
import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import Flow from "./_components/Flow";
import Hero from "./_components/Hero";
import Idea from "./_components/Idea";
import SellProduct from "./_components/SellProduct";
import Testimonial from "./_components/Testimonial";

export default async function Home() {
  const t = await getTranslations("home");

  // Format hero translations
  const heroTranslations = {
    title: t("hero.title"),
    subtitle1: t.raw("hero.subtitle1"),
    subtitle2: t.raw("hero.subtitle2"),
    search_placeholder: t("hero.search_placeholder"),
    start_selling: t("hero.start_selling"),
  };

  return (
    <main className="bg-background overflow-hidden">
      <Navbar />
      <Hero heroTranslations={heroTranslations} />
      <SellProduct />
      <Idea />
      <Flow />
      <Testimonial />
      <Footer />
    </main>
  );
}
