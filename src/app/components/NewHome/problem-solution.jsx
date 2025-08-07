"use client"

import { useState } from "react"
import { Wifi, Home, Zap, Shield, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react"

export default function ProblemSolution() {
  const [activeTab, setActiveTab] = useState("problem")

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-8xl font-bold font-playfair mb-8">
              Your Home Deserves <span className="gradient-wave block mt-4">Perfect Connectivity</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
              Your home is a sanctuary of luxury, where every detail reflects sophistication—except for unreliable WiFi
              that disrupts your perfect living experience.
            </p>
          </div>

          {/* Interactive Problem/Solution Toggle */}
          <div className="flex justify-center mb-16">
            <div className="glass-luxury rounded-full p-2 flex">
              <button
                onClick={() => setActiveTab("problem")}
                className={`px-8 py-4 rounded-full font-bold transition-all duration-300 ${
                  activeTab === "problem"
                    ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                🚨 THE PROBLEM
              </button>
              <button
                onClick={() => setActiveTab("solution")}
                className={`px-8 py-4 rounded-full font-bold transition-all duration-300 ${
                  activeTab === "solution"
                    ? "bg-gradient-to-r from-green-500 to-green-600 text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                ✨ THE SOLUTION
              </button>
            </div>
          </div>

          {/* Problem/Solution Content */}
          <div className="relative mb-24">
            {activeTab === "problem" && (
              <div className="slide-in-bounce">
                <div className="glass-luxury rounded-3xl p-12 border-red-500/30 bg-gradient-to-br from-red-900/20 to-red-800/10">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center zoom-pulse">
                      <AlertTriangle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-4xl font-bold text-red-400 font-orbitron">CURRENT PROBLEMS</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      "💀 Dead zones throughout your luxury estate",
                      "🐌 Inconsistent speeds in different rooms",
                      "📡 Frequent disconnections during important moments",
                      "🏚️ Outdated infrastructure that can't keep up",
                      "😤 Frustrating buffering during video calls",
                      "🔒 Security vulnerabilities in your network",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-6 bg-red-900/20 rounded-xl hover:bg-red-900/30 transition-all duration-300 glitch-effect"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-white text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "solution" && (
              <div className="slide-in-bounce">
                <div className="glass-luxury rounded-3xl p-12 border-green-500/30 bg-gradient-to-br from-green-900/20 to-green-800/10">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center zoom-pulse">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-4xl font-bold text-green-400 font-orbitron">LUXIFI SOLUTIONS</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      "🏰 Complete estate coverage with zero dead zones",
                      "⚡ Consistent gigabit speeds everywhere",
                      "🛡️ Enterprise-grade reliability and uptime",
                      "🚀 Future-proof infrastructure that scales",
                      "📱 Seamless device handoff and roaming",
                      "🔐 Military-grade security protection",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-6 bg-green-900/20 rounded-xl hover:bg-green-900/30 transition-all duration-300 float-complex"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-white text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Premium Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Wifi,
                title: "Estate Coverage",
                description: "Complete WiFi coverage throughout your entire property with zero dead zones",
                gradient: "from-purple-500 to-blue-500",
                emoji: "🏰",
              },
              {
                icon: Home,
                title: "Smart Integration",
                description: "Seamlessly connects with your smart home ecosystem and luxury amenities",
                gradient: "from-blue-500 to-teal-500",
                emoji: "🏠",
              },
              {
                icon: Zap,
                title: "Lightning Speed",
                description: "Gigabit speeds for all your connected devices and streaming needs",
                gradient: "from-teal-500 to-green-500",
                emoji: "⚡",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-level security protecting your network and personal data",
                gradient: "from-green-500 to-purple-500",
                emoji: "🛡️",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass-luxury rounded-2xl p-8 text-center group hover:scale-110 transition-all duration-500 perspective-1000"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-6xl mb-4 zoom-pulse">{feature.emoji}</div>
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:rotate-3d`}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 neon-text font-orbitron">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
                <div className="mt-6">
                  <ArrowRight className="w-6 h-6 text-cyan-400 mx-auto group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
