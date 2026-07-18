import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { certificates } from "../data/portfolioData";

const Certificate = () => {
  return (
    <section
      id="certificates"
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
          Certifications
        </motion.h2>

        <p className="text-center text-gray-400 mt-5 max-w-3xl mx-auto">
          Professional certifications and training programs that have
          strengthened my technical knowledge in software development,
          machine learning, and modern web technologies.
        </p>

        {/* Certificate Cards */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {certificates.map((certificate, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{
                scale: 1.03,
                y: -8,
              }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-800 hover:border-pink-400 transition-all duration-300"
            >

              {/* Certificate Image */}
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-pink-400">
                  {certificate.title}
                </h3>

                <p className="mt-3 text-gray-300">
                  <span className="font-semibold">
                    Organization:
                  </span>{" "}
                  {certificate.organization}
                </p>

                <p className="mt-2 text-gray-300">
                  <span className="font-semibold">
                    Year:
                  </span>{" "}
                  {certificate.year}
                </p>

                <a
                  href={certificate.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 bg-pink-500 hover:bg-pink-600 px-5 py-3 rounded-lg font-medium transition duration-300 hover:shadow-lg"
                >
                  <FaExternalLinkAlt />
                  View Certificate
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Certificate;