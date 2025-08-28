"use client";

import { useState } from "react";
import { TECH_CARD_TABS } from "../../lib/constants";

function RenderTabContent({ children, isFeatures = false }) {
  if (isFeatures) {
    // Convert bullet points to proper list items
    const features = children.split("\n").filter((line) => line.trim());
    return (
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-base md:text-lg text-base-content leading-relaxed">
              {feature.replace(/^•\s*/, "")}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <p className="text-base md:text-lg text-base-content leading-relaxed">
      {children}
    </p>
  );
}

export default function TechCardTabs({ description, features }) {
  const [activeTab, setActiveTab] = useState(TECH_CARD_TABS.DESCRIPTION);

  const renderContent = () => {
    switch (activeTab) {
      case TECH_CARD_TABS.DESCRIPTION:
        return <RenderTabContent>{description}</RenderTabContent>;
      case TECH_CARD_TABS.FEATURES:
        return (
          <RenderTabContent isFeatures={true}>{features}</RenderTabContent>
        );
      default:
        return null;
    }
  };

  const tabs = [TECH_CARD_TABS.DESCRIPTION, TECH_CARD_TABS.FEATURES];
  return (
    <>
      <div className="flex space-x-8 mb-4">
        {tabs?.map((tab) => {
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 font-medium text-base-content/70 hover:text-primary transition-colors cursor-pointer uppercase ${
                activeTab === tab
                  ? "border-b-2 border-primary text-primary"
                  : ""
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          );
        })}
      </div>
      {renderContent()}
    </>
  );
}
