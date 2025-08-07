"use client"

import { useState } from "react"


export default function Partners() {
  const [hoveredPartner, setHoveredPartner] = useState(null)
  const partners = [
  {
    name: "Ubiquiti",
    logo: "/placeholder.svg?height=80&width=160&text=Ubiquiti",
    description: "Enterprise WiFi Solutions",
  },
  {
    name: "Grand Stream",
    logo: "/placeholder.svg?height=80&width=160&text=GrandStream",
    description: "VoIP & Networking",
  },
  {
    name: "Alta Lab",
    logo: "/placeholder.svg?height=80&width=160&text=AltaLab",
    description: "Smart Home Integration",
  },
  { name: "Cisco", logo: "/placeholder.svg?height=80&width=160&text=Cisco", description: "Network Infrastructure" },
  { name: "HP", logo: "/placeholder.svg?height=80&width=160&text=HP", description: "Enterprise Hardware" },
  { name: "Aruba", logo: "/placeholder.svg?height=80&width=160&text=Aruba", description: "Wireless Solutions" },
  { name: "Snap One", logo: "/placeholder.svg?height=80&width=160&text=SnapOne", description: "Home Automation" },
  { name: "Sonicwall", logo: "/placeholder.svg?height=80&width=160&text=Sonicwall", description: "Network Security" },
]


  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-8xl font-bold font-playfair mb-8">
              Our <span className="gradient-wave block mt-4">Trusted Partners</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto font-light leading-relaxed">
              We partner with the world's most prestigious networking brands to deliver unparalleled quality and
              reliability for your luxury estate's connectivity infrastructure.
            </p>
          </div>

          {/* Interactive Partner Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="glass-luxury rounded-2xl p-8 h-40 flex flex-col items-center justify-center group hover:scale-110 transition-all duration-500 perspective-1000"
                onMouseEnter={() => setHoveredPartner(index)}
                onMouseLeave={() => setHoveredPartner(null)}
              >
                <div className="relative">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    className={`max-w-full max-h-16 object-contain transition-all duration-300 ${
                      hoveredPartner === index
                        ? "opacity-100 filter-none scale-110"
                        : "opacity-70 filter brightness-0 invert"
                    }`}
                  />
                  {hoveredPartner === index && (
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-cyan-400 whitespace-nowrap slide-in-bounce">
                      {partner.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Infinite Scrolling Logo Carousel */}
          <div className="relative overflow-hidden mb-16">
            <div className="flex animate-scroll">
              {/* First set */}
              {partners.map((partner, index) => (
                <div key={index} className="flex-shrink-0 w-64 mx-8">
                  <div className="glass-luxury rounded-2xl p-8 h-32 flex items-center justify-center group hover:scale-110 transition-all duration-500">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert group-hover:filter-none"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 w-64 mx-8">
                  <div className="glass-luxury rounded-2xl p-8 h-32 flex items-center justify-center group hover:scale-110 transition-all duration-500">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert group-hover:filter-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              {
                number: "8+",
                label: "Elite Partners",
                description: "Industry-leading brands",
                emoji: "🤝",
                color: "from-purple-500 to-blue-500",
              },
              {
                number: "99.9%",
                label: "Network Uptime",
                description: "Enterprise reliability",
                emoji: "⚡",
                color: "from-blue-500 to-teal-500",
              },
              {
                number: "24/7",
                label: "Premium Support",
                description: "Always available",
                emoji: "🛡️",
                color: "from-teal-500 to-green-500",
              },
              {
                number: "100%",
                label: "Satisfaction",
                description: "Guaranteed results",
                emoji: "⭐",
                color: "from-green-500 to-purple-500",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-luxury rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-500"
              >
                <div className="text-6xl mb-4 zoom-pulse">{stat.emoji}</div>
                <div
                  className={`text-5xl font-bold neon-text font-orbitron mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.number}
                </div>
                <div className="text-xl font-semibold mb-2 text-white">{stat.label}</div>
                <div className="text-white/60 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Partnership Benefits */}
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-12 neon-text font-orbitron">🚀 Why Our Partnerships Matter</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "🔬 Cutting-Edge Technology",
                  description: "Access to the latest networking innovations and enterprise-grade equipment",
                  emoji: "🔬",
                },
                {
                  title: "🎓 Certified Expertise",
                  description: "Factory-trained technicians with official certifications from all major brands",
                  emoji: "🎓",
                },
                {
                  title: "🛡️ Extended Warranties",
                  description: "Comprehensive coverage and support backed by manufacturer partnerships",
                  emoji: "🛡️",
                },
              ].map((benefit, index) => (
                <div key={index} className="glass-luxury rounded-2xl p-8 hover:scale-105 transition-all duration-500">
                  <div className="text-6xl mb-4 zoom-pulse">{benefit.emoji}</div>
                  <h4 className="text-2xl font-semibold mb-4 text-cyan-400 font-orbitron">{benefit.title}</h4>
                  <p className="text-white/70 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
