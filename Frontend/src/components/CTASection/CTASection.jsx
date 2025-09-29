import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-8 lg:px-12 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Ready to take control of
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              your finances?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of users who have already transformed their financial lives. 
            Start your free trial today and see the difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/signup"
                className="bg-white text-black px-8 py-4 rounded-full text-lg font-bold shadow-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl"
              >
                Start Free Trial
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-black"
              >
                Contact Sales
              </Link>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-8 text-gray-400 text-sm">
            <span className="flex items-center">
              <span className="mr-2">✓</span>
              No credit card required
            </span>
            <span className="flex items-center">
              <span className="mr-2">✓</span>
              14-day free trial
            </span>
            <span className="flex items-center">
              <span className="mr-2">✓</span>
              Cancel anytime
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
