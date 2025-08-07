"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { ServiceVisual } from "./service-visual";
import Description from "../../Layout/Descriptions/Description";
import CardTitlte from "../../Layout/CardTitlte";

export function ServiceCard({
  IconComponent,
  title,
  description,
  accentColor = "#DCA54D",
  delay = 0,
}) {
  const [isClicked, setIsClicked] = useState(false);

  const handleLearnMore = () => {
    console.log(`Learn More clicked for: ${title}`);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <motion.div
      className="relative overflow-hidden bg-gray-950 rounded-xl p-6 md:p-8 flex flex-col items-center text-center space-y-4 border border-gray-800 shadow-xl group cursor-pointer"
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      whileHover={{
        scale: 1.02,
        boxShadow:
          "0 20px 40px rgba(0,0,0,0.5), 0 0 25px rgba(255,255,255,0.05)", // Deeper shadow with subtle white glow
        y: -5, // Slight lift
        transition: { duration: 0.3 },
      }}
      onClick={handleClick}
    >
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${accentColor}30 0%, transparent 70%)`, // Increased opacity for stronger glow
          filter: "blur(80px)",
          zIndex: 0,
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none z-20" // Higher z-index to be on top
        style={{
          background: `linear-gradient(45deg, transparent 0%, ${accentColor}80 20%, ${accentColor}80 80%, transparent 100%)`,
          backgroundSize: "200% 200%",
          backgroundPosition: "0% 0%",
          opacity: 0,
          padding: "2px",
          backgroundClip: "content-box",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
        initial={{ opacity: 0 }}
        group-hover={{ opacity: 1 }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none z-30"
        style={{
          border: `2px solid ${accentColor}`,
          boxShadow: `0 0 15px ${accentColor}80`,
        }}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={
          isClicked ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }
        }
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      <motion.div
        className="relative w-28 h-28 flex items-center justify-center mb-4 z-10"
        style={{
          background: `radial-gradient(circle at center, ${accentColor}10 0%, transparent 100%)`, // Very subtle background for the visual container
        }}
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: delay + 0.2, duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <ServiceVisual
          IconComponent={IconComponent}
          accentColor={accentColor}
        />
      </motion.div>

      <CardTitlte title={title} />

      <Description description={description} />
      <button
        onClick={handleLearnMore}
        className="px-8 btn mt-auto btn-primary py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg z-10"
        style={{
          color: "#0A1128",
          boxShadow: `0 6px 18px ${accentColor}40`,
        }}
      >
        LEARN MORE
      </button>
    </motion.div>
  );
}
