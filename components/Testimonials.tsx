'use client'

import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Kallon',
    location: 'Calaba Town',
    rating: 5,
    text: 'Amazing quality cables! My phone charges so fast now. The delivery was quick and the customer service was excellent. Highly recommend!',
    image: 'SK',
  },
  {
    id: 2,
    name: 'Mohamed Kamara',
    location: 'Goderich',
    rating: 5,
    text: 'Best purchase I\'ve made this year. The fast charger works perfectly and the cable is very durable. Free delivery was a bonus!',
    image: 'MK',
  },
  {
    id: 3,
    name: 'Ann Kanu',
    location: 'jui',
    rating: 5,
    text: 'I ordered the iPhone Lightning cable and it\'s been working great for months. Much better quality than the original one I had. Great value!',
    image: 'AK',
  },
  {
    id: 4,
    name: 'Mathew Kai',
    location: 'waterloo',
    rating: 5,
    text: 'Fast delivery and excellent products. The USB-C cable charges my phone in no time. Will definitely order again!',
    image: 'MK',
  },
  {
    id: 5,
    name: 'Mary Cole',
    location: 'Lumley',
    rating: 5,
    text: 'Love my new charger! It\'s compact and charges multiple devices. The mobile money payment was super convenient.',
    image: 'MC',
  },
  {
    id: 6,
    name: 'Jami Oparah',
    location: 'Mambo',
    rating: 5,
    text: 'Quality products at great prices. The Micro-USB cable I bought is still going strong after 6 months. Very satisfied!',
    image: 'JO',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-dark-light/50">
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
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Real reviews from satisfied customers across freetown, sierra Leone
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-dark-light rounded-xl p-5 sm:p-6 border border-gray-800 hover:border-primary-electric-blue/50 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 leading-relaxed mb-6 line-clamp-4">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-blue to-primary-electric-blue flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-electric-blue/0 via-primary-electric-blue/10 to-primary-electric-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Average Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-r from-primary-blue/20 to-primary-electric-blue/20 rounded-2xl p-8 border border-primary-electric-blue/30">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <HiStar
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="text-3xl font-bold text-white ml-2">4.9</span>
            </div>
            <p className="text-gray-300">
              Based on <span className="font-semibold text-white">2,500+</span>{' '}
              customer reviews
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

