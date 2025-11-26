// components/Testimonials.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Glen Waverley',
    timeAgo: '2 months ago',
    quote:
      'The team removed two huge gums over our house with zero fuss. They protected our roof and cleaned up so well you wouldn\'t know they were here.',
    rating: 5,
    initial: 'S',
    color: 'bg-rose-500',
  },
  {
    name: 'Daniel P.',
    location: 'Mount Waverley',
    timeAgo: '3 months ago',
    quote:
      'Clear quote, turned up on time, and handled council requirements for a protected tree. Professional from start to finish.',
    rating: 5,
    initial: 'D',
    color: 'bg-blue-500',
  },
  {
    name: 'Leanne & Chris',
    location: 'Chadstone',
    timeAgo: '3 months ago',
    quote:
      'We had storm damage on a Sunday. They were on-site quickly, made everything safe and checked in again the next day. Couldn\'t be happier.',
    rating: 5,
    initial: 'L',
    color: 'bg-amber-500',
  },
  {
    name: 'Thomas R.',
    location: 'Camberwell',
    timeAgo: '4 months ago',
    quote:
      'We\'ve used LMK for multiple strata properties. Reliable, safety-focused, and they always communicate clearly with residents.',
    rating: 5,
    initial: 'T',
    color: 'bg-emerald-500',
  },
  {
    name: 'Michelle & Aaron',
    location: 'Ashwood',
    timeAgo: '5 months ago',
    quote:
      'Professional, efficient and genuinely careful around our home. The crew explained everything before they started and left the place spotless.',
    rating: 5,
    initial: 'M',
    color: 'bg-purple-500',
  },
  {
    name: 'Rob W.',
    location: 'Burwood',
    timeAgo: '5 months ago',
    quote:
      'Excellent service and price. Kyle and the team were professional, punctual, quick, friendly and helpful. Left our property clean and tidy.',
    rating: 5,
    initial: 'R',
    color: 'bg-sky-500',
  },
]

// Google logo SVG component
function GoogleLogo({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-advance every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 2))
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const goTo = (index: number) => {
    const maxIndex = Math.ceil(testimonials.length / 2) - 1
    if (index < 0) {
      setDirection(-1)
      index = maxIndex
    } else if (index > maxIndex) {
      setDirection(1)
      index = 0
    } else {
      setDirection(index > currentIndex ? 1 : -1)
    }
    setCurrentIndex(index)
  }

  const currentTestimonials = testimonials.slice(currentIndex * 2, currentIndex * 2 + 2)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <section id="testimonials" className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-emerald-100/50 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-green-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between"
        >
          <div className="text-center sm:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-3 inline-flex items-center gap-2"
            >
              <span className="rounded-lg bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
                EXCELLENT
              </span>
            </motion.div>
            
            <div className="flex items-center justify-center gap-1 sm:justify-start">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                >
                  <Star className="h-7 w-7 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                </motion.div>
              ))}
            </div>
            <p className="mt-2 text-sm text-gray-600">Based on 18 reviews</p>
          </div>

          {/* Google branding */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-3"
          >
            <GoogleLogo className="h-10 w-10" />
            <span className="text-2xl font-medium text-gray-700">Google</span>
          </motion.div>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={() => goTo(currentIndex - 1)}
            className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-lg ring-1 ring-gray-100 transition-all hover:bg-gray-50 hover:shadow-xl hover:scale-105 md:flex lg:-left-6"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button
            onClick={() => goTo(currentIndex + 1)}
            className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-lg ring-1 ring-gray-100 transition-all hover:bg-gray-50 hover:shadow-xl hover:scale-105 md:flex lg:-right-6"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>

          {/* Testimonial cards */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="grid gap-6 md:grid-cols-2"
              >
                {currentTestimonials.map((t, idx) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
                  >
                    {/* Quote decoration */}
                    <Quote className="absolute top-4 right-4 h-8 w-8 text-gray-100 transition-colors group-hover:text-emerald-100" />

                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div className={`flex h-12 w-12 items-center justify-center rounded-full ${t.color} text-lg font-bold text-white shadow-lg`}>
                          {t.initial}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{t.name}</p>
                          <p className="text-xs text-gray-500">{t.timeAgo}</p>
                        </div>
                      </div>
                      <GoogleLogo className="h-5 w-5" />
                    </div>

                    {/* Stars with verification badge */}
                    <div className="mb-4 flex items-center gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <svg className="ml-1 h-4 w-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </div>

                    {/* Quote */}
                    <p className="text-sm leading-relaxed text-gray-700">{t.quote}</p>

                    {/* Location tag */}
                    <div className="mt-4 inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                      📍 {t.location}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots navigation */}
          <div className="mt-8 flex justify-center gap-2">
            {[...Array(Math.ceil(testimonials.length / 2))].map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-emerald-500'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Read more link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
          >
            Read more reviews on Google
            <ChevronRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
