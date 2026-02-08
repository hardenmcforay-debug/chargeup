'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown, HiQuestionMarkCircle } from 'react-icons/hi'

const faqs = [
  {
    id: 1,
    question: 'What types of charging cables do you offer?',
    answer:
      'We offer a wide range of charging cables including USB-C cables, Micro-USB cables, and iPhone Lightning cables. All our cables are tested for durability and fast charging capabilities.',
  },
  {
    id: 2,
    question: 'How do I place an order?',
    answer:
      'Simply click the "Order on WhatsApp" button on any product card. This will open WhatsApp with a pre-filled message. Send us your order details, and we\'ll confirm your order. Payment is made via mobile money before delivery.',
  },
  {
    id: 3,
    question: 'Do you offer free delivery?',
    answer:
      'Yes! We offer free delivery on all orders. We deliver to locations across Freetown, Sierra Leone. Delivery times may vary depending on your location.',
  },
  {
    id: 4,
    question: 'What payment methods do you accept?',
    answer:
      'We accept mobile money payments only. Payment is required before delivery to ensure a smooth transaction process. We\'ll provide you with the payment details after you confirm your order.',
  },
  {
    id: 5,
    question: 'Are your products tested and reliable?',
    answer:
      'Absolutely! Every product in our collection undergoes rigorous testing to ensure it meets our standards for performance, durability, and safety. We only sell products that we trust and use ourselves.',
  },
  {
    id: 6,
    question: 'What if my product is defective?',
    answer:
      'We stand behind the quality of our products. If you receive a defective item, please contact us via WhatsApp within 24 hours of delivery, and we\'ll arrange a replacement or refund.',
  },
  {
    id: 7,
    question: 'How long does delivery take?',
    answer:
      'Delivery times vary depending on your location in Freetown, Sierra Leone. Typically, orders are delivered within 1-3 business days after payment confirmation. We\'ll provide you with an estimated delivery time when you place your order.',
  },
  {
    id: 8,
    question: 'Do you deliver to areas outside Freetown?',
    answer:
      'Currently, we primarily serve customers in Freetown and surrounding areas. If you\'re located outside our delivery zone, please contact us via WhatsApp, and we\'ll see if we can arrange delivery to your location.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-electric-blue rounded-2xl mb-6">
            <HiQuestionMarkCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Everything you need to know about our products and services
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-light rounded-xl border border-gray-800 overflow-hidden hover:border-primary-electric-blue/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left group"
              >
                <span className="text-base sm:text-lg font-semibold text-white group-hover:text-primary-electric-blue transition-colors pr-2 sm:pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <HiChevronDown className="w-6 h-6 text-gray-400 group-hover:text-primary-electric-blue transition-colors" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-3 sm:gap-4 bg-gradient-to-r from-primary-blue/20 to-primary-electric-blue/20 rounded-2xl p-6 sm:p-8 border border-primary-electric-blue/30">
            <p className="text-gray-300 text-base sm:text-lg px-4 text-center">
              Still have questions?{' '}
              <a
                href="#contact"
                className="text-primary-electric-blue hover:text-primary-yellow transition-colors font-semibold"
              >
                Contact us
              </a>{' '}
              and we&apos;ll be happy to help!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

