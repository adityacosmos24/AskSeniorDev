'use client';

import { ChevronDown, FileText, PlayCircle } from 'lucide-react';

export default function CourseDetailsCourseContent() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-[95%] max-w-[1200px] px-4 sm:px-6 lg:px-0 mt-6 sm:mt-8 lg:mt-10">

        {/* ================= HEADER ================= */}
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
          Course Content
        </h2>

        <p className="text-xs sm:text-sm text-gray-500 mb-2">
          54 Sections • 519 Lectures • 39h 22m total length
        </p>

        {/* ================= CONTENT LIST ================= */}
        <div className="border border-gray-200 rounded-md overflow-hidden">

          {/* SECTION ITEM */}
          <SectionHeader
            title="The Complete AI Guide Introduction"
            meta="2 lectures • 10 min"
          />

          <SectionHeader
            title="Getting Started with ChatGPT, Prompting, and how LLM’s Work"
            meta="9 lectures • 1 hour 10 min"
            expanded
          >
            <LectureItem title="ChatGPT Interface Walkthrough: Buttons, Features, and Functionalities" time="09:20" />
            <LectureItem title="Personalize ChatGPT with Settings, Memory, and Custom Instructions" time="14:28" />
            <LectureItem title="Your First Steps with AI and Effective Prompting" time="06:24" />
            <LectureItem title="Anatomy of a Great Prompt" time="04:21" />
            <LectureItem title="Creatively Crafting Your Prompts" time="03:22" />
            <LectureItem title="Advanced Prompting Frameworks" time="03:22" />
          </SectionHeader>

          <SectionHeader
            title="ChatGPT in Action: Features, Use Cases, and Tools"
            meta="2 lectures • 10 min"
          />

          <SectionHeader
            title="ChatGPT: Prompt Engineering and Custom 17 page Prompting Guide PDF"
            meta="2 lectures • 10 min"
          />
        </div>

        {/* ================= REQUIREMENTS ================= */}
        <div className="mt-10 sm:mt-12 lg:mt-14">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
            Requirement
          </h3>

          <ul className="space-y-3 text-sm sm:text-[15px] text-[#373737]">
            <li className="flex gap-2">
              <span className="text-[#00A3FF] mt-[2px]">•</span>
              No prior experience with AI or programming is needed, but an eagerness to learn and explore new technologies is a plus!
            </li>
            <li className="flex gap-2">
              <span className="text-[#00A3FF] mt-[2px]">•</span>
              All concepts are explained step by step, making it easy for beginners to follow. Hands-on examples ensure you learn by doing.
            </li>
            <li className="flex gap-2">
              <span className="text-[#00A3FF] mt-[2px]">•</span>
              You’ll gain practical skills that can be applied to real-world projects and build a strong foundation in AI basics.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}

/* ================= SUB COMPONENTS ================= */

function SectionHeader({
  title,
  meta,
  expanded = false,
  children,
}: {
  title: string;
  meta: string;
  expanded?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="border-t border-gray-200">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-gray-50">
        <div className="flex items-center gap-2">
          <ChevronDown
            size={16}
            className={`text-gray-500 transition ${
              expanded ? 'rotate-180' : ''
            }`}
          />
          <span className="text-sm sm:text-[15px] font-medium text-gray-800">
            {title}
          </span>
        </div>
        <span className="text-xs sm:text-sm text-gray-500">{meta}</span>
      </div>

      {expanded && (
        <div className="bg-white">
          {children}
        </div>
      )}
    </div>
  );
}

function LectureItem({ title, time }: { title: string; time: string }) {
  return (
    <div className="flex items-center justify-between px-6 sm:px-8 py-2 border-t border-gray-100">
      <div className="flex items-center gap-2 text-sm text-gray-700">
        <PlayCircle size={14} className="text-gray-400" />
        {title}
      </div>
      <span className="text-xs text-gray-500">{time}</span>
    </div>
  );
}
