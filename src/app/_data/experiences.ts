/**
 * @author Bryan S. Oliveira
 * Experiências profissionais, da mais recente para a mais antiga
 * Cargo e destaques de cada uma ficam em messages/{en,pt}.json, em experiences.items.<id>
 */

export type Experience = {
    id: 'bellosoft' | 'petrobras' | 'pluritech' | 'ccates';
    company: string;
    // Datas no formato AAAA-MM; end vazio significa emprego atual
    start: string;
    end?: string;
    tech: string[];
    link?: string;
};

export const experiences: Experience[] = [
    {
        id: 'bellosoft',
        company: 'Bellosoft',
        start: '2024-11',
        tech: ['Vue.js', 'JavaScript', 'SASS', '.NET Core', 'Azure DevOps'],
    },
    {
        id: 'petrobras',
        company: 'Petrobras · UFMG',
        start: '2022-11',
        end: '2023-11',
        tech: ['Python', 'Deep Learning', 'CNN'],
        link: 'https://www.sciencedirect.com/science/article/abs/pii/S0012825224002836',
    },
    {
        id: 'pluritech',
        company: 'Pluritech',
        start: '2020-08',
        end: '2021-11',
        tech: ['Angular', 'React', 'Ionic', 'React Native', 'NestJS', 'PostgreSQL'],
    },
    {
        id: 'ccates',
        company: 'CCATES · UFMG',
        start: '2019-05',
        end: '2020-05',
        tech: ['Angular', 'Ionic', 'Figma'],
    },
];
