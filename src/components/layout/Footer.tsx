import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        <div className="py-12 lg:py-16">
          <div className="text-center">
            <Link
              href="/"
              className="text-xl lg:text-2xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              Digital Craftsman
            </Link>
            <p className="mt-2 text-gray-400">
              Full-Stack Product Developer
            </p>
            
            <div className="flex justify-center space-x-4 mt-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Digital Craftsman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}