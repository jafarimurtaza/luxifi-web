"use client";
import { useState } from "react";
import { testimonials } from "../../../lib/data/homedata";

export default function TestimonialStack() {
  const [visibleCards, setVisibleCards] = useState([0, 1, 2]);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalCards = testimonials.length;

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setVisibleCards((prev) => {
        const [first, ...rest] = prev;
        const nextIndex = (first + 3) % totalCards;
        return [...rest, nextIndex];
      });
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="relative w-full max-w-4xl h-[360px] sm:h-[400px] md:h-[420px] lg:h-[450px] mx-auto px-4 md:px-0">
      {visibleCards.map((idx, i) => {
        const card = testimonials[idx];
        const zIndex = 10 - i;
        const rotation = i === 0 ? "rotate-0" : i === 1 ? "rotate-2" : "-rotate-2";
        const offset = i * 10 + "px";
        const isTop = i === 0;

        const activeDot = visibleCards[0];

        return (
          <div
            key={`${card.name}-${idx}`}
            className={`absolute top-0 left-0 w-full h-full cursor-pointer transition-all duration-500 ${rotation}`}
            style={{
              zIndex,
              top: offset,
              transform: isAnimating && isTop ? `translateX(100%) rotate(10deg)` : undefined,
            }}
            onClick={isTop ? handleClick : undefined}
          >
            <div className="relative w-full h-full rounded-2xl bg-white p-4 sm:p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.18)] flex flex-col justify-between">
              
              {/* Top hook */}
              <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 h-8 sm:h-10 w-12 sm:w-16 -rotate-3 rounded-b-2xl bg-white shadow-[0_6px_16px_rgba(0,0,0,0.22)]">
                <div className="absolute left-1/2 top-[18px] sm:top-[22px] h-2 w-12 sm:w-16 -translate-x-1/2 rounded-full bg-neutral-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.25)]" />
              </div>

              {/* Dot navigation */}
              <div className="absolute top-1/2 right-3 sm:right-4 flex flex-col gap-2">
                {testimonials.map((_, dotIdx) => (
                  <span
                    key={dotIdx}
                    className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-colors ${
                      dotIdx === activeDot ? "bg-neutral-900" : "bg-neutral-300"
                    }`}
                  />
                ))}
              </div>

              {/* Header */}
              <div className="mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight">{card.name}</h3>
                <div className="text-xs sm:text-sm md:text-sm text-neutral-500">{card.title} — {card.location}</div>
              </div>

              {/* Quote */}
              <div className="flex-1 mb-4 sm:mb-6 text-neutral-600 text-sm sm:text-base md:text-lg md:leading-8">
                <p>“{card.text}”</p>
              </div>

              {/* Footer */}
              <div>
                <div className="font-semibold text-sm sm:text-base">{card.name}</div>
                <div className="text-xs sm:text-sm text-neutral-500">{card.title}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
