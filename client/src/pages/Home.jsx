import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Testimonial from '../components/Testimonials'
import AiTools from '../components/AiTools'
import Plan from '../components/Plan'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AiTools/>
      <Testimonial/>
      <Plan/>
    </div>
  )
}

export default Home
