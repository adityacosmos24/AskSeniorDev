import { Target, Brain, FileText, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

const actions = [
  {
    icon: Target,
    label: "Daily Challenge",
    sub: "expiring in 4 hour",
  },
  {
    icon: Brain,
    label: "Interview problems",
    sub: "30 min session",
  },
  {
    icon: FileText,
    label: "Review weak Topics",
    sub: "2 topic identified",
  },
];

export function QuickActions() {
  return (
    <div className={cn("w-full max-w-full sm:max-w-[360px] rounded-sm border border-[#3B82F6] bg-white px-4 py-4 sm:p-5 shadow-[0_8px_24px_rgba(0,0,0,0.06)]")}>
      {/* Title */}
      <h3 className="mb-3 sm:mb-4 text-[14px] sm:text-[16px] font-semibold text-gray-900">
        Quick Actions
      </h3>

      {/* Items */}
      <div className="space-y-2 sm:space-y-3">
        {actions.map(({ icon: Icon, label, sub }) => (
          <div key={label} className={cn("flex items-center justify-between rounded-xl border border-gray-200 bg-white px-3 py-3 sm:px-4 transition hover:bg-blue-50 cursor-pointer")}>
            <div className="flex items-center gap-3">
              {/* Icon Box */}
              <div className={cn("flex h-10 w-9 sm:h-12 items-center justify-center rounded-lg bg-blue-50")}>
                <Icon size={16} className="text-blue-500 sm:size-[18px]" />
              </div>

              {/* Text */}
              <div>
                <p className="text-[13px] sm:text-[14px] font-medium text-gray-900">
                  {label}
                </p>
                <p className="text-[11px] sm:text-[12px] text-gray-500">
                  {sub}
                </p>
              </div>
            </div>

            {/* Arrow */}
            <ChevronRight size={16} className="text-gray-400 sm:size-[18px]" />
          </div>
        ))}
      </div>
    </div>
  );
}
