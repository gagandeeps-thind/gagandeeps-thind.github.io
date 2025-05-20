import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Gagandeep Singh Thind
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-400 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Data Scientist | Financial ML | AWS | Python
      </motion.p>
      <div className="flex gap-6 mt-6">
        <a href="https://github.com/gagan11678" target="_blank">
          <img src="/github.svg" alt="GitHub" className="h-8 hover:scale-110 transition" />
        </a>
        <a href="https://www.linkedin.com/in/gagan11678" target="_blank">
          <img src="/linkedin.svg" alt="LinkedIn" className="h-8 hover:scale-110 transition" />
        </a>
        <a href="mailto:your-email@gmail.com">
          <img src="/gmail.svg" alt="Email" className="h-8 hover:scale-110 transition" />
        </a>
        <a href="/resume.pdf" target="_blank">
          <img src="/cv.svg" alt="Resume" className="h-8 hover:scale-110 transition" />
        </a>
      </div>
    </section>
  );
}
