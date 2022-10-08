import React, { useEffect, useState } from 'react'
import axios from 'axios';
import pic from '../../images/assests/offers/background.png'

const OurOffer = () => {
    const [offers, setOffers] = useState('')

    const getOffers = async () => {
        try {
            const response = await axios.get('https://demos-iconcreations.com/schlafmiestrback/api/offer');
            setOffers(response.data.message.offers)
        } catch (error) {
            console.log(error, "error");
        }
    }

    useEffect(() => {
        getOffers()
    }, [])

    return (
        <div className='py-5 mt-14 text-center shadow-offer bg-cover bg-fixed' style={{ backgroundImage: `url(${pic})` }}>
            
            <h4 className='text-main-orange text-3xl text-center mt-12 mb-14 z-40'>Our Offers</h4>
            {offers && offers.map((item) => (
                <div key={item.id}>
                    <h2 className='text-white text-5xl font-medium mb-8'>{item.english_title}</h2>
                    <p className='w-offer m-auto text-white mb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and</p>
                </div>
            ))}
            <button className='bg-main-orange text-white py-2 px-6 rounded block m-auto mb-12'>Discover Now</button>
        </div>
    )
}

export default OurOffer
