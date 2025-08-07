"use client";

import { motion } from "framer-motion";
import Description from "../../Layout/Descriptions/Description";

export function ContentBlock({
  title,
  subtitle,
  description,
  bulletPoints = [],
  ctaText,
  ctaAction,
  children,
  animationDelay = 0,
}) {
  return (
    <motion.div
      className="space-y-6 text-center md:text-left"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: animationDelay }}
    >
      {/* Subtitle */}
      {subtitle && (
        <motion.p
          className="text-sm font-bold tracking-wider uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: animationDelay + 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Title */}
      <motion.h2
        className="text-3xl md:text-4xl text-primary lg:text-5xl font-bold leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: animationDelay + 0.3, duration: 0.6 }}
      >
        {title}
      </motion.h2>

      {/* Description */}
      {description && <Description description={description} />}

      {children && children}
      {/* Bullet Points */}
      {bulletPoints.length > 0 && (
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: animationDelay + 0.5 }}
        >
          {bulletPoints.map((point, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: animationDelay + 0.6 + index * 0.1 }}
            >
              <div className="w-2 h-2 rounded-full flex-shrink-0 mt-2" />
              <span>{point}</span>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* CTA Button */}
      {ctaText && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: animationDelay + 0.7 }}
        >
          <button
            onClick={ctaAction}
            className="px-8 btn btn-primary btn-xl py-4 text-lg font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {ctaText}
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
