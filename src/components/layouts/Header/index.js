import React from 'react'
import Logo from '../../../images/logo.jpg'
import Details from './Details'
import Navbar from './Navbar'
const Header = () => {
    return (
        <>
            <header>
                <div className='container mx-auto px-20 py-3 flex justify-between items-end'>
                    <div><img src={Logo} alt='' /></div>
                    <Navbar />
                    <Details />
                </div>
            </header>
        </>
    )
}

export default Header