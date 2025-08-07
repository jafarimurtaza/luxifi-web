"use client"

import { motion } from "framer-motion"

export function PromiseChip({ IconComponent, title, delay = 0, accentColor = "#FCD34D" }) {
  return (
    <motion.div
      className="relative overflow-hidden flex flex-col items-center justify-center p-4 md:p-6 rounded-full border  shadow-inner cursor-pointer group"
      style={{
        background: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)', 
        minWidth: '160px', 
        minHeight: '160px',
        maxWidth: '200px',
        maxHeight: '200px',
        aspectRatio: '1/1', 
        borderColor: accentColor,
        boxShadow: `inset 6px 6px 10px rgba(0, 0, 0, 0.7), inset -6px -6px 10px rgba(255, 255, 255, 0.2)`
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 0 30px rgba(0,0,0,0.4), 0 0 15px ${accentColor}40`,
        transition: { duration: 0.3 }
      }}
    >
    
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, ${accentColor}20 0%, transparent 70%)`,
          filter: 'blur(40px)',
          zIndex: 0,
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Icon */}
      <motion.div
        className="relative z-10 mb-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 0.3, duration: 0.5 }}
      >
        {IconComponent && (
          <IconComponent
            size={40} // Slightly smaller icon for chip
            style={{
            
              filter: `drop-shadow(0 0 8px ${accentColor}60)`,
            }}
          />
        )}
      </motion.div>

      {/* Title */}
      <motion.h3
        className="relative z-10 text-lg font-bold text-white text-center leading-tight"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 0.4, duration: 0.5 }}
      >
        {title}
      </motion.h3>
    </motion.div>
  )
}
