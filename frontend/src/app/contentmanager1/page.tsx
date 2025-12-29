"use client";

import { useState } from "react";
import NavbarContentMannager from "./NavbarContentManager";
import { SidebarContentManager } from "./SidebarContentManager";

import ProblemReviewQueue from "./ProblemReviewQueue";
import QuickCreate from "./QuickCreate";
import CourseInventory from "./CourseInventory";

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarContentMannager
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="flex">
        <SidebarContentManager
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* MAIN CONTENT */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[360px_1fr]">
            {/* LEFT COLUMN */}
            <div className="space-y-6">
              <ProblemReviewQueue />
              <QuickCreate />
            </div>

            {/* RIGHT COLUMN */}
            <div className="h-[520px]">
              <CourseInventory />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
