/**
 * @author Bryan S. Oliveira
 * Rodapé com links de contato
*/

import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import SocialButton from "../social-button/social-button";
import { profile } from "@/app/_data/profile";

export function Footer() {
    const t = useTranslations('footer');

    return (
        <footer className="container mx-auto flex flex-col items-center gap-4 py-12 px-10 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center space-x-2">
                <SocialButton icon={<IoMdMail/>} label="Email" url={`mailto:${profile.email}`}/>
                <SocialButton icon={<FaLinkedinIn/>} label="LinkedIn" url={profile.socials.linkedin}/>
                <SocialButton icon={<FaBluesky/>} label="Bluesky" url={profile.socials.bluesky}/>
                <SocialButton icon={<FaGithub/>} label="GitHub" url={profile.socials.github}/>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
                {t('rights', { year: new Date().getFullYear() })}
            </p>
        </footer>
    );
}
