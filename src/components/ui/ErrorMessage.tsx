// =============================================================================
// ERROR MESSAGE COMPONENT
// =============================================================================
// src/components/ui/ErrorMessage.tsx
// Error state component with back navigation
// =============================================================================

'use client'

import { useRouter } from 'next/navigation'
import { AlertCircle, ArrowLeft } from 'lucide-react'

interface ErrorMessageProps {
  message: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  const router = useRouter()

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push('/blog')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h1>
        <p className="text-gray-600 mb-6">{message}</p>
        <button 
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </button>
      </div>
    </div>
  )
}