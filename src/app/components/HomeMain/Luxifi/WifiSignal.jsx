import { useEffect, useState } from "react";
import signalConfigs from "../../../lib/data/getSignalConfig";

export function WifiSignal({ signal, index, animationKey }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSignalConfig = () => {
    const configs = signalConfigs(isMobile);

    return configs[signal.name] || configs.router;
  };

  const config = getSignalConfig();

  // Simplified coverage visualization
  const renderCoveragePattern = () => {
    const coverageStyles = {
      limited: {
        width: `${config.maxRadius * 1.8}px`,
        height: `${config.maxRadius * 1.8}px`,
        background: `radial-gradient(circle, ${config.gradientColor} 0%, transparent 70%)`,
      },
      fragmented: {
        width: `${config.maxRadius * 2.2}px`,
        height: `${config.maxRadius * 2.2}px`,
        background: `radial-gradient(circle, ${config.gradientColor} 0%, transparent 200%)`,
      },
      patchy: {
        width: `${config.maxRadius * 2.4}px`,
        height: `${config.maxRadius * 2.4}px`,
        background: `radial-gradient(ellipse 120% 80%, ${config.gradientColor} 0%, transparent 100%)`,
        borderRadius: "60% ",
      },
      good: {
        width: `${config.maxRadius * 2.4}px`,
        height: `${config.maxRadius * 2.4}px`,
        background: `radial-gradient(circle, ${config.gradientColor} 0%, transparent 90%)`,
      },
      excellent: {
        width: `${config.maxRadius * 2.6}px`,
        height: `${config.maxRadius * 2.6}px`,
        background: `radial-gradient(circle, ${config.gradientColor} 0%, transparent 95%)`,
      },
      perfect: {
        width: `${config.maxRadius * 3}px`,
        height: `${config.maxRadius * 3}px`,
        background: `radial-gradient(circle, ${config.gradientColor} 0%, rgba(220, 165, 77, 0.3) 30%, rgba(220, 165, 77, 0.2) 60%, rgba(255,255,255,0.1) 85%, transparent 95%)`,
        filter: "blur(2px)",
      },
    };

    const style = coverageStyles[config.coverage];

    return (
      <div
        className="absolute rounded-full wifi-coverage"
        style={{
          left: signal.x,
          top: signal.y,
          transform: "translate(-50%, -50%)",
          ...style,
        }}
      />
    );
  };

  // Simplified signal rings using CSS animations
  const renderSignalRings = () => {
    return Array.from(
      { length: Math.min(config.rings, isMobile ? 3 : config.rings) },
      (_, ringIndex) => {
        const baseRadius = isMobile ? 10 + ringIndex * 8 : 15 + ringIndex * 12;

        return (
          <div
            key={`ring-${signal.id}-${ringIndex}`}
            className="absolute rounded-full border-2 wifi-ring"
            style={{
              left: signal.x,
              top: signal.y,
              width: `${baseRadius}px`,
              height: `${baseRadius}px`,
              transform: "translate(-50%, -50%)",
              borderColor: config.color,
              opacity: 1 - ringIndex * 0.15,
              animationDelay: `${ringIndex * 0.3}s`,
            }}
          />
        );
      }
    );
  };

  return (
    <div key={`${signal.id}-${animationKey}`} className="absolute inset-0">
      {/* Coverage Pattern */}
      {renderCoveragePattern()}

      {/* Signal Strength Rings */}
      {renderSignalRings()}

      {/* Central Signal Source */}
      <div
        className={`absolute rounded-full wifi-source ${
          config.coverage === "perfect" ? "border-2 border-white" : ""
        }`}
        style={{
          left: signal.x,
          top: signal.y,
          width:
            config.coverage === "perfect"
              ? isMobile
                ? "12px"
                : "16px"
              : isMobile
              ? "8px"
              : "12px",
          height:
            config.coverage === "perfect"
              ? isMobile
                ? "12px"
                : "16px"
              : isMobile
              ? "8px"
              : "12px",
          transform: "translate(-50%, -50%)",
          backgroundColor: config.color,
          boxShadow:
            config.coverage === "perfect"
              ? `0 0 25px ${config.color}, 0 0 40px ${config.color}50, inset 0 0 12px rgba(255,255,255,0.5)`
              : `0 0 ${isMobile ? "10px" : "20px"} ${config.color}60`,
        }}
      />

      {/* Perfect coverage gets an inner light effect */}
      {config.coverage === "perfect" && (
        <div
          className="absolute rounded-full"
          style={{
            left: signal.x,
            top: signal.y,
            width: isMobile ? "8px" : "10px",
            height: isMobile ? "8px" : "10px",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            animation: "luxifiInnerGlow 2.5s ease-in-out infinite",
            boxShadow: "0 0 15px rgba(255,255,255,0.9)",
          }}
        />
      )}

      {/* Signal Quality Indicators - Only show on desktop for performance */}
      {!isMobile && (
        <>
          {config.coverage === "limited" && (
            <div
              className="absolute text-xs font-bold text-red-400"
              style={{
                left: `calc(${signal.x} + 30px)`,
                top: `calc(${signal.y} - 15px)`,
                textShadow: "0 1px 2px rgba(0,0,0,0.5)",
              }}
            >
              WEAK
            </div>
          )}

          {config.coverage === "fragmented" && (
            <div
              className="absolute text-xs font-bold text-yellow-400"
              style={{
                left: `calc(${signal.x} + 25px)`,
                top: `calc(${signal.y} - 10px)`,
                textShadow: "0 1px 2px rgba(0,0,0,0.5)",
              }}
            >
              PATCHY
            </div>
          )}

          {config.coverage === "perfect" && (
            <div
              className="absolute text-xs font-bold text-yellow-400"
              style={{
                left: `calc(${signal.x} + 30px)`,
                top: `calc(${signal.y} - 15px)`,
                textShadow: "0 1px 2px rgba(0,0,0,0.5)",
              }}
            >
              PERFECT
            </div>
          )}
        </>
      )}

      <style jsx>{`
        .wifi-coverage {
          animation: wifiCoverage 4s ease-in-out infinite;
        }

        .wifi-ring {
          animation: wifiRing 3s ease-in-out infinite;
        }

        .wifi-source {
          animation: wifiSource 2s ease-in-out infinite;
        }

        @keyframes wifiCoverage {
          0%,
          100% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1.02);
          }
        }

        @keyframes wifiRing {
          0%,
          100% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.4;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        @keyframes wifiSource {
          0%,
          100% {
            opacity: 0.9;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes luxifiInnerGlow {
          0%,
          100% {
            opacity: 0.9;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .wifi-coverage,
          .wifi-ring,
          .wifi-source {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
