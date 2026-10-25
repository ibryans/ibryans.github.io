/**
 * @author Bryan S. Oliveira
 * @param Texto do item, seu href e se é a seção visível
 * @returns Um item do menu de navegação
 */

type NavbarItemProps = {
    text: string;
    href: string;
    active?: boolean;
    className?: string;
}

export function NavbarItem({ text, href, active = false, className = '' }: NavbarItemProps) {
    return (
        <a
            href={ href }
            aria-current={ active ? 'location' : undefined }
            className={`hover:text-blue-600 transition duration-300 text-[13px] sm:text-lg ${active ? 'text-blue-600' : ''} ${className}`}>
            { text }
        </a>
    )
}
