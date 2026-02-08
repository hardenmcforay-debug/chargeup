'use client'

import { motion } from 'framer-motion'
import { HiMail, HiPhone } from 'react-icons/hi'
import { FaGlobe } from 'react-icons/fa'

export default function Contact() {
  const email = 'tiktokcforay@gmail.com'

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Have questions? We're here to help. Reach out to us anytime.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-dark-light rounded-2xl p-6 sm:p-8 md:p-12 border border-gray-800"
          >
            {/* Email Button */}
            <motion.a
              href={`mailto:${email}`}
              className="group flex items-center justify-center gap-3 sm:gap-4 w-full py-4 sm:py-6 px-6 sm:px-8 bg-gradient-to-r from-primary-blue to-primary-electric-blue rounded-2xl font-semibold text-white text-base sm:text-lg shadow-lg shadow-primary-blue/50 hover:shadow-xl hover:shadow-primary-blue/70 transition-all duration-300 mb-6 sm:mb-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiMail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Send us an Email</span>
            </motion.a>

            {/* Contact Info */}
            <div className="space-y-6 pt-8 border-t border-gray-800">
              <div className="flex items-center gap-4 text-gray-400">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-blue/20 rounded-lg flex items-center justify-center">
                  <HiMail className="w-6 h-6 text-primary-electric-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-white hover:text-primary-electric-blue transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-400">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-blue/20 rounded-lg flex items-center justify-center">
                  <HiPhone className="w-6 h-6 text-primary-electric-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <a
                    href="tel:+23277364962"
                    className="text-white hover:text-primary-electric-blue transition-colors"
                  >
                    +232 773 64962
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-400">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-blue/20 rounded-lg flex items-center justify-center">
                  <FaGlobe className="w-6 h-6 text-primary-electric-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <p className="text-white">Available for delivery within Freetown</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

