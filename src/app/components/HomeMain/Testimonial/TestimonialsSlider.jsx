"use client"

import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import { motion } from "framer-motion"

import { testimonials } from "../../../lib/data/homedata"
import { TestimonialCard } from "./TestimonialCard"
import { SectionLayout } from "../Luxifi/SectionLayout"


export function TestimonialsSlider() {
  const splideOptions = {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "1.5rem",
    autoplay: true,
    interval: 4000,
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: true,
    pagination: true,
    speed: 800,
    easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
    breakpoints: {
      1200: {
        perPage: 2,
        gap: "1rem",
      },
      768: {
        perPage: 1,
        gap: "0.5rem",
        arrows: false, // Hide arrows on mobile for cleaner look
        padding: { left: "1rem", right: "1rem" },
      },
      480: {
        perPage: 1,
        gap: "0.25rem",
        arrows: false,
        padding: { left: "0.5rem", right: "0.5rem" },
      },
    },
  }

  return (
    <SectionLayout backgroundColor="#000000" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.6),transparent_70%)]" />

      <div className="relative z-10 text-center mb-12 md:mb-16 max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] rounded-full px-4 md:px-5 py-2 mb-6 md:mb-8 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
          <span className="text-xs font-semibold text-white/90 tracking-wide uppercase">Client Testimonials</span>
        </motion.div>

        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Trusted by{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Industry Leaders
          </span>
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover why thousands of businesses choose us for exceptional results and innovative solutions.
        </motion.p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
        <Splide options={splideOptions} className="professional-testimonials">
          {testimonials.map((testimonial, index) => (
            <SplideSlide key={index}>
              <TestimonialCard testimonial={testimonial} index={index} />
            </SplideSlide>
          ))}
        </Splide>
      </div>

    </SectionLayout>
  )
}

