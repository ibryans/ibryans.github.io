/**
 * @author Bryan S. Oliveira
 * Botão de alternar entre tema claro e escuro
 * A escolha fica salva no localStorage; sem escolha salva, segue o tema do sistema
 */

'use client'

import { useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const STORAGE_KEY = 'theme';

function getSavedTheme() {
    try {
        return localStorage.getItem(STORAGE_KEY);
    } catch {
        return null;
    }
}

export default function ThemeToggle() {

    // Sem escolha salva, acompanha as mudanças do tema do sistema
    useEffect(() => {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const onChange = (event: MediaQueryListEvent) => {
            if (!getSavedTheme()) {
                document.documentElement.classList.toggle('dark', event.matches);
            }
        };
        media.addEventListener('change', onChange);
        return () => media.removeEventListener('change', onChange);
    }, []);

    const toggleTheme = () => {
        const isDark = document.documentElement.classList.toggle('dark');
        try {
            localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
        } catch {}
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1 sm:p-2 rounded-full hover:text-blue-600 transition">
            <FiMoon className="dark:hidden w-5 h-5 hover:animate-spin-finite"/>
            <FiSun className="hidden dark:block w-5 h-5 hover:animate-spin-finite"/>
        </button>
    );
}
