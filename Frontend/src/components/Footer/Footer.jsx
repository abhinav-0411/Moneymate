import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  const footerSections = {
    Product: ["Features", "Pricing", "Security", "Enterprise"],
    Resources: ["Blog", "Help Center", "Community", "Guides"],
    Company: ["About", "Careers", "Press", "Contact"],
    Legal: ["Privacy", "Terms", "Cookies", "Licenses"]
  };

  const socialLinks = [
    { name: "Twitter", icon: "𝕏" },
    { name: "LinkedIn", icon: "in" },
    { name: "GitHub", icon: "⚡" }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          
          {/* Logo & Description */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-black text-gray-900 mb-4">MoneyMate</h3>
              <p className="text-gray-600 leading-relaxed text-sm max-w-xs">
                Empowering your financial journey with intelligent insights and seamless money management.
              </p>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([section, links], sectionIndex) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
              className="col-span-1"
            >
              <h4 className="font-bold text-gray-900 mb-4 text-sm">{section}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-600 text-sm transition-colors duration-300 hover:text-black hover:underline"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-8 mb-8"
        >
          <div className="max-w-md">
            <h4 className="font-bold text-gray-900 mb-2">Stay updated</h4>
            <p className="text-gray-600 text-sm mb-4">Get the latest financial insights delivered to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-black text-white px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-gray-800"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 MoneyMate. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 hover:bg-black hover:text-white"
              >
                <span className="text-xs font-bold">{social.icon}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
