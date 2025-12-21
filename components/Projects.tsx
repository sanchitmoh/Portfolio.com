'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0)

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard with real-time analytics.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      status: 'Live',
      image: '/api/placeholder/400/250',
      github: 'https://github.com/sanchitmohite/ecommerce',
      live: 'https://ecommerce-demo.vercel.app',
      features: ['User Authentication', 'Payment Gateway', 'Admin Dashboard', 'Real-time Analytics']
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features built with modern technologies.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io', 'Prisma'],
      status: 'In Progress',
      image: '/api/placeholder/400/250',
      github: 'https://github.com/sanchitmohite/taskmanager',
      live: 'https://taskmanager-demo.vercel.app',
      features: ['Real-time Updates', 'Drag & Drop', 'Team Collaboration', 'File Sharing']
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts, historical data visualization, and responsive design. Includes weather maps and alerts.',
      tech: ['React', 'Chart.js', 'Weather API', 'Tailwind', 'PWA'],
      status: 'Live',
      image: '/api/placeholder/400/250',
      github: 'https://github.com/sanchitmohite/weather-dashboard',
      live: 'https://weather-dashboard-demo.vercel.app',
      features: ['Location-based Forecast', 'Data Visualization', 'Weather Maps', 'PWA Support']
    }
  ]

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient mb-4 sm:mb-6">
            Featured Projects
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-light-gray to-lighter-gray mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Project List */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedProject(index)}
                className={`glossy-card p-6 cursor-pointer transition-all duration-300 ${
                  selectedProject === index 
                    ? 'border-light-gray border-opacity-50 bg-opacity-80' 
                    : 'hover:bg-opacity-60'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-off-white">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' 
                      ? 'bg-light-gray bg-opacity-20 text-light-gray' 
                      : 'bg-medium-gray bg-opacity-30 text-lighter-gray'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-light-gray text-sm leading-relaxed mb-4">
                  {project.description.substring(0, 120)}...
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-deep-gray border border-light-gray border-opacity-20 text-light-gray text-xs rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-light-gray text-xs">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Details */}
          <motion.div
            key={selectedProject}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glossy-card p-6 sm:p-8"
          >
            <div className="mb-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gradient">
                  {projects[selectedProject].title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  projects[selectedProject].status === 'Live' 
                    ? 'bg-light-gray bg-opacity-20 text-light-gray' 
                    : 'bg-medium-gray bg-opacity-30 text-lighter-gray'
                }`}>
                  {projects[selectedProject].status}
                </span>
              </div>
              
              <div className="w-full h-48 bg-deep-gray rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-light-gray" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h16v12H4V4zm2 2v8h12V6H6zm2 2h8v4H8V8z"/>
                </svg>
              </div>
            </div>

            <p className="text-light-gray leading-relaxed mb-6">
              {projects[selectedProject].description}
            </p>

            <div className="mb-6">
              <h4 className="text-off-white font-semibold mb-3">Key Features</h4>
              <div className="grid grid-cols-2 gap-2">
                {projects[selectedProject].features.map((feature, index) => (
                  <div key={feature} className="flex items-center text-sm text-light-gray">
                    <div className="w-2 h-2 bg-light-gray rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-off-white font-semibold mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {projects[selectedProject].tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-deep-gray border border-light-gray border-opacity-20 text-light-gray text-sm rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <motion.a
                href={projects[selectedProject].github}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-6 py-3 bg-medium-gray bg-opacity-30 text-off-white rounded-xl hover:bg-opacity-50 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                Code
              </motion.a>
              
              <motion.a
                href={projects[selectedProject].live}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-6 py-3 border border-light-gray text-light-gray hover:text-off-white hover:border-off-white rounded-xl transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/>
                </svg>
                Live Demo
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}