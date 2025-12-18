"use client";

import { useEffect, useRef } from "react";

const dfsOrder = ["dfs-1", "dfs-2", "dfs-4", "dfs-5", "dfs-3", "dfs-6"];
const bfsOrder = ["bfs-1", "bfs-2", "bfs-3", "bfs-4", "bfs-5", "bfs-6"];

const STEP_DELAY = 650;
const CYCLE_DELAY = dfsOrder.length * STEP_DELAY + 800;

/* ================= NODE STATES ================= */
const BASE_CLASSES = [
  "bg-[#D9D9D9]",
  "text-[#888888]",
  "border",
  "border-slate-300",
  "shadow-md",
  "hover:shadow-lg",
  "hover:-translate-y-0.5",
];


const VISITED_CLASSES = [
  "bg-[#00A3FF]",
  "text-white",
  "-translate-y-1",
  "shadow-xl",
];

export default function DfsBfsVisualizer() {
  const timers = useRef<number[]>([]);
  const loopTimer = useRef<number | null>(null);

  /* ---------- RESET TO BASE STATE ---------- */
  const clearVisited = () => {
    document.querySelectorAll(".node").forEach((node) => {
      node.classList.remove(...VISITED_CLASSES);
      node.classList.add(...BASE_CLASSES);
    });
  };

  /* ---------- ANIMATION ---------- */
  const animate = (order: string[]) => {
    order.forEach((id, index) => {
      const t = window.setTimeout(() => {
        const el = document.getElementById(id);
        if (!el) return;

        el.classList.remove(...BASE_CLASSES);
        el.classList.add(...VISITED_CLASSES);
      }, STEP_DELAY * index);

      timers.current.push(t);
    });
  };

  /* ---------- PLAY ONCE ---------- */
  const playOnce = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];

    clearVisited();
    animate(dfsOrder);
    animate(bfsOrder);
  };

  /* ---------- LOOP ---------- */
  const startInfiniteLoop = () => {
    playOnce();
    loopTimer.current = window.setTimeout(startInfiniteLoop, CYCLE_DELAY);
  };

  useEffect(() => {
    startInfiniteLoop();

    return () => {
      timers.current.forEach(clearTimeout);
      if (loopTimer.current) clearTimeout(loopTimer.current);
    };
  }, []);

return (
  <div className="flex gap-14 relative items-center pt-6">
    <Column title="DFS" prefix="dfs" />

    <div className="relative flex items-center h-[280px]">
      {/* vertical line */}
      <div className="w-px bg-slate-300 h-full" />

      {/* VS badge */}
      <div
        className="
          absolute left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          text-white
          bg-[#00A3FF]
          px-4 py-1
          text-sm font-semibold
          shadow-lg
        "
      >
        VS
      </div>
    </div>

    <Column title="BFS" prefix="bfs" />
  </div>
);


}

/* ================= COLUMN ================= */
function Column({ title, prefix }: { title: string; prefix: string }) {
  return (
    <div className="w-[300px] relative flex flex-col items-center">
      
      {/* heading */}
      <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
        {title}
      </h2>

      {/* animation box */}
      <div className="relative w-[300px] h-[220px]">
        {/* edges */}
        <Edge left={150} top={40} rotate={-34} />
        <Edge left={170} top={40} rotate={34} />
        <Edge left={110} top={110} rotate={-38} />
        <Edge left={135} top={110} rotate={38} />
        <Edge left={215} top={110} rotate={38} />

        {/* nodes */}
        <Node id={`${prefix}-1`} left={140} top={15}>1</Node>
        <Node id={`${prefix}-2`} left={95} top={95}>2</Node>
        <Node id={`${prefix}-3`} left={190} top={95}>3</Node>
        <Node id={`${prefix}-4`} left={55} top={175}>4</Node>
        <Node id={`${prefix}-5`} left={135} top={175}>5</Node>
        <Node id={`${prefix}-6`} left={225} top={175}>6</Node>
      </div>
    </div>
  );
}


/* ================= NODE ================= */
function Node({
  id,
  left,
  top,
  children,
}: {
  id: string;
  left: number;
  top: number;
  children: React.ReactNode;
}) {
  return (
    <div
      id={id}
      className="
        node absolute w-12 h-12 rounded-full
        flex items-center justify-center
        font-semibold text-lg
        transition-all duration-300
      "
      style={{ left, top }}
    >
      {children}
    </div>
  );
}


/* ================= EDGE ================= */
function Edge({
  left,
  top,
  rotate,
}: {
  left: number;
  top: number;
  rotate: number;
}) {
  return (
    <div
      className="absolute w-[2px] h-[60px] bg-slate-300 origin-top"
      style={{ left, top, transform: `rotate(${rotate}deg)` }}
    />
  );
}

