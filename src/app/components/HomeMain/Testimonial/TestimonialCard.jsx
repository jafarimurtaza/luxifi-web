"use client";
import { useEffect, useRef, useState } from "react";
import { testimonials } from "../../../lib/data/homedata";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const splideOptions = {
  type: "loop",
  perPage: 1,
  perMove: 1,
  arrows: false,
  pagination: true,
  autoplay: false,
  speed: 1000,
  easing: "ease-out",
  focus: "center",
  trimSpace: false,
};

export default function TestimonialStack() {
  return (
    <>
      <Splide
        options={splideOptions}
        className="relative w-full max-w-3xl h-[400px] p-4 sm:h-[420px] md:h-[440px] lg:h-[460px] mx-auto px-4 md:px-0"
      >
        {testimonials.map((card, idx) => {
          const rotation =
            idx === 0 ? "rotate-2" : idx === 1 ? "-rotate-1" : "rotate-1";
          const zIndex = 10 - idx;

          return (
            <SplideSlide
              key={`${card.name}-${idx}`}
              className={`w-full !h-full cursor-pointer transition-all duration-500 ${rotation}`}
              style={{
                height: "100% !important",
                zIndex,
              }}
            >
              <div className="relative w-full h-full rounded-2xl bg-black border-2 border-primary p-8 sm:p-10 md:p-12 shadow-[0_8px_30px_rgba(255,193,7,0.3),0_12px_40px_rgba(255,193,7,0.2)] flex flex-col justify-between text-center">
                {/* Calendar Hook on Top */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-12 bg-black border-2 border-primary rounded-b-lg shadow-[0_4px_12px_rgba(255,193,7,0.3)]">
                  <div className="absolute left-1/2 top-3 h-1.5 w-12 -translate-x-1/2 rounded-full bg-primary shadow-[inset_0_1px_3px_rgba(255,193,7,0.2)]" />
                </div>

                {/* Company Logo Placeholder */}
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 bg-gray-800 border border-primary rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary rounded opacity-80"></div>
                  </div>
                </div>

                {/* Quote */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-medium text-white leading-relaxed max-w-lg">
                    <span className="text-4xl text-primary font-serif">"</span>
                    {card.text}
                    <span className="text-4xl text-primary font-serif">"</span>
                  </div>
                </div>

                {/* Author Info */}
                <div className="mt-8 pt-6 border-t border-primary/30">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {card.name}
                    </h4>
                    <p className="text-sm text-gray-300">
                      {card.title} — {card.location}
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </>
  );
}
