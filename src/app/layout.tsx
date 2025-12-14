import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import '@/app/globals.css'
import { Analytics } from '@vercel/analytics/next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

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

// Global metadata (layout-level)
export const metadata: Metadata = {
  title: 'Square Root Dev | Full-Stack Developer',
  description:
    'Building Stunning Websites & Digital Experiences for Businesses, Creators, and Individuals',
  authors: [{ name: 'Anees Ahmad' }],
  creator: 'Anees Ahmad',
  themeColor: '#0E0E0E',
  keywords: [
    'Full-Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Web Development',
    'Mobile Apps',
    'Prebuilt Websites',
    'Custom Websites',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sqrootdev.com/',
    siteName: 'Square Root Dev',
    title: 'Square Root Dev | Full-Stack Developer',
    description:
      'Building Stunning Websites & Digital Experiences for Businesses, Creators, and Individuals',
    images: [
      {
        url: '/og-image-default.png', // place in public folder
        width: 1200,
        height: 630,
        alt: 'Square Root Dev Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Square Root Dev | Full-Stack Developer',
    description:
      'Building Stunning Websites & Digital Experiences for Businesses, Creators, and Individuals',
    images: ['/og-image-default.png'],
    creator: '@AneesAhmad',
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
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans antialiased bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] overflow-x-hidden">
        {/* Persistent Header */}
        <Header />

        {/* Main content */}
        <main role="main" className="flex-1 relative">
          {children}
        </main>

        {/* Persistent Footer */}
        <Footer />

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  )
}
