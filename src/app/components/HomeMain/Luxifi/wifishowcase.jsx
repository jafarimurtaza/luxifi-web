"use client";

import { useState } from "react";
import { wifiSolutions } from "../../../lib/data/wifiSolutions";
import { ContentSection } from "./ContentSection";
import { HouseVisualization } from "./HouseVisualization";

export default function WifiShowcase() {
  const [activeTab, setActiveTab] = useState("router");
  const [animationKey, setAnimationKey] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (newTab) => {
    if (newTab === activeTab || isTransitioning) return;

    setIsTransitioning(true);

    // Start transition
    setTimeout(() => {
      setActiveTab(newTab);
      setAnimationKey((prev) => prev + 1);
    }, 100);

    // End transition
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  const currentSolution = wifiSolutions[activeTab];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        {/* Problem Showcase Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
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
  );
}
