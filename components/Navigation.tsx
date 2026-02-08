'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import Image from 'next/image'
import { getImageUrl } from '@/lib/supabase'

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'Products', href: '#products' },
  { name: 'Delivery', href: '#delivery' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

// Logo configuration - set to null to use text only, or provide a path
// For local images: '/logo.png' (place in public folder)
// For Supabase: { bucket: 'logos', path: 'chargeup-logo.png' }
//
// COMMON CONFIGURATIONS - Update the one you need:
//
// Option 1: Supabase (most common)
const LOGO_CONFIG: { bucket: string; path: string } | string | null = { 
  bucket: 'logos', 
  path: 'chargeup-logo.png'  // Change this to your actual filename
}

// Option 2: Local file in public folder
// const LOGO_CONFIG: { bucket: string; path: string } | string | null = '/logo.png'

// Option 3: Use text only (no logo)
// const LOGO_CONFIG: { bucket: string; path: string } | string | null = null

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Get logo URL
  const getLogoUrl = (): string | null => {
    if (!LOGO_CONFIG) {
      console.log('Logo config is null - using text only')
      return null
    }
    if (typeof LOGO_CONFIG === 'string') {
      // Local image path
      console.log('Using local logo:', LOGO_CONFIG)
      return LOGO_CONFIG
    }
    // Supabase image
    const url = getImageUrl(LOGO_CONFIG.bucket, LOGO_CONFIG.path)
    console.log('Logo URL generated:', url)
    console.log('Bucket:', LOGO_CONFIG.bucket, 'Path:', LOGO_CONFIG.path)
    return url
  }

  const logoUrl = getLogoUrl()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center h-16 sm:h-20 relative">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#hero')
            }}
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {logoUrl ? (
              <>
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                  <Image
                    src={logoUrl}
                    alt="ChargeUp Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 40px, 48px"
                    unoptimized={logoUrl.endsWith('.svg') || logoUrl.includes('placeholder') || logoUrl.includes('supabase')}
                    priority
                    onError={(e) => {
                      console.error('❌ Logo failed to load!')
                      console.error('URL:', logoUrl)
                      console.error('Check:')
                      console.error('1. Bucket name is correct:', LOGO_CONFIG && typeof LOGO_CONFIG === 'object' ? LOGO_CONFIG.bucket : 'N/A')
                      console.error('2. Filename is correct:', LOGO_CONFIG && typeof LOGO_CONFIG === 'object' ? LOGO_CONFIG.path : 'N/A')
                      console.error('3. Bucket is set to Public in Supabase')
                      console.error('4. Bucket policy allows public read access')
                    }}
                    onLoad={() => {
                      console.log('✅ Logo loaded successfully!')
                      console.log('URL:', logoUrl)
                    }}
                  />
                </div>
                <span className="text-xl sm:text-2xl font-bold text-gradient">ChargeUp</span>
              </>
            ) : (
              <span className="text-2xl font-bold text-gradient">ChargeUp</span>
            )}
          </motion.a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className="text-sm font-medium text-gray-300 hover:text-primary-electric-blue transition-colors"
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-light border-t border-gray-800"
          >
            <div className="container-custom py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className="block text-gray-300 hover:text-primary-electric-blue transition-colors py-2"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

