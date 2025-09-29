import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navLinks = ["Home", "Pricing", "Blogs"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl font-black tracking-tight text-gray-900"
        >
          <Link to="/" className="hover:text-blue-600 transition-colors duration-300">
            MoneyMate
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, i) => (
            <motion.div
              key={link}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <Link
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className="text-gray-700 font-semibold text-lg py-2 px-1 transition-all duration-300 hover:text-black"
              >
                {link}
              </Link>
              <motion.span
                className="absolute left-0 -bottom-1 h-0.5 bg-black"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Auth Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex items-center space-x-4"
        >
          <Link
            to="/login"
            className="hidden sm:block text-gray-700 font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:bg-gray-100 hover:text-black"
          >
            Login
          </Link>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/signup"
              className="bg-black text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-xl"
            >
              Sign Up
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
