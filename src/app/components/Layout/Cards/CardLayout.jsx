"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const RenderImage = ({ src, alt = "Render image" }) => (
  <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 flex items-center justify-center p-4 md:p-6 lg:p-8">
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      className="object-contain"
      priority
    />
  </div>
);

const RenderContent = ({ children }) => (
  <div className="p-4 w-full h-full flex items-start text-left bg-base-100">
    <div className="max-w-xl">{children}</div>
  </div>
);

export default function CardLayout({
  isLeft = false,
  image,
  children,
  variants,
}) {
  return (
    <motion.div
      variants={variants}
      className="w-full rounded-xl overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
    >
      {/* Content first on mobile */}
      <div
        className={`${
          isLeft ? "md:order-2" : "md:order-1"
        } order-1`} // content first on mobile
      >
        <RenderContent>{children}</RenderContent>
      </div>

      {/* Image second on mobile */}
      <div
        className={`${
          isLeft ? "md:order-1" : "md:order-2"
        } order-2`} // image second on mobile
      >
        <RenderImage src={image} />
      </div>
    </motion.div>
  );
}
