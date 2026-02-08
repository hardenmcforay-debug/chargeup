'use client'

import { motion } from 'framer-motion'
import { HiArrowDown, HiLightningBolt, HiStar } from 'react-icons/hi'
import Image from 'next/image'
import { getImageUrl } from '@/lib/supabase'

// Hero image configuration
// Set to null to use the default icon display
// For Supabase: { bucket: 'hero', path: 'hero-image.jpg' }
// For local: '/hero-image.jpg' (place in public folder)
// 
// COMMON CONFIGURATIONS - Uncomment and update the one you need:
// 
// Option 1: Supabase (most common)
const HERO_IMAGE_CONFIG: { bucket: string; path: string } | string | null = { 
  bucket: 'hero', 
  path: 'hero-image.jpg'  // Change this to your actual filename
}

// Option 2: Local file in public folder
// const HERO_IMAGE_CONFIG: { bucket: string; path: string } | string | null = '/hero-image.jpg'

// Option 3: Use default icon (no image)
// const HERO_IMAGE_CONFIG: { bucket: string; path: string } | string | null = null

export default function Hero() {

  // Get hero image URL
  const getHeroImageUrl = (): string | null => {
    if (!HERO_IMAGE_CONFIG) {
      console.log('Hero image config is null - using default icon')
      return null
    }
    if (typeof HERO_IMAGE_CONFIG === 'string') {
      // Local image path
      console.log('Using local hero image:', HERO_IMAGE_CONFIG)
      return HERO_IMAGE_CONFIG
    }
    // Supabase image
    const url = getImageUrl(HERO_IMAGE_CONFIG.bucket, HERO_IMAGE_CONFIG.path)
    console.log('Hero image URL generated:', url)
    console.log('Bucket:', HERO_IMAGE_CONFIG.bucket, 'Path:', HERO_IMAGE_CONFIG.path)
    return url
  }

  const heroImageUrl = getHeroImageUrl()
  const scrollToProducts = () => {
    const element = document.querySelector('#products')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-5 sm:top-20 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary-electric-blue/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-primary-yellow/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-blue/20 rounded-full mb-4 sm:mb-6 max-w-full"
            >
              <HiLightningBolt className="w-4 h-4 sm:w-5 sm:h-5 text-primary-yellow flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-primary-electric-blue whitespace-normal sm:whitespace-nowrap text-center sm:text-left">
                Premium Phone Accessories
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              <span className="text-gradient">Power up</span>
              <br />
              your phone.
              <br />
              <span className="text-gradient">Power up</span> your life.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 mb-4 sm:mb-6 max-w-xl mx-auto lg:mx-0"
            >
              High-quality, tested accessories that keep your devices powered
              and reliable. Fast charging solutions for the modern lifestyle.
            </motion.p>

            {/* Rating System */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-8"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <HiStar
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-white ml-2">
                  4.8
                </span>
                <span className="text-gray-500">/5</span>
              </div>
              <div className="text-sm text-gray-400">
                <span className="font-semibold text-white">2,500+</span> Happy
                Customers
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={scrollToProducts}
              className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-primary-blue to-primary-electric-blue rounded-full font-semibold text-white shadow-lg shadow-primary-blue/50 hover:shadow-xl hover:shadow-primary-blue/70 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Shop Products</span>
              <HiArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* 3D Product Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-xs sm:max-w-md lg:max-w-lg mx-auto">
              {/* Main Product Image Container */}
              <motion.div
                className="relative w-full h-full"
                animate={{
                  rotateY: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-blue/30 to-primary-electric-blue/30 rounded-3xl backdrop-blur-sm border border-primary-electric-blue/30 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  {heroImageUrl ? (
                    // Display hero image from Supabase
                    <div className="relative w-full h-full">
                      <Image
                        src={heroImageUrl}
                        alt="ChargeUp Products"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                        unoptimized={heroImageUrl.includes('placeholder') || heroImageUrl.includes('supabase')}
                        onError={(e) => {
                          console.error('❌ Hero image failed to load!')
                          console.error('URL:', heroImageUrl)
                          console.error('Check:')
                          console.error('1. Bucket name is correct:', HERO_IMAGE_CONFIG && typeof HERO_IMAGE_CONFIG === 'object' ? HERO_IMAGE_CONFIG.bucket : 'N/A')
                          console.error('2. Filename is correct:', HERO_IMAGE_CONFIG && typeof HERO_IMAGE_CONFIG === 'object' ? HERO_IMAGE_CONFIG.path : 'N/A')
                          console.error('3. Bucket is set to Public in Supabase')
                          console.error('4. Bucket policy allows public read access')
                          console.error('5. Supabase credentials in .env.local are correct')
                        }}
                        onLoad={() => {
                          console.log('✅ Hero image loaded successfully!')
                          console.log('URL:', heroImageUrl)
                        }}
                      />
                    </div>
                  ) : (
                    // Default icon display
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          y: [0, -20, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="text-center"
                      >
                        <HiLightningBolt className="w-32 h-32 text-primary-yellow mx-auto mb-4" />
                        <p className="text-2xl font-bold text-gradient">
                          Fast Charging
                        </p>
                        <p className="text-gray-400 mt-2">Premium Quality</p>
                      </motion.div>
                    </div>
                  )}
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-10 -right-10 w-24 h-24 bg-primary-yellow/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary-electric-blue/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

