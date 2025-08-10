"use client"

export function SolutionTabs({ solutions, activeTab, onTabChange, isTransitioning }) {
  return (
    <div className="flex flex-wrap gap-3">
      {Object.entries(solutions).map(([key, solution]) => (
        <button
          key={key}
          onClick={() => onTabChange(key)}
          disabled={isTransitioning}
          className={`px-5 cursor-pointer py-2 rounded-lg font-medium transition-all duration-500 ease-out transform ${
            activeTab === key
              ? "text-[#C59649]  scale-105"
              : " text-gray-300 hover:text-white hover:scale-102 hover:shadow-md"
          } ${isTransitioning ? "opacity-70 cursor-not-allowed" : "opacity-100"}`}
        >
          {solution.title}
        </button>
      ))}
    </div>
  )
}
