"use client";

import { contactMethods } from "@/info/contacts";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export default function ContactInfo() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Contact Information
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
          Feel free to reach out through any of these channels. I typically respond within 24 hours.
        </p>
      </div>

      <div className="space-y-6">
        {contactMethods.map((method, index) => {
          const IconComponent = method.icon;
          const content = (
            <motion.div
              key={method.label}
              variants={itemVariants}
              className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`p-3 rounded-full bg-gray-100 dark:bg-gray-700`}>
                <IconComponent className={`w-6 h-6 ${method.color}`} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {method.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {method.value}
                </p>
              </div>
            </motion.div>
          );

          return method.href ? (
            <a
              key={method.label}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : '_self'}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="block transform hover:scale-105 transition-transform duration-200"
            >
              {content}
            </a>
          ) : (
            content
          );
        })}
      </div>

      {/* Additional Info Card */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg"
      >
        <h3 className="text-xl font-bold mb-2">Let's Build Something Amazing</h3>
        <p className="opacity-90">
          Whether you have a project in mind, want to collaborate, or just want to say hello, 
          I'd love to hear from you. Let's create something extraordinary together!
        </p>
      </motion.div>

      {/* Availability Status */}
      <motion.div
        variants={itemVariants}
        className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg"
      >
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-700 dark:text-green-300 font-semibold">
            Available for new opportunities
          </span>
        </div>
        <p className="text-green-600 dark:text-green-400 text-sm mt-1">
          Currently open to full-time, contract, and freelance work
        </p>
      </motion.div>
    </motion.div>
  );
}
