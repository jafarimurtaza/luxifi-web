"use client";

import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function FeaturesList({ features }) {
  return (
    <ul
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl px-6 py-12 mx-auto"
      role="list"
      aria-label="List of features"
    >
      {features.map((feature, index) => (
        <motion.li
          key={index}
          className="flex items-center gap-4 p-3 rounded-xl hover:bg-base-200/50 transition-colors duration-300"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
        >
          {/* Icon Circle */}
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10 text-primary font-bold text-lg shadow-inner shrink-0">
            ✓
          </div>

          {/* Feature Text */}
          <p className="text-base md:text-lg font-medium text-base-content leading-snug">
            {feature}
          </p>
        </motion.li>
      ))}
    </ul>
  );
}
