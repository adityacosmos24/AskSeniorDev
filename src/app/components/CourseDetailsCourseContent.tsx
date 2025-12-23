'use client';

import { useState } from 'react';
import { ChevronDown, PlayCircle } from 'lucide-react';

export default function CourseDetailsCourseContent() {
  const [openSection, setOpenSection] = useState<number | null>(1);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-[95%] max-w-[1200px] px-4 sm:px-6 lg:px-0 mt-4 sm:mt-6 lg:mt-8">

        {/* ================= HEADER ================= */}
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
          Course Content
        </h2>

        <p className="text-xs sm:text-sm text-gray-500 mb-2">
          54 Sections <span className="text-[#00A3FF]">•</span> 519 Lectures{' '}
          <span className="text-[#00A3FF]">•</span> 39h 22m total length
        </p>

        {/* ================= CONTENT LIST ================= */}
        <div className="border border-gray-200 rounded-md overflow-hidden">

          <SectionHeader
            index={0}
            title="The Complete AI Guide Introduction"
            meta="2 lectures • 10 min"
            openSection={openSection}
            setOpenSection={setOpenSection}
          />

          <SectionHeader
            index={1}
            title="Getting Started with ChatGPT, Prompting, and how LLM’s Work"
            meta="9 lectures • 1 hour 10 min"
            openSection={openSection}
            setOpenSection={setOpenSection}
          >
            <LectureItem title="ChatGPT Interface Walkthrough: Buttons, Features, and Functionalities" time="09:20" />
            <LectureItem title="Personalize ChatGPT with Settings, Memory, and Custom Instructions" time="14:28" />
            <LectureItem title="Your First Steps with AI and Effective Prompting" time="06:24" />
            <LectureItem title="Anatomy of a Great Prompt" time="04:21" />
            <LectureItem title="Creatively Crafting Your Prompts" time="03:22" />
            <LectureItem title="Advanced Prompting Frameworks" time="03:22" />
          </SectionHeader>

          <SectionHeader
            index={2}
            title="ChatGPT in Action: Features, Use Cases, and Tools"
            meta="2 lectures • 10 min"
            openSection={openSection}
            setOpenSection={setOpenSection}
          />

          <SectionHeader
            index={3}
            title="ChatGPT: Prompt Engineering and Custom 17 page Prompting Guide PDF"
            meta="2 lectures • 10 min"
            openSection={openSection}
            setOpenSection={setOpenSection}
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
  index,
  title,
  meta,
  openSection,
  setOpenSection,
  children,
}: {
  index: number;
  title: string;
  meta: string;
  openSection: number | null;
  setOpenSection: (val: number | null) => void;
  children?: React.ReactNode;
}) {
  const isOpen = openSection === index;

  return (
    <div className="border-t border-gray-200">
      <button
        onClick={() => setOpenSection(isOpen ? null : index)}
        className="w-full flex items-center justify-between px-4 sm:px-6 py-3 bg-gray-50"
      >
        <div className="flex items-center gap-2">
          <ChevronDown
            size={16}
            className={`text-gray-500 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
          <span className="text-sm sm:text-[15px] font-medium text-gray-800">
            {title}
          </span>
        </div>
        <span className="text-xs sm:text-sm text-gray-500">{meta}</span>
      </button>

      {/* SMOOTH CONTENT */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? '500px' : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="bg-white">{children}</div>
      </div>
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
