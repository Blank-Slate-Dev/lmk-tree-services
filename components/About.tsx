// components/About.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Shield, Users, Clock, CheckCircle, TreePine, MapPin } from 'lucide-react'

const credentials = [
  'Qualified and experienced arborists',
  '$20M public liability insurance',
  'Safety-focused, fully compliant work practices',
  'Eco-conscious green waste recycling',
]

const stats = [
  {
    label: '15+ years',
    sublabel: 'hands-on tree care experience',
    icon: Clock,
  },
  {
    label: '1000+',
    sublabel: 'trees safely pruned or removed',
    icon: TreePine,
  },
  {
    label: '24/7',
    sublabel: 'rapid response for storm damage',
    icon: Shield,
  },
]

export function About() {
  return (
    <section id="about" className="bg-bark-50 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-start lg:px-8">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex-1 space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1 text-xs font-semibold tracking-wide text-primary-700">
            <TreePine className="h-4 w-4" />
            ABOUT LMK TREE SERVICES
          </span>

          <h2 className="text-left text-3xl font-bold text-bark-900 sm:text-4xl">
            Local arborists focused on safe, tidy work every time
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-bark-700">
            LMK Tree Services specialises in safe removals, careful pruning, hedge trimming and
            stump grinding for homes and strata properties across Melbourne&apos;s south-east.
            Every job is planned properly so your roof, fences and gardens stay protected.
          </p>

          <p className="max-w-xl text-base leading-relaxed text-bark-700">
            You deal directly with the arborist doing the work – not a call centre. From the first
            quote to the final clean-up, the same small team is on site, keeping you updated and
            leaving your property neat and ready to enjoy.
          </p>

          {/* Location + reassurance */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-bark-800">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              <MapPin className="h-4 w-4 text-primary-600" />
              <span>Based in Melbourne&apos;s south-east • Servicing metro & nearby areas</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              <Shield className="h-4 w-4 text-primary-600" />
              <span>Fully insured and safety-first on every job</span>
            </div>
          </div>

          {/* Credentials list */}
          <div className="mt-6 rounded-2xl border border-primary-100 bg-white/70 p-5 shadow-sm backdrop-blur">
            <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-bark-900">
              <CheckCircle className="h-4 w-4 text-primary-600" />
              Professional, compliant and insured
            </div>
            <ul className="grid gap-2 text-sm text-bark-700 sm:grid-cols-2">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1 space-y-6"
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col rounded-2xl border border-bark-100 bg-white p-4 text-left shadow-sm"
              >
                <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-bark-600">
                  <stat.icon className="h-4 w-4 text-primary-600" />
                  <span>Trusted locally</span>
                </div>
                <p className="text-2xl font-bold text-bark-900">{stat.label}</p>
                <p className="mt-1 text-sm text-bark-700">{stat.sublabel}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-primary-100 bg-primary-900/95 px-5 py-6 text-sm text-primary-50 shadow-md">
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-200">
              <Shield className="h-4 w-4" />
              SAFETY & CLEAN-UP
            </div>
            <p className="mb-2 text-primary-50">
              Every job starts with a safety check and clear plan of attack. Access, neighbouring
              properties, pets and powerlines are all considered before a saw starts.
            </p>
            <p className="text-primary-100/90">
              Once the work is done, branches, logs and green waste are chipped or removed, and
              work areas are blown down so your yard looks tidy again – not like a worksite.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
