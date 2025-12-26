'use client';

import Image from 'next/image';
import avatar1 from "../../../public/avatar-1.png"
import avatar2 from "../../../public/avatar-2.png"
import avatar3 from "../../../public/avatar-3.png"



export default function LeaderboardPodium() {
  return (
    <section
      className="
        w-full
        max-w-[1400px]
        h-[220px]
        md:h-[280px]
        lg:h-[320px]
        grid
        grid-cols-[1fr_1.2fr_1fr]
        items-end
        justify-items-center
      "
    >
      {/* ================= SECOND ================= */}
      <div className="relative w-[80%] h-[70%] pt-15">
        <div className="absolute -top-16 inset-x-0 flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-[#00A3FF] overflow-hidden relative">
            <Image
            src={avatar1}
            alt=""
            fill
            className="object-contain object-center"
            />

          </div>
          <p className="mt-1 text-sm font-medium">🇫🇷 Sophie</p>
          <div className="mt-0.5 rounded-full bg-[#00A3FF] px-3 py-0.5 text-xs text-white">
            1,409 Problems
          </div>
        </div>

        <div className="h-full rounded-t-md bg-gradient-to-b from-[#00A3FF] to-[#DCEBFF] grid place-items-center">
          <span className="text-4xl font-bold text-white">2</span>
        </div>
      </div>
    
      {/* ================= FIRST ================= */}
      <div className="relative w-[85%] h-full pt-15">
        <div className="absolute -top-16 inset-x-0 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#00A3FF] overflow-hidden relative">
            <Image
            src={avatar2}
            alt=""
            fill
            className="object-contain object-center"
            />
          </div>
          <p className="mt-1 text-sm font-semibold">🇵🇹 Alex</p>
          <div className="mt-0.5 rounded-full bg-[#00A3FF] px-3 py-0.5 text-xs text-white">
            2,549 Problems
          </div>
        </div>

        <div className="h-full rounded-t-md bg-gradient-to-b from-[#00A3FF] to-[#DCEBFF] grid place-items-center">
          <span className="text-5xl font-bold text-white">1</span>
        </div>
      </div>

      {/* ================= THIRD ================= */}
      <div className="relative w-[80%] h-[65%] pt-15">
        <div className="absolute -top-16 inset-x-0 flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-[#00A3FF] overflow-hidden relative">
            <Image
            src={avatar3}
            alt=""
            fill
            className="object-contain object-center"
            />

          </div>
          <p className="mt-1 text-sm font-medium">🇨🇦 Ethan</p>
          <div className="mt-0.5 rounded-full bg-[#00A3FF] px-3 py-0.5 text-xs text-white">
            1,053 Problems
          </div>
        </div>

        <div className="h-full rounded-t-md bg-gradient-to-b from-[#00A3FF] to-[#DCEBFF] grid place-items-center">
          <span className="text-4xl font-bold text-white">3</span>
        </div>
      </div>
    </section>
  );
}
