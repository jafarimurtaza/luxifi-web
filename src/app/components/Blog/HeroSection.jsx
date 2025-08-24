"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import Description from "../Layout/Descriptions/Description";
import SectionTitle from "../Layout/Titles/SectionTitle";
import IntroImage from "../Layout/Images/IntroImage";

function mulberry32(seed) {
  let t = seed + 0x6d2b79f5;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

export default function HeroSection() {
  // Generate deterministic particle positions to avoid hydration mismatch
  const particles = useMemo(() => {
    const prng = (i) => mulberry32(567890 + i * 1111);
    return Array.from({ length: 8 }).map((_, i) => {
      const r1 = prng(i);
      const r2 = prng(i + 1000);
      const r3 = prng(i + 2000);
      const r4 = prng(i + 3000);
      return {
        left: `${(10 + r1 * 80).toFixed(4)}%`,
        top: `${(10 + r2 * 80).toFixed(4)}%`,
        duration: 5 + r3 * 3,
        delay: r4 * 3,
      };
    });
  }, []);

  return (
    <section className="relative flex flex-col items-center md:min-h-screen md:justify-center px-4 overflow-hidden">
       <IntroImage
              src={"/images/blog/hero.jpg"}
              alt="Hero Image - Blog"
              className="!top-0"
            />
      {/* Enhanced overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40 pointer-events-none" />

      {/* Floating particles for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-amber-400/20 rounded-full"
            style={{ left: p.left, top: p.top }}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative pt-48 md:pt-24"
        >
          <div className="relative">
            <SectionTitle
              title="smart home tips"
              subTitle="& Wi-Fi trends"
              textClassName="text-white text-soft-shadow"
            />
            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-300 to-orange-400 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Description Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full flex justify-center mt-6"
        >
          <div className="max-w-4xl rounded-2xl border border-white/10 bg-black/40 backdrop-blur px-8 py-5 shadow-2xl">
            <Description
              className="text-center"
              textClassName="text-white/90 text-soft-shadow"
              description="Explore quick, expert insights on home Wi-Fi, smart tech, and security — built to keep your home connected, reliable, and future-ready"
            />
          </div>
        </motion.div>
      </div>

      {/* Floating accent elements */}
      <motion.div
        className="absolute top-1/3 right-12 w-24 h-24 border border-amber-300/20 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-12 w-16 h-16 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-lg rotate-45"
        animate={{
          rotate: [45, 405, 45],
          y: [0, -15, 0],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
        }}
      />
    </section>
  );
}
