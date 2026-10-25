/**
 * @author Bryan S. Oliveira
 * Raiz do site: redireciona para /en ou /pt
 * O site é estático, então a escolha do idioma acontece no navegador:
 * primeiro a escolha salva pelo botão de idioma, depois o idioma do navegador
 */

import Link from "next/link";
import { routing } from "@/i18n/routing";

const redirectScript = `(function () {
  var locales = ${JSON.stringify(routing.locales)};
  var locale = null;
  try { locale = localStorage.getItem('locale'); } catch (e) {}
  if (locales.indexOf(locale) === -1) {
    var languages = navigator.languages || [navigator.language];
    locale = '${routing.defaultLocale}';
    for (var i = 0; i < languages.length; i++) {
      var language = languages[i].slice(0, 2).toLowerCase();
      if (locales.indexOf(language) !== -1) { locale = language; break; }
    }
  }
  location.replace('/' + locale + location.hash);
})();`;

export default function RootPage() {
    return (
        <html lang={routing.defaultLocale}>
            <head>
                <title>Bryan S. Oliveira</title>
                <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
                <noscript>
                    <meta httpEquiv="refresh" content={`0; url=/${routing.defaultLocale}`} />
                </noscript>
            </head>
            <body>
                <Link href="/en">English</Link> · <Link href="/pt">Português</Link>
            </body>
        </html>
    );
}
