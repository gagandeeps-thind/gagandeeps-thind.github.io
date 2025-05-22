import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 gap-12 relative overflow-hidden"
    >
      {/* 🖼 Profile Image */}
      <motion.img
        src="/profile.jpg" // 🔁 Replace with your image in /public/
        alt="Gagandeep Thind"
        className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover shadow-xl border-4 border-white"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* 🧠 Text Content */}
      <div className="max-w-xl">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-3"
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Gagandeep Singh Thind
        </motion.h1>

        {/* 🧩 Tagline */}
        <motion.p
          className="text-lg md:text-xl text-cyan-400 font-medium mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          “Building data-driven systems with soul.”
        </motion.p>

        {/* 🎯 Description */}
        <motion.p
          className="text-md md:text-lg text-gray-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Data Scientist | Financial ML | AWS | Python | React | Cloud Engineering
        </motion.p>

        {/* 🌐 Social Links */}
        <motion.div
          className="flex justify-center md:justify-start gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="https://github.com/gagandeep-thind"
            target="_blank"
            variants={iconVariants}
          >
            <img
              src="/github.svg"
              alt="GitHub"
              className="h-10 hover:scale-125 transition-transform duration-300"
            />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/gagan11678"
            target="_blank"
            variants={iconVariants}
          >
            <img
              src="/linkedin.svg"
              alt="LinkedIn"
              className="h-10 hover:scale-125 transition-transform duration-300"
            />
          </motion.a>
          <motion.a
            href="mailto:gagandeepsingh11678@gmail.com"
            variants={iconVariants}
          >
            <img
              src="/gmail.svg"
              alt="Email"
              className="h-10 hover:scale-125 transition-transform duration-300"
            />
          </motion.a>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            variants={iconVariants}
          >
            <img
              src="/cv.svg"
              alt="Resume"
              className="h-10 hover:scale-125 transition-transform duration-300"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
