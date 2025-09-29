import React from 'react'
import {Navbar, HeroSection, Features, About, Testimonials, CTASection, Footer} from '../components'

function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <About />
      <Testimonials />
      <CTASection />
    </div>
  )
}

export default Home
