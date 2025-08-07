"use client"

import { motion } from "framer-motion"

export function RouterIndicator({ 
  position, 
  routerType = "standard",
  isActive = true,
  baseColor = "#FCD34D",
  animationDelay = 0 
}) {
  const routerConfig = {
    standard: {
      color: baseColor,
      icon: "📡",
      size: 14,
      waveCount: 3,
      waveIntensity: 0.4
    },
    luxifi: {
      color: baseColor, 
      icon: "🏢",
      size: 16,
      waveCount: 5,
      waveIntensity: 0.7
    }
  }

  const config = routerConfig[routerType]

  return (
    <motion.div
      className="absolute z-30"
      style={{
        top: position.top,
        left: position.left,
        transform: 'translate(-50%, -50%)'
      }}
      initial={{ opacity: 0, scale: 0.5 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5, delay: animationDelay }} 
    >
   
      {isActive && Array.from({ length: config.waveCount }).map((_, index) => (
        <motion.div
          key={`wave-${index}`}
          className="absolute border-2 rounded-full"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderColor: `${config.color}${Math.floor(config.waveIntensity * 100)}`,
          }}
          initial={{
            width: '4px',
            height: '4px',
            opacity: 0.8,
          }}
          animate={{
            width: ['4px', '25px', '50px', '80px', '110px'],
            height: ['4px', '25px', '50px', '80px', '110px'],
            opacity: [0.8, 0.6, 0.4, 0.2, 0],
          }}
          transition={{
            duration: 3,
            delay: animationDelay + index * 0.4,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      
      <motion.div
        className="relative rounded-full shadow-xl flex items-center justify-center"
        style={{
          backgroundColor: config.color,
          width: `${config.size}px`,
          height: `${config.size}px`,
          boxShadow: `0 0 20px ${config.color}60`,
        }}
        animate={isActive ? {
          scale: [1, 1.15, 1],
          boxShadow: [
            `0 0 20px ${config.color}60`,
            `0 0 30px ${config.color}80, 0 0 0 8px ${config.color}40`,
            `0 0 20px ${config.color}60`,
          ],
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span style={{ fontSize: `${config.size * 0.5}px` }}>
          {config.icon}
        </span>
      </motion.div>
    </motion.div>
  )
}
