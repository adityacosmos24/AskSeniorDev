"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Pencil, BrainCircuit } from "lucide-react";

type FilterType = "All" | "Published" | "Draft" | "Lorem ipsum";

const COURSES = [
  { id: 1, status: "Published" },
  { id: 2, status: "Draft" },
  { id: 3, status: "Draft" },
  { id: 4, status: "Published" },
];

export default function CourseInventory() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<FilterType>("All");

  const dropdownRef = useRef<HTMLDivElement>(null);

  /* CLOSE ON OUTSIDE CLICK */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        open &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const filteredCourses =
    filter === "All"
      ? COURSES
      : COURSES.filter((c) => c.status === filter);

  return (
    <div className="flex h-full flex-col rounded-xl border border-[#00A3FF] bg-white p-4">
      {/* HEADER */}
      <div className="relative mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900">
          Current Course inventory (4)
        </h3>

        {/* FILTER BUTTON */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setOpen((p) => !p)}
            className="flex items-center gap-1 rounded-md border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700 hover:bg-gray-50"
          >
            {filter} <ChevronDown size={14} />
          </button>

          {/* DROPDOWN */}
          {open && (
            <div className="absolute right-0 top-8 z-20 w-[140px] rounded-md border border-gray-200 bg-white shadow-lg">
              {(["All", "Published", "Draft", "Lorem ipsum"] as FilterType[]).map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setFilter(item);
                      setOpen(false);
                    }}
                    className={`w-full px-3 py-2 text-left text-xs transition
                      ${
                        filter === item
                          ? "bg-[#E6F6FF] text-[#00A3FF]"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* SCROLLABLE LIST */}
      <div className="flex-1 space-y-3 overflow-y-auto pr-1">
        {filteredCourses.map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-lg border border-gray-100 bg-white p-3 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#E6F6FF]">
                <BrainCircuit className="text-[#00A3FF]" size={20} />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Mastering Dynamic Programming
                  <span className="ml-2 text-xs text-orange-500">
                    ● {_.status}
                  </span>
                </p>
                <p className="text-xs text-gray-500">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">last Edit 12 Jun</span>

              <button className="flex items-center gap-1 rounded-md bg-[#00A3FF] px-3 py-1 text-xs text-white">
                <Pencil size={12} /> Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
