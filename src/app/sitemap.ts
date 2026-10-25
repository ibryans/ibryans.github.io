import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { profile } from './_data/profile';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const languages = Object.fromEntries(routing.locales.map((locale) => [locale, `${profile.url}/${locale}`]));

    return routing.locales.map((locale) => ({
        url: `${profile.url}/${locale}`,
        lastModified: new Date(),
        alternates: { languages },
    }));
}
