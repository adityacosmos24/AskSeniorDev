"use client";

import { useState } from "react";
import Image from "next/image";
import { askASeniorData } from "@/components/Askaseniordata";
import DfsBfsVisualizer from "../components/dsa/DfsBfsVisualizer"
import TextType from "@/components/TextType";

export default function AskSenior() {
  const [activeTab, setActiveTab] = useState(askASeniorData[0]);

  return (
    <section className="hidden md:flex w-full flex-col items-center py-16 md:py-24 bg-white">
      {/* Title */}
      <TextType 
        text="Why Ask Senior?" 
        className="text-3xl md:text-4xl font-semibold text-center mb-12 md:mb-16" 
      />

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 bg-[#E6F6FF] rounded-sm p-1.5 mb-10 shadow-sm">
        {askASeniorData.map((tab) => {
          const isActive = tab.id === activeTab.id;
          return (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`px-5 md:px-8 py-2.5 rounded-sm text-sm font-medium transition-all duration-200
                ${isActive
                  ? "bg-white text-black shadow-md"
                  : "text-gray-600 hover:text-black"
                }`}
            >
              {tab.title}
            </button>
          );
        })}
      </div>

      {activeTab.rightContent.items.length > 0 ? (
        <div className="w-full max-w-7xl px-4 relative">
          {/* Main Container */}
          <div
            className="
        relative
        max-w-4xl
        rounded-sm
        border
        border-blue-300
        bg-gradient-to-r
        from-white
        via-[#F2FAFF]
        to-[#CFEFFF]
        px-6
        py-12
        md:pt-20
        md:pb-20
        md:pr-32
        flex
        flex-col
        md:flex-row
        gap-10
      "
          >
            {/* Left Section */}
<div className="flex-1 flex flex-col justify-center">
  <div className="relative w-full h-[240px] md:h-[380px]">
    {activeTab.leftContent.type === "visualizer" ? (
      <div className="w-full h-full flex items-center justify-center">
        <DfsBfsVisualizer />
      </div>
    ) : (
      <Image
        src={activeTab.leftContent.image!}
        alt=""
        fill
        className="object-contain"
        priority
      />
    )}
  </div>
</div>

          </div>

          {/* Right Card */}
          <div
            className="
        w-full
        mt-8
        lg:mt-0
        lg:absolute
        lg:top-1/2
        lg:right-0
        lg:-translate-y-1/2
        max-w-md
        z-20
        mx-auto
      "
          >
            <div className="bg-white rounded-lg p-4 shadow-2xl border border-blue-300">
              <div className="space-y-4">
                {activeTab.rightContent.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 items-start border border-gray-100 p-3 rounded-sm bg-[#FCFEFF]"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-[#E6F6FF] rounded-md shrink-0">
                      <img src={item.image} alt="" className="w-12 h-12" />
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-8 w-full bg-blue-500 text-white py-3.5 rounded-xl font-medium hover:bg-blue-600 transition">
                {activeTab.rightContent.button.ctaText}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex items-center justify-center">
          <div className="w-full flex items-center justify-center">
            <div className="w-full max-w-4xl rounded-xl bg-gradient-to-r from-[#9EDBFF] to-[#1EA7FF] p-16 text-center shadow-lg">

              {/* Title */}
              <h2 className="text-4xl font-semibold text-gray-900 mb-6">
                Coming Soon
              </h2>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <img src="/lock.png" alt="" />
              </div>

              {/* Description */}
              <p className="text-gray-900 mb-8">
                Enter your email address here to get notified <br />
                when we launch this feature.
              </p>

              {/* Input */}
              <input
                type="email"
                placeholder="Write Email Address"
                className="
    w-full
    max-w-2xl
    px-6
    py-4
    rounded-sm
    bg-white
    text-gray-900

    border
    border-white/40

    placeholder:text-[#00A3FF]
    placeholder:font-medium

    outline-none
    focus:border-white/70
    focus:ring-2
    focus:ring-blue-400
  "
              />


              {/* Button */}
              <button className="mt-3 px-10 py-3 bg-[#00A3FF] text-white rounded-sm font-medium hover:bg-blue-700 transition">
                Submit
              </button>
            </div>
          </div>

        </div>
      )}



    </section>
  );
}
