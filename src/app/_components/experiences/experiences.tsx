/**
 * @author Bryan S. Oliveira
 * Seção de experiências, em formato de linha do tempo
*/

import { useFormatter, useTranslations } from "next-intl";
import { FaExternalLinkAlt } from "react-icons/fa";
import { experiences } from "@/app/_data/experiences";

export function Experiences() {
    const t = useTranslations('experiences');
    const format = useFormatter();

    const formatMonth = (date: string) =>
        format.dateTime(new Date(`${date}-01T12:00:00`), { month: 'short', year: 'numeric' });

    return (
        <div id="experiences" className="flex justify-center items-center appear min-h-svh px-10 py-24">
            <section className="w-full md:w-2/3">
                <h3 className="text-sm font-extrabold text-blue-600 mb-2">
                    {t('label')}
                </h3>
                <h2 className="text-2xl font-bold">{t('title')}</h2>

                <ol className="mt-10 border-l-2 border-blue-600/30 space-y-12">
                    {experiences.map((experience) => (
                        <li key={experience.id} className="relative pl-8">
                            <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-blue-600"/>

                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {formatMonth(experience.start)} — {experience.end ? formatMonth(experience.end) : t('present')}
                            </p>
                            <h3 className="text-xl font-bold mt-1">
                                {t(`items.${experience.id}.role`)}
                            </h3>
                            <p className="font-semibold text-blue-600">{experience.company}</p>

                            <ul className="mt-3 space-y-1 list-disc list-outside ml-5 text-lg">
                                {(t.raw(`items.${experience.id}.highlights`) as string[]).map((highlight) => (
                                    <li key={highlight}>{highlight}</li>
                                ))}
                            </ul>

                            {experience.link && (
                                <a
                                    href={experience.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 mt-3 text-blue-600 hover:underline">
                                    {t('readArticle')}
                                    <FaExternalLinkAlt className="w-3 h-3"/>
                                </a>
                            )}

                            <ul className="flex flex-wrap gap-2 mt-4">
                                {experience.tech.map((tech) => (
                                    <li key={tech} className="text-sm px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </section>
        </div>
    );
}
