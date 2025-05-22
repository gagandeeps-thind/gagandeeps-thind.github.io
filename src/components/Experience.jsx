import React, { useState, useLayoutEffect, useRef } from 'react';
import { motion } from "framer-motion";

const experienceData = [
  {
    title: "Graduate Engineer Trainee",
    company: "Bureau Veritas",
    logo: "https://placehold.co/80x40/ffffff/333333?text=BV&font=Inter",
    duration: "Jan 2023 – Jun 2023",
    location: "Delhi",
    points: [
      "Assisted in AWS EC2, S3 setup",
      "SQL Server management & Terraform setup",
      "Documentation and QA support"
    ]
  },
  {
    title: "Intern – TCS",
    company: "Tata Consultancy Services",
    logo: "https://placehold.co/80x40/ffffff/333333?text=TCS&font=Inter",
    duration: "Aug 2022 – Dec 2022",
    location: "Remote",
    points: [
      "Built dashboards using React + Chart.js",
      "Worked with Agile team on cloud-native prototypes"
    ]
  },
  {
    title: "Software Developer",
    company: "Tech Solutions Inc.",
    logo: "https://placehold.co/80x40/ffffff/333333?text=TSI&font=Inter",
    duration: "May 2021 – Jul 2022",
    location: "San Francisco (Remote Option)",
    points: [
      "Developed features for a SaaS platform using Node.js and React.",
      "Collaborated with UX/UI designers to implement responsive interfaces.",
      "Participated in code reviews and agile sprint planning."
    ]
  }
];

const CARD_WIDTH = 300;
const CARD_GAP = 32;

export default function Experience() {
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  // State to dynamically set justify-content class
  const [currentJustify, setCurrentJustify] = useState('justify-center'); // Default to center
  const scrollableCardsRef = useRef(null);

  useLayoutEffect(() => {
    const container = scrollableCardsRef.current;
    if (!container) return;

    const updateLayoutAndButtons = () => {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      
      const overflowDetectionThreshold = 1; // Minimal difference to consider it overflowing
      const buttonVisibilityThreshold = 5;  // Buffer for button visibility checks

      // Determine new justification based on overflow
      const newJustifyValue = (scrollWidth > clientWidth + overflowDetectionThreshold) 
                              ? 'justify-start' 
                              : 'justify-center';
      
      // Only update state if the value has actually changed to prevent unnecessary re-renders
      if (currentJustify !== newJustifyValue) {
        setCurrentJustify(newJustifyValue);
      }

      // Determine button visibility
      const canScroll = scrollWidth > clientWidth + buttonVisibilityThreshold;

      if (!canScroll) {
        setShowLeftButton(false);
        setShowRightButton(false);
      } else {
        setShowLeftButton(scrollLeft > buttonVisibilityThreshold);
        setShowRightButton(scrollLeft < scrollWidth - clientWidth - buttonVisibilityThreshold);
      }
    };

    updateLayoutAndButtons(); // Call once on mount and after every data/layout change

    // Add event listeners
    window.addEventListener('resize', updateLayoutAndButtons);
    container.addEventListener('scroll', updateLayoutAndButtons);

    // Cleanup listeners
    return () => {
      window.removeEventListener('resize', updateLayoutAndButtons);
      container.removeEventListener('scroll', updateLayoutAndButtons);
    };
    // Dependencies:
    // - experienceData.length: if the number of cards changes.
    // - currentJustify: To re-run the effect if setCurrentJustify caused a change that needs reconciliation,
    //   though the direct state update causing a re-render usually handles this.
    // For simplicity and matching original patterns, if experienceData is defined statically above,
    // an empty array `[]` could be used, relying on listeners. However, to be robust against
    // changes in card count if experienceData were a prop:
  }, [experienceData.length, currentJustify]); // Added currentJustify to dependencies to ensure effect re-runs if it changes.


  return (
    <section id="experience" className="py-20 px-6 bg-transparent text-white relative min-h-screen overflow-hidden">
      <motion.h2
        className="text-3xl font-extrabold mb-16 text-center"
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Work Experience
      </motion.h2>

      <div className="relative w-full px-4">
        {showLeftButton && (
          <button
            onClick={() => {
              scrollableCardsRef.current.scrollBy({ left: -CARD_WIDTH - CARD_GAP, behavior: 'smooth' });
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 transition-all duration-300
              bg-white/10 backdrop-blur-lg border border-cyan-400/30 shadow-lg
              hover:scale-110 hover:border-cyan-500/60
              text-cyan-300 hover:text-white p-3 rounded-full animate-float"
          >
            <span className="text-2xl font-bold">←</span>
          </button>
        )}

        <div
          ref={scrollableCardsRef}
          // Dynamically set justify-content class
          className={`flex overflow-x-auto snap-x snap-mandatory custom-scroll pb-4 hide-scrollbar ${currentJustify}`}
          style={{ gap: `${CARD_GAP}px` }}
        >
          {experienceData.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative rounded-xl p-[3px] bg-gradient-to-br from-cyan-300 via-pink-500 to-red-600 flex-shrink-0 snap-start shadow-xl"
              style={{ width: `${CARD_WIDTH}px` }}
            >
              <div className="bg-gray-800 rounded-[10px] h-full w-full p-6 relative">
                <div
                  className="absolute"
                  style={{
                    top: "5px",
                    right: "-8%",
                    width: "80px",
                    height: "40px",
                    backgroundColor: "white",
                    border: "2px solid rgba(6, 182, 212, 0.7)",
                    borderRadius: "0.375rem",
                    boxShadow: "0 4px 10px rgba(6, 182, 212, 0.3)",
                    padding: "2px",
                    zIndex: 20
                  }}
                >
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-contain"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x40/ffffff/CCCCCC?text=Error&font=Inter"; }}
                  />
                </div>
                <div className="relative z-0">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-1 pr-[40px] whitespace-normal break-words">
                    {exp.title} – {exp.company}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3 pr-[40px]">
                    {exp.duration} | {exp.location}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    {exp.points.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {showRightButton && (
          <button
            onClick={() => {
              scrollableCardsRef.current.scrollBy({ left: CARD_WIDTH + CARD_GAP, behavior: 'smooth' });
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 transition-all duration-300
              bg-white/10 backdrop-blur-lg border border-purple-400/30 shadow-lg
              hover:scale-110 hover:border-purple-500/60
              text-purple-300 hover:text-white p-3 rounded-full animate-float"
          >
            <span className="text-2xl font-bold">→</span>
          </button>
        )}
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}