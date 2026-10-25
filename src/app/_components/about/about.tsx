/**
 * @author Bryan S. Oliveira
 * Seção de sobre mim
*/

import Image from "next/image";
import { useTranslations } from "next-intl";
import developer from '@/assets/developer.webp';

const highlight = (chunks: React.ReactNode) => <b className="text-blue-600">{chunks}</b>;

export function About() {
    const t = useTranslations('about');

    return (
        <div id="about" className="flex flex-col md:flex-row justify-center md:justify-between items-center appear min-h-svh px-10">
            <div className="w-full md:w-1/2 flex flex-row justify-center items-center">
                <section className="w-full">
                    <h3 className="text-sm font-extrabold text-blue-600 mb-2">
                        {t('label')}
                    </h3>
                    <h2 className="text-2xl font-bold">{t('title')}</h2>
                    <div className="flex flex-col md:flex-row gap-x-48 py-10">
                        <div className="flex-initial space-y-5 text-lg">
                            <p>{t.rich('bio', { b: highlight })}</p>
                            <p>{t.rich('backend', { b: highlight })}</p>
                            <p>{t('education')}</p>
                        </div>
                    </div>
                </section>
            </div>
            <div className="w-full md:w-1/3 hidden md:block">
                <Image
                    src={developer}
                    alt="developer"
                    className=" border-black dark:border-white "
                />
            </div>
        </div>
    );
}
