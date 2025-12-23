'use client';

import {PlayCircle,FileText,Download,Captions,Smartphone,Volume2,Award,Users,} from 'lucide-react';

export default function CourseDetailsWhatYouWillLearn() {
  return (
    <section className="w-full bg-white">
      {/* CONTAINER */}
    <div className="mx-auto w-[95%] max-w-[1200px] px-4 sm:px-6 lg:px-0 py-10 lg:py-14">

        {/* ================= WHAT YOU’LL LEARN ================= */}
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
          What you’ll learn
        </h2>

        <div className="rounded-md bg-gradient-to-l from-blue-200 to-[#00A3FF] p-[1.5px]">
            <div className="bg-white rounded-md px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                {/* LEFT COLUMN */}
                    <ul className="space-y-6 text-sm sm:text-[16px] text-[#373737]">
                <li className="flex gap-2">
                    <span className="text-[#00A3FF]">•</span>
                    Generative AI: Create content, synthesize information, and learn
                    faster than ever with effective prompt engineering
                </li>
                <li className="flex gap-2">
                    <span className="text-[#00A3FF]">•</span>
                    Productivity: Achieve goals faster with artificial intelligence,
                    manage time, prioritize tasks, and create an optimized daily
                    schedule
                </li>
                <li className="flex gap-2">
                    <span className="text-[#00A3FF]">•</span>
                    Soft Skills: Improve communication, leadership, problem-solving,
                    and social skills with personalized ChatGPT feedback
                </li>
                </ul>

                {/* RIGHT COLUMN */}
                <ul className="space-y-6 text-sm sm:text-[16px] text-[#373737]">
                <li className="flex gap-2">
                    <span className="text-[#00A3FF]">•</span>
                    ChatGPT: Turn creativity into paid work, generate fresh ideas,
                    reach new audiences, and scale projects
                </li>
                <li className="flex gap-2">
                    <span className="text-[#00A3FF]">•</span>
                    Marketing: Generate targeted content, capitalize on trends, and
                    create ads, newsletters, and campaigns
                </li>
                <li className="flex gap-2 ">
                    <span className="text-[#00A3FF]">•</span>
                    AI Voice Tools: Create AI-generated speech and even clone your
                    own voice
                </li>
                </ul>
            </div>

            {/* LEARN MORE */}
            <button className="mt-4 text-sm text-[#00A3FF] hover:underline">
                Learn more
            </button>
            </div>
        </div>

        {/* ================= COURSE INCLUDES ================= */}
        <div className="mt-10 sm:mt-12 lg:mt-14">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
            This course includes:
          </h3>

          <div
            className="
              flex
              flex-wrap
              gap-3
              text-xs
              sm:text-sm
            "
          >
            <Pill icon={<Users size={14} />} text="Role Play" />
            <Pill icon={<PlayCircle size={14} />} text="39.5 hours on-demand video" />
            <Pill icon={<FileText size={14} />} text="22 Articles" />
            <Pill icon={<Download size={14} />} text="141 Downloadable Resources" />
            <Pill icon={<Captions size={14} />} text="Closed Captions" />
            <Pill icon={<Smartphone size={14} />} text="Access on mobile & TV" />
            <Pill icon={<Volume2 size={14} />} text="Audio Description in existing audio" />
            <Pill icon={<Award size={14} />} text="Certificate of completion" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SMALL PILL ---------- */
function Pill({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-[3px] border border-[#E6F6FF] px-3 py-1.5 text-[#373737] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] font-semibold">
      {icon}
      <span>{text}</span>
    </div>
  );
}
