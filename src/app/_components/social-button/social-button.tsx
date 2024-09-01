/**
 * @author Bryan S. Oliveira
 * Componente dos botões de redes sociais (ou email)
 * Contendo um ícone (ReactIcons) e link para contato
*/

import { ReactElement } from "react";
import './social-button.css';

type buttonProps = {
    icon: ReactElement;
    url: string
}

export default function SocialButton({ icon, url }: buttonProps) {
    return (
        <a href={url} target='blank'>
            <button className="bg-blue-600 sm:bg-transparent rounded-lg p-2 hover:bg-blue-600 hover:text-white transition duration-300">
                { icon }
            </button>
        </a>
    );
}