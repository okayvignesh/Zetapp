import React from 'react'
import gplay from '../../public/images/googleplay.svg'
import banner from '../../public/images/banner.webp'
import Image from 'next/image'

function Banner() {
    return (
        <section data-aos="fade-up" className='homebanner container'>
            <div className="banner-content">
                <div className="col-lg-8 banner-text">
                    <h1>Become a Financial Advisor and <br />
                        <span className='darktext'>Earn Rs.1 Lakh/Month</span>
                    </h1>
                    <p>No investment required</p>
                    <Image src={gplay} alt='image' width={150} height={40} className='px-3' />
                </div>
                <div className="col-lg-4 banner-img">
                    <Image src={banner} alt='A Happy man with good earning' width={390} height={380} />
                </div>
            </div>
        </section>
    )
}

export default Banner
