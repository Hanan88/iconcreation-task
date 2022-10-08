import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import axios from 'axios'
import pic from '../../images/assests/sliderImages/img1.png'
import styles from './slider.module.css'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

const SliderComponent = () => {
    const [sliderData, setSliderData] = useState('')

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
        dots: true,
        dotsClass: `slick-dots ${styles.customDots}`,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const getSliderData = async () => {
        try {
            const response = await axios.get('https://demos-iconcreations.com/schlafmiestrback/api/sliders');
            setSliderData(response.data.message.sliders)
        } catch (error) {
            console.log(error, "error");
        }
    }

    useEffect(() => {
        getSliderData()
    }, [])

    return (
        <>
            <Slider {...settings}>
                {sliderData && sliderData.map((item) => (
                    <div key={item.id}>
                        <div className='h-full-img bg-no-repeat bg-cover shadow-banner' style={{ backgroundImage: `url(${pic})` }}>
                            <div className='ml-32 lg:pt-32 md:pt-20 sm:pt-20 lg:w-1/4 sm:w-1/2'>
                                <h2 className='text-main-orange text-3xl md:text-xl'>{item.english_title}</h2>
                                <p className='text-main-blue text-xl md:text-md my-8 font-semibold'>{item.english_description}</p>
                                <button className='bg-main-orange text-white py-2 px-6 md:px-3 rounded'>Discover Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

        </>
    )
}
// bg-gradient-to-r from-sky-500 to-indigo-500 
//style={{ backgroundImage: `url('../../images${item.image}')` }}
export default SliderComponent