'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function CaseStudies() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCase, setActiveCase] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const element = document.getElementById('case-studies')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const caseStudies = [
    {
      title: 'Physiotherabia',
      subtitle: 'Saudi Physiotherapy Network',
      description: 'Complete digital transformation for a leading physiotherapy network across Saudi Arabia, including SEO optimization, social media strategy, and comprehensive digital infrastructure.',
      image: '🏥',
      results: [
        { metric: '300%', label: 'Organic Traffic Increase' },
        { metric: '150%', label: 'Social Media Engagement' },
        { metric: '85%', label: 'Lead Generation Boost' }
      ],
      services: ['SEO Strategy', 'Social Media Setup', 'Digital Strategy', 'Local SEO'],
      color: 'from-blue-500 to-cyan-400'
    },
    {
      title: 'Vendit',
      subtitle: 'Vending Machine App - Kuwait',
      description: 'End-to-end digital ecosystem creation for a vending machine application, including app development support, user acquisition strategy, and automated workflow implementation.',
      image: '🤖',
      results: [
        { metric: '500%', label: 'User Acquisition' },
        { metric: '200%', label: 'App Downloads' },
        { metric: '90%', label: 'User Retention' }
      ],
      services: ['App Development', 'Digital Ecosystem', 'User Acquisition', 'Automation'],
      color: 'from-purple-500 to-pink-400'
    },
    {
      title: 'Rush Projects',
      subtitle: 'Prefabricated Real Estate Developer',
      description: 'Complete website development and SEO launch for a prefabricated real estate developer, focusing on lead generation and brand positioning in the construction industry.',
      image: '🏗️',
      results: [
        { metric: '400%', label: 'Website Traffic' },
        { metric: '250%', label: 'Lead Generation' },
        { metric: '95%', label: 'Conversion Rate' }
      ],
      services: ['Website Development', 'SEO Launch', 'Lead Generation', 'Brand Strategy'],
      color: 'from-green-500 to-emerald-400'
    }
  ]

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

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
            <span className="gradient-text">Success Stories</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Real results from real projects. See how we've transformed businesses 
            across different industries with intelligent digital solutions.
          </motion.p>
        </motion.div>

        {/* Case Studies */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-12"
        >
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <motion.div
                className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{caseStudy.image}</div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">
                        {caseStudy.title}
                      </h3>
                      <p className="text-neon-blue font-medium">
                        {caseStudy.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {caseStudy.description}
                  </p>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4">
                  {caseStudy.results.map((result, resultIndex) => (
                    <motion.div
                      key={resultIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: resultIndex * 0.1 }}
                      className="text-center glass p-4 rounded-lg border border-gray-700/50"
                    >
                      <div className={`text-2xl font-bold bg-gradient-to-r ${caseStudy.color} bg-clip-text text-transparent`}>
                        {result.metric}
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        {result.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Services */}
                <div className="flex flex-wrap gap-2">
                  {caseStudy.services.map((service, serviceIndex) => (
                    <motion.span
                      key={serviceIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: serviceIndex * 0.1 }}
                      className={`px-3 py-1 bg-gradient-to-r ${caseStudy.color} text-white text-sm rounded-full`}
                    >
                      {service}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Visual */}
              <motion.div
                className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <div className="glass p-8 rounded-2xl border border-gray-700/50 hover:border-neon-blue/50 transition-all duration-300 hover-glow">
                    {/* Project Mockup */}
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">{caseStudy.image}</div>
                        <div className="text-2xl font-bold text-white mb-2">
                          {caseStudy.title}
                        </div>
                        <div className="text-gray-400">
                          {caseStudy.subtitle}
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-8 h-8 bg-neon-blue rounded-full"
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-purple rounded-full"
                      animate={{
                        y: [0, 10, 0],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
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
            Start Your Success Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
