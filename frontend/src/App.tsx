import AiBackground from "@/components/portfolio/AiBackground";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import EducationExperience from "@/components/portfolio/EducationExperience";
import Milestones from "@/components/portfolio/Milestones";
import TerminalSection from "@/components/portfolio/TerminalSection";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-neon/20 selection:text-neon">
      <AiBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EducationExperience />
        <Milestones />
        <TerminalSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
