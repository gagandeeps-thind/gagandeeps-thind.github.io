
import { motion } from "framer-motion";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center"
      >
        Gagandeep Singh Thind
      </motion.h1>
      <p className="text-center text-gray-400 mt-2">
        Data Scientist | AWS | Financial ML
      </p>
      <div className="mt-12 space-y-4">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">Project 1</h2>
          <p>Stock prediction system using Python, XGBoost, and AWS Lambda.</p>
        </motion.div>
      </div>
    </div>
  );
}
