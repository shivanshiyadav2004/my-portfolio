const projects = [
  {
    title: "PlanWise",
    description:
      "A MERN Stack Study Planner that helps students organize their study schedule and manage tasks efficiently.",
    tech: "React • Node.js • Express.js • MongoDB • Tailwind CSS",
    github: "https://github.com/shivanshiyadav2004/planWise",
    live: "https://plan-wise-tau.vercel.app",
  },
  {
    title: "Job Portal Search",
    description:
      "A responsive job search application that allows users to browse job listings with a clean and user-friendly interface.",
    tech: "React • Tailwind CSS",
    github: "https://github.com/shivanshiyadav2004/Jobportalsearch",
    live: "https://jobportalsearch.vercel.app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow-lg p-6 hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-pink-500">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-700">
                {project.description}
              </p>

              <p className="mt-4 font-semibold text-blue-900">
                {project.tech}
              </p>

              <div className="flex gap-4 mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  className="bg-blue-900 text-white px-4 py-2 rounded-lg"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;