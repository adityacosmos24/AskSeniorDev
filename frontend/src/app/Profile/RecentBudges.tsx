import { Trophy, Code, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

const badges = [
  { icon: Trophy, title: "Feb Star", sub: "top 5 monthly" },
  { icon: Code, title: "Coder", sub: "100 Problems" },
];

export function RecentBudge() {
  return (
    <div className={cn("w-full max-w-full sm:max-w-[360px] rounded-sm border border-[#3B82F6] bg-white px-4 py-5 sm:px-5 sm:py-7 shadow-[0_8px_24px_rgba(0,0,0,0.06)]")}>
      {/* Header */}
      <div className="mb-4 sm:mb-6 flex items-center justify-between">
        <h3 className="text-[14px] sm:text-[16px] font-semibold text-gray-900">
          Recent Budges
        </h3>
        <button className="text-[13px] sm:text-[14px] font-medium text-blue-500 hover:underline">
          View all
        </button>
      </div>

      {/* Items */}
      <div className="space-y-2 sm:space-y-3">
        {badges.map(({ icon: Icon, title, sub }) => (
          <div key={title} className={cn("flex items-center justify-between rounded-xl border border-gray-200 bg-white px-3 py-3 sm:px-4 transition hover:bg-blue-50 cursor-pointer")}>
            <div className="flex items-center gap-3">
              <div className={cn("flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-blue-50")}>
                <Icon size={16} className="text-blue-500 sm:size-[18px]" />
              </div>

              <div>
                <p className="text-[13px] sm:text-[14px] font-medium text-gray-900">
                  {title}
                </p>
                <p className="text-[11px] sm:text-[12px] text-gray-500">
                  {sub}
                </p>
              </div>
            </div>

            <ChevronRight size={16} className="text-gray-400 sm:size-[18px]" />
          </div>
        ))}
      </div>
    </div>
  );
}
