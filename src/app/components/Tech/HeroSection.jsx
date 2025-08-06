"use client";

import { motion } from "framer-motion";
import SectionTitle from "../Layout/Titles/SectionTitle";
import RenderBigIntroImage from "../Layout/Images/RenderBigIntroImage";
import LinearLeft from "../Layout/Images/LinearLeft";
import Description from "../Layout/Descriptions/Description";

// Feature data
const features = [
  { title: "Engineered to Perform." },
  { title: "Installed to Disappear." },
  { title: "Loved for the Experience." },
];

// Animation config
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center md:min-h-screen md:justify-center px-4">
      <SectionTitle title="next level wifi" subTitle="tailored for you" />

      <Description description="Every product and service we offer is designed to give you one thing: effortless connection — everywhere in your home." />

      {/* Feature Cards with white box shadow */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8 w-full max-w-6xl"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            custom={index}
            className={`border border-gray-300 rounded-xl p-6 text-center text-lg font-semibold w-full
              ${index === 2 ? "sm:col-span-2 sm:justify-self-center lg:col-span-1" : ""}
            `}
            style={{ boxShadow: "0 8px 30px rgba(255, 255, 255, 0.4)" }}
          >
            {feature.title}
          </motion.div>
        ))}
      </motion.div>

      <RenderBigIntroImage src="/images/tech/office-graphic.jpg" />
      <LinearLeft />
    </section>
  );
}
