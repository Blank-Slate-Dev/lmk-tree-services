// app/page.tsx
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Testimonials } from '@/components/Testimonials'
import { Services } from '@/components/Services'
import { Gallery } from '@/components/Gallery'
import { AreasServiced } from '@/components/AreasServiced'
import { Process } from '@/components/Process'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Testimonials />
      <Services />
      <Gallery />
      <AreasServiced />
      <Process />
      <Footer />
    </main>
  )
}
