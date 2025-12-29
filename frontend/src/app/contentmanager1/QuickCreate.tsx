"use client";

import { Plus, Video } from "lucide-react";

export default function QuickCreate() {
  return (
    <div className="w-full rounded-xl border border-[#00A3FF] bg-white p-5">
      <h3 className="mb-4 text-base font-semibold text-gray-900">
        Quick Create
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {/* Add Problem */}
        <div className="flex flex-col items-center justify-center rounded-xl bg-[#ECFDF3] p-6 text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 shadow">
            <Plus className="text-white" />
          </div>
          <p className="text-sm font-semibold text-gray-900">
            Add New Problem
          </p>
        </div>

        {/* Add Video */}
        <div className="flex flex-col items-center justify-center rounded-xl bg-[#E6F6FF] p-6 text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[#00A3FF] shadow">
            <Video className="text-white" />
          </div>
          <p className="text-sm font-semibold text-gray-900">
            Add New Concept <br />(Video)
          </p>
        </div>
      </div>
    </div>
  );
}
