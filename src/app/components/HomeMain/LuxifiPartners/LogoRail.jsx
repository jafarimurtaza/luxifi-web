"use client"

import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import { LogoCard } from "./LogoCard"

export function LogoRail({ brands, direction = "left" }) {
  const splideOptions = {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 5, // desktop default
    perMove: 1,
    gap: "0.2rem",
    autoplay: true,
    interval: 3000,
    speed: 1000,
    pauseOnHover: false,
    pauseOnFocus: false,
    resetProgress: false,
    arrows: false,
    pagination: false,
    direction: direction === "right" ? "rtl" : "ltr",
    breakpoints: {
      1024: {
        perPage: 3, // tablet
        gap: "0.5rem",
      },
      768: {
        perPage: 2, // smaller tablets / large mobiles
        gap: "0.5rem",
      },
      480: {
        perPage: 1, // mobile
        gap: "0.75rem",
      },
    },
  }

  return (
    <div className="relative py-4">
      <Splide options={splideOptions}>
        {brands.map((brand, index) => (
          <SplideSlide key={`${brand}-${index}`}>
            <LogoCard brand={brand} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}
