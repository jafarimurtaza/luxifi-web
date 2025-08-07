"use client"

import { SectionLayout } from "./section-layout"
import { ContentBlock } from "./content-block"
import { WifiVisualization } from "./wifi-visualization"

export function WifiNightmareSection() {
  return (
    <SectionLayout backgroundColor="#000">
      <ContentBlock
        subtitle="THE WIFI NIGHTMARE"
        title="WE GET IT—UNRELIABLE WIFI IS A NIGHTMARE."
        description="You've tried everything: Just a router, Extenders, Mesh systems. But the truth is: these solutions only go so far. Spotty coverage, dead zones, and buffering aren't just annoying — they interrupt your life."
     
      />
      <WifiVisualization type="problem" />
    </SectionLayout>
  )
}

