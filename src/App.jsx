import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Methodology from './components/Methodology'
import Programs from './components/Programs'
import Plans from './components/Plans'
import Testimonials from './components/Testimonials'
import Products from './components/Products'
import Location from './components/Location'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Add loaded class to body for initial animation if needed
    document.body.classList.add('loaded');
  }, []);

  return (
    <div className="flex-col min-h-screen overflow-hidden bg-gradient">
      <Header />
      <main>
        <Hero />
        <Services />
        <Methodology />
        <Programs />
        <Plans />
        <Testimonials />
        <Products />
        <Location />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
