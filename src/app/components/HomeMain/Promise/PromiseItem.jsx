"use client"
import { useEffect, useState } from "react"

export default function PromiseItem({ item, index }) {
  const [isCenter, setIsCenter] = useState(false)

  useEffect(() => {
    const checkIfCenter = () => {
      const slideElement = document.querySelector(`[data-item-id="${item.id}"]`)?.closest(".splide__slide")
      if (slideElement) {
        setIsCenter(slideElement.classList.contains("is-center"))
      }
    }

    // Initial check
    checkIfCenter()

    // Set up observer for class changes
    const slideElement = document.querySelector(`[data-item-id="${item.id}"]`)?.closest(".splide__slide")
    if (slideElement) {
      const observer = new MutationObserver(checkIfCenter)
      observer.observe(slideElement, { attributes: true, attributeFilter: ["class"] })
      return () => observer.disconnect()
    }
  }, [item.id])

  return (
    <div
      className="flex flex-col items-center justify-center promise-item transition-all duration-700"
      data-item-id={item.id}
    >
      <div className="relative mb-8 mt-16">
        {isCenter && (
          <>
            <div className="absolute inset-0 w-40 h-40 rounded-full bg-gradient-radial from-yellow-400/60 via-yellow-400/30 to-transparent animate-pulse -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />
            <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-radial from-yellow-300/40 via-yellow-400/20 to-transparent animate-ping -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />
          </>
        )}
        <div
          className={`relative py-4 rounded-full border-4 flex items-center justify-center transition-all duration-700 ${
            isCenter
              ? 
                "w-32 h-32 border-yellow-400 bg-black shadow-2xl  scale-125 ring-2 ring-yellow-400/50"
              : 
                "w-24 h-24 border-yellow-400/60 bg-black shadow-lg shadow-yellow-400/30"
          }`}
        >
          <div

          >
            {item.icon}
          </div>
          {isCenter && (
            <>
              <div
                className="absolute inset-0 border-2 border-yellow-400/70 rounded-full animate-spin"
                style={{ animationDuration: "3s" }}
              />
              <div
                className="absolute inset-2 border-2 border-yellow-300/50 rounded-full animate-spin"
                style={{ animationDuration: "4s", animationDirection: "reverse" }}
              />
            </>
          )}
        </div>
      </div>

      <div
        className={`font-black text-center transition-all duration-700 ${
          isCenter
            ? 
              "text-primary text-lg font-black drop-shadow-lg"
            : 
              "text-base-content text-base font-bold"
        }`}
        style={{
          textShadow: isCenter
            ? "0 0 10px rgba(251, 191, 36, 0.8), 0 0 20px rgba(251, 191, 36, 0.4)"
            : "0 0 5px rgba(251, 191, 36, 0.3)",
        }}
      >
        <div className="font-black">{item.title}</div>
        <div className="font-bold">{item.subtitle}</div>
      </div>
    </div>
  )
}
