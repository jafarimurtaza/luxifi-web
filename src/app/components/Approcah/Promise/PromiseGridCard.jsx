'use client'

import { motion } from "framer-motion";
import PromiseIcon from "./PromiseIcon";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function PromiseGridCard({ item }) {
  return (
    <motion.div
      variants={cardVariants}
      className="flex flex-col items-center text-center p-6 space-y-4 hover:scale-105 transition-transform duration-300"
    >
      <PromiseIcon iconType={item.iconType} />
      <h3 className="text-lg sm:text-xl font-bold text-primary uppercase tracking-wide">
        {item.title}
      </h3>
      <p className="text-sm sm:text-base leading-relaxed text-base-content px-3">
        {item.description}
      </p>
    </motion.div>
  );
}
