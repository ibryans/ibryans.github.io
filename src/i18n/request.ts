import { getRequestConfig } from 'next-intl/server';

// Idioma fixo por enquanto; as rotas /en e /pt entram no grupo 1
export default getRequestConfig(async () => {
    const locale = 'en';

    return {
        locale,
        timeZone: 'America/Sao_Paulo',
        messages: (await import(`../../messages/${locale}.json`)).default,
    };
});
