"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cellVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Comparison data
const comparisonData = [
  {
    feature: "Designed Exclusively for Homes",
    luxifi: "✅ Yes",
    others: "❌ Often Commercial",
    luxifiPositive: true,
  },
  {
    feature: "Expert WiFi Engineering",
    luxifi: "✅ Core Focus",
    others: "❌ Secondary Skill",
    luxifiPositive: true,
  },
  {
    feature: "Seamless Indoor/Outdoor Coverage",
    luxifi: "✅ Included",
    others: "❌ Rarely Offered",
    luxifiPositive: true,
  },
  {
    feature: "Structured Cabling In-House",
    luxifi: "✅ Clean Installations",
    others: "❌ Subcontracted",
    luxifiPositive: true,
  },
  {
    feature: "Ubiquiti Product Specialization",
    luxifi: "✅ Deep Expertise",
    others: "❌ Basic Familiarity",
    luxifiPositive: true,
  },
  {
    feature: "Remote Monitoring & Support",
    luxifi: "✅ Included",
    others: "❌ Additional Charge",
    luxifiPositive: true,
  },
  {
    feature: "Personalized Security Features",
    luxifi: "✅ Fully Customizable",
    others: "❌ Generic Settings",
    luxifiPositive: true,
  },
  {
    feature: "Design-Minded Execution",
    luxifi: "✅ Home Aesthetic First",
    others: "❌ Tech-Led Only",
    luxifiPositive: true,
  },
];

export default function ComparisonTable() {
  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-20"
    >
      {/* Title */}
      <motion.div variants={rowVariants} className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-base-content mb-4">
          THE LUXIFI DIFFERENCE
        </h2>
        <p className="text-xl sm:text-2xl text-accent font-medium max-w-3xl mx-auto">
          More than tech. It's how we treat you.
        </p>
      </motion.div>

      {/* Comparison Table */}
      <motion.div
        variants={rowVariants}
        className="bg-base-100 rounded-2xl shadow-2xl overflow-hidden border border-base-300"
      >
        {/* Header Row */}
        <div className="bg-base-200 border-b-2 border-base-300">
          <div className="grid grid-cols-3 gap-0">
            <motion.div
              variants={cellVariants}
              className="p-4 sm:p-6 text-center border-r border-base-300"
            >
              <h3 className="text-lg sm:text-xl font-bold text-base-content">
                Feature
              </h3>
            </motion.div>
            <motion.div
              variants={cellVariants}
              className="p-4 sm:p-6 text-center border-r border-base-300 bg-primary/10"
            >
              <h3 className="text-lg sm:text-xl font-bold text-primary">
                Luxifi
              </h3>
            </motion.div>
            <motion.div
              variants={cellVariants}
              className="p-4 sm:p-6 text-center"
            >
              <h3 className="text-lg sm:text-xl font-bold text-base-content">
                Other Providers
              </h3>
            </motion.div>
          </div>
        </div>

        {/* Feature Rows */}
        {comparisonData.map((item, index) => (
          <motion.div
            key={index}
            variants={rowVariants}
            className={`grid grid-cols-3 gap-0 border-b border-base-300 last:border-b-0 transition-all duration-300 ${
              hoveredRow === index
                ? "bg-primary/5"
                : "bg-base-100 hover:bg-base-200/30"
            }`}
            onMouseEnter={() => setHoveredRow(index)}
            onMouseLeave={() => setHoveredRow(null)}
          >
            {/* Feature Name */}
            <motion.div
              className="p-4 sm:p-6 border-r border-base-300 flex items-center"
              whileHover={{ scale: 1.01 }}
            >
              <motion.span
                className="font-semibold text-base sm:text-lg text-base-content"
                animate={hoveredRow === index ? { x: 5 } : { x: 0 }}
                transition={{ duration: 0.2 }}
              >
                {item.feature}
              </motion.span>
            </motion.div>

            {/* Luxifi Column */}
            <motion.div
              className="p-4 sm:p-6 text-center border-r border-base-300 flex items-center justify-center bg-primary/5"
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(var(--p)/0.1)",
              }}
            >
              <motion.div
                className="flex items-center justify-center space-x-2"
                animate={hoveredRow === index ? { scale: 1.05 } : { scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-sm sm:text-base font-medium text-primary">
                  {item.luxifi}
                </span>
                {hoveredRow === index && (
                  <motion.div
                    className="w-2 h-2 bg-primary rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            </motion.div>

            {/* Others Column */}
            <motion.div
              className="p-4 sm:p-6 text-center flex items-center justify-center"
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(var(--er)/0.05)",
              }}
            >
              <motion.div
                className="flex items-center justify-center space-x-2"
                animate={hoveredRow === index ? { scale: 1.05 } : { scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <span
                  className={`text-sm sm:text-base font-medium ${
                    item.others.includes("❌")
                      ? "text-error"
                      : "text-base-content"
                  }`}
                >
                  {item.others}
                </span>
                {hoveredRow === index && (
                  <motion.div
                    className="w-2 h-2 bg-error rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div variants={rowVariants} className="text-center mt-12">
        <motion.div
          className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl border border-primary/20"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
          }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">
            Ready for the Luxifi Difference?
          </h3>
          <p className="text-base sm:text-lg text-base-content/80 max-w-2xl mx-auto">
            Experience luxury-grade connectivity designed exclusively for your
            home, with the personalized care and expertise you deserve.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
