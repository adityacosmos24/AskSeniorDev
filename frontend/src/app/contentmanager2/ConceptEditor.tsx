"use client";

export default function ConceptEditor() {
  return (
    <div className="bg-white border border-[#E6F6FF] rounded-xl p-6 space-y-6">
      {/* TITLE + TIME */}
      <div className="grid grid-cols-2 gap-4">
        <Input label="Title" placeholder="Lorem ipsum dolor sit amet consectetur." />
        <Input
          label="Estimated Time (mins)"
          type="number"
          placeholder="30"
        />
      </div>

      {/* DESCRIPTION */}
      <div>
        <label className="text-sm font-medium">Description</label>
        <div className="mt-1 border border-gray-200 rounded-md">
          <div className="flex justify-end gap-3 px-3 py-2 border-b text-xs text-gray-500">
            <span>B</span>
            <span>I</span>
            <span>🔗</span>
            <span>&lt;/&gt;</span>
          </div>
          <textarea
            className="w-full h-[160px] p-3 text-sm outline-none resize-none"
            placeholder="Lorem ipsum dolor sit amet consectetur."
          />
        </div>
      </div>

      {/* MEDIA UPLOAD */}
      <div className="border border-gray-200 rounded-lg p-4">
        <div className="flex justify-between items-center mb-3">
          <p className="text-sm font-medium">Media Upload</p>
          <span className="text-gray-400 cursor-pointer">✕</span>
        </div>

        <div className="border-2 border-dashed border-[#9ED8FF] rounded-lg h-[140px] flex flex-col items-center justify-center text-sm text-gray-500">
          <div className="text-[#00A3FF] mb-2">☁</div>
          <p>
            Drag your file(s) or{" "}
            <span className="text-[#00A3FF] cursor-pointer">browse</span>
          </p>
          <p className="text-xs mt-1">Max 1000 MB files are allowed</p>
        </div>
      </div>

      {/* PRO CONTENT */}
      <div className="flex items-center gap-3">
        <span className="text-sm">Pro Content</span>
        <div className="w-9 h-5 bg-gray-200 rounded-full relative">
          <div className="absolute w-4 h-4 bg-white rounded-full top-0.5 left-0.5 shadow" />
        </div>
      </div>
    </div>
  );
}

function Input({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full border border-gray-200 rounded-md px-3 py-2 text-sm outline-none focus:border-[#00A3FF]"
      />
    </div>
  );
}
