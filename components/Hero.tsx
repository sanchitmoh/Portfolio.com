'use client'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false })

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 pt-20 xs:pt-24 sm:pt-28 lg:pt-32 overflow-hidden"
    >
      <Scene3D />
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-light-gray rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0
            }}
            animate={{ 
              opacity: [0, 0.6, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto w-full px-1 xs:px-0">
        <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-light-gray text-sm sm:text-base mb-4 tracking-widest uppercase"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <span className="text-off-white block">Sanchit</span>
              <span className="text-gradient block">Mohite</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mb-8"
            >
              <div className="flex items-center mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "60px" }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="h-0.5 bg-light-gray mr-4"
                />
                <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-light text-light-gray tracking-wider">
                  Full Stack Developer
                </h2>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-light-gray text-sm xs:text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg"
            >
              I create modern, scalable web applications with clean code and intuitive user experiences. 
              Passionate about turning complex problems into elegant solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-col xs:flex-row gap-3 sm:gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="glossy-card px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base text-off-white font-medium transition-all duration-300"
              >
                View My Work
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base border border-light-gray text-light-gray hover:text-off-white hover:border-off-white transition-all duration-300 rounded-2xl"
              >
                Download CV
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-4 xs:gap-6 sm:gap-8 mb-8 sm:mb-12">
              {[
                { number: "3+", label: "Years Experience" },
                { number: "50+", label: "Projects Completed" },
                { number: "10+", label: "Technologies" },
                { number: "100%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gradient mb-1 sm:mb-2">{stat.number}</h3>
                  <p className="text-light-gray text-xs sm:text-sm leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="glossy-card p-4 xs:p-6"
            >
              <h4 className="text-off-white font-semibold mb-3 sm:mb-4 text-sm xs:text-base">Currently Available</h4>
              <p className="text-light-gray text-xs xs:text-sm mb-3 sm:mb-4">
                Open for freelance projects and full-time opportunities
              </p>
              <div className="flex items-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-light-gray rounded-full mr-3"
                />
                <span className="text-light-gray text-xs xs:text-sm">Available for work</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}