// components/Hero.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Shield,
  Award,
  Clock,
  ChevronRight,
  CheckCircle,
  Phone,
  Calendar,
  TreePine,
  Zap,
} from 'lucide-react'

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  const images = ['/hero-1.jpg', '/hero-2.jpg', '/hero-3.jpg']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  const features = [
    { icon: Shield, text: 'Fully Insured $20M' },
    { icon: Award, text: 'ISA Certified' },
    { icon: Clock, text: '24/7 Emergency' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
              >
                <feature.icon className="w-4 h-4 text-green-400" />
                <span className="text-white text-sm font-medium">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Melbourne&apos;s Premier
            <span className="block text-green-400 mt-2">
              Tree Service Experts
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Professional tree removal, pruning, and emergency services with 15+
            years of excellence
          </motion.p>

          {/* Service Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {[
              'Free Quotes',
              'Same Day Service',
              'Certified Arborists',
              'Eco-Friendly Disposal',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() =>
                document
                  .getElementById('consultation')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="group px-8 py-4 bg-green-600 text-white font-bold text-lg rounded-full hover:bg-green-700 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
            >
              <Calendar className="w-5 h-5" />
              Get Free Quote
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="tel:0429187791"
              className="group px-8 py-4 bg-white text-gray-900 font-bold text-lg rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5 text-green-600" />
              0429 187 791
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-orange-600">24/7</span>
              </div>
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-white/70 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
