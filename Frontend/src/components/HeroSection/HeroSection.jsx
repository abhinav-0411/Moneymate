import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 flex items-center min-h-[80vh]">
        <div className="w-full text-center">
          
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-6"
          >
            Your Money,
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Simplified
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Take control of your financial future with intelligent insights, 
            seamless tracking, and personalized recommendations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/signup"
                className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 hover:bg-gray-800 hover:shadow-2xl"
              >
                Start Free Trial
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/demo"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:border-black hover:text-black"
              >
                Watch Demo
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-500 text-sm"
          >
            <p className="mb-4">Trusted by 50,000+ users worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <span className="font-semibold">⭐ 4.9/5</span>
              <span className="font-semibold">🔒 Bank-level Security</span>
              <span className="font-semibold">📱 Mobile Ready</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
