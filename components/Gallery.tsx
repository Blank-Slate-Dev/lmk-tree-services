// components/Gallery.tsx
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    category: 'removal',
    title: 'Large Gum Tree Removal',
    description: 'Safe removal of 20m eucalyptus in Kew',
    before: '/gallery/removal-1-before.jpg',
    after: '/gallery/removal-1-after.jpg',
  },
  {
    id: 2,
    category: 'pruning',
    title: 'Crown Reduction',
    description: 'Professional pruning in Brighton',
    before: '/gallery/pruning-1-before.jpg',
    after: '/gallery/pruning-1-after.jpg',
  },
  {
    id: 3,
    category: 'emergency',
    title: 'Storm Damage Cleanup',
    description: '24hr emergency response in Hawthorn',
    before: '/gallery/emergency-1-before.jpg',
    after: '/gallery/emergency-1-after.jpg',
  },
  {
    id: 4,
    category: 'removal',
    title: 'Palm Tree Removal',
    description: 'Complete palm removal in St Kilda',
    before: '/gallery/removal-2-before.jpg',
    after: '/gallery/removal-2-after.jpg',
  },
  {
    id: 5,
    category: 'pruning',
    title: 'Heritage Oak Pruning',
    description: 'Careful maintenance in Toorak',
    before: '/gallery/pruning-2-before.jpg',
    after: '/gallery/pruning-2-after.jpg',
  },
  {
    id: 6,
    category: 'stump',
    title: 'Stump Grinding',
    description: 'Below-ground removal in Camberwell',
    before: '/gallery/stump-1-before.jpg',
    after: '/gallery/stump-1-after.jpg',
  },
]

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'removal', label: 'Tree Removal' },
  { id: 'pruning', label: 'Pruning' },
  { id: 'emergency', label: 'Emergency' },
  { id: 'stump', label: 'Stump Grinding' },
]

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)
  const [showBefore, setShowBefore] = useState(true)

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 font-semibold text-sm rounded-full mb-4">
            OUR WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Before & After Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the quality and precision we bring to every project
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedImage(image)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
                <img
                  src={image.after}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-white font-bold text-xl mb-1">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.description}</p>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 z-20">
                  Before/After
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-6xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>

                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="relative aspect-[16/9]">
                    <img
                      src={showBefore ? selectedImage.before : selectedImage.after}
                      alt={`${selectedImage.title} - ${showBefore ? 'Before' : 'After'}`}
                      className="w-full h-full object-cover"
                    />
                    
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
                      <button
                        onClick={() => setShowBefore(true)}
                        className={`px-6 py-3 rounded-full font-semibold transition-all ${
                          showBefore
                            ? 'bg-white text-gray-900'
                            : 'bg-black/50 text-white backdrop-blur-sm'
                        }`}
                      >
                        Before
                      </button>
                      <button
                        onClick={() => setShowBefore(false)}
                        className={`px-6 py-3 rounded-full font-semibold transition-all ${
                          !showBefore
                            ? 'bg-white text-gray-900'
                            : 'bg-black/50 text-white backdrop-blur-sm'
                        }`}
                      >
                        After
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                    <p className="text-gray-600">{selectedImage.description}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
