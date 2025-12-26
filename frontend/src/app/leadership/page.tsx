"use client";

import { useState } from "react";
import Tabs, { TabConfig } from "./LeadershipTabs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LeaderboardSection from "./LeaderboardSection";

const TABS: TabConfig[] = [
  { id: "tab1", title: "Course" },
  { id: "tab2", title: "Leaderboad" },
  { id: "tab3", title: "Certificate" },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
      <Navbar />

      <main className="w-full bg-white">
        {/* Tabs */}
        <div className="pt-8 flex justify-center">
          <Tabs tabs={TABS} onChange={setActiveTab} />
        </div>

        {/* Tab Content */}
        <div className="mt-16">
            {activeTab === "tab1" && null}

            {activeTab === "tab2" && (
            <div className="mt-12 mb-24 pt-8 flex justify-center">
                <LeaderboardSection />
            </div>
            )}

            
            {activeTab === "tab3" && null}
        </div>
      </main>

      <Footer />
    </>
  );
}
