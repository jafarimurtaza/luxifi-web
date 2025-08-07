"use client"

import { SectionLayout } from "./section-layout"
import { ContentBlock } from "./content-block"
import { WifiVisualization } from "./wifi-visualization"

export function LuxifiSolution() {
  const handleGetStarted = () => {

    console.log("Get Started clicked")
  }

  return (
    <SectionLayout backgroundColor="#000">
      {/* Content */}
      <ContentBlock
        subtitle="THE SOLUTION?"
        title="IT'S LUXIFI."
        description="Luxifi delivers high-performance, enterprise-grade WiFi throughout your home using a fully wired network foundation. Every access point is hardwired for maximum speed, stability, and reach — giving you flawless coverage from room to room and wall to wall."
        ctaText="GET STARTED"
        ctaAction={handleGetStarted}
        animationDelay={0.1}
      />

      {/* Visualization */}
      <WifiVisualization type="luxifi-solution" />
    </SectionLayout>
  )
}
