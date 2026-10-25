'use client'

/**
 * @author Bryan S. Oliveira
 * Componente do cabeçalho do site 
 * (Plano de fundo, nome, descrição) 
*/

import { FaChevronCircleDown, FaGithub, FaLinkedinIn } from "react-icons/fa";
import avatar from '@/assets/avatar.webp'
import { IoMdMail } from 'react-icons/io';
import SocialButton from '../social-button/social-button';
import Image from 'next/image';
import './header.css';
import { ReactTyped } from "react-typed";
import { FaBluesky } from "react-icons/fa6";

export function Header() {

    return (
        <div id="home" className='p-5 appear'>
            <div 
                className="flex flex-col sm:flex-row justify-center items-center space-x-0 sm:space-x-20 md:space-x-40 min-h-svh -mt-5">

                <div className="flex flex-col items-center sm:items-start">
                    <Image
                        alt='Plano de fundo'
                        className='sm:hidden rounded-full w-1/2 sm:w-1/5 lg:w-1/5 mb-10'
                        src={avatar} />
                    
                    <h1 className="text-4xl lg:text-6xl font-extrabold mb-3">
                        Bryan S. Oliveira
                    </h1>

                    <h2 className="text-xl lg:text-2xl">
                        <ReactTyped
                            strings={['Frontend Software Engineer', 'UX/UI designer', 'Computer Scientist']}
                            typeSpeed={50}
                            backSpeed={20}
                            loop
                        />
                    </h2>

                    <div className="flex flex-row justify-start items-center space-x-2 mt-20">
                        
                        {/* Email Tooltip */}
                        <div className="tooltip-container relative">
                            <span className="tooltip bg-slate-600 text-white">
                                bsoliveira@proton.me
                            </span>

                            <a href="mailto:bsoliveira@proton.me" className="px-5 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-full text-white flex space-x-5 items-center">
                                <span>Contact me</span> 
                                <IoMdMail/>
                            </a> 
                        </div>
                        

                        <SocialButton 
                            icon={<FaLinkedinIn/>} 
                            url="https://www.linkedin.com/in/ibryans/"/>
                        <SocialButton 
                            icon={<FaBluesky/>} 
                            url="https://bsky.app/profile/bsoliveira.com"/>
                        <SocialButton
                            icon={<FaGithub/>}
                            url="https://www.github.com/ibryans"/>
                    </div>
                </div>
                
                <Image
                    alt='Plano de fundo'
                    className='hidden sm:block rounded-full w-1/2 sm:w-1/3 lg:w-1/5 mb-10'
                    src={avatar} />
                
            </div>

            <a href="#about" className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-10 cursor-pointer">
               <FaChevronCircleDown 
                    className="animate-bounce w-6 h-6 transition" 
                /> 
            </a>
            
        </div>
    );
}