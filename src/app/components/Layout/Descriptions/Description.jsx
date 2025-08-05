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

export default function Description({ subtitle, description }) {
  return (
    <motion.div
      variants={descriptionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-8 sm:my-12 md:my-16"
    >
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-base-content/80 font-light leading-relaxed mb-4">
        {subtitle}
      </p>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-base-content/70 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
} 