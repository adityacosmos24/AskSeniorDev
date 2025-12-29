"use client";

export default function DashboardCardRevenue() {
  const values = [
    { day: "M", value: "$24.90", height: 40 },
    { day: "T", value: "$50.90", height: 70 },
    { day: "W", value: "$12.90", height: 30 },
    { day: "T", value: "$79.90", height: 80 },
    { day: "F", value: "$60.90", height: 65 },
    { day: "S", value: "$30.94", height: 45 },
    { day: "S", value: "$22.12", height: 35 },
  ];

  return (
    <div className="rounded-[8px] border border-[#00A3FF] bg-white p-4 sm:p-5">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-900">
          Total Revenue : $156.90
        </h3>
        <select className="text-xs bg-[#F0F9FF] text-[#00A3FF] font-semibold border border-[#00A3FF] rounded-[3px] px-2 py-1">
          <option>Weekly</option>
        </select>
      </div>

      {/* BARS */}
      <div className="flex items-end gap-2 mb-4">
        {values.map((item, i) => (
          <div key={i} className="flex-1 flex flex-col items-center">
            {/* VALUE */}
            <span className="font-medium text-[11px] text-gray-700 mb-1">
              {item.value}
            </span>

            {/* BAR AREA — FIXED HEIGHT */}
            <div className="w-full h-[90px] flex items-end">
              <div
                className="w-full rounded-md bg-[#00A3FF]"
                style={{ height: `${item.height}%` }}
              />
            </div>

            {/* DAY */}
            <span className="font-medium text-[11px] text-gray-500 mt-1">
              {item.day}
            </span>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="flex items-center gap-2 text-xs">
        <span className="flex items-center gap-1 bg-[#F3F9F6] text-green-600 font-semibold px-2 py-1 rounded-[5px]">
          ▲ 12.5%
        </span>
        <span className="text-green-600">
          Compared to last week
        </span>
      </div>
    </div>
  );
}
