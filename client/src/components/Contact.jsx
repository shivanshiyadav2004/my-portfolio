import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { personalInfo } from "../data/portfolioData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.message.trim().length < 10) {
      alert("Message must be at least 10 characters long.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_r11zbqn",
        "template_vspevaw",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "2E4psIY-fo-8hOvSj"
      );

      alert("✅ Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      alert(
        "❌ Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          Contact Me
        </motion.h2>

        <p className="text-center text-gray-400 mt-5 max-w-3xl mx-auto">
          Have a project, internship opportunity, or just want to connect?
          Feel free to reach out. I'd love to hear from you.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* Contact Information */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="bg-slate-800 p-5 rounded-2xl flex items-center gap-5 hover:border border-pink-400 transition">

              <FaEnvelope className="text-pink-400 text-3xl" />

              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-300">
                  {personalInfo.email}
                </p>
              </div>

            </div>

            <div className="bg-slate-800 p-5 rounded-2xl flex items-center gap-5 hover:border border-pink-400 transition">

              <FaPhoneAlt className="text-pink-400 text-3xl" />

              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-300">
                  {personalInfo.phone}
                </p>
              </div>

            </div>

            <div className="bg-slate-800 p-5 rounded-2xl flex items-center gap-5 hover:border border-pink-400 transition">

              <FaMapMarkerAlt className="text-pink-400 text-3xl" />

              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-300">
                  {personalInfo.location}
                </p>
              </div>

            </div>

            <div className="flex gap-6 mt-8">

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-4 rounded-full hover:bg-pink-500 transition"
              >
                <FaGithub size={24} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-4 rounded-full hover:bg-pink-500 transition"
              >
                <FaLinkedin size={24} />
              </a>

            </div>

          </motion.div>

          {/* Contact Form */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-2xl shadow-xl space-y-6"
          >

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-pink-400"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-pink-400"
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-pink-400"
            />

            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-pink-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-pink-500 hover:bg-pink-600 py-4 rounded-lg font-semibold transition duration-300 disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default Contact;