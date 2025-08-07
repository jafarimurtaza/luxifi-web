"use client"

import { motion } from "framer-motion"

export function RouterDevice({ 
  position, 
  type = "standard", 
  color = "#FCD34D" 
}) {
  const getRouterConfig = (type) => {
    const configs = {
      standard: {
        icon: "📡",
        size: 16,
        pulseIntensity: 0.3,
        waveCount: 2
      },
      luxifi: {
        icon: "🏢",
        size: 18,
        pulseIntensity: 0.6,
        waveCount: 4
      },
      failed: {
        icon: "⚠️",
        size: 14,
        pulseIntensity: 0.2,
        waveCount: 1
      }
    }
    return configs[type] || configs.standard
  }

  const config = getRouterConfig(type)

  return (
    <div
      className="absolute z-30"
      style={{
        top: position.top,
        left: position.left,
        transform: 'translate(-50%, -50%)'
      }}
    >
      {/* Signal waves emanating from router */}
      {Array.from({ length: config.waveCount }).map((_, index) => (
        <motion.div
          key={`wave-${index}`}
          className="absolute border-2 rounded-full"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderColor: `${color}60`,
          }}
          initial={{
            width: '8px',
            height: '8px',
            opacity: 0.8,
          }}
          animate={{
            width: ['8px', '40px', '80px', '120px'],
            height: ['8px', '40px', '80px', '120px'],
            opacity: [0.8, 0.6, 0.3, 0],
          }}
          transition={{
            duration: 2.5,
            delay: index * 0.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Router device */}
      <motion.div
        className="relative rounded-full shadow-lg flex items-center justify-center text-primary font-bold"
        style={{
          backgroundColor: color,
          width: `${config.size}px`,
          height: `${config.size}px`,
          fontSize: `${config.size * 0.5}px`,
        }}
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            `0 0 0 0 ${color}40`,
            `0 0 0 6px ${color}${Math.floor(config.pulseIntensity * 100)}`,
            `0 0 0 0 ${color}40`,
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {config.icon}
      </motion.div>
    </div>
  )
}
