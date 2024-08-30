/**
 * @author Bryan S. Oliveira
 * Seção de experiencias
*/

export function Experiences() {
    return (
        <div className="flex justify-center items-center appear h-screen" id="experiences">    
            <section className="w-full md:w-1/2  px-10 md:px-0">
                <h3 className="text-3xl font-bold">
                    <span className="border-l-2 border-blue-600 px-3">
                        Experiences
                    </span>
                </h3>
                <div className="flex flex-col md:flex-row gap-x-48 py-10">
                    <div className="flex-initial pb-5 space-y-5 text-xl">
                        <p>
                            Loading ...
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}