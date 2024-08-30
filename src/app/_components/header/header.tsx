/**
 * @author Bryan S. Oliveira
 * Componente do cabeçalho do site 
 * (Plano de fundo, nome, descrição) 
*/

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import avatar from '/public/me.png'
import './header.css'
import { IoMdMail } from 'react-icons/io';
import SocialButton from '../social-button/social-button';
import Image from 'next/image';

export function Header() {

    return (
        <div id="home" className='p-5 appear'>
            <div 
                className="flex flex-col justify-center items-center  h-[100vh] -mt-5 justify-center">

                <Image
                    width={800}
                    height={800}
                    alt='Plano de fundo'
                    className='border-[3px] border-white rounded-full w-1/2 sm:w-1/5 lg:w-1/5 2xl:w-1/10 mb-10'
                    src={avatar.src} />

                <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold mb-3">
                    Bryan S. Oliveira
                </h1>

                <div className="typewriter">
                    <h2 className="text-2xl md:text-3xl text-blue-600">
                        Software Engineer
                    </h2> 
                </div>
                

                <div className="mt-10 pb-10 border-b-2 border-blue-600">
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
        </div>
    );
}