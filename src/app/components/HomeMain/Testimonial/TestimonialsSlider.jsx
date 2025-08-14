"use client"

import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import { motion } from "framer-motion"
import { testimonials } from "../../../lib/data/homedata"
import { TestimonialCard } from "./TestimonialCard"

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
        arrows: false,
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
    <div className="min-h-screen flex flex-col items-center justify-center py-16 md:py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.6),transparent_70%)]" />

      <div className="relative z-10 text-center mb-8 md:mb-12 max-w-3xl mx-auto px-4 md:px-6">
        

        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold text-white mb-2 md:mb-4 leading-tight tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Trusted by{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
            Home owners
          </span>
        </motion.h2>
      </div>

      <div className="relative z-10 flex items-center justify-center flex-1 px-2 sm:px-4 md:px-6">
        <div className="w-full max-w-7xl mx-auto">
          <Splide options={splideOptions} className="professional-testimonials">
            {testimonials.map((testimonial, index) => (
              <SplideSlide key={index}>
                <TestimonialCard testimonial={testimonial} index={index} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  )
}
