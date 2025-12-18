'use client';

import {
  Sparkles,
  Bot,
  Lightbulb,
  Brain,
  Puzzle,
} from 'lucide-react';

const items = [
  {
    title: 'AI Roadmaps :',
    desc: 'Topic-wise paths covering every concept to finish a topic.',
    Icon: Bot,
  },
  {
    title: 'Concepts + Code :',
    desc: 'Clear explanations with runnable code.',
    Icon: Lightbulb,
  },
  {
    title: 'Problems by Concept :',
    desc: 'Curated sets to master each idea.',
    Icon: Brain,
  },
  {
    title: 'Final OA Challenge :',
    desc: 'A topic-specific assessment to validate mastery.',
    Icon: Puzzle,
  },
];

export default function DsaSideCard() {
  return (
    <div
      className="
        w-[445px]
        h-[488px]
        rounded-[10px]
        bg-white
        shadow-[0_12px_30px_rgba(0,0,0,0.08)]
        p-4
        flex flex-col
      "
    >
      {/* ITEMS (HUG content — DO NOT flex-grow) */}
      <div className="flex flex-col gap-5">
        {items.map(({ title, desc, Icon }, i) => (
          <div
            key={i}
            className="
              flex gap-4
              px-4 py-3
              rounded-md
              bg-[#FBFDFF]
            "
          >
            {/* ICON */}
            <div
              className="
                h-12 w-12
                shrink-0
                rounded-md
                bg-[#E5F5FF]
                flex items-center justify-center
              "
            >
              <Icon className="h-6 w-6 text-[#373737]" />
            </div>

            {/* TEXT */}
            <div>
              <h4 className="font-semibold text-[#000000] text-sm">
                {title}
              </h4>
              <p className="mt-1 text-sm text-[#373737] leading-snug">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* BUTTON (20px gap from items) */}
      <button
        className="
          mt-5
          h-[48px]
          w-full
          rounded-md
          bg-[#00A3FF]
          text-white
          font-medium
          flex items-center justify-center gap-2
          hover:bg-sky-600
          transition
        "
      >
        <Sparkles className="h-4 w-4" />
        Explore DSA Roadmaps
      </button>
    </div>
  );
}
