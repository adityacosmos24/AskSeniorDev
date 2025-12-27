'use client'

import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar'
import { cn } from '../../lib/utils'
import avatar1 from "../../../public/avatar-1.png"
import messageicontestimonial from "../../../public/messageicontestimonial.png"
import Image from 'next/image'

const testimonials = [
  {
    text:
      'Lorem ipsum dolor sit amet consectetur. Mi cursus pretium turpis neque quis id. Vehicula cursus vitae volutpat turpis leo. Ac purus curabitur quisque urna consectetur sed. Erat est magna nunc in. Lorem ipsum dolor sit amet consectetur. Mi cursus pretium turpis neque quis id. Vehicula cursus vitae volutpat turpis leo.',
    name: 'Swapnil',
    college: 'Jaipur University',
    imageSrc: avatar1,
  },
  {
    text:
      'Lorem ipsum dolor sit amet consectetur. Mi cursus pretium turpis neque quis id. Vehicula cursus vitae volutpat turpis leo. Ac purus curabitur quisque urna consectetur sed. Erat est magna nunc in. Lorem ipsum dolor sit amet consectetur.',
    name: 'Rahul',
    college: 'Delhi University',
    imageSrc: avatar1,
  },
  {
    text:
      'Lorem ipsum dolor sit amet consectetur. Mi cursus pretium turpis neque quis id. Vehicula cursus vitae volutpat turpis leo.',
    name: 'Ankit',
    college: 'Mumbai University',
    imageSrc: avatar1,
  },
]

export default function TestimonialsSection({ className }: { className?: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps',
  })

  useEffect(() => {
    if (!emblaApi) return
    const id = setInterval(() => emblaApi.scrollNext(), 3500)
    return () => clearInterval(id)
  }, [emblaApi])

  return (
    <section className={cn('relative overflow-hidden py-10 md:py-12', className)}>
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">

        {/* ===== HEADING ===== */}
        <div className="mb-14 sm:mb-16 pl-2 sm:pl-4">
          <HeadingWithIcon>
            What our Students Say About us
          </HeadingWithIcon>
        </div>

        {/* ===== CAROUSEL ===== */}
        <div className="relative">
          <div ref={emblaRef} className="overflow-x-hidden overflow-y-hidden">
            <div className="flex items-stretch py-8">

              {[...testimonials, ...testimonials].map((t, i) => (
                <div key={i} className="relative flex justify-center px-4 sm:px-6">

                  {/* ===== GLOW ===== */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
                    <div
                      className="
                        h-[220px]
                        w-[280px]
                        sm:w-[320px]
                        md:w-[360px]
                        rounded-full
                        bg-[#8ED8FF]/45
                        blur-[90px]
                      "
                    />
                  </div>

                  {/* ===== CARD ===== */}
                  <motion.div
                    className="
                      relative
                      z-10
                      w-[280px] sm:w-[320px] md:w-[360px]
                      rounded-2xl
                      bg-white
                      p-6 sm:p-7 md:p-8
                      shadow-[0_18px_40px_rgba(15,23,42,0.12)]
                    "
                  >
                    {/* ===== TOP PROFILE ROW  ===== */}
                    <div className="mb-5 flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={t.imageSrc.src} />
                        <AvatarFallback>{t.name[0]}</AvatarFallback>
                      </Avatar>

                      <div>
                        <p className="text-base font-semibold text-gray-900">
                          {t.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {t.college}
                        </p>
                      </div>
                    </div>

                    {/* ===== TESTIMONIAL TEXT  ===== */}
                    <p className="text-[15px] leading-relaxed text-gray-700">
                      -{t.text}
                    </p>
                  </motion.div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===== HEADING ===== */

function HeadingWithIcon({ children }: { children: string }) {
  const letters = children.split('')

  return (
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      className="flex items-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 14, filter: 'blur(6px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          transition={{
            delay: i * 0.035,
            duration: 0.55,
            ease: [0.18, 0.89, 0.82, 1.04],
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}

      <motion.span
        variants={{
          hidden: { opacity: 0, scale: 0.6 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{
          delay: letters.length * 0.035 + 0.15,
          duration: 0.35,
        }}
        className="ml-3 text-[#3BA9FF]"
      >
        <Image
          src={messageicontestimonial}
          alt="Message icon"
          sizes='12'
        />
      </motion.span>
    </motion.h2>
  )
}
