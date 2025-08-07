"use client"

import { motion } from "framer-motion"

export function CoverageZone({ 
  zone, 
  color = "#FCD34D", 
  intensity = "strong" 
}) {
  const getIntensityStyles = (intensity) => {
    const styles = {
      strong: { opacity: [0, 0.7, 0.8, 0.7], scale: [0.2, 0.9, 1, 0.95] },
      medium: { opacity: [0, 0.5, 0.6, 0.5], scale: [0.2, 0.8, 0.9, 0.85] },
      weak: { opacity: [0, 0.3, 0.4, 0.3], scale: [0.2, 0.6, 0.7, 0.65] }
    }
    return styles[intensity] || styles.strong
  }

  const intensityStyle = getIntensityStyles(intensity)

  return (
    <motion.div
      className="absolute pointer-events-none z-10"
      style={{
        width: zone.size,
        height: zone.size,
        top: zone.top,
        left: zone.left,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ 
        opacity: 0, 
        scale: 0.2,
      }}
      animate={{
        opacity: intensityStyle.opacity,
        scale: intensityStyle.scale,
      }}
      transition={{
        delay: zone.delay,
        duration: zone.duration,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 2,
      }}
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background: `radial-gradient(circle, ${color}80 0%, ${color}40 50%, ${color}20 100%)`,
          filter: 'blur(2px)',
        }}
      />
    </motion.div>
  )
}
