// components/AreasServiced.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, MapPin } from 'lucide-react'

const areas = [
  'Glen Waverley',
  'Mount Waverley',
  'Chadstone',
  'Camberwell',
  'Ashwood',
  'Burwood',
  'Box Hill',
  'Doncaster',
  'Clayton',
  'Oakleigh',
  'Malvern',
  'Hawthorn',
  'Kew',
  'Balwyn',
  'Surrey Hills',
  'Canterbury',
]

export function AreasServiced() {
  const half = Math.ceil(areas.length / 2)
  const leftColumn = areas.slice(0, half)
  const rightColumn = areas.slice(half)

  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/4 rounded-full bg-gradient-to-br from-emerald-50 to-green-100 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-10 flex items-start gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 p-3 shadow-lg shadow-emerald-500/25">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary-800 sm:text-4xl">
                Areas serviced
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-3 h-1 w-20 origin-left rounded-full bg-gradient-to-r from-emerald-400 to-green-500"
              />
            </div>
          </div>

          {/* Areas grid */}
          <div className="grid grid-cols-1 gap-x-12 gap-y-0 sm:grid-cols-2">
            {[leftColumn, rightColumn].map((column, colIndex) => (
              <div key={colIndex} className="space-y-1">
                {column.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, x: colIndex === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                    className="group flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-emerald-50"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 transition-colors group-hover:bg-emerald-200">
                      <Check className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-gray-700 transition-colors group-hover:text-gray-900">
                      {area}
                    </span>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 rounded-2xl border border-emerald-100 bg-gradient-to-r from-emerald-50 to-green-50 p-6 text-center"
          >
            <p className="text-lg font-semibold text-emerald-700 mb-2">
              Don&apos;t see your suburb?
            </p>
            <p className="text-gray-600">
              We service all of Melbourne&apos;s south-east and surrounding areas. Submit a quote to confirm we can help.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}