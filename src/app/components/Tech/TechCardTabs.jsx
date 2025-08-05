'use client';

import { useState } from 'react';

export default function TechCardTabs({ description, features, dimensions }) {
  const [activeTab, setActiveTab] = useState('description');

  const renderContent = () => {
    switch (activeTab) {
      case 'description':
        return <p className="text-base sm:text-xl md:text-2xl leading-relaxed font-light text-base-content">{description}</p>;
      case 'features':
        return <pre className="whitespace-pre-wrap text-base sm:text-xl md:text-2xl leading-relaxed font-light text-base-content">{features}</pre>;
      case 'dimensions':
        return <pre className="whitespace-pre-wrap text-base sm:text-xl md:text-2xl leading-relaxed font-light text-base-content">{dimensions}</pre>;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex space-x-6 mb-4">
        {['description', 'features', 'dimensions'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 font-medium text-base-content/70 hover:text-primary transition-colors cursor-pointer uppercase ${
              activeTab === tab ? 'border-b-2 border-primary text-primary' : ''
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
