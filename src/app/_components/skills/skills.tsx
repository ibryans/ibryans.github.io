/**
 * @author Bryan S. Oliveira
 * Seção de habilidades, agrupadas por área
*/

import { useTranslations } from "next-intl";
import { skillGroups } from "@/app/_data/skills";

export function Skills() {
    const t = useTranslations('skills');

    return (
        <section id="skills" aria-labelledby="skills-title" className="flex justify-center items-center appear min-h-svh px-10 py-24">
            <div className="w-full md:w-2/3">
                <p className="text-sm font-extrabold text-accent mb-2">
                    {t('label')}
                </p>
                <h2 id="skills-title" className="text-2xl font-bold">{t('title')}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    {skillGroups.map((group) => (
                        <div key={group.id} className="rounded-2xl p-6 bg-slate-50 dark:bg-slate-900">
                            <h3 className="font-bold mb-4">{t(`groups.${group.id}`)}</h3>
                            <ul className="flex flex-wrap gap-2">
                                {group.skills.map(({ name, icon: Icon }) => (
                                    <li key={name} className="flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-white dark:bg-black">
                                        {Icon && <Icon aria-hidden="true" className="text-accent"/>}
                                        {name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
