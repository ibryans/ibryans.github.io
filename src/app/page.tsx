import { Header } from "./_components/header/header";
import { About } from "./_components/about/about";
import { Experiences } from "./_components/experiences/experiences";
import { Skills } from "./_components/skills/skills";
import { Footer } from "./_components/footer/footer";
import Navbar from "./_components/navbar/navbar";

export default function Home() {

  return (
    <main className="dark:text-white text-black container mx-auto">
      <Navbar/>
      <Header/>
      <About/>
      <Experiences/>
      <Skills/>
      <Footer/>
    </main>
  );
}
