
import dsa from "../assets/images/dsa.png";
import aimlCertificate from "../assets/images/aiml-certificate.png";
// import mernCertificate from "../assets/images/mern-certificate.png";

// Import project screenshots when available
import civicwatch from "../assets/images/civicwatch-dashboard.png";
import fakejob from "../assets/images/fakejob.png";
import projectflow from "../assets/images/teacherdashboard.png";

export const personalInfo = {
  name: "Shivanshi Yadav",

  role: "Full Stack Developer | Java Programmer",

  intro:
    "Final-year Computer Science Engineering student with hands-on experience in MERN Stack Development, Machine Learning, and Data Structures & Algorithms. Built full-stack applications and AI-based solutions with a strong focus on software development, problem solving, and continuous learning.",

  email: "yadavshivanshi636@gmail.com",

  phone: "+91 7991615221",

  location: "Lucknow, Uttar Pradesh, India",

  github: "https://github.com/shivanshiyadav2004",

  linkedin:
    "https://www.linkedin.com/in/shivanshi-yadav-593188308",

  leetcode:
    "https://leetcode.com/u/Shivanshi_Yadav_159/",
};

export const skills = [
  {
    name: "HTML",
    category: "Frontend",
    icon: "html",
  },
  {
    name: "CSS",
    category: "Frontend",
    icon: "css",
  },
  {
    name: "JavaScript",
    category: "Programming",
    icon: "javascript",
  },
  {
    name: "React",
    category: "Frontend",
    icon: "react",
  },
  {
    name: "Tailwind CSS",
    category: "CSS Framework",
    icon: "tailwind",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: "node",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: "express",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: "mongodb",
  },
  {
    name: "Java",
    category: "Programming",
    icon: "java",
  },
  {
    name: "Python",
    category: "Programming",
    icon: "python",
  },
  {
    name: "Git",
    category: "Version Control",
    icon: "git",
  },
  {
    name: "GitHub",
    category: "Repository",
    icon: "github",
  },
  {
    name: "Data Structures & Algorithms",
    category: "Problem Solving",
    icon: "java",
  },
  {
    name: "DBMS",
    category: "Computer Science Fundamentals",
    icon: "mongodb",
  },
  {
    name: "OOP",
    category: "Programming Concepts",
    icon: "java",
  },
];

export const projects = [
  {
    title: "CivicWatch AI",

    image: civicwatch,

    description:
      "A MERN-based civic complaint management platform that enables users to report, track, and monitor civic issues through an interactive dashboard.",

    fullDescription:
      "CivicWatch AI is a full-stack MERN application designed to streamline civic issue reporting and monitoring. The platform provides secure authentication, complaint management, dashboard analytics, and interactive map integration to improve issue tracking and transparency.",

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],

    features: [
      "User Authentication",
      "Complaint Reporting",
      "Complaint Tracking",
      "Interactive Dashboard",
      "Map Integration",
      "Responsive User Interface",
    ],

    challenges: [
      "Implementing authentication and authorization",
      "Managing frontend-backend integration",
      "Designing scalable MongoDB collections",
      "Handling complaint status workflows",
    ],

    learnings: [
      "JWT Authentication",
      "REST API Development",
      "MongoDB Data Modeling",
      "Full Stack Application Deployment",
    ],

    github:
      "https://github.com/shivanshiyadav2004/CivicWatch-AI",

    live:
      "https://civic-watch-ai-seven.vercel.app/",
  },

  {
    title: "Fake Job Posting Detection",

     image: fakejob,

    description:
      "A machine learning application that identifies fraudulent job postings and helps users detect potential job scams.",

    fullDescription:
      "This project uses machine learning techniques to analyze job posting data and classify listings as genuine or fraudulent. The application is deployed using Streamlit and provides real-time predictions through an intuitive interface.",

    tech: [
      "Python",
      "Machine Learning",
      "Pandas",
      "Scikit-Learn",
      "Streamlit",
    ],

    features: [
      "Real-Time Prediction",
      "Fraud Detection",
      "Data Preprocessing",
      "User-Friendly Interface",
      "Machine Learning Classification",
    ],

    challenges: [
      "Data Cleaning",
      "Feature Engineering",
      "Model Selection",
      "Prediction Accuracy Optimization",
    ],

    learnings: [
      "Machine Learning Workflow",
      "Data Analysis",
      "Model Evaluation",
      "Deployment using Streamlit",
    ],

    github:
      "https://github.com/shivanshiyadav2004/Fake-Job-Posting-Detection",

    live:
      "https://fake-job-posting-detection-dasj6rqclcrdqdcyntottw.streamlit.app/",
  },

  {
    title: "ProjectFlow",

    image: projectflow,

    description:
      "A MERN-based student project management system for task tracking, team collaboration, and project monitoring.",

    fullDescription:
      "ProjectFlow helps students manage academic projects through task assignment, progress tracking, and collaboration features. The application demonstrates full-stack development concepts and CRUD functionality.",

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],

    features: [
      "Task Management",
      "Project Tracking",
      "Team Collaboration",
      "CRUD Operations",
      "Responsive Design",
    ],

    challenges: [
      "Managing project workflows",
      "Frontend-backend synchronization",
      "Database schema design",
    ],

    learnings: [
      "Full Stack Development",
      "Database Management",
      "React State Management",
      "REST API Integration",
    ],

    github:
      "https://github.com/shivanshiyadav2004/ProjectFlow",

    live:
      "https://project-flow-cyan-psi.vercel.app/",
  },
];

export const certificates = [
//   {
//   title: "MERN Stack Development Training",
//   organization: "Training Provider",
//   year: "2026",
//   image: mernCertificate,
//   certificate: "/mern-training-certificate.pdf",
// },
  {
  title: "AI/ML Internship",
  organization: "3Skills",
  year: "2026",
  image: aimlCertificate,
  certificate: "/aiml-internship-certificate.pdf",

  },
  {
    title: "Data Structures & Algorithms",
    organization: "TrainX",
    year: "2025",
    image: dsa,
    certificate: "/dsa-certificate.pdf",
  },
];

export const education = [
  {
    degree: "B.Tech - Computer Science & Engineering",
    institute: "R.R. Institute of Modern Technology",
    year: "2023 - Present",
  },

  {
    degree: "Intermediate (Class XII)",
    institute: "S.R. Global School",
    year: "2022",
  },

  {
    degree: "High School (Class X)",
    institute: "R.P.B.M Public School",
    year: "2020",
  },
];