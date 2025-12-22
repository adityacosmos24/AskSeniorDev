'use client';

import Image from 'next/image';
import Jaskaran from '../../public/CourseDetailsJaskaran.png';
import { Crown } from 'lucide-react';

export default function CourseDetailsHero() {
  return (
    <section className="w-full bg-[#F5FBFF]">
      <div
        className="
          mx-auto w-full
          max-w-[1440px] 2xl:max-w-[1680px]
          px-4 sm:px-6 lg:px-10 2xl:px-12
          py-14 lg:py-20
        "
      >
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-[320px_1fr]
            2xl:grid-cols-[380px_1fr]
            gap-10 lg:gap-14 2xl:gap-20
            items-stretch
            md:pl-6 2xl:pl-10
          "
        >
          {/* IMAGE */}
          <div className="flex justify-center md:justify-start h-full">
            <Image
              src={Jaskaran}
              alt="Mentor"
              className="w-full max-w-[320px] 2xl:max-w-[380px] rounded-lg"
              priority
            />
          </div>

          {/* CONTENT */}
          <div className="relative flex flex-col h-full">
            {/* TEXT */}
            <div className="max-w-[1200px]">
              <h1 className="text-[clamp(32px,3.4vw,44px)] leading-[1.12] font-semibold text-black">
                The Complete AI Guide: Learn ChatGPT,
                <br />
                Generative AI & More
              </h1>

              <p className="mt-10 text-[20px] leading-[1.65] text-gray-600 max-w-[720px]">
                50+ Generative AI Tools to 10x Business, Productivity, Creativity |
                ChatGPT, Artificial Intelligence, Prompt Engineering
              </p>

              <p className="mt-10 text-[20px] text-[#007BFF] flex items-center gap-2">
                🧑‍🏫
                <span className="font-medium">Mentor Description</span>
                <span className="text-gray-700 font-semibold">
                  Dr. Angela Yu, Developer and Lead Instructor
                </span>
              </p>
            </div>

{/* PREMIUM BAR */}
<div
  className="
    w-full
    max-w-[780px]
    2xl:max-w-[880px]

    bg-white
    border border-[#0A9BFF]
    rounded-[7px]

    mt-6
    md:mt-0
    md:absolute
    md:bottom-8

    flex
    items-stretch
  "
>
  {/* LEFT — PREMIUM BADGE (WIDER) */}
  <div className="flex flex-col items-center justify-center px-8 bg-[#0A9BFF] text-white rounded-l-[7px]">
    <Crown className="w-5 h-5 text-yellow-300 mb-1" />
    <span className="text-[13px] font-semibold">Premium</span>
  </div>

  {/* DIVIDER */}
  <div className="self-stretch w-px bg-[#0A9BFF]/30" />

{/* MIDDLE — TEXT + BUTTON (TIGHTER WIDTH) */}
<div className="flex flex-1 flex-col justify-center px-4 py-3 gap-2">
  <p className="text-[13.5px] max-w-[300px] leading-[1.4] text-gray-700">
    Access this top-rated course, plus 26,000+ more top-rated courses,
    with a Udemy plan.
  </p>

  <button className="self-start bg-[#0A9BFF] text-white px-4 py-1.5 rounded-md text-[12.5px] font-medium">
    Enroll Now
  </button>
</div>


  {/* DIVIDER */}
  <div className="self-stretch w-px bg-[#0A9BFF]/30" />

  {/* RIGHT — STATS (EQUAL WIDTH + INNER DIVIDER) */}
  <div className="flex items-center px-5 py-3">
    <div className="text-center min-w-[80px]">
      <p className="font-semibold text-[14px] flex items-center gap-1 justify-center text-gray-900">
        4.0 <span className="text-yellow-400">⭐</span>
      </p>
      <p className="text-[11px] text-gray-500">420 ratings</p>
    </div>

    {/* INNER DIVIDER */}
    <div className="mx-4 h-8 w-px bg-[#0A9BFF]/30" />

    <div className="text-center min-w-[80px]">
      <p className="font-semibold text-[14px] text-gray-900">23,980</p>
      <p className="text-[11px] text-gray-500">learners</p>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}
