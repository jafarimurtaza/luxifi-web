"use client"

import { workSteps } from "../../../lib/data/homedata"
import LinearRight from "../../Layout/Images/LinearRight"
import { StepCard } from "./StepCard"

export default function HowWeWork() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-3">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8">HOW IT WORKS</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">From first call to final install, we make it easy.</p>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {workSteps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>

        {/* Learn More Button */}
        <div className="text-center">
          <button
            className="px-12 cursor-pointer py-4 border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:border-white/50 hover:bg-white/5 transition-all duration-300"
            style={{
              boxShadow: `
                0px 4px 16px rgba(255, 255, 255, 0.1),
                0px 0px 0px 1px rgba(255, 255, 255, 0.05)
              `,
            }}
          >
            LEARN MORE
          </button>
        </div>
      </div>
        {/* <LinearRight/> */}
    </div>
  )
}
