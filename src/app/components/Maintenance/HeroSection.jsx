"use client";

import { motion } from "framer-motion";
import Description from "../Layout/Descriptions/Description";
import SectionTitle from "../Layout/Titles/SectionTitle";

export default function HeroSection() {
  return (
    <section className="relative px-4 flex flex-col items-center justify-center md:min-h-screen overflow-hidden">
      {/* Soft overlay for subtle depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/10 pointer-events-none" />

      {/* Title block (consistent with other pages) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 text-center pt-20 md:pt-24"
      >
        <div className="relative">
          <SectionTitle
            title="Effortless Performance,"
            subTitle="Always On"
            textClassName="text-white text-soft-shadow"
          />
          <motion.div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-300 to-orange-400 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-orange-400/10 blur-3xl -z-10" />
        </div>
      </motion.div>

      {/* Descriptions in translucent cards for readability */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl mx-auto mt-4 space-y-5"
      >
        <div className="rounded-2xl border border-white/10 bg-black/35 backdrop-blur px-6 py-4">
          <Description
            textClassName="text-white/90 text-soft-shadow"
            description="We maintain it, so you never have to think about it."
          />
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/35 backdrop-blur px-6 py-4">
          <Description
            textClassName="text-white/90 text-soft-shadow"
            description={`A truly luxury experience means never worrying about your WiFi again. That’s why Luxifi offers tailored care plans designed to keep your network fast, secure, and silently optimized — all in the background.
Whether you're streaming, working, or simply living, your system stays protected, updated, and performing at its peak — without a single tech headache.`}
          />
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/35 backdrop-blur px-6 py-4">
          <Description
            textClassName="text-white/90 text-soft-shadow"
            description="Because real luxury isn’t just about speed — it’s about never having to ask."
          />
        </div>
      </motion.div>
    </section>
  );
}
