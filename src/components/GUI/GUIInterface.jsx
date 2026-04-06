import React, { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import About from "../About/About";
import Contact from "../Contact/Contact";

export default function GUIInterface() {
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#f7f5f2] text-gray-900">
      {/* Navbar with handlers */}
      <div className="fixed top-6 left-0 w-full z-50 px-8 md:px-16">
        <Navbar
          onNavigate={{
            projects: () => scrollToSection(projectsRef),
            experience: () => scrollToSection(experienceRef),
            about: () => scrollToSection(aboutRef),
            contact: () => scrollToSection(contactRef),
          }}
        />
      </div>

      {/* Sections */}
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        <section className="min-h-screen snap-start px-8 md:px-16">
          <Hero imageSrc="/portfolio/self.jpg" />
        </section>

        <section
          ref={projectsRef}
          className="min-h-screen snap-start px-8 md:px-16"
        >
          <Projects />
        </section>

        <section
          ref={experienceRef}
          className="min-h-screen snap-start px-8 md:px-16"
        >
          <Experience />
        </section>

        <section
          ref={aboutRef}
          className="min-h-screen snap-start px-8 md:px-16"
        >
          <About />
        </section>

        <section
          ref={contactRef}
          className="min-h-screen snap-start px-8 md:px-16"
        >
          <Contact />
        </section>
      </main>
    </div>
  );
}
