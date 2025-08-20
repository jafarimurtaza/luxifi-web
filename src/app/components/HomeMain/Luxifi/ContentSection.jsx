import Description from "../../Layout/Descriptions/Description";
import SectionTitle from "../../Layout/Titles/SectionTitle";
import { SolutionTabs } from "./SolutionTabs";

export function ContentSection({
  solutions,
  activeTab,
  onTabChange,
  currentSolution,
  isTransitioning,
}) {
  return (
    <div className="space-y-6 w-full max-w-xl">
      {/* Main Title */}
      <div>
        <SectionTitle
          title="We Get It—Unreliable Wi-Fi"
          subTitle="is a Nightmare."
          className="!pt-0 !pb-0 !px-0"
          textClassName="!text-2xl md:!text-3xl lg:!text-4xl !text-left !text-white !leading-tight"
        />
      </div>

      {/* Subtitle - You've tried everything */}
      <div className="hidden lg:block">
        <p className="text-gray-300 text-lg font-medium mb-4">
          You've tried everything:
        </p>
      </div>

      {/* Solution Tabs */}
      <div className="mb-6">
        <SolutionTabs
          solutions={solutions}
          activeTab={activeTab}
          onTabChange={onTabChange}
          isTransitioning={isTransitioning}
        />
      </div>

      {/* Description */}
      <div>
        <Description
          description="But the truth is: these solutions only go so far. Spotty coverage, dead zones, and buffering aren't just annoying — they interrupt your life."
          className="!text-left !text-base lg:!text-lg !leading-relaxed !text-gray-300"
        />
      </div>
    </div>
  );
}
