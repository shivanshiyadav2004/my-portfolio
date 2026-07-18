import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    message: "",
  });

  const [feedbacks, setFeedbacks] = useState([
    {
      name: "Project Mentor",
      rating: 5,
      message:
        "Shivanshi demonstrated excellent learning ability and consistently delivered quality work throughout project development.",
    },
    {
      name: "Training Instructor",
      rating: 5,
      message:
        "Strong understanding of MERN Stack concepts and a positive attitude towards problem solving.",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      name: formData.name,
      rating: formData.rating,
      message: formData.message,
    };

    setFeedbacks([newFeedback, ...feedbacks]);

    setFormData({
      name: "",
      rating: 5,
      message: "",
    });

    alert("✅ Thank you for your feedback!");
  };

  return (
    <section
      id="feedback"
      className="bg-slate-900 text-white py-24"
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
          Feedback & Testimonials
        </motion.h2>

        <p className="text-center text-gray-400 mt-5 max-w-3xl mx-auto">
          Feedback from mentors, trainers, recruiters, and visitors
          who have interacted with my projects and portfolio.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* Testimonials */}

          <div className="space-y-6">

            {feedbacks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-pink-400 transition"
              >

                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className="text-gray-300 leading-7">
                  "{item.message}"
                </p>

                <h4 className="mt-4 text-pink-400 font-semibold">
                  — {item.name}
                </h4>

              </motion.div>
            ))}

          </div>

          {/* Feedback Form */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-2xl shadow-xl space-y-6"
          >

            <h3 className="text-2xl font-bold text-pink-400">
              Leave Feedback
            </h3>

            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              required
              className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-pink-400"
            />

            {/* Rating */}

            <div>
              <label className="block text-gray-300 mb-3">
                Rating
              </label>

              <div className="flex gap-2 text-3xl">

                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    onClick={() =>
                      setFormData({
                        ...formData,
                        rating: star,
                      })
                    }
                    className={`cursor-pointer transition ${
                      star <= formData.rating
                        ? "text-yellow-400"
                        : "text-gray-600"
                    }`}
                  />
                ))}

              </div>

            </div>

            <textarea
              rows="6"
              placeholder="Write your feedback..."
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              required
              className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-pink-400"
            />

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 py-4 rounded-lg font-semibold transition duration-300"
            >
              Submit Feedback
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default Feedback;