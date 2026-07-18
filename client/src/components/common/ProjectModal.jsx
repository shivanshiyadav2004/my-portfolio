import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

    window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
     };
   }, [onClose]);

// prevent bacckground frin scrolling
  useEffect(() => {
    if (project) {
       document.body.style.overflow = "hidden";
    } else {
    document.body.style.overflow = "auto";
    }

     return () => {
    document.body.style.overflow = "auto";
     };
    }, [project]);


  return (
    <AnimatePresence>
      {project && (

        <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center p-4 z-50"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900 text-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-700"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-slate-700">
              <h2 className="text-3xl font-bold text-pink-400">
                {project.title}
              </h2>

              <button
                onClick={onClose}
                className="text-2xl hover:text-red-400"
              >
                <FaTimes />
              </button>
            </div>

            {/* Image */}
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover"
              />
            )}

            <div className="p-6">

              {/* Description */}
              <h3 className="text-xl font-semibold text-pink-400 mb-2">
                Description
              </h3>

              <p className="text-gray-300 leading-7">
                {project.fullDescription}
              </p>

              {/* Features */}
              <h3 className="text-xl font-semibold text-pink-400 mt-8 mb-3">
                ✨ Features
              </h3>

              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {project.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              {/* Technologies */}
              <h3 className="text-xl font-semibold text-pink-400 mt-8 mb-3">
                🛠 Technologies
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Challenges */}
              <h3 className="text-xl font-semibold text-pink-400 mt-8 mb-3">
                🚧 Challenges
              </h3>

              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {project.challenges?.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>

              {/* Learnings */}
              <h3 className="text-xl font-semibold text-pink-400 mt-8 mb-3">
                📚 What I Learned
              </h3>

              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {project.learnings?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex gap-4 mt-10 flex-wrap">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-pink-500 px-5 py-3 rounded-lg transition"
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
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg transition"
                  >
                    <FaArrowUpRightFromSquare />
                    Live Demo
                  </a>
                )}

              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;