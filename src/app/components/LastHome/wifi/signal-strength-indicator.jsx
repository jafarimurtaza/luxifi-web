"use client"

import { motion } from "framer-motion"

export function SignalStrengthIndicator({ zones }) {
  const strengthLevels = [
    { label: "Excellent", color: "#10B981", count: zones.filter(z => z.intensity === "strong").length },
    { label: "Good", color: "#F59E0B", count: zones.filter(z => z.intensity === "medium").length },
    { label: "Fair", color: "#EF4444", count: zones.filter(z => z.intensity === "weak").length }
  ]

  return (
    <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm rounded-lg p-3 z-40">
      <div className="text-xs font-semibold text-white/90 mb-2">Signal Coverage</div>
      <div className="space-y-2">
        {strengthLevels.map((level, index) => (
          <motion.div
            key={level.label}
            className="flex items-center space-x-2 text-xs"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + index * 0.3 }}
          >
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: level.color }}
            />
            <span className="text-white/80">{level.label}</span>
            <span className="text-white/60">({level.count})</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
