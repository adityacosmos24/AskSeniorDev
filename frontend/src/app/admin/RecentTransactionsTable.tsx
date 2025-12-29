"use client";

import { useState } from "react";
import { X, Pencil, Trash2 } from "lucide-react";

export default function RecentTransactionsTable() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= MAIN TABLE ================= */}
      <div className="mt-6 rounded-[10px] border border-[#00A3FF] bg-white p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Recent Transactions
            </h3>
            <p className="text-xs text-gray-500">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          {/* VIEW ALL */}
          <button
            onClick={() => setOpen(true)}
            className="text-xs font-semibold bg-[#E4F5FF] text-[#00A3FF] border border-[#00A3FF] px-3 py-1 rounded-[3px]"
          >
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead className="bg-[#CCEDFF] text-gray-700">
              <tr>
                <th className="p-2 text-left">No</th>
                <th className="p-2 text-left">User</th>
                <th className="p-2 text-left">Plan</th>
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <tr key={i} className="border-t border-[#F2F2F2]">
                  <td className="p-2 font-semibold">{i}</td>
                  <td className="p-2">John Smith</td>
                  <td className="p-2">Pro Plan</td>
                  <td className="p-2">25 November, 2025</td>
                  <td className="p-2">
                    <span className="text-green-600 font-semibold bg-green-100 px-2 py-0.5 rounded-[6px] text-[11px]">
                      Paid
                    </span>
                  </td>
                  <td className="p-2 text-right">$120.00</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-[900px] rounded-[12px] border border-[#00A3FF] bg-white shadow-xl">
            {/* MODAL HEADER */}
            <div className="flex items-start justify-between p-4 border-b border-[#E6F6FF]">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Total Users
                </h3>
                <p className="text-xs text-gray-500">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-[#00A3FF]"
              >
                <X size={18} />
              </button>
            </div>

            {/* MODAL TABLE */}
            <div className="max-h-[420px] overflow-y-auto p-4">
              <table className="w-full text-xs">
                <thead className="bg-[#CCEDFF] text-gray-700 sticky top-0">
                  <tr>
                    <th className="p-2 text-left">No</th>
                    <th className="p-2 text-left">User</th>
                    <th className="p-2 text-left">No of Solved Problem</th>
                    <th className="p-2 text-left">Account</th>
                    <th className="p-2 text-left">Manage Account</th>
                  </tr>
                </thead>

                <tbody>
                  {Array.from({ length: 10 }).map((_, i) => (
                    <tr
                      key={i}
                      className="border-t border-[#F2F2F2]"
                    >
                      <td className="p-2 font-semibold">{i + 1}</td>
                      <td className="p-2">John Smith</td>
                      <td className="p-2">25/30</td>
                      <td className="p-2">
                        <span
                          className={`px-2 py-0.5 rounded-[6px] text-[11px] font-semibold ${
                            i < 4
                              ? "bg-green-100 text-green-600"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {i < 4 ? "Paid" : "free"}
                        </span>
                      </td>
                      <td className="p-2 flex gap-2">
                        <Pencil size={14} className="text-gray-600" />
                        <Trash2 size={14} className="text-red-500" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
