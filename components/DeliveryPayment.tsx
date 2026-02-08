'use client'

import { motion } from 'framer-motion'
import {
  HiShieldCheck,
  HiCheckCircle,
} from 'react-icons/hi'
import { FaDollarSign, FaTruck } from 'react-icons/fa'

const features = [
  {
    icon: <FaTruck className="w-8 h-8" />,
    title: 'Free Delivery',
    description: 'We offer free delivery on all orders. Fast and reliable shipping to your doorstep.',
  },
  {
    icon: <FaDollarSign className="w-8 h-8" />,
    title: 'Mobile Money Only',
    description: 'Secure payment via mobile money. Quick and convenient transactions.',
  },
  {
    icon: <HiShieldCheck className="w-8 h-8" />,
    title: 'Payment Before Delivery',
    description: 'Payment is required before delivery to ensure a smooth transaction process.',
  },
]

export default function DeliveryPayment() {
  return (
    <section id="delivery" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Delivery & <span className="text-gradient">Payment</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Simple, secure, and convenient shopping experience
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-dark-light rounded-2xl p-6 sm:p-8 border border-gray-800 hover:border-primary-electric-blue/50 transition-all duration-300 group"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-electric-blue rounded-xl mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-primary-electric-blue transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-electric-blue/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 bg-gradient-to-r from-primary-blue/20 to-primary-electric-blue/20 rounded-2xl p-6 sm:p-8 border border-primary-electric-blue/30"
        >
          <div className="flex items-start gap-4">
            <HiCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Order Process
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Simply click &quot;Order on WhatsApp&quot; for any product, send us your
                order details, make payment via mobile money, and we&apos;ll deliver
                your items free of charge. All products are tested and come with
                quality assurance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

