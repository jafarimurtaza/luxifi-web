"use client";
import Link from "next/link";

export default function FooterCTA() {
  return (
    <div className="mt-12 bg-black/90 rounded-2xl p-10 md:p-16 text-center shadow-xl border border-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Ready to get started?
      </h2>
      <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
        Take the first step toward{" "}
        <span className="text-base-content font-semibold">
          better connectivity
        </span>{" "}
        and experience a premium network solution today.
      </p>
      <Link href="/contact" className="inline-block group relative">
        <button
          className="
      relative flex items-center gap-3
      px-10 py-4 rounded-full
      font-semibold text-lg tracking-wide
      text-black bg-base-content
      shadow-[0_5px_20px_rgba(255,191,0,0.4)]
      transition-all duration-300
      hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,191,0,0.7)]
      overflow-hidden cursor-pointer
    "
        >
          {/* Text */}
          <span className="relative z-10">Get Started</span>

          {/* Arrow */}
          <div
            className="
        w-0 h-0 border-l-[12px] border-l-black
        border-t-[8px] border-t-transparent
        border-b-[8px] border-b-transparent
        transition-all duration-300
        group-hover:border-l-white
      "
          ></div>

          {/* Glowing ring */}
          <span
            className="
        absolute inset-0 rounded-full border border-base-100
        opacity-50 group-hover:opacity-80 transition-opacity duration-500
      "
          ></span>

          {/* Golden shimmer animation */}
          <span
            className="
        absolute -left-40 top-0 w-40 h-full bg-gradient-to-r 
        from-white/20 via-white/50 to-white/20
        transform -skew-x-12 translate-x-0
        group-hover:translate-x-[120%]
        transition-transform duration-1000
      "
          ></span>
        </button>
      </Link>
    </div>
  );
}
