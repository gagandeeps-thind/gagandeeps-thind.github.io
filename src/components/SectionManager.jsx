import React from "react";

import Hero from "./Hero.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Education from "./Education.jsx";

export default function SectionManager() {
  return (
    <div className="w-full flex flex-col scroll-smooth no-scrollbar scroll-pt-28 md:scroll-pt-32">
      <section id="hero" className="w-full px-4 py-20 space-y-6 min-h-screen">
        <Hero />
      </section>
      <section id="experience" className="w-full px-4 py-20 space-y-6 min-h-screen">
        <Experience />
      </section>
      <section id="skills" className="w-full px-4 py-20 space-y-6 min-h-screen">
        <Skills />
      </section>
      <section id="projects" className="w-full px-4 py-20 space-y-6 min-h-screen">
        <Projects />
      </section>
      <section id="education" className="w-full px-4 py-20 space-y-6 min-h-screen">
        <Education />
      </section>
    </div>
  );
}
