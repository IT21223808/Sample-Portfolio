import About from "@/components/main/About";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Project from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col  gap-20">
        <Hero />
        <Skills />
        <Encryption/>
        <Project/>
        <About/>
        </div>  
    </main>
  );
}
