"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { LogoCard } from "./LogoCard";

export function LogoRail({ brands, direction = "left" }) {
  const splideOptions = {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 5,
    perMove: 1,
    gap: "1rem",
    trimSpace: false, // keep all slides fully visible
    autoplay: true,
    interval: 3000,
    speed: 1000,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
    pagination: false,
    direction: direction === "right" ? "rtl" : "ltr",
    breakpoints: {
      1024: {
        perPage: 3,
        gap: "0.75rem",
      },
      768: {
        perPage: 2,
        gap: "0.5rem",
        focus: "center",
        trimSpace: true,
      },
      480: {
        perPage: 2,
        gap: "0.5rem",
  
      },
    },
  };

  return (
    <div className="relative py-4">
      <Splide options={splideOptions}>
        {brands.map((brand, index) => (
          <SplideSlide key={`${brand.name}-${index}`}>
            <div className="flex items-center justify-center w-full">
              <LogoCard brand={brand} />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
