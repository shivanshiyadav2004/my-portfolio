const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          About Me
        </h2>

        <p className="mt-10 text-lg text-gray-700 leading-9 text-center">
          Hello! I'm <span className="font-bold text-pink-500">Shivanshi Yadav</span>,
          a Computer Science student from Lucknow. I enjoy building modern,
          responsive, and user-friendly web applications using the MERN Stack.

          <br /><br />

          I have hands-on experience with React, Node.js, Express.js,
          MongoDB, JavaScript, Java, HTML, CSS, and Tailwind CSS.

          <br /><br />

          I'm continuously improving my problem-solving skills through
          LeetCode and enjoy creating projects that solve real-world problems.
        </p>

      </div>
    </section>
  );
};

export default About;