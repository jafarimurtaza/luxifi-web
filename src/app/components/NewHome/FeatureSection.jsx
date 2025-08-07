'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function FeatureSection({
  title,
  tabs,
  image,
  decorations = [],
}) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.label || '');

  const currentTab = tabs.find((t) => t.label === activeTab);

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 py-12 px-6">
      {/* Image with optional decorations */}
      <div className="relative w-full md:w-1/2">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width || 800}
          height={image.height || 600}
          className="rounded-lg"
        />
        {decorations.map((decor, index) => (
          <Image
            key={index}
            src={decor.src}
            alt=""
            width={decor.width}
            height={decor.height}
            className={`absolute ${decor.className}`}
            style={decor.style}
          />
        ))}
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl font-bold mb-4 leading-tight">{title}</h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`px-4 py-2 border rounded ${
                activeTab === tab.label
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {currentTab && (
          <>
            <p className="mb-6 text-gray-700">{currentTab.description}</p>
            {currentTab.stats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(currentTab.stats).map(([label, value]) => (
                  <div className="text-center" key={label}>
                    <div className="font-semibold">{label.toUpperCase()}</div>
                    {typeof value === 'number' ? (
                      <div className="text-blue-700 text-xl font-bold">
                        {value} / 100
                      </div>
                    ) : (
                      <div className="text-red-600 font-bold">{value}</div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
