import React from 'react'
import SliderOurProduct from './SliderOurProduct'
const OurProducts = () => {
    return (
        <div className='container mx-auto px-20 py-3'>
            <h2 className='text-main-orange text-3xl text-center mt-16 mb-14'>OurProducts</h2>
            <SliderOurProduct />
            <button className=' border-main-orange border py-2 px-6 mt-8 rounded text-main-orange block m-auto'>See More</button>
        </div>
    )
}

export default OurProducts