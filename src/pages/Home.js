import React from 'react'
import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'
import SliderComponent from '../components/Slider'
import MattressesLines from '../components/MattressesLines'
import Message from '../components/Message'

const Home = () => {
  return (
    <div>
      <Header />
      <SliderComponent />
      <MattressesLines />
      <Message />
    </div>
  )
}

export default Home