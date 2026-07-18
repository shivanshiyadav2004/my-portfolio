import { personalInfo } from "../data/portfolioData";

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          About Me
        </h2>

        <p className="text-center text-gray-400 mt-5 max-w-3xl mx-auto">
          A quick introduction about my background, technical interests,
          career aspirations, and the skills I am developing as a software
          engineering student.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {/* About Me */}
          <div className="bg-slate-800 rounded-2xl p-8 hover:scale-105 transition duration-300 shadow-lg">
            <h3 className="text-2xl font-bold text-pink-400">
              👩 About Me
            </h3>

            <p className="mt-5 text-gray-300 leading-8">
              {personalInfo.intro}
            </p>
          </div>

          {/* Career Goal */}
          <div className="bg-slate-800 rounded-2xl p-8 hover:scale-105 transition duration-300 shadow-lg">
            <h3 className="text-2xl font-bold text-pink-400">
              🎯 Career Goal
            </h3>

            <p className="mt-5 text-gray-300 leading-8">
              My goal is to build a successful career in software
              development by strengthening my expertise in Full Stack
              Development, Data Structures & Algorithms, and modern web
              technologies. I aspire to contribute to impactful software
              solutions while continuously learning and growing as an
              engineer.
            </p>
          </div>

          {/* Interests */}
          <div className="bg-slate-800 rounded-2xl p-8 hover:scale-105 transition duration-300 shadow-lg">
            <h3 className="text-2xl font-bold text-pink-400">
              ❤️ Interests
            </h3>

            <ul className="mt-5 space-y-3 text-gray-300">
              <li>✔ Full Stack Web Development</li>
              <li>✔ Machine Learning & AI Applications</li>
              <li>✔ Data Structures & Algorithms</li>
              <li>✔ Java Programming</li>
              <li>✔ Problem Solving & Competitive Coding</li>
            </ul>
          </div>

          {/* Personal Info */}
          <div className="bg-slate-800 rounded-2xl p-8 hover:scale-105 transition duration-300 shadow-lg">
            <h3 className="text-2xl font-bold text-pink-400">
              📍 Personal Info
            </h3>

            <div className="mt-5 space-y-4 text-gray-300">
              <p>📍 Lucknow, Uttar Pradesh, India</p>

              <p>📧 yadavshivanshi636@gmail.com</p>

              <p>🎓 B.Tech in Computer Science Engineering</p>

              <p>💻 Aspiring Software Engineer</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;