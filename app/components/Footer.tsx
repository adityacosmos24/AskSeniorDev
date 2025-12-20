"use client";

import Link from "next/link";
import {
  Mail,
  Linkedin,
  Instagram,
  Youtube,
  ArrowUp,
} from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { Link2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left */}
          <div className="flex flex-col gap-2">
            <span className="text-xl font-semibold text-[#00A3FF]">
              Senior
            </span>
            <div className="flex items-center gap-2 text-black">
              <Link2 size={18} className="text-[#00A3FF]" />
              <span className="font-medium">asksenior.in</span>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-8">
            <FooterItem icon={<Mail className="text-red-500" />} label="EMAIL" />
            <FooterItem
              icon={<Linkedin className="text-[#0A66C2]" />}
              label="LINKDIN"
            />
            <FooterItem
              icon={<FaDiscord className="text-[#5865F2]" size={20} />}
              label="DISCORD"
            />
            <FooterItem
              icon={<Instagram className="text-pink-500" />}
              label="INSTAGRAM"
              gradient
            />
            <FooterItem
              icon={<Youtube className="text-red-600" />}
              label="YOUTUBE"
            />

            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="p-2 rounded-md bg-[#00A3FF] text-white"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-6">
          <span className="text-xl font-semibold text-[#00A3FF]">
            Senior
          </span>

          <div className="flex items-center gap-2">
            <Link2 size={18} className="text-[#00A3FF]" />
            <span className="font-medium">asksenior.in</span>
          </div>

          <MobileItem icon={<Mail className="text-red-500" />} label="EMAIL" />
          <MobileItem
            icon={<Linkedin className="text-[#0A66C2]" />}
            label="LINKDIN"
          />
          <MobileItem
            icon={<FaDiscord className="text-[#5865F2]" size={20} />}
            label="DISCORD"
          />
          <MobileItem
            icon={<Instagram />}
            label="INSTAGRAM"
            gradient
          />
          <MobileItem
            icon={<Youtube className="text-red-600" />}
            label="YOUTUBE"
          />
        </div>
      </div>
    </footer>
  );
}

/* ---------- Helpers ---------- */

function FooterItem({
  icon,
  label,
  gradient = false,
}: {
  icon: React.ReactNode;
  label: string;
  gradient?: boolean;
}) {
  return (
    <div className="flex items-center gap-2 font-medium">
      {icon}
      <span
        className={
          gradient
            ? "bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent"
            : ""
        }
      >
        {label}
      </span>
    </div>
  );
}

function MobileItem({
  icon,
  label,
  gradient = false,
}: {
  icon: React.ReactNode;
  label: string;
  gradient?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 font-medium">
      {icon}
      <span
        className={
          gradient
            ? "bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent"
            : ""
        }
      >
        {label}
      </span>
    </div>
  );
}
