import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import DeliveryPayment from '@/components/DeliveryPayment'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Products />
      <DeliveryPayment />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
    </main>
  )
}

