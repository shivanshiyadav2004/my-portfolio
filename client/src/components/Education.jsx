import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "B.Tech - Computer Science & Engineering",
    institute: "R.R. Institute of Modern Technology",
    year: "2023 - Present",
    score: "81.17%",
    status: "Final Year Student",
  },
  {
    degree: "Intermediate (Class XII)",
    institute: "S.R. Global School",
    year: "2022",
    score: "84.4%",
  },
  {
    degree: "High School (Class X)",
    institute: "R.P.B.M Public School",
    year: "2020",
    score: "90.4%",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          Education
        </motion.h2>

        <p className="text-center text-gray-400 mt-5 max-w-3xl mx-auto">
          My educational background has provided a strong foundation in
          computer science, software engineering, problem solving,
          and modern development technologies.
        </p>

        {/* Timeline */}
        <div className="relative mt-20">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 w-1 h-full bg-pink-500 rounded"></div>

          <div className="space-y-12">

            {education.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="relative flex items-start gap-6"
              >

                {/* Timeline Icon */}
                <div className="bg-pink-500 p-4 rounded-full z-10 shadow-lg">
                  <FaGraduationCap className="text-white text-xl" />
                </div>

                {/* Card */}
                <div className="bg-slate-800 rounded-2xl p-6 w-full shadow-lg hover:shadow-pink-500/20 hover:-translate-y-2 transition-all duration-300">

                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">

                    <h3 className="text-2xl font-bold text-pink-400">
                      {item.degree}
                    </h3>

                    <span className="text-pink-300 font-semibold mt-2 md:mt-0">
                      {item.year}
                    </span>

                  </div>

                  <p className="text-gray-300 mt-4 text-lg">
                    {item.institute}
                  </p>

                  {item.status && (
                    <p className="text-green-400 mt-2 font-medium">
                      {item.status}
                    </p>
                  )}

                  <p className="mt-4 inline-block bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full font-medium">
                    Score: {item.score}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;