"use client";
import { useState, useEffect } from "react";
import PromiseItem from "./PromiseItem";
import { promiseItems } from "../../../lib/data/homedata";

export default function LuxifiPromiseSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const maxSlides = Math.max(0, promiseItems.length - 5);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxSlides ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxSlides]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev >= maxSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev <= 0 ? maxSlides : prev - 1));
  };

  const visibleItems = promiseItems.slice(currentIndex, currentIndex + 5);

  return (
    <div className="min-h-screen container px-15 bg-black text-primary flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-5xl font-black mb-4">
            <span className="text-primary">THE LUXIFI</span>
            <br />
            <span className="text-base-content">PROMISE</span>
          </h1>
          <p className="text-lg text-primary/80">
            More than service — it's an experience.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Arrows */}
          <div className="hidden lg:block ">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              aria-label="previous"
              className={`absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center border-2 border-yellow-400 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                currentIndex === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:scale-110 hover:bg-yellow-400/10"
              }`}
            >
              <span className="text-yellow-400 text-lg leading-none select-none">
                {"<"}
              </span>
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxSlides}
              aria-label="next"
              className={`absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center border-2 border-yellow-400 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                currentIndex >= maxSlides
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:scale-110 hover:bg-yellow-400/10"
              }`}
            >
              <span className="text-base-content text-lg leading-none select-none">
                {">"}
              </span>
            </button>
          </div>

          {/* Items */}
          <div className="flex justify-center gap-6">
            {visibleItems.map((item, index) => (
              <PromiseItem
                key={`${item.id}-${currentIndex}`}
                item={item}
                isCenter={index === 2}
              />
            ))}
          </div>

          {/* Dots */}
          <div className="lg:hidden flex justify-center mt-6 gap-2">
            {Array.from({ length: maxSlides + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full ${
                  idx === currentIndex ? "text-base-content" : "bg-yellow-400/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
