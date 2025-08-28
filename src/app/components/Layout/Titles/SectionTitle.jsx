"use client";

import React from "react";
import { motion } from "framer-motion";

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function SectionTitle({
  title,
  subTitle = "",
  textClassName = "text-primary",
  className = "",
}) {
  return (
    <motion.div
      variants={titleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 lg:py-16 ${className}`}
    >
      <h1
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight !capitalize ${textClassName}`}
      >
        {title}
        {subTitle && (
          <>
            <br />
            {subTitle}
          </>
        )}
      </h1>
    </motion.div>
  );
}
