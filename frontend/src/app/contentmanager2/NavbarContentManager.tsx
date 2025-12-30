"use client";

import { useState, useRef, useEffect } from "react";
import { Search, Flame, Bell, TrendingUp, Menu } from "lucide-react";
import { Span } from "next/dist/trace";

type Notification = {
  id: number;
  name: string;
  message: string;
  time?: string;
};

type NavbarProps = {
  onMenuClick: () => void;
};

export default function NavbarContentManager({ onMenuClick }: NavbarProps) {
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
          <span className="font-semibold px-15">Edit Content</span>
        </div>

        {/* Right Section */}
        <div className="ml-auto flex items-center gap-2 md:gap-3">
          <button className="font-semibold bg-[#F5F5F5] text-black px-3 py-1 rounded-[2px] shadow-sm hover:bg-[#F5F5F8] hover:shadow-md active:scale-[0.98] transition-all duration-200">
            Discard
          </button>
          <button className="font-semibold bg-[#00A3FF] text-white px-3 py-1 rounded-[2px] shadow-sm hover:bg-[#0092e6] hover:shadow-md active:scale-[0.98] transition-all duration-200">
            Save Changes
          </button>
        </div>
      </div>
    </nav>
  );
}
