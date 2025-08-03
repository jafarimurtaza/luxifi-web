'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="bg-black text-white flex flex-col items-center px-4 sm:px-6 lg:px-8 md:min-h-screen md:justify-center overflow-hidden">
      <div className="max-w-5xl w-full mx-auto text-center pt-10 sm:pt-14 md:pt-20 lg:pt-28 xl:pt-32">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            font-extrabold leading-tight tracking-tight
            text-[clamp(1.75rem,5vw,4rem)]
          "
        >
          NEXT LEVEL WIFI.
          <br />
          TAILORED FOR
          <br />
            YOU.
        </motion.h1>
      </div>

      {/* Hero Image */}
      <div className="relative w-full max-w-[1400px] md:max-w-[1920px] h-[300px] sm:h-[500px] md:h-[700px] lg:h-[900px] xl:h-[1140px]">
        <Image
          src="/images/tech/office-graphic.jpg"
          alt="Wifi Hero"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1800px"
        />
      </div>

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
