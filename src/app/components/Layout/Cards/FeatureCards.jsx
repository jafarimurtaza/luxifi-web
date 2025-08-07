"use client";

import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.5 },
  }),
};

export default function FeatureCards({ features = [] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8 w-full max-w-6xl"
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          custom={index}
          className={`border border-gray-300 rounded-xl p-6 text-center text-lg font-semibold w-full
            ${index === 2 ? "sm:col-span-2 sm:justify-self-center lg:col-span-1" : ""}
          `}
          style={{ boxShadow: "0 8px 30px rgba(255, 255, 255, 0.4)" }}
        >
          {feature.title}
        </motion.div>
      ))}
    </motion.div>
  );
}
