import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Hero from "./Hero.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Education from "./Education.jsx";

export default function SectionManager({ index, setIndex }) {
  const [direction, setDirection] = useState(1);
  const sections = [
    <Hero key="hero" />,
    <Experience key="experience" />,
    <Skills key="skills" />,
    <Projects key="projects" />,
    <Education key="education" />
  ];

  const sectionCount = sections.length;
  const isAnimating = useRef(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isAnimating.current) return;

      if (e.deltaY > 30 && index < sectionCount - 1) {
        setDirection(1);
        setIndex((prev) => prev + 1);
        isAnimating.current = true;
        setTimeout(() => (isAnimating.current = false), 900);
      } else if (e.deltaY < -30 && index > 0) {
        setDirection(-1);
        setIndex((prev) => prev - 1);
        isAnimating.current = true;
        setTimeout(() => (isAnimating.current = false), 900);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [index, setIndex]);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      zIndex: 1,
      position: "absolute"
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 2,
      position: "absolute"
    },
    exit: (dir) => ({
      x: dir > 0 ? "-40%" : "40%", // pull partially out, tucked to side
      opacity: 0,
      zIndex: 0,
      position: "absolute"
    })
  };

  return (
    <div className="h-screen w-full overflow-hidden relative">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {sections[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
