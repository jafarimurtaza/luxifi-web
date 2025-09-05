import SectionTitle from "../../Layout/Titles/SectionTitle";
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
    <div className="space-y-2 container mx-auto px-1 lg:px-4">
      <div>
        <SectionTitle
          title="We Get It."
          className="!pt-0 lg:!pt-4 !pb-0 lg:!pb-4 !px-0"
          textClassName="!text-2xl md:!text-3xl !text-left !text-white"
        />
        <SectionTitle
          title="Unreliable Wi-Fi Is A Nightmare"
          className="!pt-0 lg:!pt-4 !pb-0 lg:!pb-4 !px-0"
          textClassName="!text-2xl md:!text-3xl !text-left !text-white"
        />
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
