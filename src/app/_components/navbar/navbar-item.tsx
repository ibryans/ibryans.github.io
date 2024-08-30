/**
 * @author Bryan S. Oliveira
 * @param Texto do item e seu href
 * @returns Um item do menu de navegação
 */

export function NavbarItem({ text, href }: any) {
    return (
        <a href={ href } className='hover:text-blue-600 transition duration-300 text-md'>
            { text }
        </a>
    )
}