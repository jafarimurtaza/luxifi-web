"use client"

import { motion } from "framer-motion"

export function StatsGrid({ stats }) {
  const statItems = [
    { label: "SPEEDS", value: stats.speed, icon: "⚡" },
    { label: "COVERAGE", value: stats.coverage, icon: "📡" },
    { label: "RELIABILITY", value: stats.reliability, icon: "🛡️" },
    { label: "EXPERIENCE", value: stats.overallExperience, icon: "⭐" }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/20">
      {statItems.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="flex flex-col items-center md:items-start space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center space-x-2">
            <span className="text-lg">{stat.icon}</span>
            <div className="text-xs font-medium text-white/70">{stat.label}</div>
          </div>
          <div className="text-xl md:text-2xl font-bold text-white">{stat.value}</div>
        </motion.div>
      ))}
    </div>
  )
}
