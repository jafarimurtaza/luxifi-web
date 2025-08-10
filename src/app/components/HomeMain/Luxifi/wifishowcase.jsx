"use client"

import { useState } from "react"
import { HouseVisualization } from "./HouseVisualization"
import { ContentSection } from "./ContentSection"


export default function WifiShowcase() {
  const [activeTab, setActiveTab] = useState("router")
  const [animationKey, setAnimationKey] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleTabChange = (newTab) => {
    if (newTab === activeTab || isTransitioning) return

    setIsTransitioning(true)

    // Start transition
    setTimeout(() => {
      setActiveTab(newTab)
      setAnimationKey((prev) => prev + 1)
    }, 350) 

    // End transition
    setTimeout(() => {
      setIsTransitioning(false)
    }, 700) // Full transition duration
  }

  const wifiSolutions = {
    router: {
      title: "ROUTER ONLY",
      description:
        "Limited in both range and functionality, a router alone is insufficient for today's connected home. Other solutions are often sought to supplement these shortfalls, but come with sacrifices.",
      signals: [
        {
          id: 1,
          x: "52%",
          y: "42%",
          size: "200px",
          innerSize: "120px",
          color: "#FFD700",
          ringColor: "#FFD700",
        },
      ],
    },
    extender: {
      title: "ROUTER + EXTENDER",
      description:
        "WiFi extenders offer a small boost to the router's range, however there is a significant trade-off in performance and user experience.",
      signals: [
        {
          id: 1,
          x: "45%",
          y: "40%",
          size: "180px",
          innerSize: "110px",
          color: "#B78A42",
          ringColor: "#B78A42",
        },
        {
          id: 2,
          x: "65%",
          y: "46%",
          size: "160px",
          innerSize: "100px",
          color: "#4ECDC4",
          ringColor: "#4ECDC4",
        },
      ],
    },
    mesh: {
      title: "WIFI MESH",
      description:
        "WiFi mesh products solve some key issues found in other systems, but are still challenged by factors such as wall density, lack of weather-resistance, and consumer-grade software constraints.",
      signals: [
        {
          id: 1,
          x: "42%",
          y: "38%",
          size: "170px",
          innerSize: "105px",
          color: "#45B7D1",
          ringColor: "#45B7D1",
        },
        {
          id: 2,
          x: "58%",
          y: "36%",
          size: "180px",
          innerSize: "110px",
          color: "#45B7D1",
          ringColor: "#45B7D1",
        },
        {
          id: 3,
          x: "68%",
          y: "44%",
          size: "165px",
          innerSize: "100px",
          color: "#45B7D1",
          ringColor: "#45B7D1",
        },
      ],
    },
  }

  const currentSolution = wifiSolutions[activeTab]

  return (
    <div className="min-h-screen bg-gradient-to-br ">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <HouseVisualization
            solution={currentSolution}
            animationKey={animationKey}
            isTransitioning={isTransitioning}
          />
          <ContentSection
            solutions={wifiSolutions}
            activeTab={activeTab}
            onTabChange={handleTabChange}
            currentSolution={currentSolution}
            isTransitioning={isTransitioning}
          />
        </div>
        
      </div>
    </div>
  )
}
