"use client";

type TabType = "concept" | "problem";

export default function ContentTabs({
  activeTab,
  onChange,
}: {
  activeTab: TabType;
  onChange: (tab: TabType) => void;
}) {
  return (
    <div className="flex gap-2 bg-[#EAF6FF] p-2 rounded-md w-fit">
      <Tab
        label="Concept (Video / Text)"
        active={activeTab === "concept"}
        onClick={() => onChange("concept")}
      />
      <Tab
        label="Problem (Coding)"
        active={activeTab === "problem"}
        onClick={() => onChange("problem")}
      />
    </div>
  );
}

function Tab({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 text-sm rounded-md font-medium transition
      ${
        active
          ? "bg-white border border-[#00A3FF] text-[#00A3FF]"
          : "text-gray-600 hover:bg-white/60"
      }`}
    >
      {label}
    </button>
  );
}
