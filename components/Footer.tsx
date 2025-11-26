// components/Footer.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-primary-800 to-primary-900">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />
      </div>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onClick={scrollToTop}
        className="absolute -top-6 right-8 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
      >
        <ArrowUp className="h-5 w-5 text-primary-700" />
      </motion.button>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Logo centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex justify-center"
        >
          <div className="text-center">
            <Image
              src="/logo.png"
              alt="LMK Tree Services"
              width={180}
              height={90}
              className="mx-auto object-contain brightness-0 invert"
            />
          </div>
        </motion.div>

        {/* Contact info row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          <a
            href="tel:0429187791"
            className="group flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur-sm transition-all hover:bg-white/20"
          >
            <div className="rounded-full bg-emerald-500/20 p-2">
              <Phone className="h-4 w-4 text-emerald-400" />
            </div>
            <span className="font-medium">0429 187 791</span>
          </a>

          <a
            href="mailto:kyle@lmktreeservices.com"
            className="group flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur-sm transition-all hover:bg-white/20"
          >
            <div className="rounded-full bg-emerald-500/20 p-2">
              <Mail className="h-4 w-4 text-emerald-400" />
            </div>
            <span className="font-medium">kyle@lmktreeservices.com</span>
          </a>

          <div className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur-sm">
            <div className="rounded-full bg-emerald-500/20 p-2">
              <MapPin className="h-4 w-4 text-emerald-400" />
            </div>
            <span className="font-medium">Melbourne&apos;s South-East</span>
          </div>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm"
        >
          {['Services', 'About', 'Gallery', 'Testimonials', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-primary-200 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-primary-600 to-transparent" />

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-4 text-center text-sm text-primary-300"
        >
          <p>&copy; {currentYear} LMK Tree Services. All Rights Reserved.</p>
          
          <div className="flex items-center gap-2">
            <span className="text-primary-400">Designed by</span>
            <a
              href="http://blankslatedev.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src="/BlankSlateDevToFillHeader.png"
                alt="Blank Slate Dev"
                width={70}
                height={70}
                className="object-contain brightness-0 invert opacity-70"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
