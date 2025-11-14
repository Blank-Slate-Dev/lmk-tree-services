// components/Services.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  TreePine,
  Scissors,
  Shield,
  Truck,
  HeartHandshake,
  Zap,
  CheckCircle,
  ArrowRight,
  Home,
  Building2,
  Trees,
  Phone,
} from 'lucide-react'

const services = [
  {
    icon: TreePine,
    title: 'Tree Removal',
    description:
      'Safe and efficient removal of unwanted or hazardous trees using advanced equipment and techniques.',
    features: ['Crane assistance', 'Stump grinding', 'Complete cleanup', 'Permit assistance'],
    price: 'From $800',
    popular: true,
  },
  {
    icon: Scissors,
    title: 'Tree Pruning & Lopping',
    description:
      'Expert trimming to enhance tree health, safety, and aesthetics while maintaining natural form.',
    features: ['Crown thinning', 'Deadwooding', 'Height reduction', 'Structural pruning'],
    price: 'From $350',
  },
  {
    icon: Shield,
    title: '24/7 Emergency Service',
    description:
      'Rapid response for storm damage, fallen trees, and urgent safety hazards any time.',
    features: ['Storm damage', 'Dangerous trees', 'Insurance work', 'Priority response'],
    price: 'Call anytime',
  },
  {
    icon: HeartHandshake,
    title: 'Tree Health Assessment',
    description:
      'Professional evaluation and treatment plans to ensure your trees thrive for generations.',
    features: ['Disease diagnosis', 'Pest management', 'Soil testing', 'Treatment plans'],
    price: 'From $200',
  },
  {
    icon: Truck,
    title: 'Stump Grinding',
    description:
      'Complete stump removal below ground level, perfect for replanting or landscaping.',
    features: ['Below ground', 'Clean finish', 'Mulch provided', 'Multiple stumps'],
    price: 'From $150',
  },
  {
    icon: Trees,
    title: 'Land Clearing',
    description:
      'Efficient vegetation management for development, fire prevention, and property enhancement.',
    features: ['Site preparation', 'Selective clearing', 'Waste removal', 'Erosion control'],
    price: 'Custom quote',
  },
]

const serviceTypes = [
  { icon: Home, label: 'Residential', description: 'Homes & Gardens' },
  { icon: Building2, label: 'Commercial', description: 'Business Properties' },
  { icon: Shield, label: 'Council', description: 'Government Projects' },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 font-semibold text-sm rounded-full mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Tree Care Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine maintenance to emergency response, we provide comprehensive tree services
            for Melbourne residential and commercial properties
          </p>
        </motion.div>

        {/* Service Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {serviceTypes.map((type, index) => (
            <motion.div
              key={type.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <type.icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{type.label}</h3>
                  <p className="text-sm text-gray-600">{type.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                service.popular ? 'ring-2 ring-green-500' : ''
              }`}
            >
              {service.popular && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                  MOST POPULAR
                </span>
              )}

              <div className="mb-6">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-green-600 mb-6">
                  {service.price}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  document
                    .getElementById('consultation')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="w-full py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group"
              >
                Get Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Emergency Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8" />
              <span className="text-2xl font-bold">
                Emergency Tree Service Available 24/7
              </span>
            </div>
            <p className="text-lg mb-6 text-white/90">
              Storm damage? Fallen tree? We&apos;re here to help immediately. Our emergency
              response team is ready to handle any urgent tree situation.
            </p>
            <a
              href="tel:0429187791"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-red-600 font-bold rounded-full hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Now: 0429 187 791
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
