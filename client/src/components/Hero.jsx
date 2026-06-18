const Hero = () => {
  return (
    <section className="bg-blue-950 text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <h2 className="text-5xl font-bold">
            Hi, I'm
          </h2>

          <h1 className="text-6xl font-bold text-pink-400 mt-3">
            Shivanshi Yadav
          </h1>

          <h3 className="text-2xl mt-4 text-gray-300">
            MERN Stack Developer
          </h3>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Motivated Computer Science student passionate about
            Web Development, Java, React, Node.js and MongoDB.
            I love building responsive websites and solving
            real-world problems.
          </p>

          <button className="mt-8 bg-pink-500 px-6 py-3 rounded-lg hover:bg-pink-600">
            Contact Me
          </button>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-80 rounded-full border-4 border-pink-400"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;