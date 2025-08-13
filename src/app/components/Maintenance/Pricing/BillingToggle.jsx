"use client";

export default function BillingToggle({ isMonthly, onToggle }) {
  return (
    <div className="flex items-center justify-center gap-3 px-6 py-4 border border-primary rounded-xl text-lg max-w-xs mx-auto select-none mb-12">
      {/* Monthly Label */}
      <span
        className={`transition-colors ${
          isMonthly ? "font-bold text-white" : "text-white/60"
        }`}
      >
        MONTHLY
      </span>

      {/* Toggle Button */}
      <button
        onClick={onToggle}
        aria-label="Toggle billing period"
        aria-pressed={isMonthly}
        className={`relative w-14 h-7 rounded-full transition-colors cursor-pointer duration-300 ${
          isMonthly ? "bg-white" : "bg-gray-600"
        }`}
      >
        <span
          className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-black shadow-md transition-transform duration-300 transform ${
            isMonthly ? "translate-x-0" : "translate-x-7"
          }`}
        />
      </button>

      {/* Annual Label */}
      <span
        className={`transition-colors ${
          !isMonthly ? "font-bold text-white" : "text-white/60"
        }`}
      >
        ANNUAL
      </span>
    </div>
  );
}
