import React from 'react'
import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'
import SliderComponent from '../components/Slider'
import MattressesLines from '../components/MattressesLines'
import Message from '../components/Message'
import Mission from '../components/Mission'
import OurProducts from '../components/OurProducts'
import FeaturedProducts from '../components/FeaturedProducts'
import OurOffer from '../components/OurOffer'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  return (
    <div>
      <Header />
      <SliderComponent />
      <MattressesLines />
      <Message />
      <Mission />
      <OurProducts />
      <FeaturedProducts />
      <OurOffer />
      <Footer />
      <ToastContainer autoClose={5000}/>
    </div>
  )
}

export default Home