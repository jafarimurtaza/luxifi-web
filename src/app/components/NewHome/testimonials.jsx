"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote, Play } from "lucide-react"

const testimonials = [
  {
    name: "Sarah W.",
    text: "After years of poor WiFi in our estate, Luxifi provided a flawless solution. Professional, discreet, and now we have perfect coverage throughout. Highly recommended!",
    rating: 5,
    title: "Estate Owner",
    avatar: "👩‍💼",
    location: "Beverly Hills, CA",
  },
  {
    name: "Kris Bender",
    text: "Adam (Luxifi) resolved all our network issues with professionalism and patience. Excellent service. Highly recommend it!",
    rating: 5,
    title: "Luxury Homeowner",
    avatar: "👨‍💻",
    location: "Manhattan, NY",
  },
  {
    name: "James Mackenzie",
    text: "Luxifi (Adam) transformed my home office with a flawless Ethernet installation. As a tech-savvy client, I'm impressed by his expertise. Absolutely recommended for networking needs!",
    rating: 5,
    title: "Tech Executive",
    avatar: "👨‍💼",
    location: "Silicon Valley, CA",
  },
  {
    name: "Sam Mishael",
    text: "Luxifi solved our weak WiFi problem with a wired access point. Timely, professional, and effective. Highly recommended!",
    rating: 5,
    title: "Property Owner",
    avatar: "🏡",
    location: "Miami, FL",
  },
  {
    name: "Shawn Conlin",
    text: "Exceptional service from a professional company. Adam was extremely helpful throughout the process!",
    rating: 5,
    title: "Residential Client",
    avatar: "👨‍🏫",
    location: "Austin, TX",
  },
  {
    name: "Melanie Gavrel",
    text: "Adam (Luxifi) brought my project to life quickly and with expertise. Clear communication and fast work. Would definitely hire him again!",
    rating: 5,
    title: "Project Manager",
    avatar: "👩‍🔧",
    location: "Seattle, WA",
  },

]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])


  return (
    <section className="py-32 relative overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-8">
              What Our <span className="gradient-wave block mt-4">Elite Clients Say</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light">
              Don't just take our word for it. Here's what luxury homeowners say about their transformative Luxifi
              experience.
            </p>
          </div>

   

          {/* Testimonial Preview Grid */}
          <div className="grid md:grid-cols-3 gap-8 ">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-luxury rounded-2xl p-6 hover:scale-105 transition-all duration-500 group"
              >
                <div className="text-4xl mb-4 text-center zoom-pulse">{testimonial.avatar}</div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-white/80 mb-4 line-clamp-3 italic">"{testimonial.text}"</p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-bold text-base-content font-orbitron">{testimonial.name}</div>
                  <div className="text-sm text-white/60">{testimonial.title}</div>
                  <div className="text-xs text-purple-400">📍 {testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
