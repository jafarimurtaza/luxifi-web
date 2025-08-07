"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CoverageVisualization } from "./coverage-visualization"
import { TabNavigation } from "./tab-navigation"
import { StatsGrid } from "./stats-grid"

export function WifiSolutionSection({
  title,
  subtitle,
  tabs,
  houseImage = "/images/home/bb.webp",
  routerPosition = { top: "45%", left: "35%" },
  coverageZones = [],
  color = "#FCD34D",
  backgroundColor = "#0A1128",
  accentColor = "#4A90E2",
  initialTabId
}) {
  const [activeTab, setActiveTab] = useState(initialTabId || tabs[0]?.id)
  const currentTab = tabs.find(tab => tab.id === activeTab) || tabs[0]

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 md:p-8"
      style={{ backgroundColor }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visualization Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <CoverageVisualization
              houseImage={houseImage}
              routerPosition={routerPosition}
              coverageZones={coverageZones}
              color={color}
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="space-y-8 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Title */}
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {title}
              </motion.h1>
              
              {subtitle && (
                <motion.p 
                  className="text-lg text-white/70"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {subtitle}
                </motion.p>
              )}
            </div>

            {/* Tab Navigation */}
            <TabNavigation
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              accentColor={accentColor}
            />

            {/* Description */}
            <motion.p 
              className="text-lg md:text-xl text-white/80 leading-relaxed"
              key={currentTab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {currentTab.description}
            </motion.p>

            {/* Stats Grid */}
            <StatsGrid stats={currentTab.stats} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
