"use client";

import { motion } from "framer-motion";
import SectionTitle from "../Layout/Titles/SectionTitle";
import Description from "../Layout/Descriptions/Description";
import RenderSectionVideo from "../Layout/Video/RenderSectionVideo";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center md:min-h-screen md:justify-center px-4">
      <RenderSectionVideo videoPath="/videos/blog-video.mp4" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/30 pointer-events-none" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center pt-48 md:pt-24"
      >
        <div className="relative">
          <SectionTitle
            title="Smart Home Tips & WiFi Trends"
            textClassName="text-white text-soft-shadow"
          />
          {/* Decorative underline */}
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-300 to-orange-400 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          {/* Subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-orange-400/10 blur-3xl -z-10"></div>
        </div>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 w-full flex justify-center mt-4"
      >
        <div className="max-w-4xl rounded-2xl border border-white/10 bg-base-content/25 backdrop-blur px-6 py-4">
          <Description
            className="text-center"
            textClassName="text-white/90 text-soft-shadow"
            description="Explore quick, expert insights on home WiFi, smart tech, and security — built to keep your home connected, reliable, and future-ready."
          />
        </div>
      </motion.div>
    </section>
  );
}
