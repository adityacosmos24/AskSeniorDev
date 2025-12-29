"use client";

import { useState } from "react";
import { cn } from "../../lib/utils";
import Navbar from "./NavProfile";
import { Sidebar } from "./Sidebar";
import { ProgressCard } from "./ProgressCard";
import { StatCard } from "./StatCard";
import { QuickActions } from "./QuickActions";
import { RecentBudge } from "./RecentBudges";
import { ActivityHeatmap } from "./ActivityHeatmap";

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Dashboard */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6")}>
            {/* Top Row */}
            <div className="lg:col-span-2">
              <ProgressCard />
            </div>

            <div className="lg:col-span-1">
              <StatCard />
            </div>

            <div className="lg:col-span-1">
              <QuickActions />
            </div>

            {/* Bottom Row */}
            <div className="lg:col-span-3">
              <ActivityHeatmap />
            </div>

            <div className="lg:col-span-1">
              <RecentBudge />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
