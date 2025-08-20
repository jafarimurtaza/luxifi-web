"use client";

export function SolutionTabs({
  solutions,
  activeTab,
  onTabChange,
  isTransitioning,
}) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {Object.entries(solutions).map(([key, solution]) => (
        <button
          key={key}
          onClick={() => onTabChange(key)}
          disabled={isTransitioning}
          className={`px-3 sm:px-4 cursor-pointer lg:px-5 py-2 lg:py-2.5 rounded-lg font-medium text-sm sm:text-base transition-all duration-75 ease-out transform ${
            activeTab === key
              ? "text-[#C59649] scale-105 bg-[#C59649]/10 border border-[#C59649]/30"
              : "text-gray-300 hover:text-white hover:scale-102 hover:bg-gray-800/50"
          }  focus:outline-none focus:ring-2 focus:ring-[#C59649]/50`}
        >
          <span className="hidden sm:inline">{solution.title}</span>
          <span className="sm:hidden">
            {solution.title.includes("ROUTER ONLY")
              ? "ROUTER"
              : solution.title.includes("EXTENDER")
              ? "EXTENDER"
              : "MESH"}
          </span>
        </button>
      ))}
    </div>
  );
}
