// components/About.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Shield, Users, Clock, CheckCircle, TreePine } from 'lucide-react'

const features = [
  'Victorian Tree Industry Organisation (VTIO) Member',
  'International Society of Arboriculture (ISA) Certified',
  'WorkSafe Victoria Compliant',
  'Environmental Management Certified',
  'Fully Licensed & Insured ($20M Public Liability)',
  'Modern Equipment & Technology',
]

export function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64">
          <TreePine className="w-full h-full text-green-600" />
        </div>
        <div className="absolute bottom-20 right-10 w-96 h-96">
          <TreePine className="w-full h-full text-green-600" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 font-semibold text-sm rounded-full mb-6">
              ABOUT LMK TREE SERVICES
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Melbourne's Most Trusted
              <span className="block text-green-600 mt-2">Tree Care Professionals</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 15 years of dedication to arboriculture excellence, LMK Tree Services has 
              become Melbourne's premier choice for professional tree care. Our team of certified 
              arborists combines traditional craftsmanship with cutting-edge techniques to deliver 
              safe, efficient, and environmentally responsible solutions.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From residential gardens to large commercial projects, we approach every job with 
              the same commitment to quality, safety, and customer satisfaction that has earned 
              us the trust of thousands of Melbourne property owners.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Award, label: '15+ Years', sublabel: 'Experience' },
                { icon: Users, label: '2,500+', sublabel: 'Happy Clients' },
                { icon: Shield, label: '100%', sublabel: 'Safety Record' },
                { icon: Clock, label: '24/7', sublabel: 'Emergency' },
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-50 rounded-xl p-4">
                  <stat.icon className="w-8 h-8 text-green-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Credentials & Certifications
            </h3>
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Shield className="w-10 h-10 text-green-600" />
                <div>
                  <h4 className="font-bold text-gray-900">Safety First Promise</h4>
                  <p className="text-sm text-gray-600">Zero incidents in 15 years</p>
                </div>
              </div>
              <p className="text-gray-700">
                Our impeccable safety record isn't luck—it's the result of rigorous training, 
                proper equipment, and never cutting corners. Your property and our team's safety 
                are our top priorities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}