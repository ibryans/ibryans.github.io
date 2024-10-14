/**
 * @author Bryan S. Oliveira
 * Seção de sobre mim
*/

import Image from "next/image";
import developer from '/public/developer.png';

export function About() {
    return (
        <div id="about" className="flex flex-col md:flex-row justify-center md:justify-between items-center appear h-screen px-10">
            <div className="w-full md:w-1/2 flex flex-row justify-center items-center">
                <section className="w-full">
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
            <div className="w-full md:w-1/3 hidden md:block">
                <Image 
                    src={developer} 
                    alt="developer"
                    className=" border-black dark:border-white "
                />
            </div>
        </div>
    );
}