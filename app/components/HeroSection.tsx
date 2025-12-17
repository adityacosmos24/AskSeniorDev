"use client";

import Image from "next/image";
import Jaskaran from "../../public/Jaskaran.png";
import HeroSectionBackground from "../../public/HeroSectionBackground.png";
import { Highlighter } from "@/components/ui/highlighter";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white">

      {/* ================= BACKGROUND (DESKTOP ONLY) ================= */}
      <div className="hidden lg:block">
        <Image
          src={HeroSectionBackground}
          alt="Background Frame"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 flex flex-col items-center pt-24 px-4">

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

        {/* ---------- IMAGE + CARDS WRAPPER ---------- */}
        <div className="relative mt-16 flex flex-col items-center">

          {/* ---------- IMAGE CONTAINER ---------- */}
          <div className="relative">

            {/* Profile Image */}
            <div className="relative w-[260px] h-[260px] md:w-[420px] md:h-[420px] flex items-center justify-center mx-auto">
              
              {/* Glow (desktop only) */}
              <div className="hidden md:block absolute w-[580px] h-[580px] rounded-full bg-blue-200/40 blur-3xl -z-10" />

              {/* Ring */}
              <div className="absolute inset-0 rounded-full border border-blue-300/60 bg-white/70 backdrop-blur-sm shadow-2xl" />

              {/* Image */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <Image
                  src={Jaskaran}
                  alt="Jaskaran Singh"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

              {/* ---------- GOOGLE SDE CARD (RESPONSIVE & FACE-SAFE) ---------- */}
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="
                  absolute
                  -left-6 sm:-left-8 md:-left-20
                  top-0 sm:top-4 md:top-24
                  px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4
                  bg-white
                  border border-[rgba(0,163,255,0.12)]
                  shadow-md
                  z-20
                  max-w-[180px] sm:max-w-[220px] md:max-w-none
                "
              >
                <p className="text-sm sm:text-base md:text-lg font-semibold text-black leading-tight">
                  Jaskaran Singh
                </p>
                <p className="text-xs sm:text-sm md:text-base text-black/90 leading-tight">
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
              </motion.div>
          </div>

          {/* ---------- QUOTE CARD ---------- */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="
              mt-10
              w-full max-w-sm
              lg:absolute lg:right-[-230px] lg:top-[220px]
            "
          >
            <div className="bg-white shadow-lg p-4">
              <div className="relative max-w-[360px] px-6 py-5 border border-[#00A3FF] rounded-lg text-sm">
                
                <span className="absolute -top-3 -left-3 text-[#00A3FF] text-3xl font-bold bg-white px-1">
                  “
                </span>

                <p className="leading-relaxed text-black">
                  Drawing on my Google experience, I’m building AskSenior for freshers to ask
                  sharper, industry-grade questions that accelerate learning and growth in
                  the AI age.
                </p>

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
