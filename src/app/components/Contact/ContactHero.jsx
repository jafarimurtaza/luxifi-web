"use client";

import { motion } from "framer-motion";

export function ContactHero({
  backgroundVideo,
  title = "Let's Get You Connected",
  subtitle = "Fast. Reliable. Done Right.",
  description = "Serving Houston and surrounding areas.",
  callToAction = "Fill out the form — we'll handle the rest.",
}) {
  
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative pt-32 pb-16 text-center overflow-hidden">
      {backgroundVideo && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      )}
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-black font-[family-name:var(--font-heading)] mb-6 tracking-tight bg-gradient-to-r from-golden via-white to-golden bg-clip-text text-transparent"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.2 }}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          className="text-2xl md:text-3xl font-bold mb-4 text-golden"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.5 }}
        >
          {subtitle}
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.8 }}
        >
          {description}
        </motion.p>

        {/* Call to action */}
        <motion.p
          className="text-xl font-medium text-white/90"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1.1 }}
        >
          {callToAction}
        </motion.p>
      </div>
    </section>
  );
}
