'use client'
import { motion } from 'framer-motion'

export default function Scene3DFallback() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Animated geometric shapes using CSS */}
      <motion.div
        className="absolute w-24 h-24 border-2 border-gray-400 rounded-full opacity-20"
        style={{ left: '20%', top: '30%' }}
        animate={{
          rotate: 360,
          y: [-10, 10, -10],
        }}
        transition={{
          rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
        }}
      />
      
      <motion.div
        className="absolute w-16 h-16 bg-gray-500 opacity-15"
        style={{ right: '25%', top: '20%', transform: 'rotate(45deg)' }}
        animate={{
          rotate: [45, 405],
          x: [-20, 20, -20],
        }}
        transition={{
          rotate: { duration: 6, repeat: Infinity, ease: 'linear' },
          x: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
        }}
      />
      
      <motion.div
        className="absolute w-20 h-4 border border-gray-400 rounded-full opacity-25"
        style={{ left: '50%', bottom: '40%', transform: 'translateX(-50%)' }}
        animate={{
          rotateY: 360,
          z: [-15, 15, -15],
        }}
        transition={{
          rotateY: { duration: 10, repeat: Infinity, ease: 'linear' },
          z: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
        }}
      />
      
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gray-400 rounded-full opacity-30"
          style={{
            left: `${20 + i * 10}%`,
            top: `${30 + (i % 3) * 20}%`
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.2
          }}
        />
      ))}
    </div>
  )
}