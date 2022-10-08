import axios from 'axios';
import React, { useEffect, useState } from 'react'
import pic from '../../images/assests/productImages/featured.png'
const FeaturedProducts = () => {
    const [feature, setFeature] = useState('')

    const getFeature = async () => {
        try {
            const response = await axios.get('https://demos-iconcreations.com/schlafmiestrback/api/featuredProducts');
            setFeature(response.data.message.featuredProducts)
        } catch (error) {
            console.log(error, "error");
        }
    }

    useEffect(() => {
        getFeature()
    }, [])

    return (
        <div className='container mx-auto px-20 py-5 mt-14 bg-slate-50'>
            <h2 className='text-main-orange text-3xl text-center mt-12 mb-14'>Featured Products</h2>

            {feature && feature.map((item) => (
                <section className='flex lg:flex-nowrap md:flex-wrap sm:flex-wrap' key={item.id}>
                    <div className='details lg:w-1/2 md:w-full sm:full'>
                        <h2 className='text-main-orange text-2xl font-medium mb-5'>{item.title_english}</h2>
                        <h4 className='text-main-blue text-base font-medium mb-5'>{item.category_english}</h4>
                        <p className='text-slate-400 mb-7'>{item.description_english.slice(0, 273)}</p>
                        <p className='text-slate-400 mb-7'>{item.description_english.slice(273, 454)}</p>
                        <p className='text-slate-400 mb-7'>{item.description_english.slice(454, 581)}</p>
                        <button className='bg-main-orange text-white py-2 px-6 rounded'>Show More</button>
                    </div>
                    <div>
                        <img src={pic} alt="" className='w-3/4 ml-44 shadow-feature' />
                    </div>
                </section>
            ))}
        </div>
    )
}

export default FeaturedProducts