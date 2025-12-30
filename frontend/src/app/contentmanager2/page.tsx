"use client";

import { useState } from "react";
import NavbarContentMannager from "./NavbarContentManager";
import SidebarContentManager from "./SidebarContentManager";
import ContentTabs from "./ContentTabs";
import ConceptEditor from "./ConceptEditor";
import ProblemEditor from "./ProblemEditor";

export default function Page() {
  const [activeTab, setActiveTab] = useState<"concept" | "problem">("concept");

  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarContentMannager onMenuClick={() => {}} />

      <main className="max-w-[1400px] mx-auto px-6 py-6 grid grid-cols-[260px_1fr] gap-6">
        <SidebarContentManager />

        <div className="space-y-4">
          <ContentTabs activeTab={activeTab} onChange={setActiveTab} />

          {activeTab === "concept" && <ConceptEditor />}
          {activeTab === "problem" && <ProblemEditor />}
        </div>
      </main>
    </div>
  );
}
