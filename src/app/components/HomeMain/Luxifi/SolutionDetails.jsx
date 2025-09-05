export function SolutionDetails({ solution, isTransitioning }) {
  return (
    <div
      className={`p-3 transition-all duration-200 ease-out ${
        isTransitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      <h3 className="text-xl font-semibold mb-4 text-[#C59649] transition-colors duration-200">
        {solution.title}
      </h3>

      <p className="text-gray-300 leading-relaxed text-base mb-8 transition-all duration-200">
        {solution.description}
      </p>

      {/* Enhanced Problems List with 2-Column Grid */}
      {solution.problems && (
        <div className="mb-8">
          <h4 className="text-base font-semibold text-red-400 uppercase tracking-wider mb-6 border-b border-red-400/20 pb-2">
            Common Issues:
          </h4>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 md:gap-4">
            {solution.problems.map((problem, index) => (
              <div
                key={problem.title || problem}
                className="transition-all duration-200"
              >
                {/* Enhanced problem display for objects with title and quote */}
                {typeof problem === "object" && problem.title ? (
                  <div className="bg-gray-800/30 rounded md:rounded-lg p-2 border-l-[1px] md:border-l-2 border-white h-full">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full shadow-lg"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-1 md:mb-3">
                          {problem.title}
                        </h5>
                        {problem.quote && (
                          <blockquote className="text-gray-300 text-sm leading-relaxed italic border-l-2 border-gray-600 pl-3">
                            "{problem.quote}"
                          </blockquote>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Fallback for simple string problems */
                  <div className="flex items-center space-x-3 text-sm text-gray-400 bg-gray-800/20 rounded-lg p-4 h-full">
                    <div className="w-2 h-2 bg-red-500 rounded-full opacity-75"></div>
                    <span>{problem}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Enhanced Conclusion */}
      {solution.conclusion && (
        <div className="border-t border-gray-700/50 pt-2 md:pt-6">
          <div className="bg-gray-800/40 rounded-lg p-2 md:p-4 border border-gray-700/30">
            <p className="text-green-600 leading-relaxed italic text-center font-extrabold">
              {solution.conclusion}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
