import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import WaveSeparator from "@/components/WaveSeparator";

export default function Home() {
  return (
    <>
      <Hero />
      <WaveSeparator flip />

      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
