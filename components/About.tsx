'use client'

import { motion } from 'framer-motion'
import { HiStar, HiShieldCheck, HiLightningBolt } from 'react-icons/hi'
import Image from 'next/image'
import { getImageUrl } from '@/lib/supabase'

// About section image configuration
// Set to null to use the default icon display
// For Supabase: { bucket: 'about', path: 'about-image.jpg' }
// For local: '/about-image.jpg' (place in public folder)
//
// COMMON CONFIGURATIONS - Update the one you need:
//
// Option 1: Supabase (most common)
const ABOUT_IMAGE_CONFIG: { bucket: string; path: string } | string | null = { 
  bucket: 'about', 
  path: 'about-image.jpg'  // Change this to your actual filename
}

// Option 2: Local file in public folder
// const ABOUT_IMAGE_CONFIG: { bucket: string; path: string } | string | null = '/about-image.jpg'

// Option 3: Use default icon (no image)
// const ABOUT_IMAGE_CONFIG: { bucket: string; path: string } | string | null = null

const values = [
  {
    icon: <HiStar className="w-6 h-6" />,
    text: 'Premium Quality',
  },
  {
    icon: <HiShieldCheck className="w-6 h-6" />,
    text: 'Tested & Reliable',
  },
  {
    icon: <HiLightningBolt className="w-6 h-6" />,
    text: 'Fast Charging',
  },
]

export default function About() {
  // Get about image URL
  const getAboutImageUrl = (): string | null => {
    if (!ABOUT_IMAGE_CONFIG) {
      return null
    }
    if (typeof ABOUT_IMAGE_CONFIG === 'string') {
      // Local image path
      return ABOUT_IMAGE_CONFIG
    }
    // Supabase image
    return getImageUrl(ABOUT_IMAGE_CONFIG.bucket, ABOUT_IMAGE_CONFIG.path)
  }

  const aboutImageUrl = getAboutImageUrl()

  return (
    <section id="about" className="section-padding bg-dark-light/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              About <span className="text-gradient">ChargeUp</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-4 sm:mb-6 md:mb-8">
              At ChargeUp, we sell high-quality, tested phone accessories that
              keep your devices powered and reliable. Every product in our
              collection undergoes rigorous testing to ensure it meets our
              standards for performance, durability, and safety.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed mb-4 sm:mb-6 md:mb-8">
              We understand that your phone is essential to your daily life, and
              reliable charging solutions shouldn&apos;t be a luxury. That&apos;s why we
              offer premium accessories at affordable prices, backed by our
              commitment to quality and customer satisfaction.
            </p>

            {/* Values */}
            <div className="flex flex-wrap gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-blue/20 rounded-full border border-primary-electric-blue/30"
                >
                  <span className="text-primary-yellow">{value.icon}</span>
                  <span className="text-sm font-medium text-gray-300">
                    {value.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element - Image or Icon */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-xs sm:max-w-md lg:max-w-lg mx-auto">
              {aboutImageUrl ? (
                // Display image from Supabase with animations
                <motion.div
                  className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-primary-electric-blue/30 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(0, 212, 255, 0.5)' }}
                  animate={{
                    boxShadow: [
                      '0 25px 50px -12px rgba(0, 212, 255, 0.25)',
                      '0 25px 50px -12px rgba(0, 212, 255, 0.4)',
                      '0 25px 50px -12px rgba(0, 212, 255, 0.25)',
                    ],
                  }}
                  transition={{
                    duration: 0.8,
                    boxShadow: {
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                >
                  <Image
                    src={aboutImageUrl}
                    alt="About ChargeUp"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    unoptimized={aboutImageUrl.includes('placeholder') || aboutImageUrl.includes('supabase')}
                    onError={(e) => {
                      console.error('❌ About image failed to load!')
                      console.error('URL:', aboutImageUrl)
                      console.error('Check: Bucket name, filename matches exactly, bucket is Public')
                    }}
                    onLoad={() => {
                      console.log('✅ About image loaded successfully!')
                    }}
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/0 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ) : (
                // Default icon display
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-blue/30 to-primary-electric-blue/30 rounded-3xl"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="text-center"
                    >
                      <HiLightningBolt className="w-24 h-24 text-primary-yellow mx-auto mb-4" />
                      <p className="text-3xl font-bold text-gradient">
                        Quality First
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* Decorative Circles */}
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 bg-primary-yellow/20 rounded-full blur-2xl"
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
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-electric-blue/20 rounded-full blur-2xl"
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

