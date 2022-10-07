import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import pic from '../../images/assests/productImages/Bliss-Fortune120.jpg'
import styles from './products.module.css'
// import './style.css'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

const SliderOurProduct = () => {
    const [products, setProducts] = useState('')

    function SampleNextArrow(props) {
        const { style, onClick } = props;
        return (
            <div
                className={styles.slickRightArrow}
                style={{ ...style }}
                onClick={onClick}
            >
                <MdKeyboardArrowRight />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { style, onClick } = props;
        return (
            <div
                className={styles.slickLeftArrow}
                style={{ ...style }}
                onClick={onClick}
            >
                <MdKeyboardArrowLeft />
            </div>
        );
    }

    const settings = {
        className: "center",
        infinite: true,
        slidesToShow: 2,
        speed: 500,
        rows: 2,
        slidesPerRow: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const getProducts = async () => {
        try {
            const response = await axios.get('https://demos-iconcreations.com/schlafmiestrback/api/products')
            setProducts(response.data.message.products)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts()
    }, [])
    
    return (
        < >
            <Slider {...settings}>
                {products && products.map((item) => (
                    <div key={item.id}>
                        <div className='p-3 m-3 shadow-lg h-box'>
                            <img src={pic} alt="" />

                            <div className='flex justify-between my-2 px-4 text-xs'>
                                <span className='text-main-blue'>{item.imageCode}</span>
                                <div className='price '>
                                    <del className='text-slate-400'><span className='mr-2'>{item.beforePrice} EGP</span></del>
                                    <strong className='text-main-orange'>{item.afterPrice}EGP</strong>
                                </div>
                            </div>

                            <p className='text-slate-400 mt-2 px-3 text-sm leading-4'>
                                {item.description_english.length > 100 ?
                                    item.description_english.slice(0, 40) :
                                    item.description_english}
                            </p>

                            <div className='flex justify-around pt-4 pb-5'>
                                <button className='bg-main-orange text-white py-1 px-4 rounded'>Add To Cart</button>
                                <button className=' border-main-orange border  py-1 px-4 rounded text-main-orange'>More Details</button>
                            </div>

                        </div>
                    </div>
                ))}
            </Slider>
        </ >
    )
}

export default SliderOurProduct