"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import DfsBfsVisualizer from "./dsa/DfsBfsVisualizer";
import TextType from "@/components/TextType";
import PillNav from "@/components/PillNav";
import DsaSideCard from "@/components/DsaSideCard";

const SystemDesignModel = dynamic(
  () => import("./three/SystemDesignModel"),
  { ssr: false }
);

export default function WhyAskSenior() {
  const [activeTab, setActiveTab] = useState("dsa");

  return (
    <main className="min-h-screen bg-white flex items-center">
      <section className="w-full px-8">
        <div className="max-w-6xl mx-auto">

          {/* ================= HEADING ================= */}
          <div className="text-center mt-6">
            <TextType
              className="text-4xl font-bold"
              text={["Why Ask Senior?"]}
              typingSpeed={100}
              pauseDuration={1500}
              showCursor
              cursorCharacter="|"
            />
          </div>

          {/* ================= PILL TABS ================= */}
          <div className="flex justify-center mt-8 mb-8 -translate-x-3">
            <PillNav
              variant="tabs"
              logo=""
              items={[
                { label: "Online Assessment (DSA)", href: "dsa" },
                { label: "Dev & System Design", href: "dev" },
                { label: "Premium Membership", href: "premium" }
              ]}
              activeHref={activeTab}
              onTabChange={setActiveTab}
              baseColor="#E6F6FF"
              pillColor="#ffffff"
              pillTextColor="#181A1C"
              hoveredPillTextColor="#181A1C"
              initialLoadAnimation={false}
              className="!w-fit"
            />
          </div>

          {/* ================= CONTENT ================= */}
          <div className="relative">
            {activeTab === "dsa" && <DSASection />}
            {activeTab === "dev" && <DevSection />}
            {activeTab === "premium" && <PremiumSection />}
          </div>

        </div>
      </section>
    </main>
  );
}

/* ================= TAB BUTTON ================= */
function TabButton({ label, active, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2 text-sm font-medium rounded-lg transition-all duration-300
        ${
          active
            ? "bg-white text-blue-600 shadow-md"
            : "text-blue-900/60 hover:text-blue-600"
        }
      `}
    >
      {label}
    </button>
  );
}

/* ================= DSA SECTION ================= */
function DSASection() {
  return (
    <div className="relative max-w-6xl mx-auto overflow-visible">
      
      {/* POSITIONING WRAPPER (allows overlap) */}
      <div className="relative w-[929px] h-[558px] overflow-visible">
        
        {/* BACKGROUND LAYER (clipped) */}
        <div
          className="
            absolute inset-0
            rounded-[3px]
            overflow-hidden
            border border-[#DEF4FF]
          "
          style={{
            background: `
              radial-gradient(
                600px 400px at 80% 50%,
                rgba(0,163,255,0.12),
                transparent 70%
              ),
              radial-gradient(
                800px 500px at 30% 20%,
                rgba(0,163,255,0.06),
                transparent 75%
              ),
              linear-gradient(
                90deg,
                #ffffff 0%,
                #E1F4FF 100%
              )
            `
          }}

        />

        {/* CONTENT INSIDE BACKGROUND */}
<div className="
  relative z-10 h-full
  flex items-center justify-center
  pr-[220px]
">
  <DfsBfsVisualizer />
</div>



        {/* FLOATING CARD — HALF IN / HALF OUT */}
        <div
          className="
            absolute
            top-1/2
            right-[-270px]
            -translate-y-1/2
            z-20
          "
        >
          <DsaSideCard />
        </div>

      </div>
    </div>
  );
}

/* ================= DEV SECTION ================= */
function DevSection() {
  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="relative overflow-visible bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-2xl p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="md:col-span-2 h-[320px] w-full overflow-hidden rounded-xl">
          <SystemDesignModel />
        </div>

        <div
          className="
            absolute
            top-1/2
            right-[-3.5rem]
            -translate-y-1/2
            bg-white
            rounded-xl
            shadow-xl
            p-6
            w-[280px]
          "
        >
          <h3 className="font-semibold mb-4 text-gray-900">
            Mentor-Led Learning
          </h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li>Backend + System Design</li>
            <li>APIs, Databases, Scaling</li>
            <li>Practical Walkthroughs</li>
            <li>Real Projects</li>
          </ul>

          <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition">
            Build with Mentors
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================= PREMIUM SECTION ================= */
function PremiumSection() {
  return (
    <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-2xl p-16 text-center text-white shadow-lg">
      <h2 className="text-3xl font-semibold mb-4">Coming Soon</h2>

      <p className="mb-8 text-sm text-white/90">
        Enter your email address to get notified when we launch this feature.
      </p>

      <div className="flex justify-center gap-3">
        <input
          type="email"
          placeholder="Write Email Address"
          className="px-4 py-2 rounded-md text-black w-64 outline-none"
        />
        <button className="bg-blue-700 hover:bg-blue-800 px-6 py-2 rounded-md transition">
          Submit
        </button>
      </div>
    </div>
  );
}
