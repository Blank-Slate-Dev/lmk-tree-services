// components/Process.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Calendar, UserCheck, Wrench, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    title: 'Initial Contact',
    description: 'Call us or submit an online form for a free consultation',
  },
  {
    icon: Calendar,
    title: 'Site Assessment',
    description: 'Our arborist visits your property for a detailed evaluation',
  },
  {
    icon: UserCheck,
    title: 'Custom Quote',
    description: 'Receive a detailed, transparent quote with no hidden costs',
  },
  {
    icon: Wrench,
    title: 'Professional Service',
    description: 'Our certified team completes the work safely and efficiently',
  },
  {
    icon: CheckCircle,
    title: 'Complete Cleanup',
    description: 'We leave your property spotless with all debris removed',
  },
]

export function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 font-semibold text-sm rounded-full mb-4">
            HOW IT WORKS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple 5-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From your first call to final cleanup, we make tree care simple and stress-free
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="bg-white relative z-10">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}