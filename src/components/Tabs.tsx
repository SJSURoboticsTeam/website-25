"use client";

import { useState } from "react";

interface TabsProps {
  divisions: { name: string; body: string }[];
}

export default function Tabs({ divisions }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs mt-xl">
      <div className="tab-list" role="tablist">
        {divisions.map((div, i) => (
          <button
            key={div.name}
            className={`tab-button ${i === activeTab ? "active" : ""}`}
            role="tab"
            aria-selected={i === activeTab}
            onClick={() => setActiveTab(i)}
          >
            {div.name}
          </button>
        ))}
      </div>
      {divisions.map((div, i) => (
        <div
          key={div.name}
          className={`tab-content ${i === activeTab ? "active" : ""}`}
          role="tabpanel"
          hidden={i !== activeTab}
        >
          {div.body}
        </div>
      ))}
    </div>
  );
}
