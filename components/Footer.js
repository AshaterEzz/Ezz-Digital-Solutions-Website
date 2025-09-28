'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { name: 'Website Development', href: '#services' },
      { name: 'SEO Optimization', href: '#services' },
      { name: 'AI Automation', href: '#automation' },
      { name: 'Digital Strategy', href: '#services' }
    ],
    Company: [
      { name: 'About', href: '#about' },
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'Contact', href: '#contact' },
      { name: 'Blog', href: '#' }
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Support', href: '#contact' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]
  }

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'GitHub', href: '#', icon: '🐙' },
    { name: 'Email', href: 'mailto:alexa.spina@udspecialize.com', icon: '📧' }
  ]

  return (
    <footer className="relative bg-dark-surface border-t border-gray-800">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-white font-futuristic font-bold text-xl">
                Ezz Digital
              </span>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building intelligent digital ecosystems that empower businesses to focus on growth and innovation.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-xl hover:border-neon-blue/50 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: linkIndex * 0.1 }}
                  >
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5, color: '#00f5ff' }}
                      className="text-gray-400 hover:text-neon-blue transition-colors duration-200"
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get the latest insights on digital transformation and AI automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.input
                type="email"
                placeholder="Enter your email"
                whileFocus={{ scale: 1.02 }}
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 text-white transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-lg hover-glow transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Ezz Digital Solutions. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <motion.a
                href="#"
                whileHover={{ color: '#00f5ff' }}
                className="hover:text-neon-blue transition-colors duration-200"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: '#00f5ff' }}
                className="hover:text-neon-blue transition-colors duration-200"
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ color: '#00f5ff' }}
                className="hover:text-neon-blue transition-colors duration-200"
              >
                Contact
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-2 h-2 bg-neon-blue rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ left: '10%', top: '20%' }}
        />
        <motion.div
          className="absolute w-1.5 h-1.5 bg-neon-purple rounded-full"
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ right: '15%', top: '30%' }}
        />
        <motion.div
          className="absolute w-1 h-1 bg-neon-green rounded-full"
          animate={{
            y: [0, -25, 0],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ left: '80%', top: '60%' }}
        />
      </div>
    </footer>
  )
}
