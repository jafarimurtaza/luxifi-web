"use client";
import Link from "next/link";
import { useState } from "react";

export default function FooterCTA() {
  const [email, setEmail] = useState("");
  return (
    <div className="mt-12 bg-black/90 rounded-2xl p-10 md:p-16 text-center shadow-xl border border-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Ready to get started?
      </h2>
      <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
        Take the first step toward{" "}
        <span className="text-base-content font-semibold">
          better connectivity
        </span>{" "}
        and experience a premium network solution today.
      </p>
    {/* subscribe section */}
      <div className="max-w-2xl mx-auto mb-20">
        <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground">Stay Updated</h3>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Email submitted:", email);
            }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <div className="relative flex-1 w-full group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email "
                className="w-full pl-6 pr-32 py-5 bg-background/90 backdrop-blur-md border-2 border-primary/30 rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-500 hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10"
                required
              />
              <button
                type="submit"
                className="absolute right-2 cursor-pointer top-1/2 -translate-y-1/2 bg-gradient-to-r from-primary via-amber-500 to-primary bg-size-200 hover:bg-pos-100 text-white px-6 py-3 rounded-xl font-bold transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 group-hover:animate-pulse"
              >
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline">Join</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </button>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </form>
        </div>
      </div>

      {/* Main CTA */}
      <Link href="/contact" className="inline-block group relative">
        <button
          className="
            relative flex items-center gap-3
            px-10 py-4 rounded-full
            font-semibold text-lg tracking-wide
            text-black bg-base-content
            shadow-[0_5px_20px_rgba(255,191,0,0.4)]
            transition-all duration-300
            hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,191,0,0.7)]
            overflow-hidden cursor-pointer
          "
        >
          <span className="relative z-10">Get Started</span>
          <div
            className="
              w-0 h-0 border-l-[12px] border-l-black
              border-t-[8px] border-t-transparent
              border-b-[8px] border-b-transparent
              transition-all duration-300
              group-hover:border-l-white
            "
          ></div>
          <span
            className="
              absolute inset-0 rounded-full border border-base-100
              opacity-50 group-hover:opacity-80 transition-opacity duration-500
            "
          ></span>
          <span
            className="
              absolute -left-40 top-0 w-40 h-full bg-gradient-to-r 
              from-white/20 via-white/50 to-white/20
              transform -skew-x-12 translate-x-0
              group-hover:translate-x-[120%]
              transition-transform duration-1000
            "
          ></span>
        </button>
      </Link>
    </div>
  );
}
