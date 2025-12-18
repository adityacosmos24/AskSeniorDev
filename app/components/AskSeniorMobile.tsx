"use client";

import Image from "next/image";
import { askASeniorData } from "@/components/Askaseniordata";

export default function AskSeniorMobile() {
  return (
    <section className="block md:hidden px-4 py-10 bg-white space-y-12">
      {askASeniorData.map((section, idx) => {
        const isPremium = section.title === "Premium Membership";

        return (
          <div key={idx}>
            {/* Title */}
            <h2 className="text-xl font-semibold text-center mb-6">
              {section.title}
            </h2>

            {/* Top Illustration (HIDDEN for Premium Membership) */}
            {!isPremium && (
              <div className="relative w-full h-[180px] mb-6 rounded-md border border-blue-200 bg-gradient-to-br from-[#F2FAFF] to-[#E6F6FF]">
                <Image
                  src={section.leftContent.image}
                  alt=""
                  fill
                  className="object-contain p-4"
                  priority={idx === 0}
                />
              </div>
            )}

            {/* Content Card */}
            <div className="border border-blue-400 rounded-md p-4 bg-white shadow-sm">
              {section.rightContent.items.length > 0 ? (
                <>
                  {/* Items */}
                  <div className="space-y-4">
                    {section.rightContent.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex gap-4 items-start bg-[#FCFEFF] p-3 rounded-md border border-gray-100"
                      >
                        {/* Icon */}
                        <div className="w-10 h-10 flex items-center justify-center bg-[#E6F6FF] rounded-md shrink-0">
                          <img
                            src={item.image}
                            alt=""
                            className="w-6 h-6"
                          />
                        </div>

                        {/* Text */}
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">
                            {item.title}
                          </p>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    className="
                      mt-6
                      w-full
                      bg-blue-500
                      text-white
                      py-3
                      rounded-lg
                      font-medium
                      flex
                      items-center
                      justify-center
                      gap-2
                      hover:bg-blue-600
                      transition
                    "
                  >
                    {section.rightContent.button.image && (
                      <img
                        src={section.rightContent.button.image}
                        alt=""
                        className="w-5 h-5"
                      />
                    )}
                    {section.rightContent.button.ctaText}
                  </button>
                </>
              ) : (
                /* ===== COMING SOON ===== */
                <div className="w-full flex items-center justify-center">
                  <div className="w-full rounded-xl bg-gradient-to-r from-[#9EDBFF] to-[#1EA7FF] p-6 text-center shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      Coming Soon
                    </h2>

                    <div className="flex justify-center mb-4">
                      <img src="/lock.png" alt="" className="w-12 h-12" />
                    </div>

                    <p className="text-gray-900 mb-6 text-sm">
                      Enter your email address here to get notified <br />
                      when we launch this feature.
                    </p>

                    <input
                      type="email"
                      placeholder="Write Email Address"
                      className="
                        w-full
                        px-4
                        py-3
                        rounded-sm
                        bg-white
                        text-gray-900
                        border
                        border-white/40
                        placeholder:text-blue-500
                        placeholder:font-medium
                        outline-none
                        focus:border-white/70
                        focus:ring-2
                        focus:ring-blue-400
                      "
                    />

                    <button className="mt-3 w-full px-6 py-3 bg-blue-600 text-white rounded-sm font-medium hover:bg-blue-700 transition">
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}
