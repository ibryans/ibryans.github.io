/**
 * @author Bryan S. Oliveira
 * Barra de navegação superior e seus itens
 */

import { NavbarItem } from "./navbar-item";
import { FaGlobe } from "react-icons/fa";
import ThemeToggle from "../theme-toggle/theme-toggle";
import { useTranslations } from "next-intl";

export default function Navbar() {
    const t = useTranslations('nav');

    return (
        
        <div className="fixed top-0 left-0 right-0 py-2 px-2 md:p-6 z-20">
            <header className={"flex items-center justify-between bg-transparent container mx-auto"}> 
                
                <button className="flex space-x-2 items-center group p-2 rounded-full transition text-sm sm:text-md">
                    <FaGlobe className="group-hover:animate-spin"/>
                    <b>EN</b>
                </button>

                {/* Menu */}
                <nav className='flex space-x-4 sm:space-x-10 justify-start'>
                    <NavbarItem text={t('home')} href="#home"/>
                    <NavbarItem text={t('about')} href="#about"/>
                    <NavbarItem text={t('experiences')} href="#experiences"/>
                    <NavbarItem text={t('skills')} href="#skills"/>
                </nav>

                <ThemeToggle/>

            </header>
        </div>
        
    );
}