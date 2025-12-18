'use client'
import { Rocket } from 'lucide-react';

export default function ContactUs() {
  return (
    <section className="w-full flex flex-col items-center">
      {/* ================= HEADER ================= */}
      <div className="w-full flex flex-col items-center mb-10 px-4">
        <h2 className="text-[28px] sm:text-[32px] font-semibold flex items-center gap-2">
          Contact us <span className="text-[#00A3FF]"><Rocket/></span>
        </h2>
        <p className="mt-2 text-[14px] text-gray-500 text-center max-w-[500px]">
          Lorem ipsum dolor sit amet consectetur. Mi cursus pretium turpis
          neque quis id. Vehicula cursus vitae volutpat turpis leo.
        </p>
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div
        className="
          w-full max-w-[1200px]
          bg-[#EAF7FF]
          rounded-[20px]
          px-4 py-6
          flex flex-col gap-8

          lg:h-[589px]
          lg:px-[49px] lg:py-[64px]
          lg:flex-row lg:items-center lg:justify-between lg:gap-0
        "
      >
        {/* ================= LEFT COLUMN ================= */}
        <div
          className="
            w-full
            flex flex-col gap-8

            lg:w-[334px]
            lg:justify-center
            lg:gap-[50px]
          "
        >
          <h3 className="text-[22px] lg:text-[24px] font-semibold leading-tight">
            What are you<br />waiting for?
          </h3>

          <div className="flex flex-col gap-4 lg:gap-[29px]">
            {[
              'Crack OA with confidence',
              'Build a portfolio that shines',
              'Learn from diverse mentors.',
            ].map((text) => (
              <div
                key={text}
                className="
                  w-full h-[74px]
                  border border-[#00A3FF]
                  rounded-[6px]
                  flex items-center justify-between
                  px-4 lg:px-[24px]
                  text-[14px]

                  lg:w-[334px]
                "
              >
                <span>{text}</span>
                <div className="w-[40px] h-[40px] bg-[#00A3FF] rounded flex items-center justify-center text-white">
                  →
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT FORM CARD ================= */}
        <div
          className="
            w-full
            bg-white
            rounded-[10px]
            p-4
            flex flex-col gap-4

            lg:w-[700px]
            lg:h-[497px]
            lg:p-[34px]
            lg:gap-0
          "
        >
          {/* ROW 1 */}
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-[34px] lg:mb-[24px]">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
          </div>

          {/* ROW 2 */}
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-[34px] lg:mb-[24px]">
            <Input placeholder="Email" />
            <Input placeholder="Phone No" />
          </div>

          {/* SUBJECT */}
          <div className="lg:mb-[24px]">
            <Input full placeholder="Subject" />
          </div>

          {/* DESCRIPTION */}
          <textarea
            className="
              w-full h-[92px]
              border border-gray-200
              rounded-[6px]
              px-[16px] py-[12px]
              text-[14px]
              resize-none outline-none
            "
            placeholder="Description"
          />

          {/* BUTTON */}
          <div className="flex justify-center mt-6 lg:mt-[34px]">
            <button className="w-[140px] h-[40px] bg-[#00A3FF] text-white rounded">
              Submit Form
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Input({
  placeholder,
  full = false,
}: {
  placeholder: string
  full?: boolean
}) {
  return (
    <input
      placeholder={placeholder}
      className={`
        w-full
        h-[54px]
        border border-gray-200
        rounded-[6px]
        px-[16px]
        text-[14px]
        outline-none

        lg:${full ? 'w-full' : 'w-[303px]'}
      `}
    />
  )
}
