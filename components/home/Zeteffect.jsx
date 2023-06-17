import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, FreeMode, Navigation, Pagination } from 'swiper';
import img from '../../public/images/zeteffect.webp'
import "swiper/css/pagination";


SwiperCore.use([Autoplay, FreeMode, Pagination])
function Zeteffect() {
    return (
        <section className='zeteffect'>
            <div className="container">
                <div className="zeteffect-internal">
                    <div className="col-lg-6">
                        <Image src={img} alt="peeps" className='zeteffect-img' />
                    </div>
                    <div className='col-lg-6 '>
                        <h4>THE ZET EFFECT</h4>
                        <Swiper className='zeteffect-swiper'
                            pagination={{ type: 'progressbar' }}
                            loop
                            freeMode
                            autoplay
                            speed={1000}
                        >
                            <SwiperSlide className='zet-points' >14 Lakh+ Financial Advisor across India are using ZET to increase their income.</SwiperSlide>
                            <SwiperSlide className='zet-points'>More than ₹20 Cr earned by our Agents by selling Credit Cards and Loans</SwiperSlide>
                            <SwiperSlide className='zet-points'>We helped customers in more than 50 cities to get their first financial product</SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}





export default Zeteffect
