"use client";
import Link from "next/link";
import { useState } from "react";

export default function FooterCTA() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      console.log("Email submitted:", email);
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <div className="space-y-16 mt-12">
      {/* Main Call-to-Action Section */}
      <div className="relative overflow-hidden">
        {/* Background with animated gradient */}

        {/* Animated background elements */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative p-12 md:p-16 text-center">
          {/* Header Section */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to get
              <span className="bg-gradient-to-r from-primary via-amber-400 to-primary bg-clip-text text-transparent">
                {" "}
                started?
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Take the first step toward{" "}
              <span className="text-primary font-semibold">
                better connectivity
              </span>{" "}
              and experience a premium network solution today.
            </p>
          </div>

          {/* Main CTA Button */}
          <div className="relative">
            <Link href="/contact" className="inline-block group">
              <div className="relative">
                {/* Animated background glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary via-amber-500 to-primary rounded-full blur-lg opacity-30 group-hover:opacity-60 transition duration-700 animate-pulse"></div>

                <button className="relative flex items-center gap-4 px-4 lg:px-12 py-3 lg:py-5 bg-gradient-to-r from-primary via-amber-500 to-primary bg-size-200 hover:bg-pos-100 text-black font-bold text-xl rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-primary/40 overflow-hidden">
                  {/* Button content */}
                  <span className="relative z-10 flex items-center gap-3 text-base lg:text-xl">
                    Get Started Today
                    <svg
                      className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <div className="max-w-4xl mb-12 mx-auto px-4">
        <div className="group relative">
          {/* Glowing border effect */}

          <div className="relative bg-gradient-to-br from-slate-800/60 via-slate-900/80 to-slate-800/60 backdrop-blur-xl border border-slate-700/30 rounded-3xl p-4 md:p-12 shadow-xl">
            {/* Newsletter Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full"></div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Stay Informed
                </h3>
              </div>

              <p className="text-gray-300 text-base lg:text-lg mb-2">
                Get the latest insights on network technology and industry
                updates
              </p>
            </div>

            {/* Newsletter Form */}
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group max-w-2xl mx-auto">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-6 py-4 bg-slate-800/90 backdrop-blur-sm border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-base"
                        required
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <button
                      type="submit"
                      className="group/btn relative px-4 lg:px-6 py-3 lg:py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 whitespace-nowrap"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Subscribe
                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
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
                      </span>
                    </button>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-gray-400 text-sm">
                    📧 Weekly insights • 🔒 No spam, unsubscribe anytime
                  </p>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 max-w-md mx-auto">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-green-400 mb-2">
                  Welcome to our community!
                </h4>
                <p className="text-gray-400">
                  Check your inbox for a confirmation email.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
