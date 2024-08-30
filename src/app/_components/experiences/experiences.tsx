/**
 * @author Bryan S. Oliveira
 * Seção de experiencias
*/

export function Experiences() {
    return (
        <div className="flex justify-center appear mt-80" id="experiences">    
            <section className="w-1/2">
                <h3 className="text-2xl font-bold">
                    <span className="border-l-2 border-blue-600 px-3">
                        Experiences
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