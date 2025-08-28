"use client";

import { motion } from "framer-motion";
import PromiseIcon from "./PromiseIcon";

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function PromiseOrbit({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="relative mx-auto max-w-6xl">
      {/* Calm divider top */}
      <div className="mx-auto h-px w-24 bg-amber-500/20" />

      {/* Minimal list, responsive layout */}
      <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-16 lg:grid-cols-2">
        {items.map((item) => (
          <motion.article
            key={item.id}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="
              flex items-start gap-5
              max-[425px]:flex-col
              max-[425px]:items-center
              max-[425px]:text-center
            "
          >
            {/* Icon badge */}
            <div className="flex-none rounded-xl border border-amber-500/20 bg-base-200/50 p-3 text-primary shadow-sm">
              <PromiseIcon className="scale-90" iconType={item.iconType} />
            </div>

            {/* Text block */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold tracking-wide text-primary uppercase">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-base-content/80">
                {item.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Calm divider bottom */}
      <div className="mt-12 mx-auto h-px w-24 bg-amber-500/20" />
    </section>
  );
}
