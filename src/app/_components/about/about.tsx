/**
 * @author Bryan S. Oliveira
 * Seção de sobre mim
*/

import Image from "next/image";
import { useTranslations } from "next-intl";
import developer from '@/assets/developer.webp';

const highlight = (chunks: React.ReactNode) => <b className="text-accent">{chunks}</b>;

export function About() {
    const t = useTranslations('about');

    return (
        <section id="about" aria-labelledby="about-title" className="flex flex-col md:flex-row justify-center md:justify-between items-center appear min-h-svh px-10">
            <div className="w-full md:w-1/2 flex flex-row justify-center items-center">
                <div className="w-full">
                    <p className="text-sm font-extrabold text-accent mb-2">
                        {t('label')}
                    </p>
                    <h2 id="about-title" className="text-2xl font-bold">{t('title')}</h2>
                    <div className="flex flex-col md:flex-row gap-x-48 py-10">
                        <div className="flex-initial space-y-5 text-lg">
                            <p>{t.rich('bio', { b: highlight })}</p>
                            <p>{t.rich('backend', { b: highlight })}</p>
                            <p>{t('education')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/3 hidden md:block">
                <Image
                    src={developer}
                    alt=""
                />
            </div>
        </section>
    );
}
