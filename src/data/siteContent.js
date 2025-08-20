// src/data/siteContent.js
// Edit this file only to update About, Experience, Skills, Projects, Education

export const about = {
  name: 'Gagandeep Singh Thind',
  avatar: '/profile_pic.jpg', // put image in /public/
  tagline: '“Building data-driven systems with soul.”',
  description: 'Data Scientist | Financial ML | AWS | Python | React | Cloud Engineering',
  links: {
    github: 'https://github.com/gagandeep-thind',
    linkedin: 'https://www.linkedin.com/in/gagandeep-sthind',
    email: 'gagandeepsingh11678@gmail.com',
    resume: 'public/Gagandeep Singh Thind\'s Resume.pdf'
  }
};

export const experience = [
  {
    title: "Graduate Engineer Trainee",
    company: "Bureau Veritas",
    logo: "/exp/bv.webp",
    duration: "Jan 2023 – Jun 2023",
    location: "Delhi",
    points: [
      "Assisted in AWS EC2 and S3 setup for secure cloud infrastructure.",
      "Managed SQL Server operations and configured Terraform for infrastructure as code.",
      "Contributed to QA documentation and project handover deliverables.",
    ],
  },
  {
    title: "Data Analyst",
    company: "Alteryx",
    logo: "/exp/al.png",
    duration: "Dec 2022 - March 2023",
    location: "",
    points: [
      "Engineered robust data pipelines using Alteryx Designer, improving model readiness and reducing processing time by 30%.",
      "Translated business requirements into actionable insights and dashboards for predictive analysis.",
      "Collaborated with data scientists and business teams to deliver scalable, automated workflows.",
      "Implemented automated reporting solutions enabling non-technical teams to access insights independently.",
    ],
  },
];

export const skills = [
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

export const projects = [
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

export const education = [
  {
  degree: 'Master in Data Science & Analytics',
  school: 'University of Calgary',
  year: 'Sep 2024 - Aug 2025',
  logo: '/uofc.png',
  photo: '/uofc_mates.jpeg',
  gpa: '3.86',
  details: [
    'Developing Big Data Applications',
    'Statistical & Machine Learning',
    'Stat Methods in Data Science',
    'Actionable Visualization & Analytics',
    'Working with Data at Scale',
    'Statistical Data Analysis',
  ],
},
{
  degree: 'B.Tech. in Computer Science and Technology',
  school: 'Gyan Ganga College of Technology',
  year: 'Jul 2019 - May 2023',
  logo: '/ggct.jpeg',
  photo: '/ggct-mates.jpg',
  gpa: '3.7',
  details: ['Machine Learning', 'Cloud Computing', 'Database Management Systems', 'Operating Systems', 'Analysis Design of Algortihm', 'Software Engineering'],
}
];