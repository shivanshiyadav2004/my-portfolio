import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
    { name: "Feedback", href: "#feedback" },
  ];

  return (
    <nav className="bg-slate-950/80 backdrop-blur-md text-white shadow-lg sticky top-0 z-50 border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-pink-400 hover:text-pink-300 transition duration-300"
        >
          Shivanshi Yadav
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">

          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-white hover:text-pink-400 transition duration-300 font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}

        </ul>

        {/* Resume Button */}
        <a
          href="/Shivanshi_Resume.pdf"
          download
          className="hidden md:block bg-pink-500 hover:bg-pink-600 px-5 py-2 rounded-lg font-medium transition duration-300 hover:shadow-lg"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-white"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          <ul className="flex flex-col items-center py-6 gap-6">

            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white hover:text-pink-400 transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}

            <li>
              <a
                href="/Shivanshi_Resume.pdf"
                download
                className="bg-pink-500 hover:bg-pink-600 px-5 py-2 rounded-lg font-medium transition duration-300"
              >
                Download Resume
              </a>
            </li>

          </ul>

        </div>
      )}

    </nav>
  );
};

export default Navbar;