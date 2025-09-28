'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function AutomationShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const element = document.getElementById('automation')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 4)
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  const workflowSteps = [
    {
      id: 0,
      title: 'Trigger',
      description: 'Data input from various sources',
      icon: '⚡',
      color: 'from-yellow-400 to-orange-400',
      examples: ['Form Submission', 'Email Received', 'API Call', 'Scheduled Event']
    },
    {
      id: 1,
      title: 'Process',
      description: 'AI analyzes and processes data',
      icon: '🧠',
      color: 'from-blue-400 to-purple-400',
      examples: ['Data Analysis', 'Content Generation', 'Decision Making', 'Pattern Recognition']
    },
    {
      id: 2,
      title: 'Action',
      description: 'Automated actions are executed',
      icon: '⚙️',
      color: 'from-green-400 to-teal-400',
      examples: ['Send Email', 'Update Database', 'Create Content', 'Generate Report']
    },
    {
      id: 3,
      title: 'Result',
      description: 'Outcomes are delivered and tracked',
      icon: '📊',
      color: 'from-pink-400 to-red-400',
      examples: ['Task Completed', 'Notification Sent', 'Report Generated', 'Data Updated']
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
    <section id="automation" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
            <span className="gradient-text">AI Automation</span> Showcase
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            See how AI + n8n workflows connect everything together, creating 
            intelligent systems that work 24/7 to grow your business.
          </motion.p>
        </motion.div>

        {/* Interactive Flowchart */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="relative"
        >
          {/* Flowchart Container */}
          <div className="glass p-8 rounded-2xl border border-gray-700/50 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Connection Line */}
                  {index < workflowSteps.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple z-10"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: activeStep >= index ? 1 : 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    />
                  )}

                  {/* Step Card */}
                  <motion.div
                    className={`glass p-6 rounded-xl border-2 transition-all duration-500 ${
                      activeStep === index
                        ? 'border-neon-blue shadow-lg shadow-neon-blue/20'
                        : 'border-gray-700/50'
                    }`}
                    whileHover={{ scale: 1.05, y: -5 }}
                    animate={{
                      boxShadow: activeStep === index 
                        ? '0 0 30px rgba(0, 245, 255, 0.3)' 
                        : '0 0 0px rgba(0, 245, 255, 0)'
                    }}
                  >
                    {/* Icon */}
                    <motion.div
                      className="text-4xl mb-4 text-center"
                      animate={{
                        scale: activeStep === index ? 1.2 : 1,
                        rotate: activeStep === index ? 10 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.icon}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 text-center">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm text-center mb-4">
                      {step.description}
                    </p>

                    {/* Examples */}
                    <div className="space-y-2">
                      {step.examples.map((example, exampleIndex) => (
                        <motion.div
                          key={exampleIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ 
                            opacity: activeStep === index ? 1 : 0.5,
                            x: activeStep === index ? 0 : -20
                          }}
                          transition={{ delay: exampleIndex * 0.1 }}
                          className="flex items-center text-xs text-gray-400"
                        >
                          <div className={`w-1.5 h-1.5 bg-gradient-to-r ${step.color} rounded-full mr-2`} />
                          {example}
                        </motion.div>
                      ))}
                    </div>

                    {/* Active Indicator */}
                    {activeStep === index && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 w-4 h-4 bg-neon-blue rounded-full"
                      />
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Data Flow Animation */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
          >
            {/* Floating Data Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-neon-blue rounded-full"
                animate={{
                  x: [0, 100, 200, 300, 400, 500, 600, 700],
                  opacity: [0, 1, 1, 1, 1, 1, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: 'linear',
                }}
                style={{
                  top: `${20 + i * 15}%`,
                  left: '-20px',
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {[
            {
              title: '24/7 Operation',
              description: 'Your systems work around the clock, never taking a break',
              icon: '🕐',
              color: 'from-neon-blue to-cyan-400'
            },
            {
              title: 'Error Reduction',
              description: 'AI eliminates human errors and ensures consistency',
              icon: '🎯',
              color: 'from-neon-green to-emerald-400'
            },
            {
              title: 'Scalable Growth',
              description: 'Handle increasing workload without proportional cost increase',
              icon: '📈',
              color: 'from-neon-purple to-pink-400'
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-6 rounded-xl border border-gray-700/50 hover:border-neon-blue/50 transition-all duration-300 hover-glow"
            >
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 245, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-lg hover-glow transition-all duration-300 text-lg"
          >
            Automate Your Business
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
