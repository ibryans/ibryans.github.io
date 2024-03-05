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
            <button className="outline outline-1 bg-transparent rounded-lg p-3 mx-1 hover:bg-blue-300 hover:text-black">
                { icon }
            </button>
        </a>
    );
}