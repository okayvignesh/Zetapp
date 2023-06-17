import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, FreeMode } from 'swiper';
import img1 from '../../public/images/brands/1.webp'
import img2 from '../../public/images/brands/2.webp'
import img3 from '../../public/images/brands/3.webp'
import img4 from '../../public/images/brands/4.webp'
import img5 from '../../public/images/brands/5.webp'
import img6 from '../../public/images/brands/6.webp'
import img7 from '../../public/images/brands/7.webp'
import img8 from '../../public/images/brands/8.webp'
import img9 from '../../public/images/brands/9.webp'
import Image from 'next/image';


SwiperCore.use([Autoplay, FreeMode])

const brands = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

function TopBrands() {
    return (
        <section className='topbrands container'>
            <h4>Top Brands on ZET</h4>
            <p>We are trusted by best brand in the country</p>

            <Swiper
                spaceBetween={50}
                slidesPerView={5}
                loop
                freeMode
                autoplay={{ delay: 0 }}
                speed={3000}
            >
                {
                    brands.map((value, index) => {
                        return (
                            <SwiperSlide className="brands" key={index}>
                                <Image src={value} alt='image' width={120} height={40} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default TopBrands
