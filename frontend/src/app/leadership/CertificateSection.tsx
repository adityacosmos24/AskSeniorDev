'use client';

import Image from 'next/image';
import certificatePlaceholder from '../../../public/certificate-placeholder.png'; // use your empty image box
import { CirclePlay } from 'lucide-react';

export default function CertificateSection() {
  return (
    <section className="w-full flex justify-center -mt-15">
      <div
        className="
          w-full
          max-w-[1400px]
          px-4
        "
      >
        <div
          className="
            w-full
            bg-white
            rounded-[20px]
            drop-shadow-lg
            p-6
            md:p-8
            flex
            flex-col
            lg:flex-row
            gap-6
            lg:gap-10
          "
        >
          {/* LEFT: CERTIFICATE PREVIEW */}
          <div
            className="
              w-full
              lg:w-[60%]
              border
              border-[#00A3FF]
              rounded-[10px]
              flex
              items-center
              justify-center
              min-h-[220px]
              md:min-h-[260px]
            "
          >
            {/* <Image
              src={certificatePlaceholder}
              alt="Certificate Preview"
              className="object-contain"
            /> */}
          </div>

          {/* RIGHT: CONTENT */}
          <div
            className="
              w-full
              lg:w-[40%]
              flex
              flex-col
              justify-center
              gap-4
            "
          >
            <h3 className="text-[28px] font-semibold text-gray-900 flex items-center gap-2">
              Certificated Locked 🔒
            </h3>

            <p className="text-[18px] text-gray-600 leading-relaxed">
              Your Learning journey has just begun, and we appreciate the step
              you’ve taken toward growth and self-improvement. Every milestone
              brings you closer to achieving your goal.
            </p>

            <div className="bg-gradient-to-br from-[#F6FCFF] via-[#EEF9FF] to-[#E6F6FF] border border-[#D1EEFF] rounded-[9px] p-4 text-[18px] text-gray-700">
              The Certificate will unlock once you complete <b>50%</b> of the
              courses. Currently, your progress stands at <b>0%</b>. Keep
              going — you’re on the right path!
            </div>

            <button
              className="
                mt-2
                w-full
                rounded-[2px]
                bg-[#00A3FF]
                text-white
                py-2.5
                text-sm
                font-medium
                flex
                items-center
                justify-center
                gap-2
                hover:bg-[#0092E6]
                transition
              "
            >
              <CirclePlay size={18} strokeWidth={2} />
              <span>Start Course</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
