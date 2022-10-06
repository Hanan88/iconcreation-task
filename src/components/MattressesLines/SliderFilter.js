import React from 'react'
import pic from '../../images/assests/productImages/img1.png';
import styles from './productType.module.css';

const SliderFilter = ({ item }) => {
    return (
        <div key={item.id} className=' shadow-md'>
            <img src={pic} alt="" />
            <h2 className='text-center text-main-blue text-xl font-semibold my-2'>{item.title_english}</h2>
            <hr />
            <div className='flex justify-between my-2 px-4'>
                <span className='text-main-blue'>{item.imageCode}</span>
                <div className='price'>
                    <del><span className='mr-2'>{item.beforePrice} EGP</span></del>
                    <strong className='text-main-orange'>{item.afterPrice}EGP</strong>
                </div>
            </div>
            <p className='text-slate-400 my-5 px-4'>- {item.description_english}</p>
            <div className='flex justify-around pt-5 pb-10'>
                <button className='bg-main-orange text-white py-2 px-6 rounded'>Add To Cart</button>
                <button className=' border-main-orange border  py-2 px-6 rounded text-main-orange'>More Details</button>
            </div>
        </div>
    )
}

export default SliderFilter