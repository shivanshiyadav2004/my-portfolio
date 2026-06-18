const Skills = () => {
  const skills = [
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub"
  ];

  return (
    <section id="skills" className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:bg-blue-900 hover:text-white transition duration-300"
            >
              <h3 className="text-xl font-semibold">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;