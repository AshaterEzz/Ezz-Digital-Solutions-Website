'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const element = document.getElementById('contact')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)
    
    // Show success message (you can implement a toast notification here)
    alert('Thank you for your message! I\'ll get back to you soon.')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'alexa.spina@udspecialize.com',
      link: 'mailto:alexa.spina@udspecialize.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+20 106 009 2277',
      link: 'tel:+201060092277'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Cairo, Egypt',
      link: '#'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
            <span className="gradient-text">Let's Build</span> Together
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Ready to transform your business with intelligent digital solutions? 
            Let's discuss your project and create something amazing together.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="glass p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 text-white transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 text-white transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 text-white transition-all duration-300 resize-none"
                    placeholder="Tell me about your project and how I can help..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-lg hover-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="block glass p-6 rounded-xl border border-gray-700/50 hover:border-neon-blue/50 transition-all duration-300 hover-glow"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{info.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{info.title}</h4>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick Response Promise */}
            <motion.div
              variants={itemVariants}
              className="glass p-6 rounded-xl border border-neon-green/30"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-3xl">⚡</div>
                <h4 className="text-lg font-semibold text-white">Quick Response</h4>
              </div>
              <p className="text-gray-300">
                I typically respond to all inquiries within 24 hours. 
                For urgent projects, feel free to call directly.
              </p>
            </motion.div>

            {/* Project Types */}
            <motion.div
              variants={itemVariants}
              className="glass p-6 rounded-xl border border-gray-700/50"
            >
              <h4 className="text-lg font-semibold text-white mb-4">I Specialize In:</h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Website Development',
                  'SEO Optimization',
                  'AI Automation',
                  'Digital Strategy',
                  'Social Media Setup',
                  'Process Automation'
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-sm text-gray-300"
                  >
                    <div className="w-2 h-2 bg-neon-blue rounded-full mr-2" />
                    {service}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
