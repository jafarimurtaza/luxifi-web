"use client";

import { motion } from "framer-motion";
import FeatureCards from "../Layout/Cards/FeatureCards";
import Description from "../Layout/Descriptions/Description";
import SectionTitle from "../Layout/Titles/SectionTitle";
import IntroImage from "../Layout/Images/IntroImage";

const features = [
  { title: "Engineered to Perform.", href: "#network" },
  { title: "Installed to Disappear.", href: "#premium" },
  { title: "Loved for the Experience.", href: "#security" },
];

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center md:min-h-screen md:justify-center px-4">
      <IntroImage src={"/images/tech/intro-house-image.jpg"} alt="Hero Image" />
      {/* Soft overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/30 pointer-events-none" />

      {/* Title block consistent with Approach */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center pt-48 md:pt-24"
      >
        <div className="relative">
          <SectionTitle
            title="next level Wi-Fi"
            subTitle="tailored for you"
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
          {/* Subtle glow behind title */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-orange-400/10 blur-3xl -z-10"></div>
        </div>
      </motion.div>

      {/* Description on translucent card */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 w-full flex justify-center mt-4"
      >
        <div className="max-w-4xl rounded-2xl border border-white/10 bg-black/35 backdrop-blur px-6 py-4">
          <Description
            className="text-center"
            textClassName="text-white/90 text-soft-shadow"
            description="Every product and service we offer is designed to give you one thing: effortless connection — everywhere in your home."
          />
        </div>
      </motion.div>

      {/* Feature chips */}
      <div className="relative z-10">
        <FeatureCards features={features} />
      </div>
    </section>
  );
}
