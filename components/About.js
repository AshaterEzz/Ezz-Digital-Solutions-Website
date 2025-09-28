'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('about')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-futuristic font-bold"
            >
              <span className="gradient-text">About</span> Ezz
            </motion.h2>
            
            <motion.div variants={itemVariants} className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm <span className="text-neon-blue font-semibold">Abdelaziz "Ezz" Ashater</span>, 
                a digital transformation specialist passionate about creating intelligent, 
                automated ecosystems that empower businesses to focus on what matters most.
              </p>
              
              <p>
                With expertise in no-code/low-code platforms and AI integrations, I specialize 
                in building smart, scalable solutions that transform complex challenges into 
                simple, elegant systems.
              </p>
              
              <p>
                My mission is to simplify digital transformation by creating intelligent, 
                automated, and sustainable online ecosystems that empower businesses to 
                focus on growth and innovation.
              </p>
            </motion.div>

            {/* Belief Statement */}
            <motion.div
              variants={itemVariants}
              className="glass p-6 rounded-lg border border-neon-blue/30"
            >
              <blockquote className="text-xl font-medium text-center">
                <span className="text-neon-blue">"</span>
                <span className="gradient-text">The best solutions are the simplest.</span>
                <span className="text-neon-blue">"</span>
              </blockquote>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 pt-6"
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-gray-400">Support Available</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              animate={{
                rotateY: 0,
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            >
              {/* Holographic Frame */}
              <div className="relative w-80 h-96 glass rounded-2xl overflow-hidden border-2 border-neon-blue/50">
                <div className="w-full h-full bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 flex items-center justify-center">
                  {/* Placeholder for actual profile image */}
                  <div className="w-64 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
                    <span className="text-6xl font-bold gradient-text">E</span>
                  </div>
                </div>
                
                {/* Holographic Effects */}
                <motion.div
                  className="absolute inset-0 border-2 border-neon-blue/30 rounded-2xl"
                  animate={{ 
                    boxShadow: [
                      '0 0 20px rgba(0, 245, 255, 0.3)',
                      '0 0 40px rgba(191, 0, 255, 0.3)',
                      '0 0 20px rgba(0, 245, 255, 0.3)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                
                {/* Scanning Line Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/20 to-transparent"
                  animate={{ y: ['-100%', '100%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
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
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
