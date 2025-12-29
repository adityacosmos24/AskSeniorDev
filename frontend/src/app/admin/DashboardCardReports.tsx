"use client";

import { AlertTriangle } from "lucide-react";

export default function DashboardCardReports() {
  return (
    <div className="rounded-[8px] border border-[#00A3FF] bg-[#F7FCFF] p-4 sm:p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-[#00A3FF] bg-[#EAF7FF] px-2 py-1 rounded-[3px]">
          Admin Insights
        </span>
        <span className="text-xs font-medium text-red-500 bg-red-50 px-2 py-1 rounded-md flex items-center gap-1">
          <AlertTriangle size={12} />
          Attention Needed
        </span>
      </div>

      <h3 className="text-sm font-semibold text-gray-900 mb-1">
        Content Reports
      </h3>
      <p className="text-xs text-gray-500 mb-4">
        Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.
      </p>

      {/* Flagged Item */}
      <div className="rounded-[7px] border border-[#00A3FF] bg-[#F7FCFF] p-3">
        <p className="text-xs font-semibold text-gray-900 mb-1">
          Flagged Item
        </p>
        <p className="text-xs text-gray-600 mb-2">
          Video buffering issues reported.
        </p>
        <span className="inline-block text-[11px] font-medium text-red-600 bg-red-100 px-2 py-0.5 rounded">
          High Priority
        </span>
      </div>
    </div>
  );
}
