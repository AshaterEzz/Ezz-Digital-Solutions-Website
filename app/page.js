'use client'

import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import CaseStudies from '../components/CaseStudies'
import AutomationShowcase from '../components/AutomationShowcase'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import CustomCursor from '../components/CustomCursor'
import Background3D from '../components/Background3D'

export default function Home() {
  useEffect(() => {
    // Add scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll('section')
    sections.forEach(section => {
      section.classList.add('fade-in')
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="relative min-h-screen bg-dark-bg">
      <CustomCursor />
      <Background3D />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <AutomationShowcase />
      <Contact />
      <Footer />
    </main>
  )
}
