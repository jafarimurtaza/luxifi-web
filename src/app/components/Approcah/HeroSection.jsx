"use client";

import Description from "../Layout/Descriptions/Description";
import LinearLeft from "../Layout/Images/LinearLeft";
import RenderBigIntroImage from "../Layout/Images/RenderBigIntroImage";
import SectionTitle from "../Layout/Titles/SectionTitle";
import IntroImage from "../Layout/Images/IntroImage";
import { motion } from "framer-motion";
import { useMemo } from "react";
import Link from "next/link";

function mulberry32(seed) {
  let t = seed + 0x6d2b79f5;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

export default function HeroSection() {
  // Generate deterministic particle positions and timings to avoid hydration mismatch
  const particles = useMemo(() => {
    const prng = (i) => mulberry32(123456 + i * 1337);
    return Array.from({ length: 6 }).map((_, i) => {
      const r1 = prng(i);
      const r2 = prng(i + 1000);
      const r3 = prng(i + 2000);
      const r4 = prng(i + 3000);
      return {
        left: `${(5 + r1 * 90).toFixed(4)}%`,
        top: `${(5 + r2 * 90).toFixed(4)}%`,
        duration: 4 + r3 * 2,
        delay: r4 * 2,
      };
    });
  }, []);

  return (
    <section className="relative px-4 flex flex-col items-center justify-center md:min-h-screen overflow-hidden">
      {/* Dimmed overlay for contrast */}
      <div className="absolute inset-0 bg-black/50" />
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/10 via-transparent to-amber-100/5 animate-pulse"></div>

      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-amber-300/20 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-lg rotate-45 animate-bounce-slow"></div>

      {/* Particle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-400/30 rounded-full"
            style={{ left: p.left, top: p.top }}
            animate={{ y: [0, -100, 0], opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Enhanced Section Title with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center pt-8 md:pt-4"
        >
          <div className="relative">
            <SectionTitle
              title="How We Set the Bar"
              textClassName="text-white text-soft-shadow"
            />

            {/* Animated underline with gradient */}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-300 to-orange-400 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            {/* Glowing effect behind title */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-orange-400/10 blur-3xl -z-10"></div>
          </div>
        </motion.div>

        {/* Enhanced Subtitle with Gradient Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="inline-block px-4 py-2 rounded-xl bg-black/40 backdrop-blur">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white text-soft-shadow">
              Luxury-Grade Connectivity,
              <span className="text-amber-300">Delivered with Heart</span>
            </h2>
          </div>
        </motion.div>

        {/* Enhanced Description Paragraphs with Staggered Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="space-y-6 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative group"
          >
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-500 rounded-full opacity-60"></div>
            <div className="absolute -right-4 top-0 w-1 h-full bg-gradient-to-b from-orange-500 to-amber-400 rounded-full opacity-60"></div>
            <div className="rounded-xl bg-black/40 backdrop-blur px-4 py-3">
              <Description
                textClassName="text-white/90 text-soft-shadow"
                description={`At Luxifi, our difference isn't just in what we install — it's in how we show up. We combine expert engineering with human-centered care, ensuring every client feels heard, supported, and delighted from the first call to the final test.`}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative group"
          >
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-500 rounded-full opacity-60"></div>
            <div className="absolute -right-4 top-0 w-1 h-full bg-gradient-to-b from-orange-500 to-amber-400 rounded-full opacity-60"></div>
            <div className="rounded-xl bg-black/40 backdrop-blur px-4 py-3">
              <Description
                textClassName="text-white/90 text-soft-shadow"
                description="Our promise is simple: We make your Wi-Fi invisible — because when it works flawlessly, you shouldn't have to think about it."
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Interactive CTA Button with Enhanced Effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="pt-8"
        >
          <motion.button
            className="relative group px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative z-10">
              <Link href="#promise">Discover Our Approach</Link>
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>

            {/* Button particles - deterministic positions */}
            <div className="absolute inset-0 overflow-hidden">
              {[0, 1, 2].map((i) => {
                const r = mulberry32(999 + i);
                const left = 20 + i * 30;
                const delay = r * 0.5;
                return (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/60 rounded-full"
                    style={{ left: `${left}%`, top: "50%" }}
                    animate={{ y: [-10, 10, -10], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay }}
                  />
                );
              })}
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #f59e0b 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Floating accent elements */}
      <motion.div
        className="absolute top-1/4 right-8 w-32 h-32 border border-amber-300/20 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-8 w-24 h-24 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-lg"
        animate={{
          rotate: -360,
          y: [0, -20, 0],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      />
    </section>
  );
}
