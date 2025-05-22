import React, { useState, useEffect } from "react";

export default function StickyNavbar({ index, setIndex }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sectionIDs = ["About ME", "Experience", "Skills", "Projects", "Education"];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 px-6 transition-all duration-500 ease-in-out backdrop-blur-md bg-black/30 flex items-center justify-center space-x-8 ${
        scrolled
          ? "py-2 shadow-lg backdrop-blur-lg bg-black/50"
          : "py-6"
      }`}
    >
      {sectionIDs.map((label, i) => (
        <button
          key={label}
          onClick={() => setIndex(i)}
          className="relative text-white text-sm tracking-wide px-2 py-1 transition-all duration-300 hover:text-cyan-400 group"
        >
          {label.replace(/^\w/, (l) => l.toUpperCase())}
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-cyan-400 rounded-full group-hover:w-full transition-all duration-300 ease-out shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
        </button>
      ))}
    </div>
  );
}
