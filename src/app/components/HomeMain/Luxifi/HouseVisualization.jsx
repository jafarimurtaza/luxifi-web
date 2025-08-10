import { WifiSignal } from "./WifiSignal";


export function HouseVisualization({ solution, animationKey, isTransitioning }) {
  return (
    <div className="relative">
      <div className="relative w-full h-[480px]  p-6 ">
        {/* Enhanced House Image Container */}
        <div className="relative w-full h-full overflow-hidden  p-4">
          <img
            src="/images/home/house.webp"
            alt="Smart Home"
            className="w-full h-full object-contain filter brightness-125 contrast-130 saturate-110"
            style={{
              filter: "brightness(1.3) contrast(1.4) saturate(1.2) drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
            }}
          />

          {/* House Enhancement Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)",
              mixBlendMode: "overlay",
            }}
          />

          {/* WiFi Signals Overlay with Smooth Transition */}
          <div
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            {solution.signals.map((signal, index) => (
              <WifiSignal key={signal.id} signal={signal} index={index} animationKey={animationKey} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
