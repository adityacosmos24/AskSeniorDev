"use client";

import { useState } from "react";

export type TabConfig = {
  id: string;
  title: string;
};

type TabsProps = {
  tabs: TabConfig[];
  onChange: (tabId: string) => void;
};

export default function Tabs({ tabs, onChange }: TabsProps) {
  const [activeId, setActiveId] = useState(tabs[0].id);

  const handleClick = (id: string) => {
    setActiveId(id);
    onChange(id);
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 bg-[#E6F6FF] rounded-sm p-1.5 shadow-sm">
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;

        return (
          <button
            key={tab.id}
            onClick={() => handleClick(tab.id)}
            className={`px-5 md:px-8 py-2.5 rounded-sm text-sm font-medium transition-all duration-200
              ${
                isActive
                  ? "bg-white text-black shadow-md"
                  : "text-gray-600 hover:text-black"
              }`}
          >
            {tab.title}
          </button>
        );
      })}
    </div>
  );
}
