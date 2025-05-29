import React from "react";
import { motion } from "framer-motion";
import { title } from "framer-motion/client";

const projectData = [
  {
    title: "TWEETSTORM TO WALL STREET",
    image: "/projects/ts.jpg",
    subtitle: "REAL-TIME STOCK FORECASTING WITH SENTIMENT AND AWS INTEGRATION",
    description: "Built a real-time, sentiment-enhanced stock prediction pipeline using FinBERT, SARIMAX, and AWS (EC2, S3, SageMaker, DynamoDB), delivering live 15–60 min forecasts via interactive dashboards with accuracy of greater than 98% for magnificent Seven Stocks. ",
    tags: ["#NLP", "#AWS", "#FinancialML", "#SentimentAnalysis","#TimeSeries"],
    color: "text-orange-500",
    gitRepo: "https://github.com/gagandeep-thind/Real-Time-Financial-Stock-Analysis-And-Prediction" // Replace with actual repo URL
  },
  {
    title: "SKY HIGH SATISFACTION",
    image: "/projects/aps.png",
    subtitle: "UNCOVERING KEY DRIVERS OF AIRLINE CUSTOMER SATISFACTION USING ML AND STATISTICAL ANALYSIS",
    description: "Analyzed 120K+ passenger survey records to identify key drivers of airline satisfaction using statistical testing and ML models (KNN, Decision Trees, Random Forest), achieving actionable insights for service improvement.",
    tags: ["#KNN", "#RandomForest", "#DecisionTree", "#CustomerSatisfaction","#BusinessImpact"],
    color: "text-purple-400",
    gitRepo: "https://github.com/gagandeep-thind/Sky-High-Satisfaction" // Replace with actual repo URL
  },
  {
    title: "WASHINGTON EV ADOPTION ANALYSIS",
    image: "/projects/wm.avif",
    subtitle: "GEOSPATIAL & STATISTICAL ANALYSIS",
    description: "Performed geospatial and statistical analysis of 80K+ EV registrations in Washington to uncover adoption trends, pricing disparities, and CAFV eligibility patterns using Python, Pyplot and Tableau interactive dashboards.",
    tags: ["#Python", "#Pyplot", "#Tableau"],
    color: "text-gray-200",
    gitRepo: "https://github.com/gagandeep-thind/Driving-The-Future" // Replace with actual repo URL
  },
  {
    title: "CANADIAN FOOD AFFORDABILITY ANALYSIS",
    image: "/projects/fa.png",
    subtitle: "NATIONWIDE ANALYSIS OF FOOD AFFORDABILITY & INSECURITY IN CANADA",
    description: "Conducted a nationwide data analysis on Canadian food affordability (2017–2024), integrating regression modeling, Tableau visualizations, and Statistics Canada datasets to reveal socio-economic disparities and food insecurity trends.",
    tags: ["#DataAnalysis", "#RegressionModeling", "#FoodInsecurity", "#Tableau", "#Python", "#SocioEconomicAnalysis"],
    color: "text-orange-500",
    gitRepo: "https://github.com/gagandeep-thind/canadian-food-affordability-analysis" // Replace with actual repo URL
  },
  {
    title: "PREDICTING BANK LOAN INTEREST RATES",
    image: "/projects/pl.webp",
    subtitle: "INTEREST RATE PREDICTION USING REGRESSION FOR BANK LOANS",
    description: "This project explores how borrower characteristics influence interest rates on bank loans using multiple linear regression modeling. The aim is to help financial institutions improve their loan approval processes and risk assessments by identifying the most predictive features for interest rate determination.",
    tags: ["#LinearRegression", "#RiskModeling", "#RProgramming", "#FinancialAnalytics", "#PredictiveModeling"],
    color: "text-red-300",
    gitRepo: "https://github.com/gagandeep-thind/predicting-loan-bank-interest-rate" // Replace with actual repo URL
  },
  {
    title: "RUNTIME & RATINGES",
    image: "/projects/hm.jpg",
    subtitle: "ARE LONGER HORROR MOVIES BETTER?",
    description: "This project investigates whether longer horror movies are rated better than shorter ones. As busy students with limited time, understanding if longer movies provide a better viewing experience can help in deciding whether to allocate extra time for them.",
    tags: ["#R","#mosaic", "ggplot2", "#bootstrap"],
    color: "text-blue-400",
    gitrepo: "https://github.com/gagandeep-thind/runtime-and-ratings"
  },
  {
    title: "QUERY QUEST",
    image: "/projects/bg.jpg",
    subtitle: "A RESEARCH INTO BIG DATA FOCUSING ON GOOGLE BIGQUERY AND FEDRATED QUERIES",
    description: "This interactive, cloud-driven data analytics project explores the features and capabilities of Google BigQuery for real-time querying, external data integration, and modern visualization. Through hands-on exercises using Datastream, Gemini AI, and Tableau/Looker Studio, I showcase how to set up cloud analytics pipelines from ingestion to visualization.",
    tags: ["#BigQuery", "#SQL", "#Fedratedqueries", "#DataIntegration", "#LookerStudio"],
    color: "text-green-400",
    gitRepo: "https://github.com/gagandeep-thind/google-query-quest-bigQuery" //
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full bg-transparent px-6 py-20 text-white flex flex-col items-center justify-start relative"
    >
      <motion.div
        className="w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
          {projectData.map((proj, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-gradient-to-br from-cyan-300 via-pink-500 to-red-600 p-[3px] rounded-xl shadow-xl flex flex-col"
            >
              {/* Added <a> tag here to make the whole card clickable */}
              <a 
                href={proj.gitRepo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full w-full" // Ensure the link takes up the whole card area
              >
                <div className="bg-gray-900 rounded-[10px] p-4 h-full w-full flex flex-col">
                  <h3 className={`text-md font-bold mb-3 uppercase leading-tight ${proj.color}`}>
                    {proj.title}
                  </h3>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-32 object-cover rounded-md mb-3"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/400x200/000000/FFFFFF?text=Image+Missing`;
                    }}
                  />
                  <h4 className="text-sm font-bold text-gray-300 mb-2 pr-[40px] whitespace-normal break-words">
                    {proj.subtitle}
                  </h4>
                  <p className="text-sm text-gray-400 mb-3 pr-[40px] whitespace-normal">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {proj.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-black/80 text-yellow-400 text-xs font-bold px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}