import { useState } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

const AIAssistant = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi! I'm Shivanshi's AI Assistant. Ask me about her skills, projects, education, certifications, or contact details.",
    },
  ]);

  const getReply = (question) => {
    const q = question.toLowerCase();

    if (q.includes("project")) {
      return "Shivanshi has built CivicWatch AI, Fake Job Posting Detection, and ProjectFlow. These projects demonstrate her skills in MERN Stack Development, Machine Learning, and Full Stack Application Development.";
    }

    if (q.includes("skill")) {
      return "Her technical skills include Java, JavaScript, React, Node.js, Express.js, MongoDB, Tailwind CSS, Git, GitHub, Machine Learning, and Data Structures & Algorithms.";
    }

    if (q.includes("education")) {
      return "She is pursuing B.Tech in Computer Science Engineering at R.R. Institute of Modern Technology and is currently focused on software development, DSA, and placement preparation.";
    }

    if (
      q.includes("certificate") ||
      q.includes("certification")
    ) {
      return "She has completed MERN Stack Development Training and an AI/ML Internship, gaining practical experience in Full Stack Development and Machine Learning.";
    }

    if (
      q.includes("contact") ||
      q.includes("email") ||
      q.includes("phone")
    ) {
      return "You can contact Shivanshi through the Contact section of this portfolio, or connect with her via LinkedIn, GitHub, and email.";
    }

    if (
      q.includes("experience") ||
      q.includes("internship")
    ) {
      return "Shivanshi has completed an AI/ML Internship and developed multiple full-stack projects using the MERN stack.";
    }

    if (
      q.includes("achievement") ||
      q.includes("achievements")
    ) {
      return "Her achievements include completing MERN Stack Training, an AI/ML Internship, building multiple deployed projects, and continuously improving her DSA and software development skills.";
    }

    return "I'm still learning! Try asking about Shivanshi's projects, skills, education, certifications, achievements, or contact information.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    const aiMessage = {
      sender: "ai",
      text: getReply(input),
    };

    setMessages((prev) => [...prev, userMessage, aiMessage]);

    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-24 right-6 bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full shadow-lg z-50"
      >
        {open ? <FaTimes /> : <FaRobot />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-40 right-6 w-80 bg-slate-900 rounded-xl shadow-2xl border border-slate-700 z-50">

          <div className="bg-pink-500 text-white p-4 rounded-t-xl font-semibold">
            AI Portfolio Assistant
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg max-w-[85%] ${
                  msg.sender === "user"
                    ? "bg-pink-500 ml-auto text-white"
                    : "bg-slate-700 text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex border-t border-slate-700">
            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
              className="flex-1 bg-slate-800 text-white p-3 outline-none rounded-bl-xl"
            />

            <button
              onClick={handleSend}
              className="bg-pink-500 hover:bg-pink-600 px-4 rounded-br-xl text-white"
            >
              <FaPaperPlane />
            </button>
          </div>

        </div>
      )}
    </>
  );
};

export default AIAssistant;