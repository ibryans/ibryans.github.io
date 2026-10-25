/**
 * @author Bryan S. Oliveira
 * Botão que alterna entre /en e /pt, mantendo a seção atual (#hash)
 * A escolha fica salva para a raiz (/) redirecionar para o mesmo idioma depois
 *
 * A troca é um carregamento normal de página, não uma navegação do Next:
 * /en e /pt são documentos estáticos com <html lang> próprio, e refazer o
 * layout no cliente faria o React reclamar do <script> de tema no <head>
 */

'use client'

import { useLocale, useTranslations } from "next-intl";
import { FaGlobe } from "react-icons/fa";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
    const t = useTranslations('nav');
    const locale = useLocale();
    const target = routing.locales.find((l) => l !== locale) ?? routing.defaultLocale;

    const switchLanguage = (event: React.MouseEvent<HTMLAnchorElement>) => {
        try {
            localStorage.setItem('locale', target);
        } catch {}
        // Mantém a seção atual; o navegador segue o href normalmente
        event.currentTarget.href = `/${target}${window.location.hash}`;
    };

    return (
        <a
            href={`/${target}`}
            hrefLang={target}
            onClick={switchLanguage}
            title={t('switchLanguage')}
            className="flex space-x-1.5 sm:space-x-2 items-center group p-1 sm:p-2 rounded-full transition text-[13px] sm:text-base hover:text-accent">
            <FaGlobe aria-hidden="true" className="motion-safe:group-hover:animate-spin"/>
            <b>{locale.toUpperCase()}</b>
            <span className="sr-only">{t('switchLanguage')}</span>
        </a>
    );
}
