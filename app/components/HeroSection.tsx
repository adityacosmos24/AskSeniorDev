"use client";

import Image from "next/image";
import Jaskaran from "../../public/Jaskaran.png";
import HeroSectionBackground from "../../public/HeroSectionBackground.png";
import { Highlighter } from "@/components/ui/highlighter"
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-white">
      
      {/* ================= BACKGROUND ================= */}
      <Image
        src={HeroSectionBackground}
        alt="Background Frame"
        fill
        priority
        className="object-cover"
      />

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 flex flex-col items-center pt-28">

        {/* ---------- HEADING ---------- */}
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center">
          Your{" "}
          <Highlighter action="highlight" color="rgba(0, 163, 255, 0.3)">
            10× growth
          </Highlighter>{" "}
          starts here
        </h1>

        <p className="mt-4 text-black text-center max-w-xl">
          AI guidance, expert mentors, faster outcomes.
          <br />
          Ask a better question
        </p>

        {/* ---------- IMAGE + FLOATING CARDS ---------- */}
        <div className="relative mt-16">

          {/* Center Image */}
          <div className="relative w-[420px] h-[420px] flex items-center justify-center mx-auto">

            {/* Glow */}
            <div className="absolute w-[580px] h-[580px] rounded-full bg-blue-200/40 blur-3xl -z-10" />

            {/* Ring */}
            <div className="absolute inset-0 rounded-full border border-blue-300/60 bg-white/70 backdrop-blur-sm shadow-2xl" />

            {/* Profile */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <Image
                src={Jaskaran}
                alt="Jaskaran Singh"
                width={420}
                height={420}
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* ---------- LEFT FLOATING CARD ---------- */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute left-[-110px] top-[90px] px-5 py-4 flex items-center gap-3 z-30 scale-110 bg-white border border-[rgba(0,163,255,0.12)] shadow-md"
            >
             <div>
              <p className="text-xl font-semibold text-black">
                Jaskaran Singh
              </p>
              <p className="text-base text-black/90">
                SWE at{" "}
                <span className="font-medium">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </span>
              </p>
            </div>
          </motion.div>

          {/* ---------- RIGHT FLOATING QUOTE ---------- */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.4, // 👈 starts after left card
            }}
            className="absolute right-[-230px] top-[220px] z-20"
          >
            {/* OUTER WHITE BOX */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              {/* INNER BLUE BORDER BOX */}
              <div className="relative max-w-[320px] px-5 py-4 border border-[#00A3FF] rounded-md text-gray-800 text-sm">
                {/* Opening quote */}
                <span className="absolute -top-3 -left-3 text-[#00A3FF] text-3xl font-bold bg-white px-1">
                  “
                </span>

                <p className="leading-relaxed text-black">
                  Drawing on my Google experience, I’m building AskSenior for freshers to ask
                  sharper, industry-grade questions that accelerate learning and growth in
                  the AI age.
                </p>
                {/* Closing quote */}
                <span className="absolute -bottom-3 -right-3 text-[#00A3FF] text-3xl font-bold bg-white px-1">
                  ”
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
