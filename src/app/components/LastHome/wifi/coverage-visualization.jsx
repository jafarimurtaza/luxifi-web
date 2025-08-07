"use client"

import Image from "next/image"
import { RouterIndicator } from "./router-indicator"
import { SignalWaves } from "./signal-waves"
import { CoverageZone } from "./coverage-zone"
import { SignalStrengthIndicator } from "./signal-strength-indicator"

export function CoverageVisualization({ 
  houseImage,
  routerPosition,
  coverageZones,
  color,
  showSignalWaves = true,
  showStrengthIndicator = true 
}) {
  return (
    <div className="relative w-full max-w-[600px] mx-auto">
      {/* House layout */}
      <Image
        src={houseImage || "/placeholder.svg"}
        width={800}
        height={600}
        alt="House floor plan"
        className="w-full h-auto object-contain"
        priority
      />
      
      {/* Coverage zones */}
      {coverageZones.map((zone) => (
        <CoverageZone
          key={zone.id}
          zone={zone}
          color={color}
          intensity={zone.intensity || "strong"}
        />
      ))}
      
      {/* Signal waves */}
      {showSignalWaves && (
        <SignalWaves
          position={routerPosition}
          color={color}
          waveCount={3}
        />
      )}
      
      {/* Router indicator */}
      <RouterIndicator
        position={routerPosition}
        color={color}
        size={14}
      />
      
      {/* Signal strength indicator */}
      {showStrengthIndicator && (
        <SignalStrengthIndicator zones={coverageZones} />
      )}
    </div>
  )
}
