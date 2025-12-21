'use client'

import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import { Quote, MessageCircle } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    text: 'MVPBlocks helped us prototype multiple landing pages without writing CSS once.',
    imageSrc: 'https://i.pravatar.cc/150?img=6',
    name: 'Chloe Winters',
    username: '@chloewinters',
    role: 'UI Designer',
  },
  {
    text: 'Plugged a few blocks into our existing codebase and everything blended perfectly. Massive W.',
    imageSrc: 'https://i.pravatar.cc/150?img=4',
    name: 'Priya Shah',
    username: '@priyacodes',
    role: 'Full Stack Developer',
  },
  {
    text: 'Found a beautiful hero section, dropped it into V0, tweaked copy, and shipped in 15 minutes.',
    imageSrc: 'https://i.pravatar.cc/150?img=5',
    name: 'Leo Martin',
    username: '@leobuilds',
    role: 'Startup Founder',
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
    <section
      className={cn(
        'relative bg-white overflow-hidden py-20 md:min-h-screen flex items-center',
        className
      )}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">

        {/* ---------- HEADING ---------- */}
        <div className="mb-20 md:mb-28 pl-4 sm:pl-6">
          <HeadingWithIcon>
            What our Students Say About us
          </HeadingWithIcon>
        </div>

        {/* ---------- CAROUSEL ---------- */}
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 sm:w-16 md:w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 sm:w-16 md:w-24 bg-gradient-to-l from-white to-transparent" />

          {/* ✅ FIX 1: allow vertical overflow */}
          <div
            ref={emblaRef}
            className="overflow-x-hidden overflow-y-visible"
          >
            {/* ✅ FIX 2: add hover headroom */}
            <div className="flex items-stretch py-4">

              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="relative flex justify-center px-3 sm:px-5 md:px-6 overflow-visible"
                >
                  {/* LEFT GLOW */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-1/2 -translate-x-full
                      top-1/2 -translate-y-1/2
                      h-[70%]
                      w-[120px]
                      bg-blue-400/25
                      blur-[90px]
                    "
                  />

                  {/* RIGHT GLOW */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-1/2
                      top-1/2 -translate-y-1/2
                      h-[70%]
                      w-[120px]
                      bg-sky-400/25
                      blur-[90px]
                    "
                  />

                  {/* CARD */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="
                      relative
                      z-10
                      w-[280px] sm:w-[320px] md:w-[360px]
                      rounded-xl
                      border border-gray-400
                      bg-white/60
                      backdrop-blur-xl
                      shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                      p-6 sm:p-7 md:p-8
                    "
                  >
                    <Quote className="mb-5 h-7 w-7 text-blue-500" />

                    <p className="mb-6 md:mb-8 text-sm leading-relaxed text-gray-700">
                      {t.text}
                    </p>

                    <div className="flex items-center gap-4 border-t border-black pt-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={t.imageSrc} />
                        <AvatarFallback>{t.name[0]}</AvatarFallback>
                      </Avatar>

                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {t.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          <span className="text-blue-600 font-medium">
                            {t.username}
                          </span>
                          <span className="mx-1">•</span>
                          <span>{t.role}</span>
                        </p>
                      </div>
                    </div>
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

/* ================= HEADING WITH ICON ================= */

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
            hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          transition={{
            delay: i * 0.04,
            duration: 0.6,
            ease: [0.18, 0.89, 0.82, 1.04],
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}

      <motion.span
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{
          delay: letters.length * 0.04 + 0.15,
          duration: 0.4,
          ease: 'easeOut',
        }}
        className="ml-3 text-blue-600"
      >
        <MessageCircle className="w-[1em] h-[1em]" />
      </motion.span>
    </motion.h2>
  )
}
