/**
 * @author Bryan S. Oliveira
 * Barra de navegação superior e seus itens
 */

'use client'

import { useEffect, useState } from "react";
import { CgMenu } from "react-icons/cg";
import { NavbarItem } from "./navbar-item";

export default function Navbar() {

    const [isNavFixed, setIsNavFixed] = useState<boolean>(false);

    const scrollEvent = () => {
        if (window.scrollY >= 100)
            setIsNavFixed(true)
        else if (window.scrollY <= 20)
            setIsNavFixed(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollEvent);
        return () => window.addEventListener('scroll', scrollEvent);
    }, [])

    return (
        <header className={"flex justify-between items-center " + (isNavFixed ? 'bg-slate-900 sticky flex justify-between top-0 p-5 w-100 shadow-lg' : 'p-5')}> 
            {/* Logo */}
            <div className="flex gap-x-4 items-center">
                <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=emerald&shade=500"
                    alt="Tailwind Logo"
                />
                <h1 className="text-2xl">
                    Bryan
                </h1>
            </div>

            {/* Menu */}
            <nav className='flex space-x-10 justify-end sm:block hidden'>
                <NavbarItem text="About" href="#about"/>
                {/* <NavbarItem text="Experiences" href="#experiences"/>
                <NavbarItem text="Projects" href="#projects"/>
                <NavbarItem text="Contact" href="#contact"/> */}
            </nav>

            {/* Menu hamburguer */}
            <div className="sm:hidden">
                <CgMenu className="hover:text-emerald-500 transition duration-300 text-2xl cursor-pointer" />
            </div>
        </header>
    );
}