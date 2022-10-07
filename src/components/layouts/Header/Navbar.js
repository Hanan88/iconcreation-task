import React from 'react'
import './header.css'
const Navbar = () => {
    return (
        <div className='w-1/2 navbar'>
            <ul className='flex justify-between text-main-blue md:items-center'>
                <li>Home</li>
                <li>About</li>
                <li>Mattress</li>
                <li>Beds&Headboards</li>
                <li>Pillows</li>
                <li>Sleep Accessories</li>
                <li>Contact Us</li>
            </ul>
        </div>
    )
}

export default Navbar