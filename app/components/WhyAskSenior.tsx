"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import DfsBfsVisualizer from "./dsa/DfsBfsVisualizer";

const SystemDesignModel = dynamic(
  () => import("./three/SystemDesignModel"),
  { ssr: false }
);

export default function WhyAskSenior() {
  const [activeTab, setActiveTab] = useState("dsa");

  return (
    <main className="min-h-screen bg-white">
      {/* ================= HEADING ================= */}
      <section className="text-center mt-12">
        <h2 className="text-3xl font-semibold">Why Ask Senior ?</h2>

        {/* ================= TABS ================= */}
        <div className="mt-8 flex justify-center">
          <div className="flex bg-blue-100/60 backdrop-blur-md rounded-xl p-1 shadow-inner">
            <TabButton
              label="Online Assessment (DSA)"
              active={activeTab === "dsa"}
              onClick={() => setActiveTab("dsa")}
            />
            <TabButton
              label="Dev & System Design"
              active={activeTab === "dev"}
              onClick={() => setActiveTab("dev")}
            />
            <TabButton
              label="Premium Membership"
              active={activeTab === "premium"}
              onClick={() => setActiveTab("premium")}
            />
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="mt-12 px-8 relative">
        <div className={activeTab === "dsa" ? "block" : "hidden"}>
          <DSASection />
        </div>

        <div className={activeTab === "dev" ? "block" : "hidden"}>
          <DevSection />
        </div>

        <div className={activeTab === "premium" ? "block" : "hidden"}>
          <PremiumSection />
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
    <div className="relative max-w-6xl mx-auto">
      {/* BIG BOX */}
      <div className="relative overflow-visible bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-2xl p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* LEFT CONTENT */}
        <div className="md:col-span-2 h-[320px] flex items-center justify-center">
          <DfsBfsVisualizer />
        </div>

        {/* FLOATING CARD */}
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
            What you get
          </h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li>AI-powered DSA Roadmaps</li>
            <li>Concepts + Runnable Code</li>
            <li>Problems by Concept</li>
            <li>Final OA Challenge</li>
          </ul>

          <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition">
            Explore DSA Roadmaps
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================= DEV SECTION ================= */
function DevSection() {
  return (
    <div className="relative max-w-6xl mx-auto">
      {/* BIG BOX */}
      <div className="relative overflow-visible bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-2xl p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* LEFT CONTENT */}
        <div className="md:col-span-2 h-[320px] w-full overflow-hidden rounded-xl">
          <SystemDesignModel />
        </div>

        {/* FLOATING CARD */}
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
