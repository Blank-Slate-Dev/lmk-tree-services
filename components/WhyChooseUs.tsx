// components/WhyChooseUs.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Award, Clock, Users, Leaf, TrendingUp } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: '$20M Insurance Coverage',
    description: 'Fully insured for your complete peace of mind and property protection',
  },
  {
    icon: Award,
    title: 'ISA Certified Arborists',
    description: 'Internationally certified professionals with extensive training',
  },
  {
    icon: Clock,
    title: 'Same Day Service',
    description: 'Rapid response for urgent needs and emergency situations',
  },
  {
    icon: Users,
    title: '15+ Years Experience',
    description: 'Trusted by thousands of Melbourne homes and businesses',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Practices',
    description: 'Sustainable methods with mulch recycling and green waste management',
  },
  {
    icon: TrendingUp,
    title: 'Competitive Pricing',
    description: 'Transparent quotes with best value guarantee and no hidden fees',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 font-semibold text-sm rounded-full mb-4">
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The LMK Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine expertise, safety, and customer service to deliver exceptional results every time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '2,500+', label: 'Trees Serviced' },
            { value: '500+', label: 'Happy Customers' },
            { value: '100%', label: 'Safety Record' },
            { value: '4.9★', label: 'Google Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}