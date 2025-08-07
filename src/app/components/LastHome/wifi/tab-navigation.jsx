"use client"

import { motion } from "framer-motion"
// import { cn } from "@/lib/utils"

export function TabNavigation({ tabs, activeTab, onTabChange, accentColor }) {
  return (
    <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm md:text-base font-semibold">
      {tabs.map((tab, index) => (
        <motion.button
          key={tab.id}
          
          onClick={() => onTabChange(tab.id)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {tab.label}
          
          {/* Active tab indicator */}
          {activeTab === tab.id && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
              style={{ backgroundColor: accentColor }}
              layoutId="activeTab"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  )
}
