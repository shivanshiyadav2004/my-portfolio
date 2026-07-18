import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { projects } from "../data/portfolioData";
import ProjectModal from "./common/ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section
        id="projects"
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
            Featured Projects
          </motion.h2>
          <p className="text-center text-pink-400 mt-4">
         3 Featured Projects • MERN Stack • Machine Learning • Java
      </p>

          <p className="text-center text-gray-400 mt-5 max-w-3xl mx-auto">
            Showcasing full-stack web applications and machine learning projects built using MERN Stack, Java,
             and AI/ML technologies. These projects demonstrate my skills in software development, problem solving,
              and real-world application design.
          </p>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  y: -15,
                  rotate:1,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-800 hover:border-pink-400 transition-all duration-300"
              >

                {/* Project Image */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover"
                  />
                )}

                {/* Card Content */}
                <div className="p-6">

                  <h3 className="text-2xl font-bold text-pink-400">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mt-4 leading-7">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4 mt-8">

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-800 hover:bg-pink-500 px-4 py-2 rounded-lg transition duration-300"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition duration-300"
                      >
                        <FaArrowUpRightFromSquare />
                        Live Demo
                      </a>
                    )}

                  </div>

                  {/* Explore Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full mt-6 bg-pink-500 hover:bg-pink-600 py-3 rounded-lg font-semibold transition duration-300 hover:scale-105"
                  >
                    ✨ Explore Project
                  </button>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default Projects;