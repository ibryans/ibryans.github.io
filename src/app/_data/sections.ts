/**
 * @author Bryan S. Oliveira
 * Seções da página, na ordem em que aparecem
 * A navbar é montada a partir desta lista; o texto de cada link fica em messages/{en,pt}.json, em nav.<id>
 */

export const sections = ['home', 'about', 'experiences', 'skills'] as const;

export type SectionId = (typeof sections)[number];
