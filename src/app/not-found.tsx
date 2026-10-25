/**
 * @author Bryan S. Oliveira
 * Página 404 (fora das rotas de idioma, por isso tem o próprio <html>)
 */

import Link from "next/link";

export default function NotFound() {
    return (
        <html lang="en">
            <body style={{ fontFamily: 'system-ui, sans-serif', textAlign: 'center', padding: '4rem 1rem' }}>
                <h1>404</h1>
                <p>This page does not exist. · Esta página não existe.</p>
                <p>
                    <Link href="/en">English</Link> · <Link href="/pt">Português</Link>
                </p>
            </body>
        </html>
    );
}
