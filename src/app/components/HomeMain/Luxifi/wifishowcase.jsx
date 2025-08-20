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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-4 sm:px-6 py-12 lg:py-20">
        {/* Simple Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white">
            Seamless Wi-Fi.
            <br />
          </h2>
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent text-2xl">
            Because today’s homes demand more.
          </span>
        </div>

        {/* Problem Showcase Section - Improved Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* House Visualization */}
          <div className="order-2 lg:order-1 flex justify-center">
            <HouseVisualization
              solution={currentSolution}
              animationKey={animationKey}
              isTransitioning={isTransitioning}
            />
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 flex items-center">
            <ContentSection
              solutions={wifiSolutions}
              activeTab={activeTab}
              onTabChange={handleTabChange}
              currentSolution={currentSolution}
              isTransitioning={isTransitioning}
            />
          </div>
        </div>

        {/* Bottom Text for Mobile */}
        <div className="mt-12 lg:hidden text-center">
          <p className="text-gray-300 text-sm leading-relaxed max-w-md mx-auto">
            You've tried everything: Just a router, Extenders, Mesh systems
          </p>
        </div>
      </div>
    </div>
  );
}
