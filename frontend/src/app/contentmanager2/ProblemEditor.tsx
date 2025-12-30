"use client";

import { Plus, Upload } from "lucide-react";

export default function ProblemEditor() {
  return (
    <div className="bg-white border border-[#E6F6FF] rounded-xl p-6 space-y-6">
      
      {/* HEADER */}
      <div className="flex justify-end">
        <button className="bg-[#00A3FF] text-white text-sm px-4 py-2 rounded-md">
          Publish Problem
        </button>
      </div>

      {/* TITLE + DIFFICULTY */}
      <div className="grid grid-cols-2 gap-4">
        <Input label="Title" placeholder="Lorem ipsum dolor sit amet consectetur." />
        <Select label="Difficulty" />
      </div>

      {/* DESCRIPTION */}
      <Editor label="Description" height="h-[180px]" />

      {/* CONSTRAINT */}
      <Textarea label="Constraint" />

      {/* INPUT FORMAT */}
      <Textarea label="Input format" />

      {/* OUTPUT FORMAT */}
      <Textarea label="output format" />

      {/* INPUT EXAMPLE */}
      <Textarea label="Input Example" />

      {/* OUTPUT EXAMPLE */}
      <Textarea label="Output Example" />

      {/* EXPLANATION */}
      <Textarea label="explanation" />

      {/* ADD EXAMPLE */}
      <button className="flex items-center gap-2 bg-[#00A3FF] text-white text-sm px-4 py-2 rounded-md w-fit">
        <Plus size={16} /> Add New Example
      </button>

      {/* TEST CASES */}
      <div className="border rounded-md">
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <p className="text-sm font-medium">Test Case (34)</p>
          <div className="flex gap-2">
            <Upload size={16} />
            <Plus size={16} />
          </div>
        </div>

        <div className="max-h-[180px] overflow-y-auto">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="px-4 py-3 border-b text-sm flex gap-4"
            >
              <span className="font-medium">{i}</span>
              <div>
                <p>In : 1 6 5 11 ...</p>
                <p className="text-gray-500">Out : 3 ...</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* YOUR TASK */}
      <Input label="Your Task" placeholder="Lorem ipsum dolor sit amet consectetur." />

      {/* TAGS */}
      <div>
        <label className="text-sm font-medium">Tags</label>
        <div className="mt-2 flex gap-2 flex-wrap">
          {["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"].map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-[#F3FAFF] border border-[#00A3FF] text-sm rounded-md"
            >
              {t}
            </span>
          ))}
          <button className="px-3 py-1 border rounded-md text-sm">+</button>
        </div>
      </div>

      {/* LANGUAGE BAR */}
      <div className="bg-[#EAF6FF] p-3 rounded-md flex gap-4 text-sm">
        <span className="font-medium">☕ Java</span>
        <span>🐍 Python</span>
        <span>&lt;/&gt; C++</span>
      </div>
    </div>
  );
}

/* ===================== SUB COMPONENTS ===================== */

function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        placeholder={placeholder}
        className="mt-1 w-full border rounded-md px-3 py-2 text-sm"
      />
    </div>
  );
}

function Select({ label }: { label: string }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <select className="mt-1 w-full border rounded-md px-3 py-2 text-sm">
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>
    </div>
  );
}

function Textarea({ label }: { label: string }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <textarea
        className="mt-1 w-full border rounded-md p-3 text-sm h-[120px]"
        placeholder="Lorem ipsum dolor sit amet consectetur."
      />
    </div>
  );
}

function Editor({
  label,
  height,
}: {
  label: string;
  height: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <div className="mt-1 border rounded-md">
        <div className="flex justify-end gap-3 px-3 py-2 border-b text-xs text-gray-500">
          <span>B</span>
          <span>I</span>
          <span>🔗</span>
          <span>&lt;/&gt;</span>
        </div>
        <textarea
          className={`w-full p-3 text-sm outline-none resize-none ${height}`}
          placeholder="Lorem ipsum dolor sit amet consectetur."
        />
      </div>
    </div>
  );
}
