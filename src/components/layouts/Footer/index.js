import React from 'react'
import logo from '../../../images/assests/logo.png'
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { MdLocationPin } from 'react-icons/md';

import './footer.css'
const Footer = () => {
  return (
    <div className='container px-20 py-20 bg-main-blue flex justify-between '>
      <img src={logo} className='w-48 h-fit pt-16' />

      <div className='details text-white flex w-1/2 justify-around '>
        <div><h2>COMPANY</h2>
          <ul>
            <li>About The Company</li>
            <li>Continental Bed</li>
            <li>Certificates</li>
            <li>References</li>
            <li>Contact Information</li>
          </ul>
        </div>

        <div><h2>Mattress</h2>
          <ul>
            <li>Bliss Line </li>
            <li>Sleep Spa </li>
            <li>Essential</li>
          </ul>
        </div>

        <div className='w-1/4'> <h2>Showrooms</h2>
          <ul>
            <li className='flex'> <MdLocationPin className='-mt-4 text-6xl' />90 Avenue South Second
              Sector Bldg 317, First Floor
              Fifth Settlement.</li>
            <li className='flex'><MdLocationPin className='-mt-4 text-6xl' /> Zayed Dunes Commercial
              Bldg 13, Unit 3  Sixth District
              Sheikh Zayed.</li>
          </ul>
        </div>
        <div><h2>FIND US</h2>
          <div className='flex flex-col items-center text-3xl text-slate-400 gap-3'>
            <FaFacebookF />
            <AiOutlineTwitter />
            <AiFillInstagram />
          </div>
        </div>
      </div>



      <div className='Newsletter w-1/4 border rounded  p-5'>
        <h2 className='text-white text-2xl'>Newsletter</h2>
        <p className='text-slate-300 leading-5 my-3'>Subscribe Our Newletter to receive updates on new arrivals, special offers and other discount information.</p>
        <input type='text' className='mt-5 p-2 bg-slate-400' placeholder='Email' /><button className='bg-white py-2 px-5 rounded-r'>Send</button>
      </div>

    </div>
  )
}

export default Footer