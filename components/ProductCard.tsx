'use client'

import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'
import { FaShoppingBag } from 'react-icons/fa'
import Image from 'next/image'
import { getImageUrl } from '@/lib/supabase'

interface Product {
  id: string
  name: string
  description: string
  price: string
  whatsappLink: string
  imagePath?: string
  icon?: React.ReactNode
}

interface ProductCardProps {
  product: Product
  index: number
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const imageUrl = product.imagePath
    ? getImageUrl('products', product.imagePath)
    : 'https://via.placeholder.com/400x400/0066FF/FFFFFF?text=' +
      encodeURIComponent(product.name)

  // Debug logging
  if (product.imagePath) {
    console.log(`📦 Product: ${product.name}`)
    console.log(`   Image Path: ${product.imagePath}`)
    console.log(`   Generated URL: ${imageUrl}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-dark-light rounded-xl p-4 sm:p-5 md:p-6 border border-gray-800 hover:border-primary-electric-blue/50 transition-all duration-300"
      whileHover={{ y: -10, scale: 1.02 }}
    >
      {/* Icon or Image */}
      <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-primary-blue/20 to-primary-electric-blue/20">
        {product.imagePath ? (
          // Show image if imagePath is provided
          <Image
            key={`${product.id}-${product.imagePath}`}
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized={imageUrl.includes('placeholder') || imageUrl.includes('supabase')}
            priority={index < 3}
            onError={(e) => {
              console.error(`❌ Product image failed to load: ${product.name}`)
              console.error('Image URL:', imageUrl)
              console.error('Image Path:', product.imagePath)
              console.error('Check: Bucket name "products", filename matches exactly, bucket is Public')
            }}
            onLoad={() => {
              console.log(`✅ Product image loaded: ${product.name}`)
            }}
          />
        ) : product.icon ? (
          // Show icon if no image but icon is provided
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl sm:text-5xl text-primary-electric-blue">
              {product.icon}
            </div>
          </div>
        ) : (
          // Fallback placeholder
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized={imageUrl.includes('placeholder')}
          />
        )}
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary-electric-blue transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">{product.description}</p>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl font-bold text-gradient">{product.price}</span>
          <HiCheckCircle className="w-4 h-4 text-green-500" />
          <span className="text-xs text-gray-500">In Stock</span>
        </div>

        {/* WhatsApp Order Button */}
        <motion.a
          href={product.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn flex items-center justify-center gap-2 w-full py-2 px-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-xs sm:text-sm font-semibold text-white hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg shadow-green-500/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaShoppingBag className="w-4 h-4" />
          <span>Order on WhatsApp</span>
        </motion.a>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-electric-blue/0 via-primary-electric-blue/10 to-primary-electric-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  )
}

