/**
 * @author Bryan S. Oliveira
 * @param Texto do item e seu href
 * @returns Um item do menu de navegação
 */

type NavbarItemProps = {
    text: string;
    href: string;
}

export function NavbarItem({ text, href }: NavbarItemProps) {
    return (
        <a href={ href } className='hover:text-blue-600 transition duration-300 text-sm sm:text-lg'>
            { text }
        </a>
    )
}