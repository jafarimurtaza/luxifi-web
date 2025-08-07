"use client"

import { motion } from "framer-motion"

export function PromiseFeatureCard({ IconComponent, title, delay = 0, accentColor = "#FCD34D" }) {
  return (
    <motion.div
      className="relative overflow-hidden  bg-black/60 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center text-center space-y-4  border-white border-2 group"
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      whileHover={{
        boxShadow: "0 0 30px rgba(0,0,0,0.2), 0 0 15px rgba(255,255,255,0.08)", 
        scale: 1.02, 
        transition: { duration: 0.3 }
      }}
    >

      <motion.div
        className="absolute  inset-0 rounded-xl"
        style={{
          background: ` radial-gradient(circle at 50% 0%, ${accentColor}05 0%, transparent 70%)`, 
          filter: 'blur(50px)', 
          zIndex: 0, 
        }}
        animate={{ scale: [1, 1.02, 1] }} 
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

     
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${accentColor}15 0%, transparent 70%)`,
          filter: 'blur(70px)', 
          zIndex: 0,
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Icon */}
      <motion.div
        className="relative z-10 w-20 h-20 flex items-center justify-center rounded-full"
        style={{
          background: `radial-gradient(circle at center, ${accentColor}05 0%, transparent 100%)`, 
        }}
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: delay + 0.2, duration: 0.6, ease: "easeOut" }}
      >
        {IconComponent && (
          <IconComponent
            size={48}
            style={{
              color: accentColor,
              filter: `drop-shadow(0 0 10px ${accentColor}60)`,
            }}
          />
        )}
      </motion.div>

      {/* Title */}
      <h3 className="relative z-10 text-xl font-bold text-primary">{title}</h3>
    </motion.div>
  )
}
