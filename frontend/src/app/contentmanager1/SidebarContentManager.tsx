"use client";

import {
  LayoutDashboard,
  LogOut,
  User,
  X,
  NotebookPen,
  UsersRound
} from "lucide-react";

const items = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: NotebookPen, label: "Content Management" },
  { icon: UsersRound, label: "Students" },
];

type SidebarProps = {
  open?: boolean;
  onClose?: () => void;
};

export function SidebarContentManager({ open = false, onClose }: SidebarProps) {
  return (
    <>
      {/* OVERLAY */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          h-full w-[250px]
          transform bg-white p-3
          shadow-[0_10px_30px_rgba(0,0,0,0.08)]
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0 md:flex
          md:h-[calc(100vh-180px)]
          md:mt-7 md:mb-4 md:ml-4
          md:flex-col md:justify-between
          md:border md:border-[#00A3FF]
        `}
      >
        {/* TOP */}
        <div>
          {/* MOBILE CLOSE */}
          <div className="mb-3 flex justify-end md:hidden">
            <button onClick={onClose}>
              <X size={20} />
            </button>
          </div>

          {/* PROFILE */}
          <div className="mb-4 flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-50">
              <User size={18} className="text-blue-500" />
            </div>
            <span className="text-[14px] font-semibold text-gray-900">
              Smith John
            </span>
          </div>

          {/* DIVIDER */}
          <div className="mb-2 h-px w-full bg-blue-100" />

          {/* NAVIGATION */}
          <nav className="space-y-1">
            {items.map(({ icon: Icon, label, active }) => (
              <button
                key={label}
                onClick={onClose}
                className={`flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-[13px] font-medium transition
                  ${
                    active
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-blue-50"
                  }`}
              >
                <Icon size={16} className="text-blue-500" />
                {label}
              </button>
            ))}
          </nav>
        </div>

        {/* BOTTOM */}
        <div>
          <div className="mb-2 h-px w-full bg-blue-100" />
          <button className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-[13px] font-medium text-gray-700 transition hover:bg-red-50">
            <LogOut size={16} className="text-blue-500" />
            Log Out
          </button>
        </div>
      </aside>
    </>
  );
}
