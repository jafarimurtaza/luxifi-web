"use client";

import { motion } from "framer-motion";
import Description from "../Layout/Descriptions/Description";
import RenderSectionVideo from "../Layout/Video/RenderSectionVideo";
import Link from "next/link";

export default function BackgroundPaths({
  title = "The Ultimate Home Wi-Fi Experience",
}) {
  const words = title.split(" ");

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <RenderSectionVideo videoPath="/videos/home-page-video.mp4" />
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tighter">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
          <Description description="Proudly Serving Houston & Surrounding Areas" />

          <div className="inline-block mt-6 group relative bg-gradient-to-b from-black/10 to-white/10  dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg  overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <button className="btn btn-xl btn-primary">
              <Link
                href="/contact"
                className="opacity-90 group-hover:opacity-100 transition-opacity"
              >
                BOOK A CONSULTATION{" "}
              </Link>
              <span
                className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                transition-all duration-300"
              >
                →
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
