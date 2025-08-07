"use client";

import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function FeaturesList({ features }) {
  return (
    <ul
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl px-6 py-16 mx-auto"
      role="list"
      aria-label="List of features"
    >
      {features.map((feature, index) => (
        <motion.li
          key={index}
          className="relative flex items-start gap-4 p-6 md:p-7 border border-primary rounded-2xl overflow-hidden group hover:scale-[1.015] transition-transform duration-300"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
        >
          {/* Blurred Background */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/30 backdrop-blur-lg rounded-2xl"
            style={{ zIndex: 0 }}
          />

          {/* Vertical Accent Bar */}
          <div className="absolute left-0 top-0 h-full w-1 bg-primary group-hover:bg-primary/80 transition-colors duration-300 z-10" />

          {/* Checkmark Icon */}
          <div className="z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white text-black font-bold text-lg shadow-inner shrink-0">
            ✓
          </div>

          {/* Feature Text */}
          <p className="z-20 text-base md:text-lg font-semibold text-base-content leading-snug tracking-tight">
            {feature}
          </p>
        </motion.li>
      ))}
    </ul>
  );
}
