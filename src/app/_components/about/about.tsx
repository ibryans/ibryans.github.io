/**
 * @author Bryan S. Oliveira
 * Seção de sobre mim
*/

import Image from "next/image";
import header from "/public/about.jpg";
import { FaAngular, FaCss3, FaFigma, FaGit, FaHtml5, FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGitSquare } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";

export function About() {
    return (
        <div id="about" className="flex flex-col justify-center items-center appear h-screen">
            <div className="flex flex-row justify-center items-center">
                <section className="w-full md:w-1/2 px-10 md:px-0">
                    <h3 className="text-sm font-extrabold text-blue-600 mb-2">
                        ABOUT ME
                    </h3>
                    <h2 className="text-2xl font-bold">Software engineer from Belo Horizonte, Brazil 🇧🇷</h2>
                    <div className="flex flex-col md:flex-row gap-x-48 py-10">
                        <div className="flex-initial space-y-5 text-lg">
                            <p>
                                Hey, my name is Bryan, i am a software engineer with over two years of experience in frontend development. My expertise lies in frameworks like <b className="text-blue-600">React</b>, <b className="text-blue-600">Next.js</b>, and <b className="text-blue-600">Angular</b>, where I apply best practices in TypeScript to build modern and responsive user interfaces. Additionally, I have strong experience in <b className="text-blue-600">UX/UI</b>, using <b className="text-blue-600">Figma</b> to create intuitive designs that offer a great user experience.
                            </p>
                            <p>
                                🎓 I am also a Computer Scientist graduated in 2023 from PUC Minas and have a I.T technical certificate from UFMG Technical College (COLTEC)
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="flex gap-3 p-5">
                <FaReact className="w-16 h-16 transition"/>
                <TbBrandNextjs className="w-16 h-16 transition"/>
                <FaAngular className="w-16 h-16 transition"/>
                <BiLogoTypescript className="w-16 h-16 transition"/>
                <FaHtml5 className="w-16 h-16 transition"/>
                <FaCss3 className="w-16 h-16 transition"/>
                <FaFigma className="w-16 h-16 transition"/>
                <FaGitSquare className="w-16 h-16 transition"/>
            </div>
        </div>
    );
}