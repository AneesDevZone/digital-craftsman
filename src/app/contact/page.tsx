'use client'

import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  ArrowRight,
  Sparkles
} from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Me',
    value: 'hello@digitalcraftsman.dev',
    description: 'Quick response guaranteed',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50'
  },
  {
    icon: Phone,
    title: 'Call Me',
    value: '+1 (555) 123-4567',
    description: 'Mon-Fri, 9AM-6PM EST',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'from-emerald-50 to-teal-50'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'San Francisco, CA',
    description: 'Available remotely',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50'
  }
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission (replace with actual submission logic)
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Message sent successfully! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 2000)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-orange-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6 group hover:shadow-lg transition-all duration-300">
            <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
            <span className="text-blue-800 font-semibold">Let's Create Something Amazing</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            Get In
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse">
              Touch
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's start the conversation.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="relative group">
              {/* Form Container with Glassmorphism */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-3xl"></div>
              
              <div className="relative z-10 p-8 lg:p-12">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-slate-800 mb-3">Send a Message</h3>
                  <p className="text-slate-600">I'll respond within 24 hours</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="group">
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full h-14 px-4 pt-6 pb-2 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-all duration-300 peer placeholder-transparent hover:shadow-lg"
                          placeholder="Your Name"
                        />
                        <label
                          htmlFor="name"
                          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                            focusedField === 'name' || formData.name
                              ? 'top-2 text-xs text-blue-600 font-semibold'
                              : 'top-4 text-base text-slate-500'
                          }`}
                        >
                          Your Name
                        </label>
                        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                          focusedField === 'name' ? 'w-full' : 'w-0'
                        }`}></div>
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="group">
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full h-14 px-4 pt-6 pb-2 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-all duration-300 peer placeholder-transparent hover:shadow-lg"
                          placeholder="your@email.com"
                        />
                        <label
                          htmlFor="email"
                          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                            focusedField === 'email' || formData.email
                              ? 'top-2 text-xs text-blue-600 font-semibold'
                              : 'top-4 text-base text-slate-500'
                          }`}
                        >
                          Email Address
                        </label>
                        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                          focusedField === 'email' ? 'w-full' : 'w-0'
                        }`}></div>
                      </div>
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="group">
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full h-14 px-4 pt-6 pb-2 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-all duration-300 peer placeholder-transparent hover:shadow-lg"
                        placeholder="Project Subject"
                      />
                      <label
                        htmlFor="subject"
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'subject' || formData.subject
                            ? 'top-2 text-xs text-blue-600 font-semibold'
                            : 'top-4 text-base text-slate-500'
                        }`}
                      >
                        Project Subject
                      </label>
                      <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                        focusedField === 'subject' ? 'w-full' : 'w-0'
                      }`}></div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="group">
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={6}
                        className="w-full px-4 pt-6 pb-4 bg-white/70 backdrop-blur-sm border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-all duration-300 resize-none hover:shadow-lg"
                      />
                      <label
                        htmlFor="message"
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'message' || formData.message
                            ? 'top-2 text-xs text-blue-600 font-semibold'
                            : 'top-4 text-base text-slate-500'
                        }`}
                      >
                        Your Message
                      </label>
                      <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                        focusedField === 'message' ? 'w-full' : 'w-0'
                      }`}></div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                          <span>Send Message</span>
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Connect With Me</h3>
              <p className="text-slate-600">Choose your preferred way to reach out</p>
            </div>

            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm`}></div>
                
                {/* Card Content */}
                <div className={`relative bg-gradient-to-br ${item.bgColor} backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg group-hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                  {/* Floating Animation Background */}
                  <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${item.color} rounded-full opacity-20 group-hover:scale-150 group-hover:opacity-30 transition-all duration-500`}></div>
                  
                  <div className="relative z-10 flex items-center gap-6">
                    <div className={`p-4 bg-gradient-to-br ${item.color} rounded-2xl text-white shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                      <item.icon className="w-8 h-8" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-slate-900 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className={`font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent text-lg mb-1`}>
                        {item.value}
                      </p>
                      <p className="text-slate-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover Effect Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}