"use client";

import { useMemo } from "react";
import { cn } from "../../lib/utils";

const DAYS = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

const COLORS = [
  "#F3F4F6", // empty
  "#DBEAFE",
  "#BFDBFE",
  "#60A5FA",
  "#2563EB",
];

// Seeded random number generator for consistent hydration
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function ActivityHeatmap() {
  // Generate consistent heatmap data
  const heatmapData = useMemo(() => {
    return Array.from({ length: 52 }, (_, weekIdx) =>
      Array.from({ length: 7 }, (_, dayIdx) => {
        const seed = weekIdx * 7 + dayIdx;
        const random = seededRandom(seed);
        return random > 0.55 ? Math.floor(seededRandom(seed + 1000) * 4) + 1 : 0;
      })
    );
  }, []);
  return (
    <div className={cn("w-full rounded-sm border border-[#2563EB] bg-white px-4 py-4 sm:px-6 sm:py-5 shadow-[0_8px_24px_rgba(0,0,0,0.06)]")}>
      {/* Header */}
      <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-[14px] sm:text-[16px] font-semibold text-gray-900">
          Activity{" "}
          <span className="ml-1 text-[11px] sm:text-[12px] font-normal text-gray-500">
            ( 500 submission / year )
          </span>
        </h3>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-1.5 text-[11px] sm:text-[12px] text-gray-500">
          <span>less</span>
          {COLORS.map((c, i) => (
            <span
              key={i}
              className="h-[10px] w-[10px] sm:h-[12px] sm:w-[12px] rounded-sm"
              style={{ backgroundColor: c }}
            />
          ))}
          <span>more</span>
        </div>
      </div>

      {/* Heatmap (scrollable on mobile) */}
      <div className="overflow-x-auto">
        <div className="min-w-[700px]">
          <div className="flex">
            {/* Day labels */}
            <div className="mr-2 flex flex-col gap-[6px] pt-[2px] text-[11px] sm:text-[12px] text-gray-500">
              {DAYS.map((day) => (
                <span key={day} className="h-[14px] leading-[14px]">
                  {day}
                </span>
              ))}
            </div>

            {/* Weeks */}
            <div>
              <div className="flex gap-[4px]">
                {heatmapData.map((week, weekIdx) => (
                  <div key={weekIdx} className="flex flex-col gap-[4px]">
                    {week.map((intensity, dayIdx) => (
                      <div
                        key={dayIdx}
                        className="h-[14px] w-[14px] rounded-sm"
                        style={{ backgroundColor: COLORS[intensity] }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Month labels */}
          <div className="mt-2 ml-[28px] grid grid-cols-12 text-[11px] sm:text-[12px] text-gray-500">
            {MONTHS.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
