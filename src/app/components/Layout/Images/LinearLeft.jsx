import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Reusable LinearLeft component
 */

export default function LinearLeft({ image, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full relative left-0 right-0"
      style={{ filter: "hue-rotate(192deg)" }}
    >
      <Image
        src={image ? image : "/images/tech/linear2.svg"}
        alt="wave design"
        className={`${className} w-full h-[50%] block object-contain`}
        width={1920}
        height={1080}
      />
    </motion.div>
  );
}
