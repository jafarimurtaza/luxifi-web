import { WifiSignal } from "./WifiSignal";

export function HouseVisualization({
  solution,
  animationKey,
  isTransitioning,
}) {
  return (
    <div className="relative">
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[480px] p-3 sm:p-4">
        {/* Enhanced House Image Container */}
        <div className="relative w-full h-full overflow-hidden p-2 sm:p-3 lg:p-4">
          <img
            src="/images/home/house.webp"
            alt="Smart Home"
            className="w-full h-full object-contain brightness-110 contrast-120"
            loading="lazy"
            style={{
              filter:
                "brightness(1.2) contrast(1.3) drop-shadow(0 2px 8px rgba(0,0,0,0.3))",
            }}
          />

          {/* Simplified House Enhancement Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)",
              mixBlendMode: "overlay",
            }}
          />

          {/* WiFi Signals Overlay with Smooth Transition */}
          <div
            className={`absolute inset-0 transition-all duration-400 ease-in-out ${
              isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            {solution.signals.map((signal, index) => (
              <WifiSignal
                key={signal.id}
                signal={signal}
                index={index}
                animationKey={animationKey}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
