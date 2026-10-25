// O <html> fica em [locale]/layout.tsx, para o lang acompanhar o idioma.
// Este layout só existe porque a raiz (page.tsx e not-found.tsx) precisa de um.
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return children;
}
