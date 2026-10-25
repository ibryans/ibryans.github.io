import { use } from "react";
import { Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Header } from "../_components/header/header";
import { About } from "../_components/about/about";
import { Experiences } from "../_components/experiences/experiences";
import { Skills } from "../_components/skills/skills";
import { Footer } from "../_components/footer/footer";
import Navbar from "../_components/navbar/navbar";

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  // O layout já validou o idioma
  setRequestLocale(locale as Locale);
  const t = useTranslations('nav');

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-1/2 focus:-translate-x-1/2 focus:z-30 focus:px-4 focus:py-2 focus:rounded-full focus:bg-blue-600 focus:text-white">
        {t('skipToContent')}
      </a>
      <Navbar/>
      <main id="content" className="container mx-auto">
        <Header/>
        <About/>
        <Experiences/>
        <Skills/>
      </main>
      <Footer/>
    </>
  );
}
