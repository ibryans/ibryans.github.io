/**
 * @author Bryan S. Oliveira
 * Componente dos botões de redes sociais (ou email)
 * Contendo um ícone (ReactIcons) e link para contato
*/

import { ReactElement } from "react";

type buttonProps = {
    icon: ReactElement;
    url: string;
    // Nome lido por leitores de tela, já que o botão só tem ícone
    label: string;
}

export default function SocialButton({ icon, url, label }: buttonProps) {
    const isExternal = url.startsWith('http');

    return (
        <a
            href={url}
            aria-label={label}
            title={label}
            {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
            className="inline-flex bg-transparent rounded-lg p-2 hover:bg-blue-600 hover:text-white transition duration-300">
            <span aria-hidden="true">{ icon }</span>
        </a>
    );
}
