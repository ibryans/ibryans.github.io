/**
 * @author Bryan S. Oliveira
 * Componente do cabeçalho do site 
 * (Plano de fundo, nome, descrição) 
*/

import background from  '/public/background.jpg'
import { FaLinkedinIn } from "react-icons/fa";
import avatar from '/public/me.png'
import './header.css'
import { IoMdMail } from 'react-icons/io';
import SocialButton from '../social-button/social-button';
import Image from 'next/image';

export default function Header() {

    return (
        <div
            className="flex flex-col justify-center items-center bg-cover p-12 lg:p-24"
            style={{backgroundImage: `url(${background.src})`}}>

            <Image
                width={799}
                height={799}
                alt='Plano de fundo'
                className='border-4 border-white rounded-full w-1/2 sm:w-1/5 lg:w-1/6 2xl:w-1/12 mb-10'
                src={avatar.src} />

            <div className="typewriter">
                <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3">
                    Hello, I&apos;m Bryan.
                </h1>
            </div>

            <h2 className="text-2xl sm:text-2xl">
                Full-stack Developer
            </h2>

            <div className="mt-10">
                <SocialButton 
                    icon={<FaLinkedinIn/>} 
                    url="https://www.linkedin.com/in/ibryans/"/>
                <SocialButton 
                    icon={<IoMdMail/>} 
                    url="mailto:bsoliveira@proton.me"/>
            </div>
        </div>
    );
}