import { cn } from "../../lib/utils";

export function StatCard() {
  return (
    <div className={cn("w-full max-w-full sm:max-w-[350px] bg-white border border-[#3B82F6] rounded-sm px-4 py-4 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)]")}>
      {/* Header */}
      <h3 className="text-[16px] sm:text-[20px] font-semibold text-gray-900">
        Solved Problems :{" "}
        <span className="font-bold">342</span>
      </h3>

      {/* Badge */}
      <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[12px] sm:text-[13px] font-medium text-blue-500">
        ↗ 10 this week
      </div>

      {/* Stats Row */}
      <div className="mt-3 flex flex-wrap justify-between gap-2 text-[13px] sm:text-[14px] text-gray-700">
        <span>
          Avg Time : <span className="font-medium">14 min</span>
        </span>
        <span>
          Constituency : <span className="font-semibold">A+</span>
        </span>
      </div>

      {/* Donut Chart */}
      <div className="mt-4 flex justify-center">
        <div className="relative h-[120px] w-[120px] sm:h-[140px] sm:w-[140px]">
          <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
            {/* Easy */}
            <path
              d="M18 2 a 16 16 0 1 1 0 32 a 16 16 0 1 1 0 -32"
              fill="none"
              stroke="#6F85F7"
              strokeWidth="4"
              strokeDasharray="60 40"
              strokeLinecap="round"
            />

            {/* Medium */}
            <path
              d="M18 2 a 16 16 0 1 1 0 32 a 16 16 0 1 1 0 -32"
              fill="none"
              stroke="#6BCF8E"
              strokeWidth="4"
              strokeDasharray="25 75"
              strokeDashoffset="-60"
              strokeLinecap="round"
            />

            {/* Hard */}
            <path
              d="M18 2 a 16 16 0 1 1 0 32 a 16 16 0 1 1 0 -32"
              fill="none"
              stroke="#FDB44B"
              strokeWidth="4"
              strokeDasharray="15 85"
              strokeDashoffset="-85"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap justify-between gap-3 text-[13px] sm:text-[14px] text-gray-800">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full bg-[#FDB44B]" />
          <span>Hard 12</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full bg-[#6BCF8E]" />
          <span>Medium 85</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full bg-[#6F85F7]" />
          <span>Easy 120</span>
        </div>
      </div>
    </div>
  );
}
