import { motion } from "framer-motion";

const skills = ["Python", "SQL", "AWS", "Terraform", "Pandas", "Plotly", "Scikit-learn", "Git"];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black text-center">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1 }}
            className="bg-gray-800 px-6 py-3 rounded-full text-white border border-gray-600 shadow-md"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
