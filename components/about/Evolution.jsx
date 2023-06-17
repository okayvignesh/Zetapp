import React from 'react'
import growth from '../../public/images/growth.webp'
import Image from 'next/image'

function Evolution() {
    return (
        <section className='evolution container'>
            <h1>How we evolved over the years</h1>
            <Image src={growth} alt='growth' className='growth-img'/>
        </section>
    )
}

export default Evolution
