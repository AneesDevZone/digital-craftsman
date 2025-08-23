// src/app/page.tsx
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import {Container} from '@/components/ui/Container'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">
        <Container>
          <div className="py-20 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Welcome to Your Portfolio
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Full-Stack Product Developer
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}