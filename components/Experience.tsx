'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const experiences = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    duration: "Jan 2023 - Present",
    type: "Full-time",
    description: "Led development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and implemented CI/CD pipelines.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "MongoDB"],
    achievements: [
      "Increased application performance by 40%",
      "Led a team of 5 developers",
      "Implemented microservices architecture"
    ],
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Innovations Ltd.",
    location: "New York, NY",
    duration: "Jun 2021 - Dec 2022",
    type: "Full-time",
    description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create responsive user interfaces.",
    technologies: ["React", "Next.js", "Python", "PostgreSQL", "Redis", "GraphQL"],
    achievements: [
      "Delivered 15+ client projects on time",
      "Reduced load times by 60%",
      "Implemented real-time features"
    ],
    color: "from-green-500 to-teal-600"
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Creative Web Studio",
    location: "Remote",
    duration: "Mar 2020 - May 2021",
    type: "Contract",
    description: "Specialized in creating interactive and responsive web applications. Worked closely with UX/UI designers to implement pixel-perfect designs.",
    technologies: ["React", "Vue.js", "JavaScript", "SASS", "Webpack", "Figma"],
    achievements: [
      "Built 20+ responsive websites",
      "Improved user engagement by 35%",
      "Established component library"
    ],
    color: "from-orange-500 to-red-600"
  },
  {
    id: 4,
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    location: "Austin, TX",
    duration: "Aug 2019 - Feb 2020",
    type: "Full-time",
    description: "Started my professional journey building web applications and learning modern development practices. Contributed to various startup projects.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    achievements: [
      "Completed 10+ web projects",
      "Learned agile methodologies",
      "Built first e-commerce platform"
    ],
    color: "from-pink-500 to-purple-600"
  }
]

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
          className="text-center mb-8 sm:mb-12 lg:mb-16"
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
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line - Mobile: Left aligned, Desktop: Center */}
          <div className="absolute left-6 sm:left-8 lg:left-1/2 lg:transform lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-light-gray via-medium-gray to-light-gray opacity-30"></div>

          {/* Experience Items */}
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`absolute left-6 sm:left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r ${exp.color} border-2 sm:border-4 border-space-black z-10 top-6`}
                />

                {/* Content Layout */}
                <div className={`lg:flex lg:items-start ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  
                  {/* Main Content Card */}
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    onHoverStart={() => setActiveExperience(exp.id)}
                    onHoverEnd={() => setActiveExperience(null)}
                    className={`ml-12 sm:ml-16 lg:ml-0 lg:w-5/12 ${
                      index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
                    }`}
                  >
                    <div className="glossy-card p-4 sm:p-6 h-full">
                      {/* Header */}
                      <div className="mb-4">
                        {/* Duration and Type - Mobile */}
                        <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between mb-3 gap-2">
                          <span className={`px-2 xs:px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white w-fit`}>
                            {exp.type}
                          </span>
                          <span className="text-light-gray text-xs xs:text-sm font-medium">{exp.duration}</span>
                        </div>
                        
                        <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-off-white mb-2 leading-tight">{exp.title}</h3>
                        <div className="flex flex-col xs:flex-row xs:items-center text-light-gray text-sm mb-3 gap-1 xs:gap-0">
                          <span className="font-medium">{exp.company}</span>
                          <span className="hidden xs:inline mx-2">•</span>
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
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                              className="text-light-gray text-xs sm:text-sm flex items-start"
                            >
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mr-2 mt-1.5 flex-shrink-0`} />
                              <span className="leading-relaxed">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-off-white font-semibold text-sm mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {exp.technologies.map((tech, i) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
                              whileHover={{ scale: 1.1 }}
                              className="px-2 py-1 bg-medium-gray bg-opacity-30 rounded text-xs text-light-gray border border-medium-gray border-opacity-30"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Hover Effect Indicator */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ 
                          width: activeExperience === exp.id ? "100%" : "0%" 
                        }}
                        transition={{ duration: 0.3 }}
                        className={`h-0.5 bg-gradient-to-r ${exp.color} mt-4 rounded-full`}
                      />
                    </div>
                  </motion.div>

                  {/* Date Badge - Desktop Only */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className={`hidden lg:block lg:w-2/12 ${
                      index % 2 === 0 ? 'lg:order-last lg:pl-8' : 'lg:order-first lg:pr-8'
                    }`}
                  >
                    <div className="glossy-card px-3 py-2 text-center">
                      <div className={`text-sm font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                        {exp.duration.split(' - ')[0]}
                      </div>
                      <div className="text-xs text-light-gray">
                        {exp.duration.split(' - ')[1] || 'Present'}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="glossy-card p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-off-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-light-gray mb-6 text-sm sm:text-base">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="glossy-card px-6 sm:px-8 py-3 sm:py-4 text-off-white font-medium transition-all duration-300 text-sm sm:text-base"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}