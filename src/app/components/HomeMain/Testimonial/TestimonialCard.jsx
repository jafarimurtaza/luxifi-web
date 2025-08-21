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
    <div className="relative w-full max-w-3xl h-[300px] sm:h-[340px] md:h-[360px] lg:h-[380px] mx-auto px-4 md:px-0">
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
              transform: isAnimating && isTop ? "translateX(100%) rotate(10deg)" : undefined,
            }}
            onClick={isTop ? handleClick : undefined}
          >
            <div className="relative w-full h-full rounded-xl bg-black border-2 border-primary p-6 sm:p-7 md:p-8
                            shadow-[0_8px_20px_rgba(255,255,255,0.2),0_12px_30px_rgba(255,255,255,0.15),0_20px_50px_rgba(255,255,255,0.1)]
                            flex flex-col items-center justify-center text-center text-primary">
              {/* Top hook */}
              <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 h-7 sm:h-8 w-12 sm:w-14 -rotate-3 rounded-b-xl
                              bg-black border-2 border-primary
                              shadow-[0_4px_12px_rgba(255,255,255,0.15),0_6px_20px_rgba(255,255,255,0.1)]">
                <div className="absolute left-1/2 top-[14px] sm:top-[16px] h-1.5 w-10 sm:w-12 -translate-x-1/2 rounded-full bg-primary
                                shadow-[inset_0_1px_3px_rgba(255,255,255,0.2)]" />
              </div>

              {/* Dot navigation */}
              <div className="absolute top-1/2 right-3 sm:right-4 flex flex-col gap-1.5">
                {testimonials.map((_, dotIdx) => (
                  <span
                    key={dotIdx}
                    className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-colors ${
                      dotIdx === activeDot ? "bg-base-content" : "bg-base-content/50"
                    }`}
                  />
                ))}
              </div>

              {/* Header */}
              <div className="mb-2">
                <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-white">
                  {card.name}
                </h3>
                <div className="text-xs sm:text-sm text-gray-300">
                  {card.title} — {card.location}
                </div>
              </div>

              {/* Quote */}
              <div className="text-sm sm:text-base md:text-[15px] md:leading-7 max-w-xl text-base-content">
                <p>“{card.text}”</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
