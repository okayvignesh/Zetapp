import React from 'react'
import Image from 'next/image'
import bg from '../../public/images/earning/bg.svg'
import gplay from '../../public/images/googleplay.svg'
import video1 from '../../public/images/earning/1.mp4'
import video2 from '../../public/images/earning/2.mp4'
import video3 from '../../public/images/earning/3.mp4'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, FreeMode, Navigation, Pagination } from 'swiper';
import "swiper/css/pagination";
import { useState } from 'react'


SwiperCore.use([Autoplay, FreeMode, Pagination])

const slides = [
    {
        step: `Download the App and Sign up as a ZET agent`,
        video: video1
    },
    {
        step: `Register your customers and Recommend financial products`,
        video: video2
    },
    {
        step: `Start earning upto ₹ 1 Lakh every month`,
        video: video3
    },

]

function StartEarning() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveSlideIndex(swiper.activeIndex);
    };
    return (
        <section className='startearning'>
            <Image src={bg} alt='bg' className='earning-bg' />
            <div className="container earning-container">
                <h4>Start Earning in 3 Easy Steps</h4>
                <p className='text-center'>We have create the app the make your earning easy</p>

                <Swiper
                    loop
                    autoplay={{ delay: 11000 }}
                    speed={1000}
                    slidesPerView={1}
                >
                    {
                        slides.map((value, index) => {
                            const isActive = index === activeSlideIndex;
                            const animationName = `progress-${index}`;
                            return (
                                <SwiperSlide className='earning-slide' key={index}>
                                    <div className='earning-steps'>
                                        <div className="step-tag">Step {index + 1}</div>
                                        <h3>{value.step}</h3>
                                        <div className="progress-bar-bg">
                                            <div
                                                className={`progress-bar ${isActive ? 'active' : ''}`}
                                                style={{
                                                   
                                                    animationName: animationName,
                                                }}
                                            ></div>
                                        </div>
                                        <Image src={gplay} alt='googleplay' width={120} height={50} className='mx-3' />
                                    </div>
                                    <video width={250} height={550} autoPlay muted loop >
                                        <source src={value.video} type="video/mp4" />
                                    </video>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>


        </section>
    )
}

export default StartEarning
