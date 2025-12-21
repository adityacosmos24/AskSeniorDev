'use client'
import Lottie from "lottie-react"
import RocketAnimation from "../../public/RockerAnimation.json"
import { BorderBeam } from "../../components/ui/border-beam"
import { RippleButton } from "@/components/ui/ripple-button"

export default function ContactUs() {
  return (
    <section className="w-full flex flex-col items-center pt-4 sm:pt-6">
      {/* ================= HEADER ================= */}
      <div className="w-full flex flex-col items-center mb-10 px-4">
<h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-semibold flex items-center gap-3">
          Contact us
          <span className="w-[42px] h-[42px] sm:w-[48px] sm:h-[48px]">
            <Lottie
              animationData={RocketAnimation}
              loop
              autoplay
              className="w-full h-full scale-[1.7] origin-center"
            />
          </span>
        </h2>
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div
        className="
          w-full max-w-[1200px]
          bg-gradient-to-b
          from-[#CFEFFF] from-0%
          via-[#F2FAFF] via-70%
          to-white to-100%
          rounded-[20px]
          px-4 py-6
          flex flex-col gap-8
          border border-[#94D8FF]

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
<h3
  className="
    text-[26px] sm:text-[30px] lg:text-[34px]
    font-semibold
    tracking-tight
    leading-[1.2]
    text-[#0F172A]
    whitespace-nowrap sm:whitespace-normal
  "
>
  What are you<span className="hidden sm:inline"><br /></span> waiting for?
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
                  relative overflow-hidden group
                  w-full h-[74px]
                  rounded-[6px]
                  flex items-center justify-between
                  border border-[#01A4FF]
                  border-r-0
                  px-4 lg:px-[24px]
                  text-[14px]
                  lg:w-[334px]
                  bg-white
                "
              >
                <span className="font-semibold">{text}</span>

                {/* ===== Arrow Button (enhanced only) ===== */}
                <div
                  className="
                    w-[40px] h-[40px]
                    bg-[#00A3FF]
                    rounded
                    flex items-center justify-center
                    text-white
                    transition-all duration-300 ease-out
                    group-hover:scale-110
                    group-focus-within:scale-110
                  "
                >
                  <span
                    className="
                      inline-block
                      transition-transform duration-300 ease-out
                      group-hover:translate-x-1
                      group-focus-within:translate-x-1
                    "
                  >
                    →
                  </span>
                </div>

                {/* ===== Border Beams ===== */}
                <BorderBeam
                  duration={6}
                  size={100}
                  className="from-transparent via-[#01A4FF] to-transparent"
                />
                <BorderBeam
                  duration={6}
                  delay={3}
                  size={100}
                  borderWidth={2}
                  className="from-transparent via-[#01A4FF] to-transparent"
                />
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
            shadow-lg

            lg:w-[700px]
            lg:h-[497px]
            lg:p-[34px]
            lg:gap-0
          "
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-[34px] lg:mb-[24px]">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
          </div>

          <div className="flex flex-col gap-4 lg:flex-row lg:gap-[34px] lg:mb-[24px]">
            <Input placeholder="Email" />
            <Input placeholder="Phone No" />
          </div>

          <div className="lg:mb-[24px]">
            <Input full placeholder="Subject" />
          </div>

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

          <div className="flex justify-center mt-6 lg:mt-[34px]">
            <RippleButton className="w-[140px] h-[40px] bg-[#00A3FF] text-white rounded">
              Submit Form
            </RippleButton>
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
