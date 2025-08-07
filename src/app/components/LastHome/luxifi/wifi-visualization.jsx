"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { RouterIndicator } from "./router-indicator"

export function WifiVisualization({ 
  type = "problem",
  houseImage = "/images/home/house.webp",
  baseColor = "yellow" 
}) {
  const getScenarioConfig = (type) => {
    const configs = {
      problem: {
       
        signalPoints: [
          { id: "main-router", top: "45%", left: "35%", type: "standard", isActive: true, delay: 0 },
          { id: "weak-zone1", top: "30%", left: "65%", type: "standard", isActive: false, delay: 1 }, // Represents a weak/dead zone
          { id: "weak-zone2", top: "60%", left: "70%", type: "standard", isActive: false, delay: 1.5 }, // Represents another weak/dead zone
        ],
        label: "Unreliable Coverage"
      },
      "failed-solutions": {
      
        signalPoints: [
          { id: "main-router", top: "45%", left: "35%", type: "standard", isActive: true, delay: 0 },
          { id: "extender1", top: "30%", left: "60%", type: "standard", isActive: true, delay: 0.5 },
          { id: "extender2", top: "60%", left: "65%", type: "standard", isActive: true, delay: 1 },
          { id: "dead-spot", top: "20%", left: "80%", type: "standard", isActive: false, delay: 2 }, // Still a dead spot
        ],
        label: "Partial Solutions"
      },
      "luxifi-solution": {
      
        signalPoints: [
          { id: "ap1", top: "45%", left: "35%", type: "luxifi", isActive: true, delay: 0 },
          { id: "ap2", top: "30%", left: "60%", type: "luxifi", isActive: true, delay: 0.3 },
          { id: "ap3", top: "60%", left: "65%", type: "luxifi", isActive: true, delay: 0.6 },
          { id: "ap4", top: "20%", left: "80%", type: "luxifi", isActive: true, delay: 0.9 },
          { id: "ap5", top: "75%", left: "20%", type: "luxifi", isActive: true, delay: 1.2 },
          { id: "ap6", top: "80%", left: "50%", type: "luxifi", isActive: true, delay: 1.5 },
          { id: "ap7", top: "40%", left: "15%", type: "luxifi", isActive: true, delay: 1.8 },
        ],
        label: "Complete LuxiFi Coverage"
      }
    }
    return configs[type] || configs.problem
  }

  const config = getScenarioConfig(type)

  return (
    <motion.div
      className="relative w-full max-w-[500px] mx-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
    
      <Image
        src={houseImage || "/placeholder.svg"}
        width={800}
        height={600}
        alt="House floor plan"
        className="w-full h-auto object-contain"
        priority
      />

      {config.signalPoints.map((point) => (
        <RouterIndicator
          key={point.id}
          position={{ top: point.top, left: point.left }}
          routerType={point.type}
          isActive={point.isActive}
          baseColor={baseColor === "white" ? "#FFFFFF" : "#FCD34D"}
          animationDelay={point.delay} 
        />
      ))}

    
    </motion.div>
  )
}
