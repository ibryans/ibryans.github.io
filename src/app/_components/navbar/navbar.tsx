/**
 * @author Bryan S. Oliveira
 * Barra de navegação superior e seus itens
 */

'use client'

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { NavbarItem } from "./navbar-item";
import ThemeToggle from "../theme-toggle/theme-toggle";
import LanguageSwitcher from "../language-switcher/language-switcher";
import { sections, SectionId } from "@/app/_data/sections";

export default function Navbar() {
    const t = useTranslations('nav');
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState<SectionId>('home');

    // Fundo da barra só depois de rolar, para não cobrir o topo da página
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Destaca o link da seção que ocupa o meio da tela
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries
                .filter((entry) => entry.isIntersecting)
                .forEach((entry) => setActive(entry.target.id as SectionId));
        }, { rootMargin: '-50% 0px -50% 0px' });

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });
        return () => observer.disconnect();
    }, []);

    return (
        
        <div className={`fixed top-0 left-0 right-0 py-2 px-2 md:p-6 z-20 transition-colors duration-300 ${scrolled ? 'bg-white/80 dark:bg-black/70 backdrop-blur-md shadow-sm dark:shadow-white/5' : ''}`}>
            <header className="flex items-center justify-between container mx-auto"> 
                
                <LanguageSwitcher/>

                {/* Menu */}
                <nav className='flex space-x-3 sm:space-x-10 justify-start'>
                    {sections.map((id) => (
                        <NavbarItem key={id} text={t(id)} href={`#${id}`} active={active === id}/>
                    ))}
                </nav>

                <ThemeToggle/>

            </header>
        </div>
        
    );
}
