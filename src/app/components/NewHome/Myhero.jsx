// "use client"

// import { useState, useEffect } from "react"
// import { Wifi, Shield, Zap, ArrowDown } from "lucide-react"
// import VideoBackground from "./video-background"

// const headlines = [
//   "Experience the Connectivity You Deserve: WiFi Solutions Tailored for Your Grand Estate's Elegance",
//   "Seamless Connectivity, Endless Possibilities: WiFi Designed Exclusively for Your Estate",
//   "If You Can Dream It, You Can Do It",
// ]

// export default function Myhero() {
//   const [currentHeadline, setCurrentHeadline] = useState(0)
//   const [typedText, setTypedText] = useState("")
//   const [isTyping, setIsTyping] = useState(true)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentHeadline((prev) => (prev + 1) % headlines.length)
//       setTypedText("")
//       setIsTyping(true)
//     }, 6000)
//     return () => clearInterval(interval)
//   }, [])

//   useEffect(() => {
//     if (isTyping) {
//       const currentText = headlines[currentHeadline]
//       let i = 0
//       const typingInterval = setInterval(() => {
//         if (i < currentText.length) {
//           setTypedText(currentText.slice(0, i + 1))
//           i++
//         } else {
//           setIsTyping(false)
//           clearInterval(typingInterval)
//         }
//       }, 50)
//       return () => clearInterval(typingInterval)
//     }
//   }, [currentHeadline, isTyping])

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Animated Video Background */}
//       <VideoBackground opacity={0.15} />

//       {/* Particle System */}
//       <div className="particle-system relative z-20">
//         {[...Array(20)].map((_, i) => (
//           <div key={i} className="particle" style={{ left: `${Math.random() * 100}%` }}></div>
//         ))}
//       </div>

//       {/* Animated Background */}
//       <div className="absolute inset-0 relative z-10">
//         {/* Morphing Blobs */}
//         <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 morphing-blob blur-3xl"></div>
//         <div
//           className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 liquid-morph blur-3xl"
//           style={{ animationDelay: "2s" }}
//         ></div>
//         <div
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-teal-500/20 morphing-blob blur-3xl"
//           style={{ animationDelay: "4s" }}
//         ></div>

//         {/* Matrix Rain Effect */}
//         <div className="absolute inset-0 opacity-10">
//           {[...Array(50)].map((_, i) => (
//             <div
//               key={i}
//               className="matrix-char absolute text-xs"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 3}s`,
//                 animationDuration: `${3 + Math.random() * 2}s`,
//               }}
//             >
//               {String.fromCharCode(0x30a0 + Math.random() * 96)}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="relative z-30 container mx-auto px-4 text-center">
//         {/* Main Headline */}
//         <div className="mb-12">
//           <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold font-playfair leading-tight mb-8">
//             <span className="block gradient-wave mb-4">LUXIFI</span>
//             <span className="block text-2xl md:text-4xl lg:text-6xl font-orbitron neon-text">
//               {typedText}
//               {isTyping && <span className="animate-pulse">|</span>}
//             </span>
//           </h1>

//           {currentHeadline === 2 && (
//             <p className="text-xl md:text-3xl text-white/80 mb-8 slide-in-bounce font-light">
//               Take the first step toward a better home experience with reliable, uninterrupted connection for all your
//               needs.
//             </p>
//           )}
//         </div>

//         {/* Subheadline */}
//         <div className="max-w-5xl mx-auto mb-16">
//           <p className="text-lg md:text-2xl text-white/70 leading-relaxed font-light italic hologram-effect">
//             "Tired of unreliable WiFi in your luxury home? We get it. Luxifi offers tailored solutions that banish dead
//             zones, providing flawless, worry-free connectivity throughout your estate."
//           </p>
//         </div>

//         {/* Floating Feature Cards */}
//         <div className="flex flex-wrap justify-center gap-8 mb-16">
//           {[
//             { icon: Wifi, text: "Estate-Wide Coverage", delay: "0s" },
//             { icon: Shield, text: "Enterprise Security", delay: "0.5s" },
//             { icon: Zap, text: "Lightning Fast", delay: "1s" },
//           ].map((feature, index) => (
//             <div
//               key={index}
//               className="glass-luxury rounded-2xl p-6 hover:scale-110 transition-all duration-500 float-complex"
//               style={{ animationDelay: feature.delay }}
//             >
//               <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto zoom-pulse">
//                 <feature.icon className="w-8 h-8 text-white" />
//               </div>
//               <span className="text-white font-medium text-lg">{feature.text}</span>
//             </div>
//           ))}
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
//           <button className="cyber-btn rounded-full px-12 py-4 text-xl font-bold hover:scale-110 transition-all duration-300">
//             🚀 REQUEST ELITE CONSULTATION
//           </button>
//           <button className="glass-luxury rounded-full px-12 py-4 text-xl font-bold text-white border-2 border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-400/10 hover:scale-110 transition-all duration-300">
//             👁️ VIEW PORTFOLIO
//           </button>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//           {[
//             { number: "99.9%", label: "Network Uptime", icon: "⚡" },
//             { number: "24/7", label: "Elite Support", icon: "🛡️" },
//             { number: "100%", label: "Satisfaction", icon: "⭐" },
//           ].map((stat, index) => (
//             <div
//               key={index}
//               className="glass-luxury rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 glitch-effect"
//               style={{ animationDelay: `${index * 0.2}s` }}
//             >
//               <div className="text-4xl mb-2">{stat.icon}</div>
//               <div className="text-4xl font-bold neon-text font-orbitron mb-2">{stat.number}</div>
//               <div className="text-white/70">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-8 h-12 border-2 border-cyan-400 rounded-full flex justify-center">
//           <ArrowDown className="w-4 h-4 text-cyan-400 mt-2 animate-pulse" />
//         </div>
//       </div>
//     </section>
//   )
// }



import React from 'react'

export default function Myhero() {
  return (
    <div>Myhero</div>
  )
}
