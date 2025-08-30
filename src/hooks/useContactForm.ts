'use client'

import { useState } from "react"


interface ContactFormData {
    name: string
    email: string
    message: string
}

interface ContactFormState {
    isLoading: boolean
    status: 'idle' | 'success' | 'error'
    error?: string
}


export function useContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
      name: '',
      email: '',
      message: ''
    })

    const [state, setstate] = useState<ContactFormState>({
        isLoading: false,
        status: "idle"
    })

    const updateField = (field: keyof ContactFormData, value: string ) => {
        setFormData(prev => ({...prev, [field]: value}))
        // clear error when user starts typing
        if(state.status === 'error') {
            setstate
        }
    }
}  