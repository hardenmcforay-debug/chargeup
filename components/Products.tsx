'use client'

import { motion } from 'framer-motion'
import { HiLightningBolt, HiPhone } from 'react-icons/hi'
import { FaBatteryFull, FaPlug } from 'react-icons/fa'
import ProductCard from './ProductCard'

// Product images configuration:
// 1. Upload images to Supabase Storage bucket named 'products'
// 2. Add imagePath property with your filename (e.g., 'usb-c-cable.jpg')
// 3. Remove the icon property if using images
// 4. If imagePath is not provided, the icon will be displayed instead

const products = [
  {
    id: '1',
    name: 'USB-C Cables',
    description:
      'High-speed USB-C charging cables for modern devices. Durable braided design with fast data transfer and charging capabilities.',
    price: 'Le25',
    whatsappLink:
      'https://wa.me/23276984914?text=Hi!%20I%20would%20like%20to%20order%20USB-C%20Cables',
    imagePath: 'usb-c-cable.jpg', // Add your image filename here (upload to Supabase 'products' bucket first)
    // icon: <HiLightningBolt />, // Remove or comment out when using images
  },
  {
    id: '2',
    name: 'Micro-USB Cables',
    description:
      'Reliable Micro-USB charging cables for older devices. Premium build quality with fast charging and data transfer support.',
    price: 'Le20',
    whatsappLink:
      'https://wa.me/23276984914?text=Hi!%20I%20would%20like%20to%20order%20Micro-USB%20Cables',
    imagePath: 'micro-usb-cable.jpg', // Replace with your actual filename from Supabase
    // icon: <FaPlug />, // Commented out when using images
  },
  {
    id: '3',
    name: 'Fast Chargers',
    description:
      'Premium fast chargers with advanced safety features. Charge your devices up to 3x faster with intelligent power management.',
    price: 'Le45',
    whatsappLink:
      'https://wa.me/23276984914?text=Hi!%20I%20would%20like%20to%20order%20Fast%20Chargers',
    imagePath: 'fast-charger.jpg', // Replace with your actual filename from Supabase
    // icon: <FaBatteryFull />, // Commented out when using images
  },
  {
    id: '4',
    name: 'iPhone Lightning Cables',
    description:
      'Limited edition iPhone Lightning cables. MFi certified, premium build quality. Perfect for all iPhone models.',
    price: 'Le30',
    whatsappLink:
      'https://wa.me/23276984914?text=Hi!%20I%20would%20like%20to%20order%20iPhone%20Lightning%20Cables',
    imagePath: 'iphone-lightning.jpg', // Replace with your actual filename from Supabase
    // icon: <HiPhone />, // Commented out when using images
  },
  {
    id: '5',
    name: 'USB-C Cables',
    description:
      'Premium USB-C charging cables with reinforced connectors. Supports fast charging up to 100W and high-speed data transfer. Available in multiple lengths.',
    price: 'Le28',
    whatsappLink:
      'https://wa.me/23276984914?text=Hi!%20I%20would%20like%20to%20order%20USB-C%20Cables',
    imagePath: 'usb-c-cable-2.jpg', // Replace with your actual filename from Supabase
    // icon: <HiLightningBolt />, // Commented out when using images
  },
  {
    id: '6',
    name: 'Micro-USB Cables',
    description:
      'Heavy-duty Micro-USB cables with tangle-free design. Extra-long length options available. Perfect for Android devices, power banks, and other accessories.',
    price: 'Le22',
    whatsappLink:
      'https://wa.me/23276984914?text=Hi!%20I%20would%20like%20to%20order%20Micro-USB%20Cables',
    imagePath: 'micro-usb-cable-2.jpg', // Replace with your actual filename from Supabase
    // icon: <FaPlug />, // Commented out when using images
  },
  {
    id: '7',
    name: 'Fast Chargers',
    description:
      'Ultra-fast wall chargers with USB-C Power Delivery. Compact design with foldable prongs. Supports multiple devices simultaneously with smart charging technology.',
    price: 'Le50',
    whatsappLink:
      'https://wa.me/23276984914?text=Hi!%20I%20would%20like%20to%20order%20Fast%20Chargers',
    imagePath: 'fast-charger-2.jpg', // Replace with your actual filename from Supabase
    // icon: <FaBatteryFull />, // Commented out when using images
  },
  {
    id: '8',
    name: 'iPhone Lightning Cables',
    description:
      'Premium braided iPhone Lightning cables with reinforced connectors. Extra durable design with 2-meter length option. Compatible with all iPhone, iPad, and iPod models.',
    price: 'Le35',
    whatsappLink:
      'https://wa.me/23276984914?text=Hi!%20I%20would%20like%20to%20order%20iPhone%20Lightning%20Cables',
    imagePath: 'iphone-lightning-2.jpg', // Replace with your actual filename from Supabase
    // icon: <HiPhone />, // Commented out when using images
  },
]

export default function Products() {
  return (
    <section id="products" className="section-padding bg-dark-light/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Premium quality accessories tested for reliability and performance
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

