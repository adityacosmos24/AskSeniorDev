'use client'

import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import { TextReveal } from '@/components/ui/text-reveal'

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
      {/* ================= BACKGROUND GLOWS ================= */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative w-[700px] sm:w-[900px] md:w-[1000px] h-[300px] sm:h-[380px] md:h-[420px]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[360px] md:w-[420px] h-[160px] rounded-full bg-blue-400/20 blur-[110px]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[360px] sm:w-[440px] md:w-[520px] h-[200px] rounded-full bg-blue-500/25 blur-[130px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[360px] md:w-[420px] h-[160px] rounded-full bg-sky-400/20 blur-[110px]" />
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* ---------- HEADING ---------- */}
        <div className="flex w-full justify-center">
          <TextReveal
            from="bottom"
            split="letter"
            className="mb-14 md:mb-20 text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900"
          >
            What our Students Say About us
          </TextReveal>
        </div>

        {/* ---------- CAROUSEL ---------- */}
        <div className="relative">
          {/* Edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 sm:w-16 md:w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 sm:w-16 md:w-24 bg-gradient-to-l from-white to-transparent" />

          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex items-stretch">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="flex justify-center px-3 sm:px-5 md:px-6"
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="
                      w-[280px] sm:w-[320px] md:w-[360px]
                      rounded-2xl
                      border border-white/40
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
