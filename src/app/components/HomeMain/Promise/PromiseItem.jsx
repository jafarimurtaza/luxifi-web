"use client";
import { useEffect, useState } from "react";

export default function PromiseItem({ item }) {
  const [isCenter, setIsCenter] = useState(false);

  useEffect(() => {
    const checkIfCenter = () => {
      const slideElement = document
        .querySelector(`[data-item-id="${item.id}"]`)
        ?.closest(".splide__slide");
      if (slideElement) {
        setIsCenter(slideElement.classList.contains("is-center"));
      }
    };

    checkIfCenter();

    const slideElement = document
      .querySelector(`[data-item-id="${item.id}"]`)
      ?.closest(".splide__slide");
    if (slideElement) {
      const observer = new MutationObserver(checkIfCenter);
      observer.observe(slideElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
      return () => observer.disconnect();
    }
  }, [item.id]);

  return (
    <div
      className="flex flex-col py-4 sm:py-6 md:py-8 items-center justify-center promise-item transition-all duration-700"
      data-item-id={item.id}
    >
      <div className="relative mb-4 sm:mb-6 mt-4 sm:mt-8 md:mt-12">
        {isCenter && (
          <>
            <div className="absolute inset-0 w-16 sm:w-28 md:w-40 h-16 sm:h-28 md:h-40 rounded-full bg-gradient-radial from-yellow-400/60 via-yellow-400/30 to-transparent animate-pulse -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />
            <div className="absolute inset-0 w-12 sm:w-24 md:w-32 h-12 sm:h-24 md:h-32 rounded-full bg-gradient-radial from-yellow-300/40 via-yellow-400/20 to-transparent animate-ping -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />
          </>
        )}
        <div
          className={`relative rounded-full border-4 flex items-center justify-center transition-all duration-700 
          ${
            isCenter
              ? "w-20 sm:w-28 md:w-28 h-20 sm:h-28 md:h-28 border-yellow-400 bg-black shadow-4xl ring-2 ring-yellow-400/50"
              : "w-16 sm:w-24 md:w-24 h-16 sm:h-24 md:h-24 border-yellow-400/60 bg-black shadow-lg shadow-yellow-400/30"
          }`}
        >
          <div className="text-lg sm:text-2xl md:text-2xl">{item.icon}</div>
          {isCenter && (
            <>
              <div
                className="absolute inset-0 border-2 border-yellow-400/70 rounded-full animate-spin"
                style={{ animationDuration: "1s" }}
              />
              <div
                className="absolute inset-2 border-2 border-yellow-300/50 rounded-full animate-spin"
                style={{
                  animationDuration: "2s",
                  animationDirection: "reverse",
                }}
              />
            </>
          )}
        </div>
      </div>

      <div
        className={`text-center capitalize transition-all duration-700 
          ${
            isCenter
              ? "text-primary text-sm sm:text-base md:text-lg font-black drop-shadow-lg"
              : "text-base-content text-[10px] sm:text-sm md:text-base font-bold"
          }`}
        style={{
          textShadow: isCenter
            ? "0 0 10px rgba(251, 191, 36, 0.8), 0 0 20px rgba(251, 191, 36, 0.4)"
            : "0 0 5px rgba(251, 191, 36, 0.3)",
        }}
      >
        <div className="font-black">{item.title}</div>
        <div className="font-bold text-[10px] sm:text-sm md:text-base">
          {item.subtitle}
        </div>
      </div>
    </div>
  );
}
