'use client';

import Image from 'next/image';
import avatar1 from '../../../public/avatar-1.png';
import avatar2 from '../../../public/avatar-2.png';
import avatar3 from '../../../public/avatar-3.png';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Swapnil',
    role: 'Jaipur University',
    text:
      'Lorem ipsum dolor sit amet consectetur. Mi cursus pretium turpis neque quis id. Vehicula cursus vitae volutpat turpis leo. Ac purus curabitur quisque urna consectetur sed. Erat est magna nunc in.Lorem ipsum dolor sit amet consectetur. Mi cursus pretium turpis neque quis id. Vehicula cursus vitae volutpat turpis leo.',
    img: avatar1,
  },
  {
    name: 'Leslie Alexander',
    role: 'Freelance React Developer',
    text:
      'Lorem ipsum dolor sit amet consectetur. Mi cursus pretium turpis neque quis id. Vehicula cursus vitae volutpat turpis leo. Ac purus curabitur quisque urna consectetur sed. Erat est magna nunc in.Lorem ipsum dolor sit amet consectetur. Mi cursus pretium turpis neque quis id. Vehicula cursus vitae volutpat turpis leo.',
    img: avatar2,
  },
  {
    name: 'Jenny Wilson',
    role: 'Graphic Designer',
    text:
      'Lorem ipsum dolor sit amet consectetur. Mi cursus pretium turpis neque quis id. Vehicula cursus vitae volutpat turpis leo. Ac purus curabitur quisque urna consectetur sed. Erat est magna nunc in.Lorem ipsum dolor sit amet consectetur. Mi cursus pretium turpis neque quis id. Vehicula cursus vitae volutpat turpis leo.',
    img: avatar3,
  },
];

export default function CourseDetailsTestimonial() {
  return (
    <section className="w-full bg-white pb-10 sm:pb-12 lg:pb-14">
      <div className="mx-auto w-[95%] max-w-[1200px] px-4 sm:px-6 lg:px-0 mt-10 sm:mt-12 lg:mt-14">

        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
          What Our Students Say About us
        </h2>

        <div className="relative mt-6 overflow-hidden md:overflow-visible">
          {/* MOBILE AUTO LOOP */}
          <motion.div
            className="flex gap-6 md:hidden"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              duration: 18,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="min-w-[85%] flex flex-col rounded-[19px] overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.12)]"
              >
                <div className="flex flex-col flex-1 p-6 bg-white lg:py-8 lg:px-7">

                  <div className="flex items-center gap-3 mb-3">
                    <Image
                      src={t.img}
                      alt={t.name}
                      width={36}
                      height={36}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {t.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {t.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-gray-700">
                    “{t.text}”
                  </p>

                </div>
              </div>
            ))}
          </motion.div>

          {/* DESKTOP (UNCHANGED) */}
          <div className="relative hidden md:grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex flex-col rounded-[19px] overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.12)]"
              >
                <div className="flex flex-col flex-1 p-6 bg-white lg:py-8 lg:px-7">

                  <div className="flex items-center gap-3 mb-3">
                    <Image
                      src={t.img}
                      alt={t.name}
                      width={36}
                      height={36}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {t.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {t.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-gray-700">
                    “{t.text}”
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
