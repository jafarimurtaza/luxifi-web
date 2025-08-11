'use client'

import PromiseGridCard from "./PromiseGridCard";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function PromiseGrid({ items }) {
  return (
    <motion.div
      variants={cardVariants}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"
    >
      {items.map((item) => (
        <PromiseGridCard key={item.id} item={item} />
      ))}
    </motion.div>
  );
}
