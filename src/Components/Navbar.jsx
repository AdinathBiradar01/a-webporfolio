import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaFileAlt, FaBriefcase, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  return (
    <nav className="navbar z-1 top-0 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400 tracking-wider ml-12 uppercase">
          portfolio
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" active={location.pathname === "/"} icon={<FaHome />}>
            About
          </NavLink>
          <NavLink to="/resume" active={location.pathname === "/resume"} icon={<FaFileAlt />}>
            Resume
          </NavLink>
          <NavLink to="/portfolio" active={location.pathname === "/portfolio"} icon={<FaBriefcase />}>
            Portfolio
          </NavLink>
          <NavLink to="/contact" active={location.pathname === "/contact"} icon={<FaEnvelope />}>
            Contact
          </NavLink>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 text-gray-300 md:hidden z-40">
          <ul className="flex flex-col space-y-4 py-6 px-6">
            <NavLink
              to="/"
              active={location.pathname === "/"}
              onClick={() => setMenuOpen(false)}
              icon={<FaHome />}
            >
              About
            </NavLink>
            <NavLink
              to="/resume"
              active={location.pathname === "/resume"}
              onClick={() => setMenuOpen(false)}
              icon={<FaFileAlt />}
            >
              Resume
            </NavLink>
            <NavLink
              to="/portfolio"
              active={location.pathname === "/portfolio"}
              onClick={() => setMenuOpen(false)}
              icon={<FaBriefcase />}
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/contact"
              active={location.pathname === "/contact"}
              onClick={() => setMenuOpen(false)}
              icon={<FaEnvelope />}
            >
              Contact
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
};

// Reusable NavLink Component
const NavLink = ({ to, active, children, icon, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`relative flex items-center space-x-3 text-lg font-medium transition-all duration-300 px-3 py-2 rounded-md ${
      active
        ? "text-blue-400 border-b-2 border-blue-400"
        : "text-gray-300 hover:text-blue-400 hover:border-b-2 hover:border-blue-400"
    }`}
  >
    <span className="text-xl">{icon}</span>
    <span>{children}</span>
  </Link>
);

export default Navbar;