import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const Skills = () => {

  const getIcon = (icon) => {
    switch (icon) {
      case "html":
        return <FaHtml5 className="text-orange-500" />;

      case "css":
        return <FaCss3Alt className="text-blue-500" />;

      case "javascript":
        return <FaJs className="text-yellow-400" />;

      case "react":
        return <FaReact className="text-cyan-400" />;

      case "tailwind":
        return <SiTailwindcss className="text-sky-400" />;

      case "node":
        return <FaNodeJs className="text-green-500" />;

      case "express":
        return <SiExpress className="text-white" />;

      case "mongodb":
        return <SiMongodb className="text-green-400" />;

      case "java":
        return <FaJava className="text-red-500" />;

      case "python":
        return <FaPython className="text-yellow-500" />;

      case "git":
        return <FaGitAlt className="text-orange-500" />;

      case "github":
        return <FaGithub className="text-white" />;

      default:
        return null;
    }
  };

  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-24"
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
          Technical Skills
        </motion.h2>

        <p className="text-center text-gray-400 mt-5 max-w-3xl mx-auto">
          A collection of programming languages, frameworks, databases,
          and development tools that I use to build full-stack applications,
          solve problems, and create efficient software solutions.
        </p>

        {/* Skill Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                scale: 1.06,
                y: -8,
              }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl p-6 text-center shadow-lg hover:border hover:border-pink-400 transition-all duration-300"
            >

              <div className="text-6xl flex justify-center mb-5">
                {getIcon(skill.icon)}
              </div>

              <h3 className="text-xl font-bold">
                {skill.name}
              </h3>

              <p className="text-gray-400 mt-2">
                {skill.category}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;