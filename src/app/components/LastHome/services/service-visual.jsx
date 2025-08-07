"use client"

import { motion } from "framer-motion"


export function ServiceVisual({ IconComponent, accentColor }) {
  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Icon */}
      {IconComponent && (
        <IconComponent
          size={64} // Adjust size as needed
          style={{
            color: accentColor,
            filter: `drop-shadow(0 0 15px ${accentColor}80)`, // Elegant glow for the icon
          }}
        />
      )}
      
      {/* Subtle pulsing glow behind the icon */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, ${accentColor}30 0%, transparent 70%)`,
          filter: 'blur(15px)',
          zIndex: -1,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 0.6, 0.8],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}
