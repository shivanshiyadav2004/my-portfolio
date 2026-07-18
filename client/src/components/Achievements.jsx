import { motion } from "framer-motion";
import {
  FaAward,
  FaCode,
  FaLaptopCode,
  FaBrain,
  FaRocket,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaLaptopCode />,
    title: "MERN Stack Training Completed",
    description:
      "Successfully completed MERN Stack Development training and built multiple full-stack web applications.",
  },

  {
    icon: <FaBrain />,
    title: "AI/ML Internship Completed",
    description:
      "Developed and deployed a Machine Learning project focused on Fake Job Posting Detection.",
  },

  {
    icon: <FaCode />,
    title: "Built 3 Full-Stack Projects",
    description:
      "Designed, developed, and deployed projects using React, Node.js, Express.js, and MongoDB.",
  },

  {
    icon: <FaAward />,
    title: "Strong Foundation in Java & DSA",
    description:
      "Actively improving problem-solving skills through Data Structures & Algorithms using Java.",
  },

  {
    icon: <FaRocket />,
    title: "Project Deployment Experience",
    description:
      "Successfully deployed applications on Vercel, Render, and Streamlit platforms.",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          Achievements
        </motion.h2>

        <p className="text-center text-gray-400 mt-5 max-w-3xl mx-auto">
          Highlights of my learning journey, technical growth,
          and accomplishments in software development.
        </p>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl p-8 shadow-lg hover:border hover:border-pink-400 transition-all duration-300"
            >

              <div className="text-4xl text-pink-400 mb-5">
                {achievement.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {achievement.title}
              </h3>

              <p className="text-gray-300 leading-7">
                {achievement.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Achievements;