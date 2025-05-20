import { motion } from "framer-motion";

const projects = Array(3).fill({
  title: "Project Title",
  desc: "Brief description of your awesome work.",
  link: "https://github.com/",
});

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 p-6 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.desc}</p>
            <a href={project.link} target="_blank" className="text-indigo-400 underline">
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
