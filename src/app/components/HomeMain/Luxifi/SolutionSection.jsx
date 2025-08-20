"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SolutionSection() {
  return (
    <div className="min-h-screen lg:px-10 md:px-4 text-white bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 py-12 lg:py-20">
        {/* Simple Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            THE SOLUTION?
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              IT'S LUXIFI.
            </span>
          </h2>
        </div>

        {/* Clean Coverage Visualization */}
        <div className="flex justify-center items-center lg:min-h-[600px] min-h-auto">
          <div className="relative max-w-4xl w-full">
            {/* House Image */}
            <div className="relative flex justify-center">
              <img
                src="/images/home/house.webp"
                alt="Luxifi Complete Coverage"
                className="w-full max-w-[600px] md:max-w-[700px] lg:max-w-[800px] h-auto object-contain"
                style={{
                  filter:
                    "brightness(1.3) contrast(1.4) drop-shadow(0 8px 24px rgba(0,0,0,0.5))",
                }}
              />

              {/* Coverage Bubbles Overlay */}
              <div className="absolute inset-0">
                {/* Overlapping Coverage Areas */}
                <div className="absolute inset-0">
                  {/* Center overlap area */}
                  <div
                    className="absolute lg:w-[252px] w-[100px] sm:w-[150px] md:w-[200px] lg:h-[252px] h-[100px] sm:h-[150px] md:h-[200px] rounded-full left-[62%] lg:left-[64%] top-[67%] lg:top-[69%] translate-x-[-50%] translate-y-[-50%]"
                    style={{
                      backgroundColor: "rgb(34 197 94 / 71%)",
                      animation: "overlapGlow 6s ease-in-out infinite",
                    }}
                  />

                  <div
                    className="absolute lg:w-[270px] w-[100px] sm:w-[150px] md:w-[200px] lg:h-[270px] h-[100px] sm:h-[150px] md:h-[200px] rounded-full right-[11%] top-[63%] lg:top-[63%] translate-x-[50%] translate-y-[-50%]"
                    style={{
                      backgroundColor: "rgb(34 197 94 / 71%)",
                      animation: "overlapGlow 12s ease-in-out infinite",
                    }}
                  />
                  <div
                    className="absolute lg:w-[272px] w-[100px] sm:w-[150px] md:w-[200px] lg:h-[272px] h-[100px] sm:h-[150px] md:h-[200px] rounded-full left-[34%] lg:left-[37%] bottom-[10%] lg:bottom-[-4%] translate-x-[-50%] translate-y-[50%]"
                    style={{
                      backgroundColor: "rgb(34 197 94 / 71%)",
                      animation: "overlapGlow 10s ease-in-out infinite",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Complete Wi-Fi coverage for your entire property
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
            <Link href="/contact">GET STARTED</Link>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes coveragePulse {
          0%,
          100% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.4;
            transform: translate(-50%, -50%) scale(1.05);
          }
        }

        @keyframes innerPulse {
          0%,
          100% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.9;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        @keyframes overlapGlow {
          0%,
          100% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1.2);
          }
        }

        @keyframes edgePulse {
          0%,
          100% {
            opacity: 0.4;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(1.15);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
          }
        }

        @media (max-width: 768px) {
          @keyframes coveragePulse {
            0%,
            100% {
              opacity: 0.6;
              transform: translate(-50%, -50%) scale(0.8);
            }
            50% {
              opacity: 0.3;
              transform: translate(-50%, -50%) scale(0.85);
            }
          }
        }
      `}</style>
    </div>
  );
}
