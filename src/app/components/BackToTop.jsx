// src/components/BackToTop.jsx
"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-50 w-14 h-14 flex items-center justify-center
        bg-primary text-black rounded-full shadow-2xl
        transition-all duration-300 ease-in-out
        hover:translate-y-[-4px] hover:shadow-3xl hover:bg-primary-focus cursor-pointer
        ${showButton ? "opacity-100 translate-y-0 animate-pulse" : "opacity-0 translate-y-6 pointer-events-none"}
      `}
      aria-label="Back to Top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
