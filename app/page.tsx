'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import LoadingScreen from '../components/LoadingScreen'
import { motion } from 'framer-motion'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
        <div className="animate-pulse">
          <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    )
  }

  return (
    <main className="relative bg-space-black text-off-white min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div 
            key="content" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-space-black text-off-white min-h-screen"
          >
            <Navigation />
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            
            <footer className="p-2 xs:p-3 sm:p-4 lg:p-6">
              <div className="max-w-7xl mx-auto">
                <div className="glossy-card px-3 xs:px-4 sm:px-6 lg:px-8 py-2 xs:py-3 sm:py-4">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Logo */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="text-2xl font-bold text-gradient"
                    >
                      SM
                    </motion.div>
                    
                    {/* Copyright - Center */}
                    <div className="flex-1 text-center">
                      <p className="text-light-gray text-sm">
                        © 2024 Sanchit Mohite. All rights reserved.
                      </p>
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex space-x-4">
                      <motion.a
                        href="https://github.com/sanchitmoh"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 bg-medium-gray bg-opacity-30 rounded-lg flex items-center justify-center text-light-gray hover:text-off-white hover:bg-opacity-50 transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                      </motion.a>
                      
                      <motion.a
                        href="https://linkedin.com/in/sanchit-mohite"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 bg-medium-gray bg-opacity-30 rounded-lg flex items-center justify-center text-light-gray hover:text-off-white hover:bg-opacity-50 transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </motion.a>
                      
                      <motion.a
                        href="mailto:sanchitmohite15@gmail.com"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 bg-medium-gray bg-opacity-30 rounded-lg flex items-center justify-center text-light-gray hover:text-off-white hover:bg-opacity-50 transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z"/>
                        </svg>
                      </motion.a>
                      
                      <motion.a
                        href="https://twitter.com/sanchitmohite"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 bg-medium-gray bg-opacity-30 rounded-lg flex items-center justify-center text-light-gray hover:text-off-white hover:bg-opacity-50 transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </motion.a>
                      
                      <motion.a
                        href="https://leetcode.com/sanchitmohite15"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 bg-medium-gray bg-opacity-30 rounded-lg flex items-center justify-center text-light-gray hover:text-off-white hover:bg-opacity-50 transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.518 2.524 8.117.96 2.04-1.226 2.7-3.604 2.7-3.604h-5.622c-.356 0-.673-.181-.673-.181L9.592 16.467l1.539-1.514L13.483 0zm6.28 11.215-.014-.002a3.344 3.344 0 0 0-.98.187 3.211 3.211 0 0 0-1.329.971l-4.277 4.193c-.376.369-.376.969 0 1.338l1.539 1.514c.376.369.989.369 1.365 0l4.277-4.193c.376-.369.376-.969 0-1.338l-1.539-1.514a.959.959 0 0 0-.042-.156z"/>
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}