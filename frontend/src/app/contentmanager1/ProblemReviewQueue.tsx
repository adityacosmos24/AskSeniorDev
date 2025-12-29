"use client";

export default function ProblemReviewQueue() {
  return (
    <div className="w-full rounded-xl border border-[#00A3FF] bg-white p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900">
          Problem Review Queue
        </h3>
        <span className="text-xs text-orange-500 font-medium">
          ● 2 Pending
        </span>
      </div>

      {/* Items */}
      <div className="space-y-2">
        {Array.from({ length: 2 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-md border border-gray-100 bg-gray-50 px-3 py-2"
          >
            <div>
              <p className="text-sm font-medium text-gray-900">
                Min Cost Flow (Hard)
              </p>
              <p className="text-xs text-gray-500">
                Course: Graph Theory
              </p>
            </div>

            <button className="text-xs font-medium text-[#00A3FF] hover:underline">
              Review
            </button>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button className="mt-4 w-full rounded-md bg-[#00A3FF] py-2 text-sm font-medium text-white hover:bg-[#0092e6] transition">
        View All Queue
      </button>
    </div>
  );
}
