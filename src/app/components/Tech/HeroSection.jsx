"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "../Layout/Titles/SectionTitle";
import RenderBigIntroImage from "../Layout/Images/RenderBigIntroImage";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8 md:min-h-screen md:justify-center overflow-hidden">
      <SectionTitle title="next level wifi" subTitle="tailored for you" />

      {/* Hero Image */}
      <RenderBigIntroImage src="/images/tech/office-graphic.jpg" />

      {/* Linear graphic for smaller screens */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[1000px] mt-8 block max-[1000px]:block min-[1001px]:hidden"
      >
        <Image
          src="/images/tech/linear1.png"
          alt="linear image"
          width={1800}
          height={500}
          className="w-full h-auto object-contain"
          priority
          sizes="100vw"
        />
      </motion.div>
    </section>
  );
}
