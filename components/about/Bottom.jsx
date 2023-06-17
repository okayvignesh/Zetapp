import React from 'react'
import Image from 'next/image'
import banner from '../../public/images/aboutusfooter.webp'


function Bottom() {
    return (
        <Image src={banner} alt='banner' className="bottomimg" />

    )
}

export default Bottom
