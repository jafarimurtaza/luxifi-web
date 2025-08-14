"use client";
import { useRef, useCallback } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import PromiseItem from "./PromiseItem";
import { promiseItems } from "../../../lib/data/homedata";

export default function LuxifiPromiseSection() {
  const splideRef = useRef(null);

  const handleSlideChange = useCallback(() => {
    if (splideRef.current) {
      const splideInstance = splideRef.current.splide;

      const slides = document.querySelectorAll(".splide__slide");
      slides.forEach((slide) => slide.classList.remove("is-center"));

      const activeIndex = splideInstance.index;

      const centerSlide =
        splideInstance.Components.Slides.getAt(activeIndex)?.slide;

      if (centerSlide) {
        centerSlide.classList.add("is-center");
      }
    }
  }, []);

  const splideOptions = {
    type: "loop",
    perPage: 5,
    perMove: 1,
    gap: "1.5rem",
    autoplay: true,
    interval: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: true,
    pagination: false,
    focus: "center",
    trimSpace: false,
    breakpoints: {
      1024: {
        perPage: 3,
        gap: "1rem",
        arrows: false,
        pagination: true,
      },
      768: {
        perPage: 1,
        gap: "0.5rem",
        arrows: false,
        pagination: true,
      },
    },
  };

  return (
    <div className="container mx-auto px-8 bg-black text-white py-16 min-h-screen">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-6xl  mb-4 font-extrabold">
            <span className="text-base-content drop-shadow-2xl">
              THE LUXIFI
            </span>
            <br />
            <span className="text-primary font-black">PROMISE</span>
          </h1>
          <p className="text-xl text-primary font-bold">
            More than service — it's an experience.
          </p>
        </div>

        {/* Splide Slider */}
        <div className="relative splide-promise-container">
          <Splide
            ref={splideRef}
            options={splideOptions}
            aria-label="Luxifi Promise Items"
            onMoved={handleSlideChange}
            onMounted={handleSlideChange}
          >
            {promiseItems.map((item, index) => (
              <SplideSlide key={item.id}>
                <PromiseItem item={item} index={index} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
}
