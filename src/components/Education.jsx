import { motion } from "framer-motion";

const educationData = [
  {
    institution: "University of Calgary",
    degree: "Master of Data Science and Analytics (MDSA)",
    cgpa: "3.8 / 4",
    graduation: "Aug 2025",
    courses: [
      "Machine Learning & Predictive Modeling",
      "Time Series Forecasting & Analysis",
      "Big Data with Spark & AWS",
      "Advanced SQL & Database Systems",
      "Data Wrangling & Feature Engineering",
      "Statistics & Probability for Data Science",
      "Cloud Computing with AWS (EC2, Lambda, S3)",
      "Data Visualization with Plotly & Power BI",
    ],
  },
  {
    institution: "Rajiv Gandhi Technological University",
    degree: "Bachelor of Technology - Computer Science & Engineering",
    cgpa: "8.2 / 10",
    graduation: "Jun 2023",
    courses: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming in C++",
      "Database Management Systems",
      "Web Development (HTML, CSS, JavaScript)",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  // Add more entries here if needed
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-transparent text-center">

      <div className="max-w-5xl mx-auto space-y-10">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="p-8 rounded-2xl border border-white/10 backdrop-blur-md bg-white/5 shadow-[0_0_40px_rgba(0,255,255,0.08)]"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-bold text-cyan-300 mb-1">{edu.institution}</h3>

            <p className="text-gray-300 text-sm mb-2">
              {edu.degree} — <span className="italic">Graduating {edu.graduation}</span>
            </p>

            <p className="text-sm text-white font-semibold mb-4">
              CGPA: <span className="text-cyan-300">{edu.cgpa}</span>
            </p>

            <div className="mt-5 text-left text-gray-200">
              <h4 className="text-lg font-semibold mb-2">Relevant Coursework</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 list-disc list-inside text-sm leading-relaxed">
                {edu.courses.map((course, i) => (
                  <li key={i}>{course}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
