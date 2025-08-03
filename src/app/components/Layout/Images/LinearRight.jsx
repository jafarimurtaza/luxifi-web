import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Reusable LinearRight component
 */

export default function LinearRight() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full absolute left-0 right-0 -mt-12"
    >
      <Image
        src="/images/tech/linear2.svg"
        alt="wave design"
        className="w-full h-auto block"
        width={1920}
        height={1080}
      />
    </motion.div>
  );
}
