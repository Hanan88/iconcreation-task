import React from 'react'
import pic from '../../images/assests/mission/missionVision.png'
import Details from './Details'

const Mission = () => {
    return (
        <div className='container mx-auto px-20 py-3'>
            <h2 className='text-main-orange text-3xl text-center mt-16 mb-14'>Mission & Vision</h2>
            <section className='flex flex-col lg:flex-row md:flex-col sm:-flex-col'>
                <img src={pic} alt='' className='pl-2.5 h-80'/>
                <Details />
            </section>
        </div>
    )
}

export default Mission