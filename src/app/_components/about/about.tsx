/**
 * @author Bryan S. Oliveira
 * Seção de sobre mim
*/

export function About() {
    return (
        <div className="flex justify-center">    
            <section className="w-1/2 text-white" id="about">
                <h3 className="text-2xl font-bold">
                    <span className="border-l border-emerald-500 px-3">
                        Hey, what's up?
                    </span>
                </h3>
                <div className="flex flex-col md:flex-row gap-x-48 py-10">
                    <div className="flex-initial pb-5 space-y-5 text-slate-400 text-xl">
                        <p>
                            I'm a Frontend Software Engineer with 2+ years of experience, focusing in typescript frameworks like React, Next.js and Angular, along with UX/UI design using Figma and mobile app development with React Native. 
                        </p>
                        <p>
                            I'm also a Computer Scientist from PUC Minas 🇧🇷 and an AI enthusiast, passionate about blending technology with creativity.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}