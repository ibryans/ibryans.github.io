/**
 * @author Bryan S. Oliveira
 * Seção de sobre mim
*/

import { BsDatabaseFillGear } from "react-icons/bs";
import { FaAndroid, FaFigma} from "react-icons/fa";
import { PiFileHtmlFill } from "react-icons/pi";
import { AboutItem } from "./about-item";

export function About() {
    return (
        <section className="p-10 text-white" id="sobre">
            <h3 className="text-xl font-bold">
                <span className="border-l border-emerald-500 pl-3">
                    Opa, e aí!
                </span>
            </h3>
            <div className="flex flex-col md:flex-row gap-x-48 py-5">
                <div className="flex-initial pb-5 space-y-5 text-slate-400">
                    <p>
                        Seja bem vindo ao meu site pessoal! Meu nome é Bryan, e posso te ajudar com qualquer tipo de projeto pelo lado front-end, participando da criação do design, do desenvolvimento de sites e aplicativos e integrações com APIs, além do deploy e hospedagem da aplicação.
                    </p>
                    <p>
                        Possuo mais de 2 anos de experiência, tendo trabalhado com Figma, Angular, React e também com mobile através do Ionic e React Native.
                    </p>
                </div>
                <div className="flex space-x-5 items-center">
                    <div className="flex flex-col space-y-3">
                        <AboutItem 
                            icon={<PiFileHtmlFill className="text-3xl" />}
                            text="Front-end"/>
                        <AboutItem 
                            icon={<FaAndroid className="text-3xl" />}
                            text="Mobile"/>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <AboutItem 
                            icon={<BsDatabaseFillGear className="text-3xl" />}
                            text="APIs REST"/>
                        <AboutItem 
                            icon={<FaFigma className="text-3xl" />}
                            text="Figma"/>
                    </div>
                </div>
            </div>
        </section>
    );
}