import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-t from-gray-900 to-black text-center">
      <h2 className="text-4xl font-bold mb-10">Education</h2>
      <motion.div
        className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-xl shadow-xl"
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold">University of Calgary</h3>
        <p className="text-gray-400">Master of Data Science and Analytics (MDSA)</p>
        <p className="text-gray-400">Graduating: Aug 2025</p>
      </motion.div>
    </section>
  );
}
