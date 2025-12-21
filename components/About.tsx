'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 scroll-mt-16 xs:scroll-mt-20 sm:scroll-mt-24 lg:scroll-mt-28">>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gradient mb-3 xs:mb-4 sm:mb-6">
            About Me
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="futuristic-card p-6 sm:p-8 lg:p-10 neon-glow">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse mr-3"></div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gradient">
                  Passionate Developer
                </h3>
              </div>
              <p className="text-light-gray leading-relaxed mb-6 text-sm sm:text-base lg:text-lg">
                I'm a full stack developer with a passion for creating innovative digital solutions. 
                With expertise in both frontend and backend technologies, I bring ideas to life 
                through clean, efficient code and intuitive user experiences.
              </p>
              <p className="text-light-gray leading-relaxed text-sm sm:text-base lg:text-lg">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source projects, or sharing knowledge with the developer community.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4"
              >
                {['Innovation', 'Quality', 'Performance'].map((trait, index) => (
                  <span 
                    key={trait}
                    className="px-3 sm:px-4 py-1 sm:py-2 bg-neon-blue bg-opacity-10 border border-neon-blue border-opacity-30 rounded-full text-neon-blue text-xs sm:text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            {[
              { label: 'Frontend Development', percentage: 90, color: 'neon-blue' },
              { label: 'Backend Development', percentage: 85, color: 'neon-purple' },
              { label: 'Database Design', percentage: 80, color: 'neon-cyan' },
              { label: 'DevOps & Deployment', percentage: 75, color: 'neon-green' }
            ].map((skill, index) => (
              <motion.div 
                key={skill.label} 
                className="futuristic-card p-4 sm:p-6 lg:p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <span className="text-off-white font-medium text-sm sm:text-base lg:text-lg">
                    {skill.label}
                  </span>
                  <span className="text-light-gray text-sm sm:text-base">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="relative">
                  <div className="w-full bg-deep-space rounded-full h-2 sm:h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1.5, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className={`h-full rounded-full bg-gradient-to-r from-${skill.color} to-${skill.color} relative`}
                      style={{
                        background: `linear-gradient(90deg, var(--tw-gradient-from), var(--tw-gradient-to))`,
                        '--tw-gradient-from': skill.color === 'neon-blue' ? '#6366f1' : 
                                            skill.color === 'neon-purple' ? '#8b5cf6' :
                                            skill.color === 'neon-cyan' ? '#06b6d4' : '#10b981',
                        '--tw-gradient-to': skill.color === 'neon-blue' ? '#8b5cf6' : 
                                          skill.color === 'neon-purple' ? '#06b6d4' :
                                          skill.color === 'neon-cyan' ? '#10b981' : '#6366f1'
                      } as React.CSSProperties}
                    >
                      <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}