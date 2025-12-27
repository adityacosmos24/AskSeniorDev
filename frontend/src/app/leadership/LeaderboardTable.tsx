'use client';

import Image from "next/image";
import { Trophy, Clock } from "lucide-react";
import { leaderboardTableData } from "./leaderboardTableData";
import notcompleted from "../../../public/Notcompleted.png";
import completed from "../../../public/Completed.png";

export default function LeaderboardTable() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[900px] mx-auto rounded-xl border border-[#8BD5FF] bg-white">
        
        {/* Header (fixed) */}
<div className="grid grid-cols-[80px_1.5fr_1fr_1.3fr_1fr_1fr] bg-[#CCEDFF] px-6 py-4 text-sm font-medium text-gray-700 border-b border-[#B6E3FF] rounded-t-xl">
  <span className="text-center">Rank</span>
  <span className="text-center">Name</span>
  <span className="text-center">Problem Solved</span>
  <span className="text-center">Resources Completed</span>
  <span className="text-center">Time Spent</span>
  <span className="text-center">Completed</span>
</div>


        {/* Scrollable Rows (≈9 rows visible) */}
        <div className="max-h-[504px] overflow-y-auto">
          {leaderboardTableData.map((row) => (
            <div
              key={row.rank}
              className="grid grid-cols-[80px_1.5fr_1fr_1.3fr_1fr_1fr] items-center px-6 pr-[8px] py-4 text-sm border-t border-[#F2F2F2]"
            >
              {/* Rank */}
              <div className="flex items-center justify-center gap-2 font-medium">
                {row.rank <= 3 ? (
                  <Trophy
                    size={18}
                    className={
                      row.rank === 1
                        ? "text-yellow-500"
                        : row.rank === 2
                        ? "text-gray-400"
                        : "text-orange-400"
                    }
                  />
                ) : (
                  row.rank
                )}
              </div>

              {/* Name */}
              <span className="text-center font-medium text-gray-900">{row.name}</span>

              {/* Problems */}
              <span className="text-center">{row.problemsSolved}</span>

              {/* Resources */}
              <span className="text-center">{row.resourcesCompleted}</span>

              {/* Time */}
              <span className="flex items-center justify-center gap-2">
                <Clock size={14} /> {row.timeSpent}
              </span>

              {/* Completion */}
              <div className="flex justify-center w-full">
                <div
                  className={`
                    inline-flex items-center gap-2
                    px-3 py-1
                    rounded-md
                    text-sm font-medium
                    border
                    w-fit
                    ${
                      row.completed === 100
                        ? "bg-[#FFF6DB] border-[#FFC83D] text-[#3A3A3A]"
                        : "bg-[#EAF7FF] border-[#4DAFFF] text-[#0B63CE]"
                    }
                  `}
                >
                  <span>{row.completed}%</span>
                  <Image
                    src={row.completed === 100 ? completed : notcompleted}
                    alt={row.completed === 100 ? "Completed" : "In Progress"}
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
