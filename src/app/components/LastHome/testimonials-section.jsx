"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionLayout } from "./luxifi/section-layout";

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
  {
    name: "Nigel Ramberansingh",
    text: "Adam is highly professional, honest, and organized. Provided clear estimates and outstanding service. Best company I’ve worked with in years!",
    rating: 5,
    title: "Satisfied Client",
    avatar: "👨‍💼",
    location: "Toronto, ON",
  },
];

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

            <p className="relative z-10 text-base-content mb-4 line-clamp-3 italic">
              "{testimonial.text}"
            </p>
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
