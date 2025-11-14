// components/FAQ.tsx
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'How much does tree removal cost?',
    answer:
      'Tree removal costs vary based on tree size, location, and complexity. Small trees (up to 5m) typically cost $500-$1,500, medium trees (5-10m) range from $1,500-$3,000, and large trees (over 10m) can cost $3,000+. We provide free, detailed quotes after site assessment.',
  },
  {
    question: 'Do I need council permission to remove a tree?',
    answer:
      'In most Melbourne councils, you need a permit to remove trees over a certain size or protected species. We can assist with the permit application process and ensure compliance with local regulations. Emergency removals for dangerous trees may not require permits.',
  },
  {
    question: 'How quickly can you respond to emergencies?',
    answer:
      'We offer 24/7 emergency response and typically arrive within 2-4 hours for urgent situations like storm damage or fallen trees. Our emergency team is equipped to handle dangerous situations safely and efficiently.',
  },
  {
    question: 'What happens to the wood and green waste?',
    answer:
      'We practice eco-friendly disposal. Wood can be chipped for mulch (available to customers on request), larger timber can be cut for firewood, and all green waste is recycled through authorized facilities. We leave your property completely clean.',
  },
  {
    question: 'Are you fully insured?',
    answer:
      'Yes, we carry $20 million public liability insurance and all our arborists are covered by WorkCover. We can provide certificates of insurance upon request. This protects both your property and our team during all work.',
  },
  {
    question: 'How long does tree removal take?',
    answer:
      "Most residential tree removals are completed in one day. Small trees may take 2-4 hours, medium trees 4-6 hours, and large or complex removals may require 1-2 days. We'll provide a time estimate with your quote.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 font-semibold text-sm rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our tree services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Still have questions? We&apos;re here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0429187791"
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all"
            >
              Call Us: 0429 187 791
            </a>
            <button
              onClick={() =>
                document
                  .getElementById('consultation')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all"
            >
              Get Free Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
