'use client'

import React, { useState } from 'react'
import { Send, Loader, Sparkles, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormFieldProps {
  id: string
  name: keyof FormData
  label: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  required?: boolean
  rows?: number
}

function FormField({ 
  id, 
  name, 
  label, 
  type = 'text', 
  value, 
  onChange, 
  required = false, 
  rows 
}: FormFieldProps) {
  const [isFocused, setIsFocused] = useState(false)
  const isTextarea = rows !== undefined
  const hasValue = value.length > 0

  const inputClasses = `
    w-full px-4 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl 
    focus:outline-none focus:border-blue-500 focus:bg-white
    transition-all duration-500 resize-none placeholder-transparent
    hover:border-gray-300 hover:shadow-sm
    ${isTextarea ? 'min-h-[140px] pt-6' : 'h-14'}
    ${isFocused ? 'shadow-lg scale-[1.02] border-blue-500' : ''}
  `

  const labelClasses = `
    absolute px-2 bg-white text-sm font-medium transition-all duration-300 pointer-events-none
    ${isFocused || hasValue
      ? '-top-2 left-3 text-blue-600 scale-95' 
      : `${isTextarea ? 'top-6 left-4' : 'top-4 left-4'} text-gray-500 scale-100`
    }
  `

  const InputComponent = isTextarea ? 'textarea' : 'input'

  return (
    <div className="relative group">
      <InputComponent
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        rows={rows}
        className={inputClasses}
        placeholder={label} // This won't show due to placeholder-transparent
      />
      
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      
      {/* Field enhancement animations */}
      {isFocused && (
        <>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-75" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full" />
        </>
      )}
    </div>
  )
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error state when user starts typing
    if (isError) {
      setIsError(false)
      setErrorMessage('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsError(false)
    setErrorMessage('')
    
    try {
      // Call our Next.js API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        
        // Reset success state after 4 seconds
        setTimeout(() => setIsSuccess(false), 4000)
      } else {
        setIsError(true)
        setErrorMessage(data.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setIsError(true)
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative group animate-fade-in-up delay-600">
      {/* Glassmorphism card with enhanced backdrop */}
      <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-emerald-200/20 to-cyan-200/20 rounded-lg rotate-45 animate-bounce" style={{ animationDuration: '4s' }} />
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-r from-pink-200/10 to-orange-200/10 rounded-full blur-2xl animate-spin" style={{ animationDuration: '20s' }} />
        </div>

        <div className="relative z-10 p-8 lg:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h3>
          </div>

          {/* Status Messages */}
          {isSuccess && (
            <div className="mb-8 p-4 bg-emerald-50 border-2 border-emerald-200 rounded-2xl">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <p className="text-emerald-800 font-semibold">Message sent successfully! 🎉</p>
                  <p className="text-emerald-700 text-sm">I'll get back to you within 24 hours with a detailed response.</p>
                </div>
              </div>
            </div>
          )}

          {isError && (
            <div className="mb-8 p-4 bg-red-50 border-2 border-red-200 rounded-2xl">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div>
                  <p className="text-red-800 font-semibold">Failed to send message</p>
                  <p className="text-red-700 text-sm">{errorMessage}</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <FormField
                id="name"
                name="name"
                label="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              
              <FormField
                id="email"
                name="email"
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <FormField
              id="subject"
              name="subject"
              label="Project Type"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />

            <FormField
              id="message"
              name="message"
              label="Project Details & Requirements"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              required
            />

            {/* Enhanced Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`
                group relative w-full h-16 rounded-2xl font-bold text-white text-lg
                transition-all duration-500 overflow-hidden
                ${isSuccess 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700' 
                  : 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 hover:from-blue-700 hover:via-purple-700 hover:to-blue-900'
                }
                ${isSubmitting || isSuccess 
                  ? 'cursor-not-allowed' 
                  : 'hover:shadow-2xl hover:scale-[1.02] cursor-pointer'
                }
                disabled:opacity-90 transform-gpu
              `}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-900 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Button content */}
              <div className="relative z-10 flex items-center justify-center gap-4">
                {isSubmitting ? (
                  <>
                    <Loader className="w-6 h-6 animate-spin" />
                    <span>Sending your message...</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle className="w-6 h-6" />
                    <span>Message Sent Successfully!</span>
                    <Sparkles className="w-6 h-6 animate-spin" />
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
                    <span>Send Message</span>
                    <div className="w-6 h-6 rounded-full border-2 border-white/30 group-hover:border-white group-hover:rotate-180 transition-all duration-500" />
                  </>
                )}
              </div>
              
              {/* Shimmer effect */}
              {!isSubmitting && !isSuccess && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
              )}
              
              {/* Particle effects */}
              {!isSubmitting && !isSuccess && (
                <>
                  <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full animate-ping group-hover:animate-pulse" />
                  <div className="absolute bottom-2 right-8 w-1 h-1 bg-white rounded-full animate-ping group-hover:animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute top-4 right-4 w-1 h-1 bg-white rounded-full animate-ping group-hover:animate-pulse" style={{ animationDelay: '1s' }} />
                </>
              )}
            </button>
          </form>

          {/* Trust indicators */}
          <div className="mt-8 pt-6 border-t border-gray-200/50">
            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Replies within an hour</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span>Free consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}