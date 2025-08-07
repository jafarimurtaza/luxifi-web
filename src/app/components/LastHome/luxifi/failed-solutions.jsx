"use client"

import { SectionLayout } from "./section-layout"
import { ContentBlock } from "./content-block"
import { WifiVisualization } from "./wifi-visualization"

export function FailedSolutions() {
  return (
    <SectionLayout backgroundColor="#000" reverse>
      {/* Visualization */}
      <WifiVisualization type="failed-solutions" />

      {/* Content */}
      <ContentBlock
        subtitle="YOU'VE TRIED EVERYTHING"
        title="But these solutions only go so far."
        bulletPoints={[
          "Just a router — limited range and dead zones",
          "Extenders — weak signals and connection drops", 
          "Mesh systems — still unreliable in many areas"
        ]}
        description="Traditional solutions create more problems than they solve."

        animationDelay={0.2}
      />
    </SectionLayout>
  )
}
