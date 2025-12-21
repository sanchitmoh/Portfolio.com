'use client'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 3500)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-space-black overflow-hidden"
    >
      <div className="glossy-card p-6 xs:p-8 sm:p-12 lg:p-16 mx-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl xs:text-4xl sm:text-6xl lg:text-8xl font-bold text-gradient tracking-wider text-center"
        >
          SANCHIT
        </motion.h1>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, delay: 1.5 }}
          className="h-1 bg-gradient-to-r from-light-gray to-lighter-gray mt-4 xs:mt-6 rounded-full"
        />
      </div>
    </motion.div>
  )
}