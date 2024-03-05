/**
 * @author Bryan S. Oliveira
 * Seção de sobre mim
*/

export default function About() {
    return (
        <div className="bg-white">

            <div className="container p-10 mx-auto">

                <h1 className="px-12 2xl:px-24 pt-10 text-4xl text-black font-bold">
                    About me
                </h1>

                <div className="flex flex-col md:flex-row space-around text-black py-10">

                    <div className="px-12 2xl:px-24 pb-5">
                        <p>
                        Graduated in Computer Science from PUC Minas and a Computer Technician from UFMG Technical College (COLTEC). With the aim of launching my career post-graduation, I am currently dedicated to Full-stack Development, bringing around 2 years of experience using Angular, React, NestJS, and MySQL. Additionally, I have expertise in mobile development with Ionic, React Native and Flutter and also have knowledge in Python gained through research projects.
                        </p>
                    </div>

                    <div className="px-12 2xl:px-24">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil similique fuga blanditiis laboriosam ducimus, asperiores dicta officiis eveniet quod, mollitia, ea libero debitis nam. Explicabo repudiandae suscipit at quisquam neque.
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
}