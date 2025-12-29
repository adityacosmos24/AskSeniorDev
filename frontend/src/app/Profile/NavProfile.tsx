"use client";

import { useState, useRef, useEffect } from "react";
import { Search, Flame, Bell, TrendingUp, Menu } from "lucide-react";

type Notification = {
  id: number;
  name: string;
  message: string;
  time?: string;
};

type NavbarProps = {
  onMenuClick: () => void;
};

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [bellOpen, setBellOpen] = useState(false);
  const [streakOpen, setStreakOpen] = useState(false);

  const bellRef = useRef<HTMLDivElement>(null);
  const streakRef = useRef<HTMLDivElement>(null);

  const notifications: Notification[] = [
    {
      id: 1,
      name: "John Snow",
      message: "Lorem ipsum dolor sit amet consectetur. Lectus dictum semper in",
      time: "23:12",
    },
    {
      id: 2,
      name: "Lizza Carloss",
      message: "Lorem ipsum dolor sit amet consectetur. Lectus dictum semper in",
      time: "Tomorrow 12:24",
    },
    {
      id: 3,
      name: "Alex Turner",
      message: "Lorem ipsum dolor sit amet consectetur. Lectus dictum semper in",
      time: "Tomorrow 09:10",
    },
    {
      id: 4,
      name: "Sarah Lee",
      message: "Lorem ipsum dolor sit amet consectetur. Lectus dictum semper in",
      time: "Yesterday",
    },
    {
      id: 5,
      name: "Michael Scott",
      message: "Lorem ipsum dolor sit amet consectetur. Lectus dictum semper in",
      time: "Yesterday",
    },
  ];

  // Close popups on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (bellOpen && bellRef.current && !bellRef.current.contains(e.target as Node)) {
        setBellOpen(false);
      }

      if (
        streakOpen &&
        streakRef.current &&
        !streakRef.current.contains(e.target as Node)
      ) {
        setStreakOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [bellOpen, streakOpen]);

  return (
    <nav className="w-full h-16 bg-sky-50 border-b border-sky-100">
      <div className="max-w-7xl mx-auto h-full flex items-center px-4 md:px-6">
        {/* Hamburger Menu (Mobile Only) */}
        <button
          onClick={onMenuClick}
          className="md:hidden mr-3 h-10 w-10 flex items-center justify-center rounded-lg hover:bg-sky-100"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5 text-sky-600" />
        </button>

        {/* Logo */}
        <div className="text-xl font-semibold text-[#00A3FF] mr-4 md:mr-8">
          Senior
        </div>

        {/* Search */}
        <div className="flex-1 max-w-2xl hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-sky-400" />
            <input
              placeholder="Search Problem..."
              className="w-full h-10 pl-10 pr-4 rounded-lg border border-sky-100 bg-white text-sm outline-none"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="ml-auto flex items-center gap-2 md:gap-3">
          {/* Streak */}
          <div className="relative" ref={streakRef}>
            <button
              onClick={() => {
                setStreakOpen(!streakOpen);
                setBellOpen(false);
              }}
              className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4 h-10 sm:h-12 rounded-xl bg-sky-50 border border-sky-200 text-xs sm:text-sm"
            >
              <Flame className="h-5 w-5 sm:h-7 sm:w-7 text-orange-500 fill-orange-500" />
              <div className="leading-tight text-left hidden sm:block">
                <p className="text-xs sm:text-sm font-semibold">Streak</p>
                <p className="text-xs sm:text-sm font-semibold text-sky-500">
                  15 Days
                </p>
              </div>
            </button>

            {/* Streak Popup */}
            {streakOpen && (
              <div className="absolute right-0 mt-1.5 w-[160px] rounded-md bg-white border border-sky-400 shadow-sm z-50">
                <div className="absolute -top-1.5 right-6 w-3 h-3 bg-white border-l border-t border-sky-400 rotate-45" />

                <div className="px-3 py-2">
                  <p className="text-xs font-semibold text-gray-800 mb-1">
                    Solved Problems :
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-sky-500">
                      450
                    </span>

                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-sky-50 text-sky-500 text-[11px] font-medium">
                      <TrendingUp className="h-3 w-3" />
                      10 this week
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bell */}
          <div className="relative" ref={bellRef}>
            <button
              onClick={() => {
                setBellOpen(!bellOpen);
                setStreakOpen(false);
              }}
              className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-xl bg-sky-50 border border-sky-200"
            >
              <Bell className="h-5 w-5 md:h-6 md:w-6 text-sky-500" />
            </button>

            {/* Notification Popup */}
            {bellOpen && (
              <div className="absolute right-0 mt-2 w-[280px] sm:w-[340px] rounded-xl bg-white border-2 border-sky-400 shadow-xl z-50">
                <div className="absolute -top-2 right-3 sm:right-6 w-4 h-4 bg-white border-l-2 border-t-2 border-sky-400 rotate-45" />

                {/* Header */}
                <div className="flex justify-between px-4 py-3 border-b border-sky-200">
                  <p className="font-semibold">Notification</p>
                  <span className="text-sm text-sky-500 cursor-pointer">
                    View all
                  </span>
                </div>

                {/* Scrollable Notifications */}
                <div className="p-2 space-y-2 max-h-[320px] overflow-y-auto">
                  {notifications.map((n, i) => (
                    <div
                      key={n.id}
                      className={`rounded-lg p-3 ${
                        i === 0 ? "bg-sky-50" : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex justify-between">
                        <p className="font-semibold">{n.name}</p>
                        {n.time && (
                          <span className="text-xs text-gray-500">
                            {n.time}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">
                        {n.message}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
