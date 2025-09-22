import { useEffect, useState } from "react";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import StarBackground from "@/components/StarBackground";
import ThemeToggle from "@/components/ThemeToggle";

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <NavBar isScrolled={isScrolled} />
      <ThemeToggle isScrolled={isScrolled} />
      <StarBackground />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
