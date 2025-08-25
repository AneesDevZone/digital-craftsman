import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Digital Craftsman | Full-Stack Developer',
  description: 'Full-Stack Product Developer building complete digital experiences from idea to deployment. Specializing in React, Next.js, TypeScript, and React Native.',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'TypeScript', 'Web Development', 'Mobile Apps'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-portfolio.com',
    title: 'Digital Craftsman | Full-Stack Developer',
    description: 'Full-Stack Product Developer building complete digital experiences',
    siteName: 'Digital Craftsman',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Craftsman | Full-Stack Developer',
    description: 'Full-Stack Product Developer building complete digital experiences',
    creator: '@yourusername',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900 overflow-x-hidden">
        <div className="relative min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
