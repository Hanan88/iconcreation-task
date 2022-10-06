import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Slider from "react-slick";
import pic from '../../images/assests/productImages/img1.png';
import styles from './productType.module.css';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
// import SliderFilter from './SliderFilter';

const MattressesLines = () => {
    const [productType, setProductType] = useState('');
    const [filterProduct, setFilterProduct] = useState('');

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
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const getProductType = async () => {
        try {
            const response = await axios.get('https://demos-iconcreations.com/schlafmiestrback/api/productTypes');
            setProductType(response.data.message.productTypes)
        } catch (error) {
            console.log(error);
        }
    }

    const filterByCategory = (categoryTitle) => {
        const filteredItems = productType.filter((item) => {
            return item.header_title_english === categoryTitle
        })
        setFilterProduct(filteredItems?.[0]?.products)
    }

    useEffect(() => {
        getProductType()
    }, [])

    return (
        <div className='container mx-auto px-20 py-3'>
            <h2 className='text-main-orange text-3xl text-center mt-16 mb-5'>Our Mattresses Lines</h2>
            <div className='w-100 bg-main-blue'>
                <div className='text-white flex text-center h-20'>
                    <button className='w-1/3 h-full bg-main-blue hover:bg-main-orange' onClick={() => filterByCategory('Bliss Line')}>Bliss line</button>
                    <button className='w-1/3 h-full bg-main-blue hover:bg-main-orange' onClick={() => filterByCategory('Sleep Spa')}>Sleep Spa</button>
                    <button className='w-1/3 h-full bg-main-blue hover:bg-main-orange' onClick={() => filterByCategory('Bliss Line')}>Essential</button>
                </div>
            </div>

            <div className='mt-8'>
                <Slider {...settings}>
                    {filterProduct && filterProduct.map((item) => (<div key={item.id} className=' shadow-md'>
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
                    </div>))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default MattressesLines