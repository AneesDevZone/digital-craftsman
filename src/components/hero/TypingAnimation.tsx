'use client'

import React, { useState, useEffect } from 'react'

interface TypingAnimationProps {
  texts: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export function TypingAnimation({ 
  texts, 
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000
}: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  
  useEffect(() => {
    let timeout: NodeJS.Timeout
    
    if (isTyping && !isDeleting) {
      // Typing phase
      if (currentText.length < texts[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(texts[currentTextIndex].slice(0, currentText.length + 1))
        }, typingSpeed)
      } else {
        // Finished typing, start pause
        timeout = setTimeout(() => {
          setIsTyping(false)
          setIsDeleting(true)
        }, pauseDuration)
      }
    } else if (isDeleting) {
      // Deleting phase
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, deletingSpeed)
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false)
        setIsTyping(true)
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      }
    }
    
    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isTyping, isDeleting, texts, typingSpeed, deletingSpeed, pauseDuration])
  
  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse text-current">|</span>
    </span>
  )
}