import React from 'react'
import Hero from './Hero'
import Brokerage from './Brokerage'
import Navbar from '../Navbar'
import Footer from '../Footer'

const PricingPage = () => {
  return (
    <div>
      <Navbar />
        <Hero />
        <Brokerage />
      <Footer />
    </div>
  )
}

export default PricingPage