import Image from "next/image";
import Header from "./_components/header/header";
import About from "./_components/about/about";

export default function Home() {
  return (
    <main>
      <Header/>
      <About/>
    </main>
  );
}
