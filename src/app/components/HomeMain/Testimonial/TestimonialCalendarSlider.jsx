"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../../lib/data/homedata";
import Description from "../../Layout/Descriptions/Description";

export function TestimonialCalendarSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < Math.min(3, testimonials.length); i++) {
      const index = (currentIndex + i) % testimonials.length;
      cards.push({ testimonial: testimonials[index], stackIndex: i });
    }
    return cards;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 md:py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.6),transparent_70%)]" />

      <div className="relative z-10 text-center mb-8 md:mb-12 max-w-3xl mx-auto px-4 md:px-6">
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold text-white mb-2 md:mb-4 leading-tight tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Trusted by{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
            Home owners
          </span>
        </motion.h2>
      </div>

      {/* Calendar Notebook Container */}
      <div
        className="relative z-10 flex items-center justify-center flex-1 px-4 md:px-6"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="relative w-full max-w-2xl mx-auto perspective-1000">
          {/* Calendar Binding */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 z-20">
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-8 bg-gray-600 rounded-full shadow-lg"
                />
              ))}
            </div>
          </div>

          {/* Calendar Ring Binder */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex items-center gap-3">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 border-2 border-gray-500 rounded-full bg-gray-700 shadow-inner"
                />
              ))}
            </div>
          </div>

          {/* Stacked Calendar Pages */}
          <div className="relative h-[500px] md:h-[550px]">
            <AnimatePresence mode="wait">
              {getVisibleCards().map(({ testimonial, stackIndex }) => (
                <motion.div
                  key={`${currentIndex}-${stackIndex}`}
                  className="absolute inset-0"
                  initial={{
                    rotateY: stackIndex === 0 ? 0 : -15,
                    z: -stackIndex * 10,
                    opacity: stackIndex === 0 ? 1 : 0.7,
                    scale: 1 - stackIndex * 0.05,
                  }}
                  animate={{
                    rotateY: stackIndex === 0 ? 0 : -15,
                    z: -stackIndex * 10,
                    opacity: stackIndex === 0 ? 1 : 0.7,
                    scale: 1 - stackIndex * 0.05,
                  }}
                  exit={{
                    rotateY: 15,
                    opacity: 0,
                    scale: 0.9,
                    transition: { duration: 0.3 },
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    zIndex: 10 - stackIndex,
                  }}
                >
                  {/* Calendar Page */}
                  <div className="relative h-full">
                    {/* Page Shadow */}
                    <div className="absolute inset-0 bg-black/20 rounded-2xl transform translate-x-1 translate-y-1 blur-sm" />

                    {/* Main Page */}
                    <div className="relative bg-white rounded-2xl h-full shadow-2xl border border-gray-200 overflow-hidden">
                      {/* Calendar Header */}
                      <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 relative">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent" />
                        <div className="flex items-center justify-between text-white relative z-10">
                          <Calendar className="w-6 h-6" />
                          <div className="text-center flex-1">
                            <div className="text-xs font-medium opacity-90">
                              CLIENT REVIEW
                            </div>
                            <div className="text-lg font-bold">
                              {String(currentIndex + 1).padStart(2, "0")}
                            </div>
                          </div>
                          <div className="w-6 h-6" />
                        </div>
                      </div>

                      {/* Calendar Date Strip */}
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-2 border-b border-gray-200">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-800">
                            {new Date().getDate()}
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            {new Date().toLocaleDateString("en-US", {
                              month: "short",
                              year: "numeric",
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Page Content */}
                      <div className="p-6 md:p-8 h-full flex flex-col">
                        {/* Quote Icon */}
                        <div className="mb-6">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-blue-200">
                            <Quote className="w-6 h-6 text-blue-600" />
                          </div>
                        </div>

                        {/* Testimonial Text */}
                        <div className="flex-1 mb-6">
                          <div className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">
                            <Description description={testimonial.text} />
                          </div>
                        </div>

                        {/* Client Info */}
                        <div className="border-t border-gray-200 pt-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg">
                              {testimonial.avatar}
                            </div>
                            <div className="flex-1">
                              <div className="font-bold text-gray-900 text-base mb-1">
                                {testimonial.name}
                              </div>
                              <div className="text-blue-600 text-sm font-semibold mb-0.5">
                                {testimonial.title}
                              </div>
                              <div className="text-gray-500 text-xs font-medium">
                                {testimonial.location}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 flex items-center gap-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Page Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-white scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
