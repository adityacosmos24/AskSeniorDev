"use client";

export default function DashboardCardUsers() {
  return (
    <div className="rounded-[8px] border border-[#00A3FF] bg-white p-4 sm:p-5">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900">
          Total User
        </h3>
        <button className="text-xs font-semibold bg-[#E4F5FF] text-[#00A3FF] border border-[#00A3FF] px-2 py-1 rounded-[3px]">
          View more
        </button>
      </div>

      {/* THIS WEEK BOX */}
      <div className="inline-flex items-center gap-1.5 text-xs text-[#00A3FF] bg-[#F1F9FF] px-2.5 py-1 rounded-[4px] mb-3">
        ▲ 124 this week
      </div>

      {/* AVG + RETENTION */}
      <div className="flex items-center justify-between text-xs text-gray-700 mb-4">
        <span>
          <span className="font-medium"> Avg Time : </span> <span className="font-bold">40 min</span>
        </span>
        <span>
          <span className="font-medium"> Retension : </span> <span className="font-bold">A+</span>
        </span>
      </div>

      {/* DONUT */}
      <div className="flex justify-center mb-4">
        <div className="h-24 w-24 rounded-full border-[10px] border-sky-400 border-t-green-400 border-r-gray-200" />
      </div>

      {/* LEGEND */}
      <div className="flex justify-between text-xs">
        <span className="flex items-center gap-1 text-gray-600">
          <span className="h-2 w-2 bg-sky-400 rounded-full" /> Pro: 70%
        </span>
        <span className="flex items-center gap-1 text-gray-600">
          <span className="h-2 w-2 bg-green-400 rounded-full" /> Free: 20%
        </span>
        <span className="flex items-center gap-1 text-gray-600">
          <span className="h-2 w-2 bg-gray-300 rounded-full" /> Inactive
        </span>
      </div>
    </div>
  );
}
