"use client"

import { motion } from "framer-motion"
import { SectionLayout } from "../luxifi/section-layout"
import { PromiseChip } from "./promise-chip" // Import the new PromiseChip
import { Award, WifiOff, Handshake, Key, Gem, Shield, LifeBuoy, Lock, Globe } from 'lucide-react'

export function LuxifiPromiseSection() {
  const accentColor = "#FCD34D"

  const promises = [
    { IconComponent: Award, title: "Built by Specialists" },
    { IconComponent: WifiOff, title: "Zero Dead Zones" },
    { IconComponent: Handshake, title: "Full-Service Delivery" },
    { IconComponent: Key, title: "Turnkey Execution" },
    { IconComponent: Gem, title: "Premium Hardware Only" },
    { IconComponent: Shield, title: "Outage Protection" },
    { IconComponent: LifeBuoy, title: "Proactive Support" },
    { IconComponent: Lock, title: "Security That Fits You" },
    { IconComponent: Globe, title: "Outdoor & Indoor" },
  ]

  return (
    <SectionLayout backgroundColor="#000" className="py-20 relative overflow-hidden">
      {/* Background Network Animation */}
      <motion.svg
        className="absolute inset-0 w-full h-full z-0 opacity-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        {/* Animated Dots */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.circle
            key={`bg-dot-${i}`}
            cx={Math.random() * 100}
            cy={Math.random() * 100}
            r="0.5"
            fill="white"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
              x: [0, (Math.random() - 0.5) * 20, 0],
              y: [0, (Math.random() - 0.5) * 20, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
        {/* Animated Lines (simplified for performance) */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.line
            key={`bg-line-${i}`}
            x1={Math.random() * 100}
            y1={Math.random() * 100}
            x2={Math.random() * 100}
            y2={Math.random() * 100}
            stroke="white"
            strokeWidth="0.1"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "linear",
            }}
          />
        ))}
      </motion.svg>

      <div className="relative z-10 col-span-2 text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          THE LUXIFI PROMISE
        </motion.h2>
        <motion.p
          className="text-lg text-white/70 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          More than service — it’s an experience.
        </motion.p>
      </div>

      <div className="relative z-10 col-span-2 flex flex-wrap justify-center items-center gap-6 md:gap-8">
        {promises.map((promise, index) => (
          <PromiseChip
            key={promise.title}
            IconComponent={promise.IconComponent}
            title={promise.title}
            accentColor={accentColor}
            delay={index * 0.1}
          />
        ))}
      </div>
    </SectionLayout>
  )
}
