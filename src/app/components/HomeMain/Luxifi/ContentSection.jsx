import { SolutionDetails } from "./SolutionDetails";
import { SolutionTabs } from "./SolutionTabs";

export function ContentSection({
  solutions,
  activeTab,
  onTabChange,
  currentSolution,
  isTransitioning,
}) {
  return (
    <div className="space-y-2 container mx-auto px-6 ">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight text-white">
          WE GET IT—UNRELIABLE WIFI IS A NIGHTMARE.
        </h2>
      </div>

      <SolutionTabs
        solutions={solutions}
        activeTab={activeTab}
        onTabChange={onTabChange}
        isTransitioning={isTransitioning}
      />

      <SolutionDetails
        solution={currentSolution}
        isTransitioning={isTransitioning}
      />
    </div>
  );
}
