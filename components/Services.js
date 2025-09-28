'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const element = document.getElementById('services')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: 'Website Design & Development',
      description: 'No-code/low-code solutions that are fast, scalable, and beautiful',
      icon: '🌐',
      color: 'from-neon-blue to-cyan-400',
      features: ['Responsive Design', 'No-Code Platforms', 'Fast Loading', 'SEO Optimized']
    },
    {
      title: 'SEO Strategy & Optimization',
      description: 'Data-driven SEO strategies that boost your online visibility',
      icon: '📈',
      color: 'from-neon-green to-emerald-400',
      features: ['Keyword Research', 'Technical SEO', 'Content Strategy', 'Analytics Setup']
    },
    {
      title: 'Social Media Setup & Brand Alignment',
      description: 'Consistent brand presence across all social platforms',
      icon: '📱',
      color: 'from-neon-purple to-pink-400',
      features: ['Profile Optimization', 'Content Strategy', 'Brand Guidelines', 'Engagement Growth']
    },
    {
      title: 'Google Maps & MX Record Integration',
      description: 'Complete digital infrastructure setup for local businesses',
      icon: '🗺️',
      color: 'from-orange-400 to-red-400',
      features: ['Google My Business', 'Email Setup', 'Domain Configuration', 'Local SEO']
    },
    {
      title: 'AI Workflow Automation',
      description: 'Intelligent automation using n8n and AI agents',
      icon: '🤖',
      color: 'from-purple-400 to-indigo-400',
      features: ['n8n Workflows', 'AI Agents', 'Process Automation', 'Integration Setup']
    },
    {
      title: 'Digital Transformation Consulting',
      description: 'Strategic guidance for complete digital ecosystem transformation',
      icon: '💡',
      color: 'from-yellow-400 to-orange-400',
      features: ['Strategy Planning', 'Technology Selection', 'Implementation', 'Training & Support']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-futuristic font-bold mb-6"
          >
            <span className="gradient-text">Core Services</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive digital solutions designed to transform your business 
            into a connected, intelligent ecosystem
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="glass p-6 rounded-xl h-full border border-gray-700/50 hover:border-neon-blue/50 transition-all duration-300 hover-glow">
                {/* Icon */}
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center text-sm text-gray-400"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Effect Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 245, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-lg hover-glow transition-all duration-300 text-lg"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
