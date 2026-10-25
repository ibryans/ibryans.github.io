/**
 * @author Bryan S. Oliveira
 * Imagem de preview ao compartilhar o link (LinkedIn, Bluesky, ...)
 * Gerada no build, uma por idioma
 */

import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { profile } from '../_data/profile';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = profile.name;

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale: locale as Locale, namespace: 'header' });
    const roles = t.raw('roles') as string[];
    // O gerador de imagem não lê WebP, por isso a cópia em JPEG
    const avatar = await readFile(join(process.cwd(), 'src/assets/avatar-og.jpg'));

    return new ImageResponse(
        (
            <div style={{
                width: '100%', height: '100%', display: 'flex', alignItems: 'center', gap: 64,
                padding: '0 96px', background: '#000', color: '#fff',
            }}>
                <img
                    src={`data:image/jpeg;base64,${avatar.toString('base64')}`}
                    width={300}
                    height={300}
                    style={{ borderRadius: '50%' }}
                    alt=""
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: 76, fontWeight: 800 }}>{profile.name}</div>
                    <div style={{ fontSize: 40, marginTop: 12 }}>{roles[0]}</div>
                    <div style={{ fontSize: 30, marginTop: 8, color: '#93c5fd' }}>{roles[1]}</div>
                    <div style={{ fontSize: 28, marginTop: 56, color: '#94a3b8' }}>bsoliveira.com</div>
                </div>
            </div>
        ),
        size,
    );
}
