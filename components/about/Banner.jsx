import React from 'react'
import Image from 'next/image'
import banner from '../../public/images/aboutbanner.webp'
import { useState } from 'react';

function Banner() {
    return (
        <section className='aboutus-banner'>
            <Image src={banner} alt='banner-image' className='about-banner-img' />
            <div className="aboutus-text">
                <h1>OUR MISSION</h1>
                <h6>Enabling financial inclusion for the next billion Indians
                    & making their Zindagi Set. Building a platform that enables you to sell
                    financial products & earn up to Rs. 1 lakh every month.</h6>
                <p>EARN BETTER. LIVE BETTER.</p>
            </div>
        </section>
    )
}

export default Banner
