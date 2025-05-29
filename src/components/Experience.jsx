import React, { useState, useLayoutEffect, useRef } from 'react';
import { motion } from "framer-motion";

const experienceData = [
  {
    title: "Graduate Engineer Trainee",
    company: "Bureau Veritas",
    logo: "/exp/bv.webp",
    duration: "Jan 2023 – Jun 2023",
    location: "Delhi",
    points: [
      "Assisted in AWS EC2 and S3 setup for secure cloud infrastructure.",
      "Managed SQL Server operations and configured Terraform for infrastructure as code.",
      "Contributed to QA documentation and project handover deliverables."
    ]
  },
  {
    title: "Data Analyst",
    company: "Alteryx",
    logo: "/exp/al.png",
    duration: "Dec 2022 - March 2023",
    location: "",
    points: [
      "Engineered robust data pipelines using Alteryx Designer, improving model readiness and reducing processing time by 30%.",
      "Translated business requirements into actionable insights and dashboards for predictive analysis.",
      "Collaborated with data scientists and business teams to deliver scalable, automated workflows.",
      "Implemented automated reporting solutions enabling non-technical teams to access insights independently."
    ]
  }
];

const CARD_WIDTH = 300;
const CARD_GAP = 32;

export default function Experience() {
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const [currentJustify, setCurrentJustify] = useState('justify-center');
  const scrollableCardsRef = useRef(null);

  useLayoutEffect(() => {
    const container = scrollableCardsRef.current;
    if (!container) return;

    const updateLayoutAndButtons = () => {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const threshold = 5;

      const newJustify = scrollWidth > clientWidth + 1 ? 'justify-start' : 'justify-center';
      if (currentJustify !== newJustify) setCurrentJustify(newJustify);

      const canScroll = scrollWidth > clientWidth + threshold;
      setShowLeftButton(canScroll && scrollLeft > threshold);
      setShowRightButton(canScroll && scrollLeft < scrollWidth - clientWidth - threshold);
    };

    updateLayoutAndButtons();
    window.addEventListener('resize', updateLayoutAndButtons);
    container.addEventListener('scroll', updateLayoutAndButtons);

    return () => {
      window.removeEventListener('resize', updateLayoutAndButtons);
      container.removeEventListener('scroll', updateLayoutAndButtons);
    };
  }, [experienceData.length, currentJustify]);

  return (
    <section id="experience" className="pt-16 px-4 pb-0 bg-transparent text-white min-h-screen">
      <div className="relative w-full">
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
            ←
          </button>
        )}

        <div
          ref={scrollableCardsRef}
          className={`flex overflow-x-auto custom-scroll pb-4 hide-scrollbar ${currentJustify}`}
          style={{ gap: `${CARD_GAP}px` }}
        >
          {experienceData.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative rounded-xl p-[3px] bg-gradient-to-br from-cyan-300 via-pink-500 to-red-600 flex-shrink-0 shadow-xl"
              style={{ width: `${CARD_WIDTH}px` }}
            >
              <div className="bg-gray-800 rounded-[10px] h-full w-full p-6 relative">
                <div
                  className="absolute top-[5px] right-[-8%] w-[80px] h-[40px] bg-white border-2 rounded-md shadow-lg p-[2px] z-20"
                >
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-fill rounded-sm"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/80x40/ffffff/CCCCCC?text=Error&font=Inter";
                    }}
                  />
                </div>
                <div className="relative z-0">
                  <h2 className="text-2xl font-bold text-gray-100 mb-1 pr-[20px] whitespace-normal break-words">
                    {exp.company}
                  </h2>
                  <h7 className="text-xl font-semibold text-cyan-400 mb-2 pr-[5px] whitespace-normal break-words">
                    {exp.title}
                  </h7>
                  <p className="text-sm text-gray-200 mb-2 pr-[5px]">
                    {exp.duration} {exp.location ? `| ${exp.location}` : ""}
                  </p>
                  <ul className="list-disc pl-4 pr-2 text-white text-sm space-y-1 leading-relaxed">
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
            →
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
