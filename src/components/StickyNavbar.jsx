import React, { useState, useEffect } from "react";

export default function StickyNavbar() {
  const sectionIDs = ["hero", "experience", "skills", "projects", "education"];
  const sectionLabels = ["About Me", "Experience", "Skills", "Projects", "Education"];

  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPosition =
        window.scrollY +
        (document.querySelector(".fixed.top-0.left-0")?.offsetHeight || 60) +
        50;

      let currentSectionIndex = -1;
      for (let i = sectionIDs.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIDs[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top + window.scrollY < scrollPosition) {
            currentSectionIndex = i;
            break;
          }
        }
      }

      if (currentSectionIndex === -1) {
        for (let i = 0; i < sectionIDs.length; i++) {
          const el = document.getElementById(sectionIDs[i]);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (
              rect.top < window.innerHeight / 2 &&
              rect.bottom >
                (document.querySelector(".fixed.top-0.left-0")?.offsetHeight || 60)
            ) {
              currentSectionIndex = i;
              break;
            }
          }
        }
      }

      if (currentSectionIndex !== -1 && currentSectionIndex !== activeIndex) {
        setActiveIndex(currentSectionIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex, sectionIDs]);

  const shrink = scrolled;

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 px-6 flex justify-center transition-all duration-500 ease-in-out ${
        shrink ? "py-2" : "py-6"
      }`}
    >
      <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-full px-3 py-1 shadow-md ring-1 ring-white/10">
        <div className="flex space-x-2">
          {sectionIDs.map((id, i) => {
            // Hide "About Me" button (index 0) when Hero is active
            if (i === 0 && activeIndex === 0) return null;

            return (
              <button
                key={id}
                onClick={() => {
                  const element = document.getElementById(id);
                  if (element) {
                    const navbarHeight =
                      document.querySelector(".fixed.top-0.left-0")?.offsetHeight || 0;
                    const elementPosition =
                      element.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - navbarHeight - 10;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`px-6 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? "bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 text-white shadow-md"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {sectionLabels[i]}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
