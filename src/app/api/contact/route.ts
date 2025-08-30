// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    console.log('🚀 Contact API called')
    
    const body: ContactFormData = await request.json()
    const { name, email, subject, message } = body

    console.log('📝 Form data received:', { name, email, subject: subject?.slice(0, 50) })

    // Validation
    if (!name || !email || !message) {
      console.log('❌ Validation failed: Missing fields')
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log('❌ Invalid email format:', email)
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Check environment variables
    console.log('🔧 Environment check:', {
      EMAIL_USER: process.env.EMAIL_USER ? '✅ Set' : '❌ Missing',
      EMAIL_PASS: process.env.EMAIL_PASS ? '✅ Set' : '❌ Missing',
      EMAIL_TO: process.env.EMAIL_TO ? '✅ Set' : '❌ Missing',
    })

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      console.log('❌ Missing environment variables')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    console.log('📧 Creating email transporter...')

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    console.log('🔍 Verifying transporter...')

    // Verify transporter configuration
    try {
      await transporter.verify()
      console.log('✅ Transporter verified successfully')
    } catch (verifyError) {
      console.error('❌ Transporter verification failed:', verifyError)
      return NextResponse.json(
        { error: 'Email configuration error. Please check credentials.' },
        { status: 500 }
      )
    }

    console.log('📤 Sending email...')

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Portfolio Contact: ${subject || 'New Message'} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject || 'Not specified'}</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 15px 0;">
            <p><strong>Message:</strong></p>
            <p style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #4f46e5;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          <p style="color: #64748b; font-size: 14px;">
            Sent from SquareRoot contact form
          </p>
        </div>
      `,
    }

    const result = await transporter.sendMail(mailOptions)
    console.log('✅ Email sent successfully:', result.messageId)

    return NextResponse.json(
      { message: 'Email sent successfully!', messageId: result.messageId },
      { status: 200 }
    )

  } catch (error) {
    console.error('💥 Contact form error:', error)
    
    // More specific error handling
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        return NextResponse.json(
          { error: 'Email authentication failed. Check your app password.' },
          { status: 500 }
        )
      }
      if (error.message.includes('Network')) {
        return NextResponse.json(
          { error: 'Network error. Please try again.' },
          { status: 500 }
        )
      }
    }

    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}