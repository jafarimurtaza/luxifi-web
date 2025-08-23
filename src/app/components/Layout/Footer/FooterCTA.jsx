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
      <Link
        href="/contact"
        className="inline-block px-8 py-3 md:px-10 md:py-4  rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
      >
        <button className="relative bg-base-content hover:bg-orange-600 cursor-pointer text-white font-semibold py-4 px-10 rounded-full shadow-lg transition-colors duration-200 flex items-center gap-3 z-10">
          <span className="text-lg tracking-wide">Get Started</span>
          <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
        </button>
      </Link>
    </div>
  );
}
