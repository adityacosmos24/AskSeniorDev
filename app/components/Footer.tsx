"use client";

import Link from "next/link";
import {
  Mail,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { Link2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-6">
        
        {/* ================= DESKTOP (UNCHANGED) ================= */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left */}
          <div className="flex flex-col gap-2">
            <span className="text-xl font-semibold text-[#00A3FF]">
              Senior
            </span>
            <div className="flex items-center gap-2">
              <Link2 size={18} className="text-[#00A3FF]" />
              <span className="font-medium">asksenior.in</span>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-8">
            <FooterItem icon={<Mail className="text-red-500" />} label="EMAIL" />
            <FooterItem icon={<Linkedin className="text-[#0A66C2]" />} label="LINKDIN" />
            <FooterItem icon={<FaDiscord className="text-[#5865F2]" size={20} />} label="DISCORD" />
            <FooterItem
              icon={<Instagram />}
              label="INSTAGRAM"
              gradient
            />
            <FooterItem icon={<Youtube className="text-red-600" />} label="YOUTUBE" />
          </div>
        </div>

        {/* ================= MOBILE (FIXED) ================= */}
        <div className="md:hidden grid grid-cols-2 gap-x-10 gap-y-6">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <span className="text-xl font-semibold text-[#00A3FF]">
              Senior
            </span>

            <div className="flex items-center gap-2">
              <Link2 size={18} className="text-[#00A3FF]" />
              <span className="font-medium">asksenior.in</span>
            </div>

            <MobileItem icon={<Mail className="text-red-500" />} label="EMAIL" />
            <MobileItem icon={<Linkedin className="text-[#0A66C2]" />} label="LINKDIN" />
            <MobileItem icon={<FaDiscord className="text-[#5865F2]" size={20} />} label="DISCORD" />
          </div>

          {/* Right Column */}
<div className="flex flex-col gap-6 mt-[101px]">
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
      </div>
      {/* ================= FOOTER BOTTOM BAR ================= */}
<div className="w-full bg-[#E6F6FF] border-t border-[#0C8CE9]">
  <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-[13px] text-[#0F172A]">
    
    {/* Left */}
    <span className="flex items-center gap-1 text-[#00A3FF] font-medium">
  <span className="font-medium">©</span> Senior 2025. All rights reserved.
</span>


    {/* Right */}
    <Link
      href="/privacy-policy"
      className="text-[#00A3FF] hover:underline font-medium"
    >
      Privacy Policy
    </Link>

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
