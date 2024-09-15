/**
 * @author Bryan S. Oliveira
 * Seção de sobre mim
*/

export function About() {
    return (
        <div className="flex justify-center items-center appear h-screen" id="about">    
            <section className="w-full md:w-1/2 px-10 md:px-0">
                <h3 className="text-3xl font-bold">
                    <span className="border-b-2 border-blue-600 py-2">
                        About me
                    </span>
                </h3>
                <div className="flex flex-col md:flex-row gap-x-48 py-10">
                    <div className="flex-initial pb-5 space-y-5 text-xl">
                        <p>
                            I&apos;m a Frontend Software Engineer with 2+ years of experience, focusing in typescript frameworks like React, Next.js and Angular, along with UX/UI design using Figma and mobile app development with React Native. 
                        </p>
                        <p>
                            I&apos;m also a Computer Scientist from PUC Minas 🇧🇷 and an AI enthusiast, passionate about blending technology with creativity.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}