'use client'

/**
 * @author Bryan S. Oliveira
 * Componente do cabeçalho do site
 * (Plano de fundo, nome, descrição)
*/

import { useState, useSyncExternalStore } from "react";
import { FaChevronCircleDown, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiCheck, FiCopy } from "react-icons/fi";
import avatar from '@/assets/avatar.webp'
import { IoMdMail } from 'react-icons/io';
import SocialButton from '../social-button/social-button';
import Image from 'next/image';
import './header.css';
import { ReactTyped } from "react-typed";
import { FaBluesky } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { profile } from "@/app/_data/profile";

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

const subscribeToReducedMotion = (onChange: () => void) => {
    const media = window.matchMedia(REDUCED_MOTION);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
};

export function Header() {
    const t = useTranslations('header');
    const roles = t.raw('roles') as string[];
    const [copied, setCopied] = useState(false);
    const prefersReducedMotion = useSyncExternalStore(
        subscribeToReducedMotion,
        () => window.matchMedia(REDUCED_MOTION).matches,
        () => false,
    );

    // No celular não existe hover para ver o email no tooltip, então dá para copiar
    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(profile.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {}
    };

    return (
        <section id="home" aria-labelledby="home-title" className='p-5 appear'>
            <div
                className="flex flex-col sm:flex-row justify-center items-center space-x-0 sm:space-x-20 md:space-x-40 min-h-svh -mt-5">

                <div className="flex flex-col items-center sm:items-start">
                    <h1 id="home-title" className="text-4xl lg:text-6xl font-extrabold mb-3">
                        {profile.name}
                    </h1>

                    {/* O efeito de digitação é só visual; leitores de tela recebem o texto completo */}
                    <p className="text-xl lg:text-2xl">
                        <span className="sr-only">{roles.join(', ')}</span>
                        <span aria-hidden="true">
                            {prefersReducedMotion ? roles[0] : (
                                <ReactTyped
                                    strings={roles}
                                    typeSpeed={50}
                                    backSpeed={20}
                                    loop
                                />
                            )}
                        </span>
                    </p>

                    <div className="flex flex-row justify-start items-center space-x-2 mt-20">

                        {/* Email Tooltip */}
                        <div className="tooltip-container relative">
                            <span className="tooltip bg-slate-600 text-white">
                                {profile.email}
                            </span>

                            <a href={`mailto:${profile.email}`} className="px-5 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-full text-white flex space-x-5 items-center">
                                <span>{t('contact')}</span>
                                <IoMdMail aria-hidden="true"/>
                            </a>
                        </div>

                        <button
                            onClick={copyEmail}
                            aria-label={t('copyEmail')}
                            title={t('copyEmail')}
                            className="bg-transparent rounded-lg p-2 hover:bg-blue-600 hover:text-white transition duration-300">
                            {copied ? <FiCheck aria-hidden="true"/> : <FiCopy aria-hidden="true"/>}
                        </button>

                        <SocialButton
                            icon={<FaLinkedinIn/>}
                            label="LinkedIn"
                            url={profile.socials.linkedin}/>
                        <SocialButton
                            icon={<FaBluesky/>}
                            label="Bluesky"
                            url={profile.socials.bluesky}/>
                        <SocialButton
                            icon={<FaGithub/>}
                            label="GitHub"
                            url={profile.socials.github}/>
                    </div>

                    <span role="status" className="h-6 mt-3 text-sm text-accent">
                        {copied && t('copied')}
                    </span>
                </div>

                {/* No mobile a foto vem antes do nome; a partir do sm, fica à direita */}
                <Image
                    alt={t('avatarAlt')}
                    // É o maior elemento visível ao abrir a página (LCP)
                    preload
                    className='order-first sm:order-last rounded-full w-1/2 sm:w-1/3 lg:w-1/5 mb-10'
                    src={avatar} />

            </div>

            <a href="#about" aria-label={t('scrollDown')} className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-10 cursor-pointer">
               <FaChevronCircleDown
                    aria-hidden="true"
                    className="motion-safe:animate-bounce w-6 h-6 transition"
                />
            </a>

        </section>
    );
}
