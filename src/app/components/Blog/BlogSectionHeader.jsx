"use client";

import { motion } from "framer-motion";

export default function BlogSectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        Latest Insights & Tips
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-base-content/80 to-base-content mx-auto rounded-full"></div>
    </motion.div>
  );
}
