"use client"

import { SectionLayout } from "./section-layout"
import { ContentBlock } from "./content-block"
import { WifiVisualization } from "./wifi-visualization"

export function LuxifiHero() {
  return (
    <SectionLayout backgroundColor="#000">
      {/* Content */}
      <ContentBlock
        subtitle="THE WIFI NIGHTMARE"
        title="WE GET IT—UNRELIABLE WIFI IS A NIGHTMARE."
        description="Spotty coverage, dead zones, and buffering aren't just annoying — they interrupt your life."
      
      />

      {/* Visualization */}
      <WifiVisualization type="problem" />
    </SectionLayout>
  )
}
