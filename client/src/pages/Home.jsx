import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Testimonial from '../components/Testimonials'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AiTools/>
      <Testimonial/>
    </div>
  )
}

export default Home
