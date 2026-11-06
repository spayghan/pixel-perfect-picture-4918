import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shashvat Payghan — AI & Data Science Student | Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Shashvat Payghan — AI & Data Science student and full-stack developer building intelligent, real-world products with Python, React and modern machine learning.",
      },
      { property: "og:title", content: "Shashvat Payghan — AI & Data Science Student | Full Stack Developer" },
      {
        property: "og:description",
        content: "One Mind. One World. Infinite Possibilities. Explore my projects, skills and experience in AI, data science and full-stack development.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="relative min-h-screen">
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
