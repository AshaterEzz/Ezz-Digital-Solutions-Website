'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 15 }}
          style={{ left: '10%', top: '20%' }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-neon-purple/20 to-neon-green/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.03,
            y: mousePosition.y * 0.03,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 15 }}
          style={{ right: '10%', bottom: '20%' }}
        />
        
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute w-4 h-4 bg-neon-blue rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ left: '20%', top: '30%' }}
        />
        <motion.div
          className="absolute w-6 h-6 bg-neon-purple rotate-45"
          animate={{
            y: [0, 30, 0],
            rotate: [45, 225, 45],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ right: '25%', top: '40%' }}
        />
        <motion.div
          className="absolute w-3 h-3 bg-neon-green rounded-full"
          animate={{
            y: [0, -25, 0],
            x: [0, 10, 0],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ left: '70%', top: '60%' }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        {/* Profile Photo with Holographic Effect */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            animate={{
              rotateY: mousePosition.x * 0.1,
              rotateX: mousePosition.y * -0.1,
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden glass border-2 border-neon-blue/50">
              <div className="w-full h-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                <span className="text-4xl sm:text-6xl font-bold gradient-text">E</span>
              </div>
            </div>
            {/* Holographic Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-neon-blue/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-neon-purple/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-futuristic font-bold mb-6"
        >
          <span className="gradient-text">Building Intelligent</span>
          <br />
          <span className="text-white">Digital Ecosystems</span>
          <br />
          <span className="gradient-text">for the Future</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          From strategy to execution, we transform ideas into fully connected online ecosystems.
          <br />
          <span className="text-neon-blue font-medium">
            From Zero to Digital Hero — Building Smart, Scalable Ecosystems.
          </span>
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 245, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-lg hover-glow transition-all duration-300 text-lg"
          >
            Start Your Transformation
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass text-white font-semibold rounded-lg border border-neon-blue/50 hover:border-neon-blue transition-all duration-300 text-lg"
          >
            View Case Studies
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-3 bg-neon-blue rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
