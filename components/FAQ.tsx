// components/FAQ.tsx
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'

const faqs = [
  {
    question: 'How much does tree removal or pruning cost?',
    answer:
      'Pricing depends on the size of the tree, ease of access, proximity to structures and how much clean-up is required. Simple pruning can start from a few hundred dollars, while large removals are quoted on site. LMK Tree Services provides free written quotes so you know the full cost before any work begins.',
  },
  {
    question: 'Do I need council permission to remove a tree?',
    answer:
      'Some trees are protected by local council rules or overlays. Kyle can advise you during the quote if council approval is likely to be needed and, where required, help you understand what information council will ask for.',
  },
  {
    question: 'Are you fully insured and qualified?',
    answer:
      'Yes. LMK Tree Services is fully insured with public liability cover up to $20M and uses qualified, experienced arborists. Safety procedures, harness checks and the right equipment are used on every job to protect your home and neighbours.',
  },
  {
    question: 'Will you take away all of the branches and mess?',
    answer:
      'In most cases, yes – green waste is chipped or removed as part of the job and the area is blown down so your yard is left neat, not like a worksite. If you would like to keep mulch or firewood, just mention it when booking and we can plan for that.',
  },
  {
    question: 'Which areas do you service and when can you attend?',
    answer:
      'LMK Tree Services is based in Melbourne’s south-east and services surrounding suburbs and wider metro Melbourne by arrangement. Appointment times are flexible, and emergency call-outs are available for storm-damaged or dangerous trees.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleIndex = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-full bg-primary-50 px-4 py-2 text-xs font-semibold tracking-wide text-primary-700">
            COMMON QUESTIONS
          </span>
          <h2 className="mt-4 text-3xl font-bold text-bark-900 sm:text-4xl">
            FAQs about tree work and safety
          </h2>
          <p className="mt-3 text-sm text-bark-700 sm:text-base">
            If you&apos;re unsure what can be done with your trees, hedges or stumps, these answers
            cover the basics. For anything else, just ask when you request a quote.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className="overflow-hidden rounded-2xl border border-bark-100 bg-bark-50/60"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-bark-900 sm:text-base">
                    {faq.question}
                  </span>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary-700 shadow-sm">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="border-t border-bark-100 px-5 pb-4 pt-3 text-sm leading-relaxed text-bark-800">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 rounded-2xl bg-bark-900 px-6 py-5 text-center text-sm text-bark-50 sm:text-base"
        >
          Still not sure what your tree needs?{' '}
          <button
            type="button"
            onClick={() =>
              document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="font-semibold text-primary-200 underline-offset-4 hover:underline"
          >
            Request a free quote and friendly advice
          </button>
          .
        </motion.div>
      </div>
    </section>
  )
}
