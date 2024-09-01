/**
 * @author Bryan S. Oliveira
 * Componente do cabeçalho do site 
 * (Plano de fundo, nome, descrição) 
*/

import { FaChevronCircleRight, FaGithub, FaLinkedinIn } from "react-icons/fa";
import avatar from '/public/me.png'
import { IoMdMail } from 'react-icons/io';
import SocialButton from '../social-button/social-button';
import Image from 'next/image';
import { ReactTyped } from "react-typed";

export function Header() {

    return (
        <div id="home" className='p-5 appear'>
            <div 
                className="flex flex-col sm:flex-row justify-center items-center space-x-0 sm:space-x-20 md:space-x-40 h-[100vh] -mt-5">

                <div className="flex flex-col items-center sm:items-start">
                    <Image
                        width={800}
                        height={800}
                        alt='Plano de fundo'
                        className='sm:hidden border-[3px] border-white rounded-full w-1/2 sm:w-1/5 lg:w-1/5 2xl:w-1/10 mb-10'
                        src={avatar.src} />
                    
                    <h1 className="text-4xl lg:text-6xl font-extrabold mb-3">
                        Bryan S. Oliveira
                    </h1>

                    <h2 className="text-xl lg:text-2xl">
                        <ReactTyped
                            strings={['Frontend Software Engineer', 'UX/UI Enthusiast', 'Fullstack Developer']}
                            typeSpeed={50}
                            backSpeed={20}
                            loop
                        />
                    </h2>

                    <div className="flex flex-row justify-start items-center space-x-2 mt-10">
                        <div className="hidden sm:flex px-5 py-3 bg-blue-600 rounded-full text-white space-x-5 items-center">
                            <span>Contact me</span> <FaChevronCircleRight/>
                        </div>
                        <SocialButton 
                            icon={<FaLinkedinIn/>} 
                            url="https://www.linkedin.com/in/ibryans/"/>
                        <SocialButton 
                            icon={<IoMdMail/>} 
                            url="mailto:bsoliveira@proton.me"/>
                        <SocialButton
                            icon={<FaGithub/>}
                            url="https://www.github.com/ibryans"/>
                    </div>
                </div>
                
                <Image
                    width={800}
                    height={800}
                    alt='Plano de fundo'
                    className='hidden sm:block border-[3px] border-white rounded-full w-1/2 sm:w-1/3 lg:w-1/5 2xl:w-1/10 mb-10'
                    src={avatar.src} />
                
            </div>
        </div>
    );
}