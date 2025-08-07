"use client";

import { SectionLayout } from "./section-layout";
import { ContentBlock } from "./content-block";

import { motion } from "framer-motion";

export function SolidFoundationsSection() {
  return (
    <SectionLayout backgroundColor="#000" reverse>
      <motion.div
        className="relative w-full max-w-[400px] mx-auto aspect-square flex items-center justify-center p-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br shadow-2xl" />

        {/* Abstract Network Grid */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Grid Lines */}
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.line
              key={`h-${i}`}
              x1="0"
              y1={i * 10}
              x2="100"
              y2={i * 10}
              stroke="#FCD34D"
              strokeWidth="0.2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.8 + i * 0.05 }}
            />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.line
              key={`v-${i}`}
              x1={i * 10}
              y1="0"
              x2={i * 10}
              y2="100"
              stroke="#FCD34D"
              strokeWidth="0.2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.8 + i * 0.05 }}
            />
          ))}

          {/* Interconnecting Dots */}
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 5 }).map((_, col) => (
              <motion.circle
                key={`dot-${row}-${col}`}
                cx={10 + col * 20}
                cy={10 + row * 20}
                r="0.8"
                fill="#FCD34D"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1.5 + (row + col) * 0.1, duration: 0.3 }}
              />
            ))
          )}

          {/* Central Node */}
          <motion.circle
            cx="50"
            cy="50"
            r="3"
            fill="#FCD34D"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="5"
            stroke="#FCD34D"
            strokeWidth="0.5"
            fill="none"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: [0, 1, 1.2, 1], opacity: [0, 1, 0.8, 0] }}
            transition={{
              delay: 2.8,
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </motion.svg>

        {/* Overlay Text */}
        <div className="relative z-10 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Wired Backbone</h3>
          <p className="text-white/80 text-sm">Unshakeable Connectivity</p>
        </div>
      </motion.div>

      {/* Content */}
      <ContentBlock
        subtitle="BUILT ON SOLID FOUNDATIONS"
        title="Every connection is hardwired for perfection."
        description="Unlike wireless solutions that rely on weak signal repeating, LuxiFi uses a fully hardwired backbone. This means every access point gets maximum bandwidth and zero interference."
        bulletPoints={[
          "Hardwired access points for maximum performance",
          "Zero signal degradation or interference",
          "Enterprise-grade stability and speed",
          "Future-proof infrastructure that lasts",
        ]}
        animationDelay={0.2}
      />
    </SectionLayout>
  );
}
