import { Header } from "./_components/header/header";
import { About } from "./_components/about/about";
import Navbar from "./_components/navbar/navbar";

export default function Home() {

  return (
    <main className="dark:text-white text-black container mx-auto">
      <Navbar/>
      <Header/>
      <About/>
    </main>
  );
}
