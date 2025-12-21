'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 p-2 xs:p-3 sm:p-4 lg:p-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glossy-card px-3 xs:px-4 sm:px-6 lg:px-8 py-2 xs:py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.1, rotateY: 180 }}
              className="relative"
            >
              <div className="text-lg xs:text-xl sm:text-2xl font-bold text-gradient relative z-10">
                SM
              </div>
              <div className="absolute inset-0 bg-light-gray opacity-20 blur-md rounded-lg"></div>
            </motion.div>
            
            <div className="hidden md:flex space-x-1 lg:space-x-2 xl:space-x-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-2 lg:px-3 xl:px-4 py-1.5 lg:py-2 text-xs sm:text-sm lg:text-base transition-all duration-300 rounded-xl group text-light-gray hover:text-off-white"
                >
                  {item.label}
                  <div className="absolute inset-0 bg-medium-gray opacity-0 group-hover:opacity-10 rounded-xl transition-opacity"></div>
                </motion.a>
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-light-gray"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <motion.div
                  animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
                  className="w-full h-0.5 bg-light-gray"
                />
                <motion.div
                  animate={{ opacity: isMenuOpen ? 0 : 1 }}
                  className="w-full h-0.5 bg-light-gray"
                />
                <motion.div
                  animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
                  className="w-full h-0.5 bg-light-gray"
                />
              </div>
            </motion.button>
          </div>

          <motion.div
            initial={false}
            animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="pt-3 xs:pt-4 space-y-1 xs:space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: isMenuOpen ? 0 : -50, opacity: isMenuOpen ? 1 : 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block px-3 xs:px-4 py-2 xs:py-3 text-xs xs:text-sm transition-all duration-300 rounded-xl text-light-gray hover:text-off-white hover:bg-medium-gray hover:bg-opacity-10"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}