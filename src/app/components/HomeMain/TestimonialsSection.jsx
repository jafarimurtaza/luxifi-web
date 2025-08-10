"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionLayout } from "./Luxifi/SectionLayout";
import Description from "../Layout/Descriptions/Description";
import { testimonials } from "../../lib/data/homedata"



export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <SectionLayout
      backgroundColor="#000"
      className="py-20 relative overflow-hidden"
    >
      <div className="relative z-10 col-span-2 text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          WHAT CLIENTS ARE SAYING
        </motion.h2>
        <motion.p
          className="text-lg text-white/70 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          More than service — it’s an experience.
        </motion.p>
      </div>

      {/* Testimonial Preview Grid */}
      <div className="relative  z-10 col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {testimonials.slice(0, 6).map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-black/10 backdrop-blur-lg rounded-xl p-6 hover:scale-102 transition-all duration-300 group border border-white/10 shadow-2xl "
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{
              boxShadow:
                "5px 0 15px rgba(196, 193, 193, 0.594), 5px 0 10px rgba(210, 171, 171, 0.644)",
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle at 50% 0%, rgba(252,211,77,0.1) 0%, transparent 70%)`,
                filter: "blur(60px)",
                zIndex: 0,
              }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 text-4xl mb-4 text-center">
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              >
                {testimonial.avatar}
              </motion.span>
            </div>

            <Description description={testimonial.text} />

            <div className="relative z-10 border-t border-white/10 pt-4">
              <div className="font-bold text-white">{testimonial.name}</div>
              <div className="text-sm text-primary/70">{testimonial.title}</div>
              <div className="text-xs text-primary/60">
                📍 {testimonial.location}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}
