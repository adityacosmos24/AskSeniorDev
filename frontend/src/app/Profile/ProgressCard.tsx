import { Clock, RefreshCcw } from "lucide-react";

export function ProgressCard() {
  return (
    <div className="w-full max-w-full lg:max-w-[620px] bg-white border border-[#00A3FF] rounded-sm px-4 py-5 sm:px-6 sm:py-[29px] shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <h2 className="text-[18px] sm:text-[22px] font-semibold leading-snug text-gray-900">
          Mastering Dynamic
          <br className="hidden sm:block" />
          Programming in <span className="text-blue-500">C++</span>
        </h2>

        <div className="inline-flex w-fit items-center gap-1 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[12px] sm:text-[13px] text-orange-500">
          <Clock size={14} />
          <span>34 mins left</span>
        </div>
      </div>

      {/* Chapter */}
      <div className="mt-4">
        <p className="text-[14px] sm:text-[15px] font-medium text-blue-500">
          Chapter 4:
        </p>
        <p className="text-[14px] sm:text-[15px] text-gray-600">
          Memorization &amp; Tabulation.
        </p>
      </div>

      {/* Performance */}
      <p className="mt-3 text-[14px] sm:text-[15px] text-gray-600">
        You're outperforming{" "}
        <span className="font-medium text-gray-900">78%</span> of learners on this topic
      </p>

      {/* Progress */}
      <div className="mt-5">
        <div className="h-[6px] w-full rounded-full bg-gray-200 overflow-hidden">
          <div className="h-full w-[71%] rounded-full bg-blue-500" />
        </div>

        <div className="mt-2 flex items-center justify-between text-[12px] sm:text-[13px] text-gray-500">
          <span>Keep Going</span>
          <span>(71%)</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <button className="w-full sm:w-auto rounded-lg bg-blue-500 px-5 py-2.5 text-[14px] font-medium text-white shadow-[0_4px_12px_rgba(59,130,246,0.35)] hover:bg-blue-600">
          Resume Lesson
        </button>

        <div className="flex items-center justify-center sm:justify-start gap-2 text-[13px] sm:text-[14px] text-blue-500">
          <RefreshCcw size={16} />
          <span>in progress</span>
        </div>
      </div>
    </div>
  );
}
