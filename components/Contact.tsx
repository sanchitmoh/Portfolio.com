'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
    alert('Message sent successfully!')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-8 xs:py-12 sm:py-16 lg:py-20 px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 scroll-mt-20 sm:scroll-mt-24 lg:scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 xs:mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient mb-3 xs:mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-light-gray to-lighter-gray mx-auto mb-4 sm:mb-6"></div>
          <p className="text-light-gray text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 xs:space-y-6 sm:space-y-8"
          >
            <div className="glossy-card p-4 xs:p-6 sm:p-8">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold text-gradient mb-4 xs:mb-6">Contact Information</h3>
              
              <div className="space-y-3 xs:space-y-4 sm:space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 text-light-gray hover:text-off-white transition-colors cursor-pointer"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-dark-gray to-medium-gray rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-light-gray text-sm font-medium">Email</p>
                    <p className="text-off-white">sanchitmohite15@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 text-light-gray hover:text-off-white transition-colors cursor-pointer"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-dark-gray to-medium-gray rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-light-gray text-sm font-medium">LinkedIn</p>
                    <p className="text-off-white">www.linkedin.com/in/sanchit-mohite</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 text-light-gray hover:text-off-white transition-colors cursor-pointer"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-dark-gray to-medium-gray rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-light-gray text-sm font-medium">GitHub</p>
                    <p className="text-off-white">github.com/sanchitmoh</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glossy-card p-6 sm:p-8"
            >
              <h4 className="text-lg sm:text-xl font-semibold text-gradient mb-4">Let's Connect</h4>
              <p className="text-light-gray text-sm sm:text-base leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="glossy-card p-6 sm:p-8 lg:p-10">
              <h3 className="text-xl sm:text-2xl font-semibold text-gradient mb-6 sm:mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full bg-deep-gray border border-light-gray border-opacity-20 rounded-xl px-4 py-3 sm:py-4 text-off-white placeholder-light-gray focus:border-light-gray focus:border-opacity-60 focus:outline-none transition-all duration-300 text-sm sm:text-base"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full bg-deep-gray border border-light-gray border-opacity-20 rounded-xl px-4 py-3 sm:py-4 text-off-white placeholder-light-gray focus:border-light-gray focus:border-opacity-60 focus:outline-none transition-all duration-300 text-sm sm:text-base"
                    />
                  </div>
                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Subject"
                    required
                    className="w-full bg-deep-gray border border-light-gray border-opacity-20 rounded-xl px-4 py-3 sm:py-4 text-off-white placeholder-light-gray focus:border-light-gray focus:border-opacity-60 focus:outline-none transition-all duration-300 text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Your Message"
                    required
                    className="w-full bg-deep-gray border border-light-gray border-opacity-20 rounded-xl px-4 py-3 sm:py-4 text-off-white placeholder-light-gray focus:border-light-gray focus:border-opacity-60 focus:outline-none transition-all duration-300 resize-none text-sm sm:text-base"
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-medium-gray to-dark-gray text-off-white font-medium py-3 sm:py-4 rounded-xl hover:from-light-gray hover:to-medium-gray transition-all duration-300 text-sm sm:text-base"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}