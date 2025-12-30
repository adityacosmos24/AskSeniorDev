"use client";

import {
  LayoutDashboard,
  Users,
  BookOpen,
  CreditCard,
  Layers,
  LogOut,
} from "lucide-react";

export default function SidebarContentManager() {
  return (
    <aside className="w-[260px] bg-white border border-[#E6F6FF] rounded-xl flex flex-col">
      
      {/* ================= USER ================= */}
      <div className="p-4 flex items-center gap-3 border-b border-[#E6F6FF]">
        <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
          <div className="w-5 h-5 rounded-full bg-sky-500" />
        </div>
        <div>
          <p className="text-sm font-semibold">Smith John</p>
          <p className="text-xs text-gray-500">admin</p>
        </div>
      </div>

      {/* ================= NAV ================= */}
      <div className="p-4 space-y-1">
        <NavItem icon={<LayoutDashboard size={16} />} label="Dashboard" />
        <NavItem icon={<Users size={16} />} label="User Management" />
        <NavItem icon={<BookOpen size={16} />} label="Courses" />
        <NavItem icon={<CreditCard size={16} />} label="Billing" />
        <NavItem
          icon={<Layers size={16} />}
          label="Content Management"
          active
        />
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="h-px bg-[#E6F6FF] mx-4" />

      {/* ================= CONTENT LIST ================= */}
      <div className="p-4">
        <p className="text-sm font-semibold mb-3">Content Management</p>

        <div className="space-y-1">
          <ContentItem active label="1. Introduction" />
          <ContentItem label="2. Fibonacci Stairs" />
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="mt-auto p-4 border-t border-[#E6F6FF]">
        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-black">
          <LogOut size={16} /> Log Out
        </button>
      </div>
    </aside>
  );
}

/* ================= SUB COMPONENTS ================= */

function NavItem({
  icon,
  label,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm cursor-pointer
      ${active ? "bg-[#F3FAFF] text-[#00A3FF]" : "hover:bg-gray-50"}`}
    >
      {icon}
      {label}
    </div>
  );
}

function ContentItem({
  label,
  active,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`px-3 py-2 text-sm rounded-md cursor-pointer border
      ${
        active
          ? "border-[#00A3FF] text-[#00A3FF] bg-[#F3FAFF]"
          : "border-transparent hover:bg-gray-50"
      }`}
    >
      {label}
    </div>
  );
}
