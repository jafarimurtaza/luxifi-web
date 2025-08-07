"use client"

import { motion } from "framer-motion"

export function SignalWaves({ position, color = "#FCD34D", waveCount = 3 }) {
  return (
    <div className="absolute z-20" style={{
      top: position.top,
      left: position.left,
      transform: 'translate(-50%, -50%)'
    }}>
      {Array.from({ length: waveCount }).map((_, index) => (
        <motion.div
          key={`wave-${index}`}
          className="absolute border-2 rounded-full"
          style={{
            borderColor: `${color}60`,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          initial={{
            width: '8px',
            height: '8px',
            opacity: 0.8,
          }}
          animate={{
            width: ['8px', '60px', '120px', '180px'],
            height: ['8px', '60px', '120px', '180px'],
            opacity: [0.8, 0.6, 0.3, 0],
          }}
          transition={{
            duration: 3,
            delay: index * 0.6,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}
