"use client";

import { useState } from "react";
import NavbarAdmin from "./NavbarAdmin";
import { SidebarAdmin } from "./SidebarAdmin";

import DashboardCardReports from "./DashboardCardReports";
import DashboardCardUsers from "./DashboardCardUsers";
import DashboardCardRevenue from "./DashboardCardRevenue";
import RecentTransactionsTable from "./RecentTransactionsTable";

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarAdmin onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex">
        <SidebarAdmin open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* TOP CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <DashboardCardReports />
            <DashboardCardUsers />
            <DashboardCardRevenue />
          </div>

          {/* TABLE */}
          <RecentTransactionsTable />
        </main>
      </div>
    </div>
  );
}
