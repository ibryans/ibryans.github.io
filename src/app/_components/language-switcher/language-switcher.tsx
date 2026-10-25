/**
 * @author Bryan S. Oliveira
 * Botão que alterna entre /en e /pt, mantendo a seção atual (#hash)
 * A escolha fica salva para a raiz (/) redirecionar para o mesmo idioma depois
 */

'use client'

import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { FaGlobe } from "react-icons/fa";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
    const t = useTranslations('nav');
    const locale = useLocale();
    const router = useRouter();
    const target = routing.locales.find((l) => l !== locale) ?? routing.defaultLocale;

    const switchLanguage = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        try {
            localStorage.setItem('locale', target);
        } catch {}
        router.push(`/${target}${window.location.hash}`);
    };

    return (
        <a
            href={`/${target}`}
            hrefLang={target}
            onClick={switchLanguage}
            aria-label={t('switchLanguage')}
            title={t('switchLanguage')}
            className="flex space-x-1.5 sm:space-x-2 items-center group p-1 sm:p-2 rounded-full transition text-[13px] sm:text-base hover:text-blue-600">
            <FaGlobe className="group-hover:animate-spin"/>
            <b>{locale.toUpperCase()}</b>
        </a>
    );
}
