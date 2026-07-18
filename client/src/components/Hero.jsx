import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";

import profile from "../assets/images/profile.png";
import { personalInfo } from "../data/portfolioData";

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="relative overflow-hidden min-h-screen pt-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500 opacity-20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-pink-400 text-xl font-semibold">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-4 leading-tight">
            {personalInfo.name}
          </h1>

          <TypeAnimation
            sequence={[
  "Full Stack Developer",
  2000,
  "Java Programmer",
  2000,
  "MERN Stack Developer",
  2000,
  "Software Engineering Aspirant",
  2000,
  "Problem Solver",
  2000,
]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-3xl text-blue-200 mt-5 font-semibold"
          />

          <p className="mt-8 text-lg text-gray-300 leading-8 max-w-xl">
            {personalInfo.intro}
          </p>
          <div className="flex gap-6 mt-6 text-sm md:text-base">
         <span>🚀 3+ Projects</span>
         <span>💻 MERN Stack</span>
         <span>🧠 DSA & Java</span>
        </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="/Shivanshi_Resume.pdf"
              download
              className="bg-pink-500 hover:bg-pink-600 px-7 py-3 rounded-xl font-semibold shadow-lg hover:shadow-[0_0_25px_rgba(236,72,153,0.7)] hover:scale-105 transition-all duration-300"
            >
              📄 Download Resume
            </a>

            <a
              href="#contact"
              className="border-2 border-pink-400 hover:bg-pink-500 hover:text-white px-7 py-3 rounded-xl font-semibold hover:shadow-[0_0_25px_rgba(236,72,153,0.7)] hover:scale-105 transition-all duration-300"
            >
              📞 Contact Me
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-10 text-3xl">

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 hover:scale-125 hover:-translate-y-1 transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 hover:scale-125 hover:-translate-y-1 transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 hover:scale-125 hover:-translate-y-1 transition-all duration-300"
            >
              <SiLeetcode />
            </a>
            <a href="mailto:yourmail@gmail.com"
        className="hover:text-pink-400 hover:scale-125 hover:-translate-y-1 transition-all duration-300"
         >
       <FaEnvelope />
       </a>

          </div>
        </motion.div>
        

        {/* Right Section */}
        <motion.div
          className="flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">

            {/* Glow Behind Image */}
            <div className="absolute inset-0 rounded-full bg-pink-500 blur-3xl opacity-30 animate-pulse"></div>

            <img
              src={profile}
              alt="Shivanshi Yadav"
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-8 border-pink-400 shadow-[0_0_70px_rgba(236,72,153,0.8)] hover:scale-110 hover:rotate-2 transition-all duration-500"
            />

          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Hero;