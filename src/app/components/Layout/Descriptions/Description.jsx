"use client";

import React from "react";
import { motion } from "framer-motion";

const descriptionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
// relative z-10 text-base-content text-base leading-relaxed flex-grow
export default function Description({ subtitle, description, className = "" }) {
  return (
    <motion.div
      variants={descriptionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`max-w-6xl p-2 ${className}`}
    >
      {subtitle && (
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-base-content/80 font-light leading-relaxed mb-4">
          {subtitle}
        </p>
      )}
      <p className="text-base md:text-lg lg:text-xl text-base-content/70 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
