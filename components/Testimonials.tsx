// components/Testimonials.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'Kew, VIC',
    rating: 5,
    text: 'Absolutely professional service! They removed three large gum trees from our property with incredible precision. The team was courteous, worked efficiently, and left our yard cleaner than they found it.',
    image: '/testimonials/sarah.jpg',
  },
  {
    name: 'David Chen',
    location: 'Brighton, VIC',
    rating: 5,
    text: 'After the recent storms, LMK responded within 2 hours to remove a dangerous tree threatening our home. Their emergency service literally saved us from disaster. Highly recommend!',
    image: '/testimonials/david.jpg',
  },
  {
    name: 'Emma Thompson',
    location: 'Hawthorn, VIC',
    rating: 5,
    text: 'We use LMK for all our commercial properties. They\'re reliable, professional, and their pricing is always fair. The team knows their craft and it shows in their work quality.',
    image: '/testimonials/emma.jpg',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 font-semibold text-sm rounded-full mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-green-200 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-2xl shadow-lg">
            <div className="text-left">
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600">Based on 500+ reviews</p>
            </div>
            <div className="border-l border-gray-200 pl-4">
              <p className="text-3xl font-bold text-gray-900">4.9</p>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}