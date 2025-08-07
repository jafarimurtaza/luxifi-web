"use client"

import { motion } from "framer-motion"

export function RouterIndicator({ position, color = "#FCD34D", size = 34 }) {
  return (
    <div className="absolute z-30" style={{ 
      top: position.top, 
      left: position.left,
      transform: 'translate(-50%, -50%)'
    }}>
      {/* Pulsing router dot */}
      <motion.div
        className="rounded-full shadow-lg"
        style={{ 
          backgroundColor: color,
          width: `${size}px`,
          height: `${size}px`,
        }}
        animate={{
          scale: [1, 1.3, 1],
          boxShadow: [
            `0 0 0 0 ${color}40`,
            `0 0 0 8px ${color}20`,
            `0 0 0 0 ${color}40`,
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Router icon overlay */}
      <div 
        className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold"
        style={{ fontSize: `${size * 0.4}px` }}
      >
        📶
      </div>
    </div>
  )
}
