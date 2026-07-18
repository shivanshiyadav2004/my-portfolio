import {
  FaGithub,
  FaLinkedin,
  FaCode,
} from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* About */}
          <div>

            <h2 className="text-2xl font-bold text-pink-400">
              Shivanshi Yadav
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Final-year Computer Science Engineering student specializing
              in MERN Stack Development, Machine Learning, and Data
              Structures & Algorithms. Passionate about building impactful
              software solutions and continuously improving technical skills.
            </p>

            <p className="text-pink-400 mt-4 font-medium">
              Open to Software Development, Full Stack Development,
              and Internship Opportunities.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold text-pink-400 mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                <a href="#home" className="hover:text-pink-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-pink-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-pink-400 transition">
                  Skills
                </a>
              </li>

              <li>
                <a href="#achievements" className="hover:text-pink-400 transition">
                  Achievements
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-pink-400 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-pink-400 transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Connect + Highlights */}
          <div>

            <h3 className="text-xl font-semibold text-pink-400 mb-4">
              Connect With Me
            </h3>

            <div className="flex gap-5">

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-pink-500 transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-pink-500 transition"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-pink-500 transition"
              >
                <FaCode size={22} />
              </a>

            </div>

            <p className="text-gray-400 mt-6 break-all">
              {personalInfo.email}
            </p>

            <a
              href="/Shivanshi_Resume.pdf"
              download
              className="inline-block mt-4 bg-pink-500 hover:bg-pink-600 px-5 py-2 rounded-lg font-medium transition"
            >
              Download Resume
            </a>

            <div className="mt-6 space-y-2 text-gray-400">

              <p>✓ 3 Major Projects Built</p>

              <p>✓ MERN Stack Developer</p>

              <p>✓ AI/ML Internship</p>

              <p>✓ Java & DSA Enthusiast</p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-gray-500">

          <p>
            © {year} Shivanshi Yadav | All Rights Reserved
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;