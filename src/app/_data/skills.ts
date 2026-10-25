/**
 * @author Bryan S. Oliveira
 * Habilidades agrupadas; o nome de cada grupo fica em messages/{en,pt}.json, em skills.groups.<id>
 */

import { IconType } from "react-icons";
import {
    SiCss, SiDocker, SiDotnet, SiFigma, SiGit, SiGithubactions, SiHtml5, SiJavascript,
    SiNuxt, SiPinia, SiPostgresql, SiPrimevue, SiPwa, SiReactquery, SiTailwindcss,
    SiTypescript, SiVite, SiVitest, SiVuedotjs, SiVuetify, SiWebpack, SiZod,
} from "react-icons/si";

export type Skill = {
    name: string;
    icon?: IconType;
};

export type SkillGroup = {
    id: 'frontend' | 'state' | 'quality' | 'offline' | 'backend' | 'tools';
    skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
    {
        id: 'frontend',
        skills: [
            { name: 'Vue 3', icon: SiVuedotjs },
            { name: 'Nuxt', icon: SiNuxt },
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'JavaScript', icon: SiJavascript },
            { name: 'HTML', icon: SiHtml5 },
            { name: 'CSS / SASS', icon: SiCss },
            { name: 'Tailwind CSS', icon: SiTailwindcss },
            { name: 'PrimeVue', icon: SiPrimevue },
            { name: 'Vuetify', icon: SiVuetify },
        ],
    },
    {
        id: 'state',
        skills: [
            { name: 'Pinia', icon: SiPinia },
            { name: 'TanStack Query', icon: SiReactquery },
            { name: 'Zod', icon: SiZod },
            { name: 'Composables' },
        ],
    },
    {
        id: 'quality',
        skills: [
            { name: 'Vitest', icon: SiVitest },
            { name: 'Vue Test Utils' },
            { name: 'Playwright' },
        ],
    },
    {
        id: 'offline',
        skills: [
            { name: 'axe-core' },
            { name: 'PWA', icon: SiPwa },
            { name: 'IndexedDB' },
            { name: 'Dexie.js' },
        ],
    },
    {
        id: 'backend',
        skills: [
            { name: '.NET Core (C#)', icon: SiDotnet },
            { name: 'SQL Server' },
            { name: 'PostgreSQL', icon: SiPostgresql },
        ],
    },
    {
        id: 'tools',
        skills: [
            { name: 'Docker', icon: SiDocker },
            { name: 'Dev Containers' },
            { name: 'Git', icon: SiGit },
            { name: 'Vite', icon: SiVite },
            { name: 'Webpack', icon: SiWebpack },
            { name: 'GitHub Actions', icon: SiGithubactions },
            { name: 'Figma', icon: SiFigma },
        ],
    },
];
