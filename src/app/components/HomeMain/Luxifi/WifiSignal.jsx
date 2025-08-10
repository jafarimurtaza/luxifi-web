import { useEffect, useState } from "react";

export function WifiSignal({ signal, index, animationKey }) {
  const [isMobile, setIsMobile] = useState(false);
  // get mobile resolution

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log("isMobile", isMobile);

  return (
    <div key={`${signal.id}-${animationKey}`} className="absolute inset-0">
      <div
        className="absolute rounded-full transition-all duration-2000 ease-out"
        style={{
          left: signal.x,
          top: signal.y,
          width: signal.size,
          height: signal.size,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, ${signal.color}40 0%, ${signal.color}20 50%, transparent 80%)`,
          filter: "blur(20px)",
          opacity: 0.4,
          animation: `gentle-pulse 4s ease-in-out infinite ${index * 0.6}s`,
        }}
      />

      <div
        className="absolute rounded-full transition-all duration-2000 ease-out"
        style={{
          left: signal.x,
          top: signal.y,
          width: signal.innerSize,
          height: signal.innerSize,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, ${signal.color}50 0%, ${signal.color}25 90%, transparent 80%)`,
          filter: "blur(12px)",
          opacity: 0.5,
          animation: `gentle-pulse 3.5s ease-in-out infinite ${index * 0.4}s`,
        }}
      />

      {[1, 2, 3].map((wave) => {
        const getWave = wave * 30;
        const width =
          signal.name === "router"
            ? 70 + getWave
            : signal.name === "extender"
            ? 20 + getWave
            : 95 + getWave;
        const height =
          signal.name === "router"
            ? 70 + getWave
            : signal.name === "extender"
            ? 20 + getWave
            : 95 + getWave;

        return (
          <div
            key={`wave-${signal.id}-${wave}`}
            className="absolute border rounded-full"
            style={{
              left: signal.x,
              top: signal.y,
              width: `${width}px `,
              height: `${height}px`,
              transform: "translate(-50%, -50%)",
              borderColor: signal.ringColor,
              borderWidth: "1px",
              opacity: 1 - wave * 0.08,
              animation: `gentle-expand 4s ease-out infinite ${
                index * 0.5 + wave * 0.5
              }s`,
            }}
          />
        );
      })}

      <div
        className="absolute rounded-full"
        style={{
          left: signal.x,
          top: signal.y,
          width: "10px",
          height: "10px",
          transform: "translate(-50%, -50%)",
          backgroundColor: signal.ringColor,
          animation: `signal-point-glow 2s ease-in-out infinite ${
            index * 0.3
          }s`,
        }}
      />

      {/* Signal Point Inner Glow */}
      <div
        className="absolute rounded-full"
        style={{
          left: signal.x,
          top: signal.y,
          width: "0px",
          height: "0px",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(255,255,255,0.9)",
          animation: `signal-inner-glow 2s ease-in-out infinite ${
            index * 0.3
          }s`,
          boxShadow: `0 0 1px rgba(255,255,255,0.1)`,
        }}
      />
    </div>
  );
}
