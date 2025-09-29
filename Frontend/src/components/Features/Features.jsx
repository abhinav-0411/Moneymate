import React from "react";
import { motion } from "framer-motion";

function Features() {
  const features = [
    {
      icon: "📊",
      title: "Smart Analytics",
      description: "Get detailed insights into your spending patterns with AI-powered analytics and personalized recommendations."
    },
    {
      icon: "🔒",
      title: "Bank-Level Security",
      description: "Your data is protected with 256-bit encryption and multi-factor authentication for complete peace of mind."
    },
    {
      icon: "💡",
      title: "Intelligent Insights",
      description: "Receive personalized financial advice and alerts to help you make better money decisions every day."
    },
    {
      icon: "📱",
      title: "Cross-Platform Sync",
      description: "Access your financial data seamlessly across all your devices with real-time synchronization."
    },
    {
      icon: "🎯",
      title: "Goal Tracking",
      description: "Set and track financial goals with visual progress indicators and milestone celebrations."
    },
    {
      icon: "⚡",
      title: "Instant Updates",
      description: "Get real-time notifications about transactions, budgets, and important financial events."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Everything you need to
            <br />
            <span className="text-blue-600">manage money</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to simplify your financial life and help you achieve your money goals.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
