"use client";

import { motion } from "framer-motion";
import Description from "../../Layout/Descriptions/Description";

export function ProcessStepCard({ stepNumber, title, description, delay = 0 }) {
  return (
    <motion.div
      className="relative overflow-hidden  rounded-xl p-6 md:p-8 flex flex-col text-left space-y-4 border border-white/10 group"
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      whileHover={{
        boxShadow: "0 0 40px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.1)",
        transition: { duration: 0.3 },
      }}
    >
      {/* Gradient Shadow in back of each card */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1) 0%, transparent 70%)`, // Subtle white gradient
          filter: "blur(70px)",
          zIndex: 0,
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex items-center space-x-3 mb-4">
        <div className="bg-black/50 border border-white/20 rounded-md px-3 py-1 text-sm font-semibold text-white">
          {stepNumber}
        </div>
        <h3 className="text-xl font-bold text-white uppercase">{title}</h3>
      </div>

      {/* Separator line */}
      <div className="relative z-10 w-full h-px bg-white my-2" />

      {/* Description */}
      <Description description={description} />
    </motion.div>
  );
}
