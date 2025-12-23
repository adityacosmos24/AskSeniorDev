// 'use client';

// import Image from 'next/image';
// import Jaskaran from '../../public/CourseDetailsJaskaran.png';
// import { Crown } from 'lucide-react';

// export default function CourseDetailsHero() {
//   return (
//     <section className="w-full bg-[#F5FBFF]">
//       <div
//         className="
//           mx-auto w-full
//           max-w-[1440px] 2xl:max-w-[1680px]
//           px-4 sm:px-6 lg:px-10 2xl:px-12
//           py-14 lg:py-20
//         "
//       >
//         <div
//           className="
//             grid
//             grid-cols-1
//             md:grid-cols-[320px_1fr]
//             2xl:grid-cols-[380px_1fr]
//             gap-10 lg:gap-14 2xl:gap-20
//             items-stretch
//             md:pl-6 2xl:pl-10
//           "
//         >
//           {/* IMAGE */}
//           <div className="flex justify-center md:justify-start h-full">
//             <Image
//               src={Jaskaran}
//               alt="Mentor"
//               className="w-full max-w-[320px] 2xl:max-w-[380px] rounded-lg"
//               priority
//             />
//           </div>

//           {/* CONTENT */}
//           <div className="relative flex flex-col h-full">
//             {/* TEXT */}
//             <div className="max-w-[1200px]">
//               <h1 className="text-[clamp(32px,3.4vw,44px)] leading-[1.12] font-semibold text-black">
//                 The Complete AI Guide: Learn ChatGPT,
//                 <br />
//                 Generative AI & More
//               </h1>

//               <p className="mt-10 text-[20px] leading-[1.65] text-gray-600 max-w-[720px]">
//                 50+ Generative AI Tools to 10x Business, Productivity, Creativity |
//                 ChatGPT, Artificial Intelligence, Prompt Engineering
//               </p>

//               <p className="mt-10 text-[20px] text-[#007BFF] flex items-center gap-2">
//                 🧑‍🏫
//                 <span className="font-medium">Mentor Description</span>
//                 <span className="text-gray-700 font-semibold">
//                   Dr. Angela Yu, Developer and Lead Instructor
//                 </span>
//               </p>
//             </div>

// {/* PREMIUM BAR */}
// <div
//   className="
//     w-full
//     max-w-[780px]
//     2xl:max-w-[880px]

//     bg-white
//     border border-[#0A9BFF]
//     rounded-[7px]

//     mt-6
//     md:mt-0
//     md:absolute
//     md:bottom-8

//     flex
//     items-stretch
//   "
// >
//   {/* LEFT — PREMIUM BADGE (WIDER) */}
//   <div className="flex flex-col items-center justify-center px-8 bg-[#0A9BFF] text-white rounded-l-[7px]">
//     <Crown className="w-5 h-5 text-yellow-300 mb-1" />
//     <span className="text-[13px] font-semibold">Premium</span>
//   </div>

//   {/* DIVIDER */}
//   <div className="self-stretch w-px bg-[#0A9BFF]/30" />

// {/* MIDDLE — TEXT + BUTTON (TIGHTER WIDTH) */}
// <div className="flex flex-1 flex-col justify-center px-4 py-3 gap-2">
//   <p className="text-[13.5px] max-w-[300px] leading-[1.4] text-gray-700">
//     Access this top-rated course, plus 26,000+ more top-rated courses,
//     with a Udemy plan.
//   </p>

//   <button className="self-start bg-[#0A9BFF] text-white px-4 py-1.5 rounded-md text-[12.5px] font-medium">
//     Enroll Now
//   </button>
// </div>


//   {/* DIVIDER */}
//   <div className="self-stretch w-px bg-[#0A9BFF]/30" />

//   {/* RIGHT — STATS (EQUAL WIDTH + INNER DIVIDER) */}
//   <div className="flex items-center px-5 py-3">
//     <div className="text-center min-w-[80px]">
//       <p className="font-semibold text-[14px] flex items-center gap-1 justify-center text-gray-900">
//         4.0 <span className="text-yellow-400">⭐</span>
//       </p>
//       <p className="text-[11px] text-gray-500">420 ratings</p>
//     </div>

//     {/* INNER DIVIDER */}
//     <div className="mx-4 h-8 w-px bg-[#0A9BFF]/30" />

//     <div className="text-center min-w-[80px]">
//       <p className="font-semibold text-[14px] text-gray-900">23,980</p>
//       <p className="text-[11px] text-gray-500">learners</p>
//     </div>
//   </div>
// </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import Image from "next/image";
import Jaskaran from "../../public/profileimg.png";
import badgeimg from "../../public/badgeimg.png";
import crownimg from "../../public/crownimg.png";
import peopleImg from "../../public/peopleImg.png";

const CourseDetailsHero = () => {
  return (
    <div className="w-[95%] bg-gradient-to-r from-blue-50 to-white flex justify-center">
      <div className="flex align-middle justify-center mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-16 py-10">

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 2xl:gap-30">

          {/* Image */}
          <div className="flex-shrink-0">
            {/* Gradient Border Wrapper */}
            <div className="rounded-md p-[2px] bg-gradient-to-t from-blue-200 to-[#00A3FF] shadow-sm">

              {/* Image Container */}
              <div className="relative h-72 w-56 sm:h-80 sm:w-64 lg:h-96 lg:w-72 rounded-md overflow-hidden bg-white">
                <Image
                  src={Jaskaran}
                  alt="Mentor"
                  fill
                  className="object-cover p-2"
                  priority
                />
              </div>

            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4 w-full">

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900">
              The Complete AI Guide: Learn ChatGPT,
              <br className="hidden sm:block" />
              Generative AI & More
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-700 max-w-2xl">
              50+ Generative AI Tools to 10x Business, Productivity, Creativity |
              ChatGPT, Artificial Intelligence, Prompt Engineering
            </p>

            {/* Mentor */}
            <div className="flex items-center gap-2 text-sm">
              <Image src={badgeimg} alt="badge" width={16} height={16} />
              <span>
                <span className="text-[#00A3FF] font-medium">Mentor Description</span>{" "}
                Dr. Angela Yu, Developer and Lead Instructor
              </span>
            </div>

            {/* Premium Box */}
            <div className="mt-6 w-full max-w-4xl border border-blue-300 bg-white rounded-sm shadow-sm">
              <div className="flex flex-row ">

                {/* Premium */}
                {/* <div className="flex w-28 md:w-56 items-center justify-center bg-[#00A3FF] py-3">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm md:text-lg">
                    <Image src={crownimg} alt="Premium" className="h-4 w-4 md:h-6 md:w-6" />
                    Premium
                  </div>
                </div> */}
                <div className="flex w-28 md:w-56 items-center justify-center bg-[#00A3FF]">
                  <div className="flex flex-col items-center gap-1 text-white font-semibold">
                    <Image src={crownimg} alt="Premium" className="h-5 w-5 md:h-6 md:w-6" />
                    <span className="text-sm md:text-lg">Premium</span>
                  </div>
                </div>


                {/* Right */}
                <div className="flex flex-row flex-1 items-center justify-between px-3 md:px-6 py-3">

                  {/* Text + Button */}
                  <div className="max-w-xs">
                    <p className="text-[7px] sm:text-[11px] md:text-sm leading-tight text-gray-900">
                      Access this top-rated course, plus 26,000+ <br /> more top-rated courses,
                      with a Udemy plan.
                    </p>

                    <button className="mt-2
    inline-flex
    items-center
    justify-center

    rounded-sm
    bg-[#00A3FF]

    px-4
    py-2
    sm:px-4 sm:py-2
    md:px-5 md:py-2

    text-[7px]
    sm:text-xs
    md:text-sm

    font-medium
    text-white

    hover:bg-[#0095e6]
    transition">
                      Enroll Now
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="h-10 md:h-14 w-px bg-gray-300 mx-3" />

                  {/* Rating */}
                  <div className="text-center">
                    <p className="text-sm md:text-lg font-semibold">4.0</p>
                    <p className="text-yellow-400 text-xs md:text-sm">★★★★☆</p>
                    <p className="text-[10px] md:text-xs text-gray-500">420 rating</p>
                  </div>

                  {/* Divider */}
                  <div className="h-10 md:h-14 w-px bg-gray-300 mx-3" />

                  {/* Learners */}
                  <div className="flex flex-col items-center">
                    <Image src={peopleImg} alt="Learners" className="h-4 w-4 md:h-5 md:w-5" />
                    <p className="text-sm md:text-lg font-semibold">23,980</p>
                    <p className="text-[10px] md:text-xs text-gray-500">learner</p>
                  </div>

                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
};


export default CourseDetailsHero;




