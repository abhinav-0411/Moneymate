import React from "react";
import { motion } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Small Business Owner",
      avatar: "👩‍💼",
      quote: "MoneyMate has completely transformed how I manage my business finances. The insights are incredible and have helped me save thousands."
    },
    {
      name: "Michael Rodriguez",
      role: "Software Engineer",
      avatar: "👨‍💻",
      quote: "As a tech person, I appreciate the clean interface and powerful features. It's the perfect balance of simplicity and functionality."
    },
    {
      name: "Emma Thompson",
      role: "Financial Advisor",
      avatar: "👩‍🎓",
      quote: "I recommend MoneyMate to all my clients. It's the most intuitive financial management tool I've ever used."
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
            What our users
            <br />
            <span className="text-green-600">are saying</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their financial lives with MoneyMate.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote */}
              <div className="text-gray-600 mb-8 leading-relaxed text-lg">
                "{testimonial.quote}"
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="flex justify-center items-center space-x-2 text-2xl mb-4">
            <span>⭐⭐⭐⭐⭐</span>
          </div>
          <p className="text-gray-600">
            <span className="font-bold">4.9/5</span> from over 10,000 reviews
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
