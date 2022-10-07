import React from 'react'
import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'
import SliderComponent from '../components/Slider'
import MattressesLines from '../components/MattressesLines'
import Message from '../components/Message'
import Mission from '../components/Mission'
import OurProducts from '../components/OurProducts'

const Home = () => {
  return (
    <div>
      <Header />
      <SliderComponent />
      <MattressesLines />
      <Message />
      <Mission />
      <OurProducts />
    </div>
  )
}

export default Home