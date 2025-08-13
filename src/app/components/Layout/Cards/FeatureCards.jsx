"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.12, duration: 0.4, ease: "easeOut" },
  }),
};

export default function FeatureCards({ features = [] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 my-8 w-full max-w-6xl"
    >
      {features.map((feature, index) => {
        const content = (
          <div
            className={`flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/5 backdrop-blur px-6 py-4 text-white/90 hover:text-white hover:border-amber-300/50 hover:bg-white/10 transition-colors duration-300 w-full text-base sm:text-lg font-medium ${
              index === 2
                ? "sm:col-span-2 sm:justify-self-center lg:col-span-1"
                : ""
            }`}
            style={{ boxShadow: "0 12px 30px rgba(0,0,0,0.25)" }}
          >
            {feature.icon && (
              <span className="text-xl sm:text-2xl" aria-hidden>
                {feature.icon}
              </span>
            )}
            <span>{feature.title}</span>
          </div>
        );

        return (
          <motion.div key={index} variants={cardVariants} custom={index}>
            {feature.href ? (
              <Link href={feature.href} scroll>
                {content}
              </Link>
            ) : (
              content
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
