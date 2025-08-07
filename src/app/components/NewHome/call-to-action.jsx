"use client"


import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Zap, Shield, Award } from "lucide-react"

export default function CallToAction() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      console.log("Form submitted:", formData)
    }, 2000)
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-teal-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-cyan-400 to-teal-500"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl float-complex"></div>
          <div
            className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full blur-3xl float-complex"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Premium CTA Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-8xl font-bold font-playfair mb-8">
              Ready for a WiFi Solution <span className="gradient-wave block mt-4">That Finally Works?</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto font-light leading-relaxed">
              Transform your luxury estate with enterprise-grade WiFi that matches your sophisticated lifestyle.
              Experience the difference with a complimentary elite consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2 glass-luxury rounded-full px-6 py-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white">✨ Free On-Site Assessment</span>
              </div>
              <div className="flex items-center gap-2 glass-luxury rounded-full px-6 py-3">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-white">🛡️ Lifetime Warranty</span>
              </div>
              <div className="flex items-center gap-2 glass-luxury rounded-full px-6 py-3">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-white">⚡ 24/7 Priority Support</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Premium Contact Form */}
            <div className="glass-luxury rounded-3xl p-10 relative overflow-hidden">
              {/* Form Decoration */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-cyan-400 to-teal-500"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-full blur-3xl morphing-blob"></div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center zoom-pulse">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold neon-text font-orbitron">REQUEST ELITE CONSULTATION</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg text-white">👤 Full Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input input-bordered input-lg bg-black/50 border-cyan-400/30 focus:border-cyan-400 focus:bg-black/70 transition-all duration-300 text-white placeholder-white/50"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg text-white">📧 Email Address</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input input-bordered input-lg bg-black/50 border-cyan-400/30 focus:border-cyan-400 focus:bg-black/70 transition-all duration-300 text-white placeholder-white/50"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg text-white">📱 Phone Number</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input input-bordered input-lg bg-black/50 border-cyan-400/30 focus:border-cyan-400 focus:bg-black/70 transition-all duration-300 text-white placeholder-white/50"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg text-white">🏰 Tell us about your estate</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="textarea textarea-bordered h-40 bg-black/50 border-cyan-400/30 focus:border-cyan-400 focus:bg-black/70 transition-all duration-300 resize-none text-white placeholder-white/50"
                    placeholder="Describe your WiFi challenges, estate size, and connectivity needs..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cyber-btn w-full text-xl font-bold py-4 h-auto disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      PROCESSING...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      <Send className="w-6 h-6" />🚀 REQUEST FREE ELITE CONSULTATION
                    </div>
                  )}
                </button>
              </form>

              <div className="divider my-10 text-white/50">OR CONTACT US DIRECTLY</div>

              <div className="text-center">
                <p className="text-white/70 mb-6 text-lg">Prefer to speak with our luxury networking specialists?</p>
                <a href="tel:+1234567890" className="cyber-btn px-8 hover:scale-110 transition-all duration-300">
                  <Phone className="w-6 h-6 mr-3" />📞 CALL NOW: (123) 456-7890
                </a>
              </div>
            </div>

            {/* Premium Contact Information */}
            <div className="space-y-10">
              <div>
                <h3 className="text-4xl font-bold mb-8 neon-text font-orbitron">🌟 CONNECT WITH EXCELLENCE</h3>
                <p className="text-white/80 text-xl leading-relaxed mb-8 font-light">
                  Ready to experience flawless connectivity throughout your luxury estate? Our team of certified
                  networking experts is standing by to design a bespoke solution that exceeds your highest expectations.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: Phone,
                    title: "🔥 Elite Support Line",
                    primary: "(123) 456-7890",
                    secondary: "Available 24/7 for emergencies",
                    gradient: "from-purple-500 to-blue-500",
                    emoji: "📞",
                  },
                  {
                    icon: Mail,
                    title: "💎 Premium Contact",
                    primary: "hello@luxifi.com",
                    secondary: "Response within 1 hour guaranteed",
                    gradient: "from-blue-500 to-teal-500",
                    emoji: "📧",
                  },
                  {
                    icon: MapPin,
                    title: "🌍 Service Territory",
                    primary: "Luxury Estates Nationwide",
                    secondary: "White-glove on-site service",
                    gradient: "from-teal-500 to-green-500",
                    emoji: "🗺️",
                  },
                  {
                    icon: Clock,
                    title: "⏰ Consultation Hours",
                    primary: "Mon-Fri: 8AM-8PM",
                    secondary: "Sat-Sun: 9AM-6PM",
                    gradient: "from-green-500 to-purple-500",
                    emoji: "🕐",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="glass-luxury rounded-2xl p-6 hover:scale-105 transition-all duration-500 group"
                  >
                    <div className="flex items-start gap-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${contact.gradient} rounded-full flex items-center justify-center flex-shrink-0 zoom-pulse`}
                      >
                        <contact.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">{contact.emoji}</span>
                          <h4 className="font-bold text-xl text-cyan-400 font-orbitron">{contact.title}</h4>
                        </div>
                        <p className="text-white text-lg font-semibold mb-1">{contact.primary}</p>
                        <p className="text-white/60">{contact.secondary}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Premium Guarantee Badges */}
              <div className="glass-luxury rounded-3xl p-8 bg-gradient-to-br from-green-900/20 to-green-800/10 border-green-500/30 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-green-400/10 to-green-500/10 rounded-full blur-3xl morphing-blob"></div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center zoom-pulse">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-3xl text-green-400 font-orbitron">🏆 THE LUXIFI GUARANTEE</h4>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "✨ Complimentary on-site consultation and network assessment",
                    "🛡️ Lifetime warranty on all premium installations",
                    "⚡ 24/7 priority support with 1-hour response time",
                    "💯 100% satisfaction guarantee or full refund",
                    "🤵 White-glove service with minimal disruption",
                    "🚀 Future-proof technology with free upgrades",
                  ].map((guarantee, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-green-900/20 rounded-xl hover:bg-green-900/30 transition-all duration-300"
                    >
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 animate-pulse" />
                      <span className="text-white">{guarantee}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
