import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const navLinks = ["Home", "Pricing", "Blogs"];

  return (
    <nav className="fixed w-full top-0 left-0 bg-[#134D90]/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-12 py-5 flex justify-between items-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-extrabold tracking-tight text-white"
        >
          <Link to="/">MoneyMate</Link>
        </motion.div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-12 text-lg font-bold">
          {navLinks.map((link, i) => (
            <motion.div
              key={link}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <Link
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className="text-white py-2 transition-colors duration-300 group-hover:text-gray-200"
              >
                {link}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Auth Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex items-center space-x-6"
        >
          <Link
            to="/login"
            className="text-white font-bold py-2 transition-colors duration-300 hover:text-gray-200"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-white text-[#134D90] px-6 py-2.5 rounded-full shadow-md font-bold transform transition duration-300 hover:scale-105 hover:bg-gray-100"
          >
            Sign Up
          </Link>
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
