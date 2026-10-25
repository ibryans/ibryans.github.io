import { use } from "react";
import { Locale, useTranslations } from "next-intl";
import { profile } from "../_data/profile";
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
  const tHeader = useTranslations('header');

  // Dados estruturados para buscadores (schema.org/Person)
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    url: `${profile.url}/${locale}`,
    image: `${profile.url}/icon.png`,
    jobTitle: (tHeader.raw('roles') as string[])[0],
    email: `mailto:${profile.email}`,
    address: { '@type': 'PostalAddress', addressLocality: 'Belo Horizonte', addressCountry: 'BR' },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'PUC Minas' },
      { '@type': 'CollegeOrUniversity', name: 'Universidade Federal de Minas Gerais' },
    ],
    sameAs: Object.values(profile.socials),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }}
      />
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
