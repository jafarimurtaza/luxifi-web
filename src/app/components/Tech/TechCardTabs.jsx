"use client";

import { useState } from "react";
import { TECH_CARD_TABS } from "../../lib/constants";

function RenderTabContent({ children }) {
  return (
    <pre className="whitespace-pre-wrap text-base sm:text-xl md:text-2xl leading-relaxed font-light text-base-content">
      {children}
    </pre>
  );
}
export default function TechCardTabs({ description, features, dimensions }) {
  const [activeTab, setActiveTab] = useState("description");

  const renderContent = () => {
    switch (activeTab) {
      case TECH_CARD_TABS.DESCRIPTION:
        return <RenderTabContent>{description}</RenderTabContent>;
      case TECH_CARD_TABS.FEATURES:
        return <RenderTabContent>{features}</RenderTabContent>;
      case TECH_CARD_TABS.DIMENSIONS:
        return <RenderTabContent>{dimensions}</RenderTabContent>;
      default:
        return null;
    }
  };

  const tabs = ["description", "features", "dimensions"];
  return (
    <>
      <div className="flex space-x-6 mb-4">
        {tabs?.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 font-medium text-base-content/70 hover:text-primary transition-colors cursor-pointer uppercase ${
              activeTab === tab ? "border-b-2 border-primary text-primary" : ""
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      {renderContent()}
    </>
  );
}
