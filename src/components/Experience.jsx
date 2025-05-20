import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <h2 className="text-4xl font-bold mb-10 text-center">Work Experience</h2>
      <motion.div
        className="bg-gray-800 p-6 rounded-xl shadow-md max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold">Graduate Engineer Trainee – Bureau Veritas</h3>
        <p className="text-gray-400">Jan 2023 – Jun 2023 | Delhi</p>
        <ul className="list-disc list-inside mt-2 text-gray-300">
          <li>Assisted in AWS EC2, S3 setup</li>
          <li>SQL Server management & Terraform setup</li>
          <li>Documentation and QA support</li>
        </ul>
      </motion.div>
    </section>
  );
}
