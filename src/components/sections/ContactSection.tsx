'use client'

import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { ContactForm } from '@/components/forms/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'
import { 
  Sparkles,
  MessageCircle
} from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center py-16 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Advanced Background Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-blue-200/30 rounded-full animate-spin-slow" />
        <div className="absolute top-40 right-20 w-24 h-24 border border-purple-200/40 rounded-lg rotate-45 animate-bounce-slow" />
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-emerald-200/30 rotate-45 animate-pulse" />
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-orange-200/30 rounded-full animate-ping-slow" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/5 w-64 h-64 bg-gradient-to-br from-blue-100/20 via-purple-100/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-gradient-to-tl from-emerald-100/15 via-cyan-100/10 to-transparent rounded-full blur-3xl animate-float-delayed" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02] animate-pulse"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20px 20px, #64748b 1px, transparent 0),
              radial-gradient(circle at 60px 60px, #3b82f6 0.5px, transparent 0)
            `,
            backgroundSize: '80px 80px, 120px 120px'
          }}
        />
      </div>

      <Container size="xl" className="relative z-10">
       

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm border border-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6 shadow-sm animate-fade-in">
            <MessageCircle className="w-4 h-4" />
            <span>Let's Start a Conversation</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up delay-200">
            Ready to{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Collaborate?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-400">
          Bring your ideas to life with impactful digital experiences. Let’s discuss your project.
          </p>
        </div>

        {/* Main Content - Improved Layout */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12 items-start">
          {/* Contact Form - Center, larger */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <ContactForm />
          </div>

          {/* Contact Info - Right sidebar, compact */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <ContactInfo />
          </div>
        </div>
      </Container>

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { 
            transform: translateY(0) rotate(45deg); 
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1); 
          }
          50% { 
            transform: translateY(-25%) rotate(45deg); 
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1); 
          }
        }
        
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-30px, 30px) rotate(-120deg); }
          66% { transform: translate(20px, -20px) rotate(-240deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-400 {
          animation-delay: 400ms;
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}