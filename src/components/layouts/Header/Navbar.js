import React from 'react'

const Navbar = () => {
    return (
        <div className='w-1/2'>
            <ul className='flex justify-between text-main-blue md:items-center'>
                <li className='underline-offset-auto hover:underline underline-offset-8'>Home</li>
                <li className='underline-offset-auto hover:underline underline-offset-8'>About</li>
                <li className='underline-offset-auto hover:underline underline-offset-8'>Mattress</li>
                <li className='underline-offset-auto hover:underline underline-offset-8'>Beds&Headboards</li>
                <li className='underline-offset-auto hover:underline underline-offset-8'>Pillows</li>
                <li className='underline-offset-auto hover:underline underline-offset-8'>Sleep Accessories</li>
                <li className='underline-offset-auto hover:underline underline-offset-8'>Contact Us</li>
            </ul>
        </div>
    )
}

export default Navbar