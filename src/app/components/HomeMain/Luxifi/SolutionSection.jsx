"use client";

import { useState, useEffect } from "react";
import LinearRight from "../../Layout/Images/LinearRight";
import Link from "next/link";

export default function SolutionSection() {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, []);

  const luxifiSolution = {
    signals: [
      {
        id: 1,
        x: "55%", // Left side of house roof
        y: "32%", // On top of house structure
        size: "220px",
        innerSize: "200px",
        color: "#DCA54D",
        ringColor: "#DCA54D",
      },
      {
        id: 2,
        x: "70%", // Right side of house roof
        y: "40%", // On top of house structure
        size: "440px",
        innerSize: "210px",
        color: "#DCA54D",
        ringColor: "#DCA54D",
      },
      {
        id: 3,
        x: "20%", // Inside center of garage
        y: "60%", // Garage center position
        size: "180px",
        innerSize: "170px",
        color: "#DCA54D",
        ringColor: "#DCA54D",
      },
      // {
      //   id: 4,
      //   x: "40%", // Pool area - right side
      //   y: "65%", // Pool position
      //   size: "100px",
      //   innerSize: "185px",
      //   color: "#DCA54D",
      //   ringColor: "#DCA54D",
      // },
    ],
  };

  return (
    <div className="min-h-screen px-10 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
                THE SOLUTION?
                <br />
                <span className="bg-gradient-to-r text-base-content bg-clip-text ">
                  IT'S LUXIFI.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg text-primary leading-relaxed mb-8">
                Luxifi delivers high-performance, enterprise-grade Wi-Fi
                throughout your home using a fully wired network foundation.
                Every access point is hardwired for maximum speed, stability,
                and reach — giving you flawless coverage from room to room and
                wall to wall.
              </p>

              <button className="px-8 py-4 btn btn-primary  font-semibold rounded-lg transition-all duration-300  hover:scale-105 hover:shadow-lg hover:shadow-yellow-400-500/25">
                <Link href="/contact">GET STARTED</Link>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-[480px]  ">
              <div className="relative w-full h-full overflow-hidden  p-4">
                <img
                  src="/images/home/house.webp"
                  alt="Smart Home with Complete Coverage Including Pool"
                  className="w-full h-full object-contain contrast-130 saturate-110"
                />

                <div className="absolute inset-0">
                  {luxifiSolution.signals.map((signal, index) => (
                    <div
                      key={`${signal.id}-${animationKey}`}
                      className="absolute inset-0"
                    >
                      {/* Extra Large Coverage Area - Covers house + pool + courtyard */}
                      <div
                        className="absolute rounded-full transition-all duration-2000 ease-out"
                        style={{
                          left: signal.x,
                          top: signal.y,
                          width: signal.size,
                          height: signal.size,
                          transform: "translate(-50%, -50%)",
                          background: `radial-gradient(circle, ${signal.color}40 0%, ${signal.color}25 30%, ${signal.color}15 60%, ${signal.color}08 80%, transparent 90%)`,
                          filter: "blur(30px)",
                          opacity: 0.7,
                          animation: `gentle-pulse 4s ease-in-out infinite ${
                            index * 0.8
                          }s`,
                        }}
                      />

                      {/* Large Coverage Core */}
                      <div
                        className="absolute rounded-full transition-all duration-2000 ease-out"
                        style={{
                          left: signal.x,
                          top: signal.y,
                          width: signal.innerSize,
                          height: signal.innerSize,
                          transform: "translate(-50%, -50%)",
                          background: `radial-gradient(circle, ${signal.color}50 0%, ${signal.color}30 40%, ${signal.color}20 70%, ${signal.color}10 85%, transparent 95%)`,
                          filter: "blur(20px)",
                          opacity: 0.8,
                          animation: `gentle-pulse 3.5s ease-in-out infinite ${
                            index * 0.6
                          }s`,
                        }}
                      />

                      {/* Extended Signal Waves - Reaching pool area */}
                      {[1, 2, 3, 4, 5].map((wave) => (
                        <div
                          key={`wave-${signal.id}-${wave}`}
                          className="absolute border rounded-full"
                          style={{
                            left: signal.x,
                            top: signal.y,
                            width: `${100 + wave * 10}px`,
                            height: `${100 + wave * 10}px`,
                            transform: "translate(-50%, -50%)",
                            borderColor: signal.ringColor,
                            borderWidth: "1px",
                            opacity: 0.5 - wave * 0.08,
                            animation: `gentle-expand 6s ease-out infinite ${
                              index * 0.8 + wave * 0.7
                            }s`,
                          }}
                        />
                      ))}

                      {/* Professional Access Point on House */}
                      <div
                        className="absolute rounded-full border-2 border-white"
                        style={{
                          left: signal.x,
                          top: signal.y,
                          width: "16px",
                          height: "16px",
                          transform: "translate(-50%, -50%)",
                          backgroundColor: signal.ringColor,
                          animation: `signal-point-glow 2.5s ease-in-out infinite ${
                            index * 0.4
                          }s`,
                          boxShadow: `0 0 25px ${signal.ringColor}, 0 0 40px ${signal.ringColor}50, inset 0 0 12px rgba(255,255,255,0.5)`,
                        }}
                      />

                      {/* Access Point Inner Light */}
                      <div
                        className="absolute rounded-full"
                        style={{
                          left: signal.x,
                          top: signal.y,
                          width: "10px",
                          height: "10px",
                          transform: "translate(-50%, -50%)",
                          backgroundColor: "rgba(255, 255, 255, 0.95)",
                          animation: `signal-inner-glow 2.5s ease-in-out infinite ${
                            index * 0.4
                          }s`,
                          boxShadow: `0 0 15px rgba(255,255,255,0.9)`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
