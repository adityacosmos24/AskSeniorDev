"use client";

import Image from "next/image";
import Jaskaran from "../../public/Jaskaran.png";
import HeroSectionBackground from "../../public/HeroSectionBackground.png";
import { Highlighter } from "@/components/ui/highlighter";
import { motion } from "framer-motion";

function QuoteIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
    >
      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
    </svg>
  );
}


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
      <div className="relative z-10 flex flex-col items-center pt-6 md:pt-8 -mt-2 md:-mt-4 px-4">

        {/* ---------- HEADING ---------- */}
        <h1 className="text-4xl md:text-5xl font-semibold text-[#181A1C] text-center">
          Your{" "}
          <Highlighter action="highlight" color="#ADE2FF">
            10× growth
          </Highlighter>{" "}
          starts here
        </h1>

        <p className="mt-4 text-[#4F4F4F] text-center max-w-xl">
          AI guidance, expert mentors, faster outcomes.
          <br />
          Ask a better question
        </p>

        {/* ---------- IMAGE + CARDS WRAPPER ---------- */}
        <div className="relative mt-16 flex flex-col items-center">

          {/* ---------- IMAGE CONTAINER ---------- */}
          <div className="relative">

            <div className="relative w-[260px] h-[260px] md:w-[420px] md:h-[420px] flex items-center justify-center mx-auto">
              <div className="hidden md:block absolute w-[580px] h-[580px] rounded-full bg-blue-200/40 blur-3xl -z-10" />
              <div className="absolute inset-0 rounded-full border border-blue-300/60 bg-white/70 backdrop-blur-sm shadow-2xl" />
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

            {/* ---------- GOOGLE SDE CARD ---------- */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="
                absolute
                -left-6 sm:-left-8 md:-left-20
                top-0 sm:top-4 md:top-24
                px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4
                bg-[#ECF7FF]
                border border-[#D7F0FF]
                shadow-md
                z-20
              "
            >
              <p className="text-sm sm:text-base md:text-lg font-semibold text-black leading-tight">
                Jaskaran Singh
              </p>
              <p className="text-xs sm:text-sm md:text-base text-black/90 leading-tight">
                SWE at{" "}
                <span className="font-semibold">
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
              lg:absolute lg:right-[-280px] lg:top-[220px]
            "
          >
            <div className="
              shadow-[0_18px_50px_rgba(0,0,0,0.12)]
              bg-gradient-to-br
              from-[#EAF7FF]/70
              to-white/45
              backdrop-blur-md
              p-4
            ">
              <div className="
                relative
                w-full
                px-5 py-5
                rounded-lg
                text-sm
                border border-[#92D5FA]
                bg-gradient-to-br
                from-[#EAF7FF]/80
                to-white/50
                backdrop-blur-md
              ">

                {/* Opening Quote (Lucide) */}
                <QuoteIcon
                  className="
                    absolute
                    -top-4 -left-4
                    w-6 h-6
                    text-[#00A3FF]
                    bg-[#EAF7FF]
                    backdrop-blur-md
                  "
                />


                <p className="leading-relaxed text-black/90">
                  Drawing on my Google experience, I’m building AskSenior for freshers to ask
                  sharper, industry-grade questions that accelerate learning and growth in
                  the AI age.
                </p>

                {/* Closing Quote (Lucide rotated) */}
                <QuoteIcon
                  className="
                    absolute
                    -bottom-4 -right-4
                    w-6 h-6
                    rotate-180
                    text-[#00A3FF]
                    bg-white
                  "
                />


              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
