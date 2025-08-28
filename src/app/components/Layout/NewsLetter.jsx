import React from 'react'

export default function NewsLetter() {
  return (
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto mb-10"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 px-5 py-4 rounded-full border border-gray-700 bg-gray-900 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-base-content"
          required
        />

        <button
          type="submit"
          className="
            relative flex items-center gap-3
            px-10 py-4 rounded-full flex-shrink-0
            font-semibold text-lg tracking-wide
            text-black bg-base-content
            shadow-[0_5px_20px_rgba(255,191,0,0.4)]
            transition-all duration-300
            hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,191,0,0.7)]
            overflow-hidden cursor-pointer group
          "
        >
          <span className="relative z-10">Subscribe</span>
          <div
            className="
              w-0 h-0 border-l-[12px] border-l-black
              border-t-[8px] border-t-transparent
              border-b-[8px] border-b-transparent
              transition-all duration-300
              group-hover:border-l-white
            "
          ></div>
          <span
            className="
              absolute inset-0 rounded-full border border-base-100
              opacity-50 group-hover:opacity-80 transition-opacity duration-500
            "
          ></span>
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
      </form>
  )
}
