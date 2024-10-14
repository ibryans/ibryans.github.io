/**
 * @author Bryan S. Oliveira
 * Barra de navegação superior e seus itens
 */

'use client'

import { useEffect, useState } from "react";
import { CgMenu } from "react-icons/cg";
import { NavbarItem } from "./navbar-item";
import { FaGlobe } from "react-icons/fa";

export default function Navbar() {

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark')
    }

    return (
        
        <div className="fixed top-0 left-0 right-0 py-2 px-2 md:p-6 z-20">
            <header className={"flex items-center justify-between bg-transparent container mx-auto"}> 
                
                <button className="flex space-x-2 items-center group hover:bg-blu00 p-2 rounded-full transition text-sm sm:text-md">
                    <FaGlobe className="group-hover:animate-spin"/>
                    <b>EN</b>
                </button>

                {/* Menu */}
                <nav className='flex space-x-4 sm:space-x-10 justify-start'>
                    <NavbarItem text="Home" href="#home"/>
                    <NavbarItem text="About" href="#about"/>
                    <NavbarItem text="Experiences" href="#experiences"/>
                    <NavbarItem text="Projects" href="#projects"/>
                </nav>

                {/* Dark mode */}
                <svg onClick={toggleDarkMode} className="dark:hidden hover:animate-spin-finite hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" viewBox="0 0 256 256" xmlSpace="preserve">
                    <defs></defs>
                    <g style={{ strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', opacity: 1 }} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                        <path d="M 87.823 60.7 c -0.463 -0.423 -1.142 -0.506 -1.695 -0.214 c -15.834 8.398 -35.266 2.812 -44.232 -12.718 c -8.966 -15.53 -4.09 -35.149 11.101 -44.665 c 0.531 -0.332 0.796 -0.963 0.661 -1.574 c -0.134 -0.612 -0.638 -1.074 -1.259 -1.153 c -9.843 -1.265 -19.59 0.692 -28.193 5.66 C 13.8 12.041 6.356 21.743 3.246 33.35 S 1.732 57.08 7.741 67.487 c 6.008 10.407 15.709 17.851 27.316 20.961 C 38.933 89.486 42.866 90 46.774 90 c 7.795 0 15.489 -2.044 22.42 -6.046 c 8.601 -4.966 15.171 -12.43 18.997 -21.586 C 88.433 61.79 88.285 61.123 87.823 60.7 z" style={{ strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'black', opacity: 1 }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                    </g>
                </svg>

                {/* Light mode */}
                <svg onClick={toggleDarkMode} className="hidden dark:block hover:animate-spin-finite hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="20" viewBox="0 0 256 256" xmlSpace="preserve">
                    <defs></defs>
                    <g style={{ strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', opacity: 1 }} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                        <path d="M 45 68 c -12.682 0 -23 -10.317 -23 -23 c 0 -12.682 10.318 -23 23 -23 c 12.683 0 23 10.318 23 23 C 68 57.683 57.683 68 45 68 z M 45 28 c -9.374 0 -17 7.626 -17 17 s 7.626 17 17 17 s 17 -7.626 17 -17 S 54.374 28 45 28 z" style={{ strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'white', opacity: 1 }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                        <rect x="42" y="0" rx="0" ry="0" width="6" height="15.79" style={{ strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'white', opacity: 1 }} transform=" matrix(1 0 0 1 0 0) "/>
                        <rect x="42" y="74.21" rx="0" ry="0" width="6" height="15.79" style={{ strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'white', opacity: 1 }} transform=" matrix(1 0 0 1 0 0) "/>
                        <rect x="0" y="42" rx="0" ry="0" width="15.79" height="6" style={{ strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'white', opacity: 1 }} transform=" matrix(1 0 0 1 0 0) "/>
                        <rect x="74.21" y="42" rx="0" ry="0" width="15.79" height="6" style={{ strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'white', opacity: 1 }} transform=" matrix(1 0 0 1 0 0) "/>
                        <rect x="63.34" y="15.76" rx="0" ry="0" width="15.79" height="6" style={{ strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'white', opacity: 1 }} transform=" matrix(0.7071 -0.7071 0.7071 0.7071 7.5969 55.8674) "/>
                        <rect x="10.87" y="68.24" rx="0" ry="0" width="15.79" height="6" style={{ strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'white', opacity: 1 }} transform=" matrix(0.7071 -0.7071 0.7071 0.7071 -44.876 34.1324) "/>
                        <rect x="15.76" y="10.87" rx="0" ry="0" width="6" height="15.79" style={{ strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'white', opacity: 1 }} transform=" matrix(0.7071 -0.7071 0.7071 0.7071 -7.7721 18.7634) "/>
                        <rect x="68.24" y="63.34" rx="0" ry="0" width="6" height="15.79" style={{ strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'white', opacity: 1 }} transform=" matrix(0.7071 -0.7071 0.7071 0.7071 -29.5071 71.2363) "/>
                    </g>
                </svg>

            </header>
        </div>
        
    );
}