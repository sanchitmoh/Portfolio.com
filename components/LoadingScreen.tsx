'use client'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    console.log('Loading screen mounted')
    const timer = setTimeout(() => {
      console.log('Loading complete')
      onComplete()
    }, 3500)

    return () => {
      console.log('Loading screen unmounted')
      clearTimeout(timer)
    }
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-bold text-gradient tracking-wider text-center mb-4"
      >
        SANCHIT
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="text-center"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1, delay: 2 }}
          className="h-0.5 bg-gradient-to-r from-gray-400 to-gray-300 mb-2"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.5 }}
          className="text-gray-400 text-lg xs:text-xl sm:text-2xl tracking-wider uppercase"
        >
          Full Stack Developer
        </motion.p>
      </motion.div>
    </motion.div>
  )
}