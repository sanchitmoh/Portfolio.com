'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const experiences = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    company: "Seoulix Technologies",
    location: "Gurugram, India",
    duration: "June 2025 - Nov 2025",
    type: "Internship",
    description: "Led development of scalable web applications using React, Node.js, and AWS. Implemented CI/CD pipelines.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "MySQL"],
    achievements: [
      "Increased application performance by 40%",
      "Implemented ERP and payroll management systems",
      "Implemented microservices architecture"
    ],
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "Software Development Summer Intern",
    company: "E4Softwares",
    location: "Remote",
    duration: "June 2026 - Aug 2026",
    type: "Internship",
    description: "Designed and delivered 12 production-grade RESTful APIs using Python and FastAPI, accelerating procurement workflows for enterprise clients.",
    technologies: ["Python", "FastAPI", "MCP", "Postman", "REST API", "Authentication"],
    achievements: [
      "Built 12 production-grade APIs with multi-layer validation",
      "Reduced API error rate by ~30% through robust authentication",
      "Converted APIs to MCP tools for LLM/RAG integration",
      "Authored comprehensive API documentation and test suites"
    ],
    color: "from-green-500 to-teal-600"
  }
]

function DateBadge({
  exp,
  align
}: {
  exp: typeof experiences[0]
  align: 'left' | 'right'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`inline-flex flex-col ${align === 'right' ? 'items-end text-right' : 'items-start text-left'}`}
    >
      <div className="glossy-card px-4 py-3 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl max-w-xs">
        <div className={`flex items-center gap-2 mb-1.5 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
          {align === 'left' && (
            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} animate-pulse`} />
          )}
          <span className={`text-sm font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
            {exp.duration}
          </span>
          {align === 'right' && (
            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} animate-pulse`} />
          )}
        </div>
        <div className={`text-xs text-light-gray flex items-center gap-1.5 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
          <span className="font-medium text-off-white/90">{exp.company}</span>
          <span>•</span>
          <span>{exp.location}</span>
        </div>
      </div>
    </motion.div>
  )
}

function ExperienceCard({
  exp,
  isActive,
  onHoverStart,
  onHoverEnd,
}: {
  exp: typeof experiences[0]
  isActive: boolean
  onHoverStart: () => void
  onHoverEnd: () => void
}) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className="w-full"
    >
      <div className="glossy-card p-4 xs:p-5 sm:p-6 lg:p-7 h-full border border-white/10 hover:border-white/20 transition-all duration-300">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3 gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.color} text-white shadow-sm`}>
              {exp.type}
            </span>
            {/* Date display on mobile only */}
            <span className="lg:hidden text-light-gray text-xs xs:text-sm font-medium">
              {exp.duration}
            </span>
          </div>

          <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-off-white mb-1.5 leading-tight">
            {exp.title}
          </h3>
          <div className="flex flex-wrap items-center text-light-gray text-sm mb-3 gap-y-1">
            <span className="font-semibold text-off-white/90">{exp.company}</span>
            <span className="mx-2 text-medium-gray">•</span>
            <span className="text-xs xs:text-sm">{exp.location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-light-gray text-sm sm:text-base leading-relaxed mb-4">
          {exp.description}
        </p>

        {/* Achievements */}
        <div className="mb-4">
          <h4 className="text-off-white font-semibold text-sm mb-2">Key Achievements:</h4>
          <ul className="space-y-1.5">
            {exp.achievements.map((achievement, i) => (
              <li
                key={i}
                className="text-light-gray text-xs sm:text-sm flex items-start"
              >
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mr-2 mt-1.5 flex-shrink-0`} />
                <span className="leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-off-white font-semibold text-sm mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-medium-gray bg-opacity-40 hover:bg-opacity-70 transition-colors rounded text-xs text-light-gray border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Hover Accent Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ 
            width: isActive ? "100%" : "0%" 
          }}
          transition={{ duration: 0.3 }}
          className={`h-0.5 bg-gradient-to-r ${exp.color} mt-4 rounded-full`}
        />
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const [activeExperience, setActiveExperience] = useState<number | null>(null)

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14 lg:mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-0.5 bg-light-gray mx-auto mb-4 sm:mb-6"
          />
          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-light-gray text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            My professional journey through various roles and companies, building expertise in modern web development.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Center Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-transparent via-light-gray/30 to-transparent" />

          {/* Vertical Left Line - Mobile/Tablet */}
          <div className="lg:hidden absolute left-4 sm:left-6 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-light-gray/40 via-medium-gray to-light-gray/20 opacity-30" />

          {/* Experience Items */}
          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Timeline Dot - Desktop (Centered at 50%) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-7 z-20 items-center justify-center pointer-events-none">
                    <motion.div
                      whileHover={{ scale: 1.25 }}
                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} ring-4 ring-space-black shadow-lg shadow-black`}
                    />
                  </div>

                  {/* Timeline Dot - Mobile (Left-aligned) */}
                  <div className="lg:hidden absolute left-4 sm:left-6 -translate-x-1/2 top-7 z-20 pointer-events-none">
                    <div className={`w-3.5 h-3.5 rounded-full bg-gradient-to-r ${exp.color} ring-4 ring-space-black shadow-lg`} />
                  </div>

                  {/* 2-Column Desktop Grid / 1-Column Mobile Layout */}
                  <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 items-start">
                    {/* Left Column */}
                    <div className={isEven ? "ml-10 sm:ml-14 lg:ml-0" : "hidden lg:flex lg:justify-end lg:pt-3"}>
                      {isEven ? (
                        <ExperienceCard
                          exp={exp}
                          isActive={activeExperience === exp.id}
                          onHoverStart={() => setActiveExperience(exp.id)}
                          onHoverEnd={() => setActiveExperience(null)}
                        />
                      ) : (
                        <DateBadge exp={exp} align="right" />
                      )}
                    </div>

                    {/* Right Column */}
                    <div className={isEven ? "hidden lg:flex lg:justify-start lg:pt-3" : "ml-10 sm:ml-14 lg:ml-0"}>
                      {isEven ? (
                        <DateBadge exp={exp} align="left" />
                      ) : (
                        <ExperienceCard
                          exp={exp}
                          isActive={activeExperience === exp.id}
                          onHoverStart={() => setActiveExperience(exp.id)}
                          onHoverEnd={() => setActiveExperience(null)}
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-14 sm:mt-20"
        >
          <div className="glossy-card p-6 sm:p-8 max-w-2xl mx-auto border border-white/10">
            <h3 className="text-xl sm:text-2xl font-bold text-off-white mb-3">
              Ready to Work Together?
            </h3>
            <p className="text-light-gray mb-6 text-sm sm:text-base">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block glossy-card px-6 sm:px-8 py-3 sm:py-4 text-off-white font-medium hover:border-white/30 transition-all duration-300 text-sm sm:text-base cursor-pointer"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}