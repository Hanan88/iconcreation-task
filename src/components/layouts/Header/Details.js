import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { GoPerson } from 'react-icons/go';
import { MdShoppingBasket } from 'react-icons/md';

const Details = () => {
    return (
        <div className='w-1/4'>
            <div className='flex justify-between items-center'>
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 block rounded-xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search..." type="text" name="search" />
                <div className='flex justify-between w-1/4 text-slate-400 text-xl'>
                    <AiFillInstagram />
                    <AiOutlineTwitter />
                    <FaFacebookF />
                </div>
            </div>
            <div className='text-right'>
                <button className='py-2 px-5 rounded mt-3 mx-5 text-white bg-main-blue'><GoPerson className='float-left text-2xl mr-2' />My Account</button>
                <button className='py-2 px-5 rounded mt-3 text-white bg-main-blue'><MdShoppingBasket className='float-left text-2xl mr-2' /> (5)Items</button>
            </div>

        </div>
    )
}

export default Details