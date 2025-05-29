import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Programming Languages",
    items: ["Python", "R", "SQL", "PySpark", "C++"],
    icon: "/skills/pro_lang.svg",
  },
  {
    title: "Data Visualization",
    items: ["PowerBI", "Tableau", "Streamlit", "Matplotlib, Plotly & Seaborn"],
    icon: "/skills/pbi.svg",
  },
  {
    title: "Cloud Services (AWS/Azure)",
    items: ["EC2", "Lambda", "Postgres", "DynamoDB", "Google BigQuery"],
    icon: "/skills/cloud.png",
  },
  {
    title: "Data Science & AI",
    items: ["Machine Learning", "Data Analysis", "Financial Modelling", "Artificial Intelligence"],
    icon: "/skills/ds.png",
  },
  {
    title: "Platforms & Tools",
    items: ["Databricks", "MS Office", "MS Teams", "GitHub"],
    icon: "/skills/dp.png",
  },
  {
    title: "Databases & Storage",
    items: ["PostgreSQL", "MySQL", "DynamoDB", "S3"],
    icon: "/skills/db.png",
  },
  {
    title: "Dev & Workflow",
    items: ["Git", "VS Code", "RStudio", "Jupyter Notebook"],
    icon: "/skills/colab.svg",
  },
  {
    title: "Soft Skills",
    items: ["Stakeholder Management", "Data Storytelling", "Problem Solving", "Project Management"],
    icon: "/skills/ss.png",
  }
];

// Framer Motion Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.95 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-transparent text-white px-5 pt-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="relative p-[3px] rounded-xl bg-gradient-to-br from-red-600 via-pink-500 to-cyan-300 shadow-xl w-full max-w-sm"
          >
            <div className="bg-gray-800 rounded-[10px] w-full h-full p-6 relative">
              {/* Floating Logo Box - matching Experience section */}
              <div
                className="absolute"
                style={{
                  top: "-20px",
                  left: "-8%",
                  width: "50px",
                  height: "50px", // ✅ Make it square
                  backgroundColor: "white",
                  borderRadius: "0.375rem",
                  padding: "2px",
                  zIndex: 20
                }}
              >
                <img
                  src={skill.icon}
                  alt={`${skill.title} icon`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/80x80?text=Icon";
                  }}
                />
              </div>


              {/* Title & List with text wrapping adjustment */}
              <h3 className="text-lg font-bold mb-4 text-cyan-300 pr-[40px] whitespace-normal break-words">
                {skill.title}
              </h3>
              <ul className="list-disc list-inside text-sm space-y-1 text-gray-200 pr-[40px]">
                {skill.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
