import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import Universe from './Universe'
import RightSection from './RightSection'

import Navbar from '../Navbar'
import Footer from '../Footer'

const ProductsPage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <LeftSection />
        <RightSection />
        <Universe />
        <Footer />
    </div>
  )
}

export default ProductsPage