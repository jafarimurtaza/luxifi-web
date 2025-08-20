export function SolutionDetails({ solution, isTransitioning }) {
  return (
    <div
      className={`p-2 md:p-3 transition-all duration-700 ease-in-out ${
        isTransitioning
          ? "opacity-0 translate-y-4"
          : "opacity-100 translate-y-0"
      }`}
    >
      <p className="text-gray-300 leading-relaxed text-base mb-6 transition-all duration-500">
        {solution.description}
      </p>

      {/* Problems List */}
      {solution.problems && (
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-red-400 uppercase tracking-wide">
            Common Issues:
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {solution.problems.map((problem, index) => (
              <div
                key={problem}
                className="flex items-center space-x-2 text-sm text-gray-400"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="w-2 h-2 bg-red-500 rounded-full opacity-75"></div>
                <span>{problem}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
